import type { PostContentData, PostData } from '@/types/post'
import { readdir, readFile } from 'fs/promises'
import path from 'path'

const POST_FILE_DIRECTORY = path.join(process.cwd(), 'src/posts'),
  POST_CONTENT_FILENAME = 'content.md'

export const getPostList = async (): Promise<PostData[]> => {
  const fileList = await readdir(POST_FILE_DIRECTORY)

  const postDataList: PostData[] = []

  /** @todo support multiple categories */

  for (const postSlug of fileList) {
    const postPath = path.join(
      POST_FILE_DIRECTORY,
      postSlug,
      POST_CONTENT_FILENAME,
    )

    const postData: PostData = {
      slug: postSlug,
      categories: [],
      path: postPath,
    }

    postDataList.push(postData)
  }

  return postDataList
}

const _postList = await getPostList()

const POST_SLUG_REGEX = new RegExp(/^[a-z|A-Z|\-|0-9]*$/)

export const getPostContentData = async (
  slug: string,
): Promise<PostContentData | null> => {
  if (!POST_SLUG_REGEX.test(slug)) return null

  const postData = _postList.find((post) => post.slug === slug)

  if (postData === undefined) throw new Error('Post not found.')

  const content = await readFile(postData.path, 'utf-8')

  const postContentData: PostContentData = {
    ...postData,
    content,
  }

  return postContentData
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
