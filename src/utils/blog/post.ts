import type { PostData } from '@/types/post'
import { readdir, readFile } from 'fs/promises'
import path from 'path'
import { extractTextFromMDX, parsePostMDX } from './mdx'
import memoize from 'memoizee'
import getReadingTime from 'reading-time'
import { addTrailingSlash } from '../url'

const POST_FILE_DIRECTORY = path.join(process.cwd(), './posts'),
  POST_CONTENT_FILENAME = 'content.md'

const POST_SLUG_REGEX = new RegExp(/^[a-z|A-Z|\-|0-9]*$/)

/**
 * Reads directory that contains posts and gets post slugs.
 * @returns Array that contains post slugs
 */
export const getPostSlugList = memoize(
  async (): Promise<string[]> => {
    const postSlugList = await readdir(POST_FILE_DIRECTORY)

    return postSlugList
  },
  {
    promise: true,
  },
)

const DESCRIPTION_CONTENT_MAX_LENGTH = 100,
  DESCRIPTION_ELLIPSIS = '...'

/**
 * Reads directory that contains posts and the posts data.
 * @returns Array of objects that contain post data including its content
 */
export const getPostList = memoize(
  async (): Promise<PostData[]> => {
    const postDataList: PostData[] = []

    const postSlugList = await getPostSlugList()
    for (const postSlug of postSlugList) {
      const postPath = path.join(
        POST_FILE_DIRECTORY,
        postSlug,
        POST_CONTENT_FILENAME,
      )

      const rawContent = await readFile(postPath, 'utf-8')

      const parsedData = await parsePostMDX(postSlug, rawContent),
        plainText = await extractTextFromMDX(rawContent)

      const readingTime = getReadingTime(plainText).minutes

      const descriptionFromContent =
        plainText.slice(0, DESCRIPTION_CONTENT_MAX_LENGTH) +
        (plainText.length > DESCRIPTION_CONTENT_MAX_LENGTH
          ? DESCRIPTION_ELLIPSIS
          : '')

      const postData: PostData = {
        ...parsedData.frontmatter,
        descriptionFromContent,
        slug: postSlug,
        readingTime,
        content: parsedData.content,
      }

      const shouldSkip = postData.draft && process.env.NODE_ENV === 'production'

      if (!shouldSkip) postDataList.push(postData) // Not publishing draft posts
    }

    postDataList.sort(
      (a, b) =>
        Number(new Date(b.lastUpdateDate ?? b.date ?? 0)) -
        Number(new Date(a.lastUpdateDate ?? a.date ?? 0)),
    )

    return postDataList
  },
  {
    promise: true,
  },
)

export const getPostData = memoize(
  async (slug: string): Promise<PostData | null> => {
    const postList = await getPostList()

    if (!POST_SLUG_REGEX.test(slug)) return null
    return postList.find((post) => post.slug === slug) ?? null
  },
  {
    promise: true,
  },
)

const POST_ASSETS_PATH_PUBLIC = '/assets/blog/posts'

/**
 * Converts path of assets in markdown into Next.js-compatiable path(which points to `public`).
 * @param slug Post slug
 * @param src Raw asset path from markdown file
 * @returns Asset file path that can be used in HTML
 */
export const getPostAssetsPath = (slug: string, src: string): string =>
  `${POST_ASSETS_PATH_PUBLIC}/${slug}/${src}`

export const getPostURL = (postSlug: string) =>
  addTrailingSlash(`/posts/${postSlug}`)

/**
 * Retrieves a list of post slugs surrounding a specified post, excluding the current post.
 * @param targetSlug The slug of the reference post.
 * @param range The number of slugs to retrieve around the current post. This defines the total number of posts returned (excluding the current post). This number should be even.
 * @returns An array of post data objects representing the slugs of the surrounding posts.
 */

export const retrieveNearbyPostSlugs = async (
  targetSlug: string,
  range: number = 4,
): Promise<PostData[]> => {
  console.assert(range % 2 === 0, 'Range should be an even number.')

  const postList = await getPostList()
  const targetPostIndex = postList.findIndex((post) => post.slug === targetSlug)

  if (targetPostIndex < 0) throw new Error("Can't find the given post.")

  let firstPostIndex = Math.max(targetPostIndex - range / 2, 0),
    endPostIndex = Math.min(targetPostIndex + range / 2, postList.length - 1)

  if (postList.length > range + 1) {
    // Check if it satisfies the range
    const postLackCount = range - (endPostIndex - firstPostIndex)

    if (targetPostIndex <= range / 2 - 1) endPostIndex += postLackCount
    else if (targetPostIndex >= postList.length - range / 2)
      firstPostIndex -= postLackCount
  }

  const postsWithinTheRange = postList.slice(firstPostIndex, endPostIndex + 1)

  // Remove current post from the list of posts
  postsWithinTheRange.splice(targetPostIndex - firstPostIndex, 1)

  return postsWithinTheRange
}
