import type { PostData } from '@/types/post'
import { readdir, readFile } from 'fs/promises'
import path from 'path'
import { parsePostMDX } from './mdx'

const POST_FILE_DIRECTORY = path.join(process.cwd(), 'src/posts'),
  POST_CONTENT_FILENAME = 'content.md'

const POST_SLUG_REGEX = new RegExp(/^[a-z|A-Z|\-|0-9]*$/)

/**
 * Reads directory that contains posts and gets post slugs.
 * @returns Array that contains post slugs
 */
const _getPostSlugList = async (): Promise<string[]> => {
  const postSlugList = await readdir(POST_FILE_DIRECTORY)

  return postSlugList
}

export const postSlugList =
  await _getPostSlugList() /** @todo Is this really the right way? */

/**
 * Reads directory that contains posts and the posts data.
 * @returns Array of objects that contain post data including its content
 */
const _getPostList = async (): Promise<PostData[]> => {
  const postDataList: PostData[] = []

  for (const postSlug of postSlugList) {
    const postPath = path.join(
      POST_FILE_DIRECTORY,
      postSlug,
      POST_CONTENT_FILENAME,
    )

    const rawContent = await readFile(postPath, 'utf-8')

    const parsedData = await parsePostMDX(postSlug, rawContent)

    const postData: PostData = {
      ...parsedData.frontmatter,
      slug: postSlug,
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
}

export const postList = await _getPostList()

export const getPostData = (slug: string): PostData | null => {
  if (!POST_SLUG_REGEX.test(slug)) return null
  return postList.find((post) => post.slug === slug) ?? null
}

const POST_ASSETS_PATH_PUBLIC = '/assets/blog/posts'

/**
 * Converts path of assets in markdown into Next.js-compatiable path(which points to `public`).
 * @param slug Post slug
 * @param src Raw asset path from markdown file
 * @returns Asset file path that can be used in HTML
 */
export const getPostAssetsPath = (slug: string, src: string): string =>
  `${POST_ASSETS_PATH_PUBLIC}/${slug}/${src}`

export const getPostURL = (postSlug: string) => `/posts/${postSlug}`
