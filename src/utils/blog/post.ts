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
      path: postPath,
      content: parsedData.content,
    }

    postDataList.push(postData)
  }

  return postDataList
}

export const postList = await _getPostList()

export const getPostData = (slug: string): PostData | null => {
  if (!POST_SLUG_REGEX.test(slug)) return null
  return postList.find((post) => post.slug === slug) ?? null
}

const POST_IMAGE_PATH_PUBLIC = '/assets/blog/posts'

/**
 * Converts image path in markdown into Next.js-compatiable path(which points to `public`).
 * @param slug Post slug
 * @param src Raw image path from markdown file
 * @returns Image file path that can be used in HTML
 */
export const getPostImagePath = (slug: string, src: string): string =>
  `${POST_IMAGE_PATH_PUBLIC}/${slug}/${src}`
