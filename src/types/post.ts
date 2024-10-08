import type { CategoryId } from '@/constants/blog/categories'
import type { CompileMDXResult } from 'next-mdx-remote/rsc'

/** @example 2024-04-12 */
export type PostDate = `${number}-${number}-${number}`

/**
 * Metadata inside MDX file.
 */
export type MDXPostMetadata = {
  title: string
  description?: string
  thumbnailPath?: string

  date?: PostDate
  lastUpdateDate?: PostDate
  categories: CategoryId[]

  draft?: boolean
}

export type PostMetadata = MDXPostMetadata & {
  slug: string
}

export type PostData = PostMetadata & {
  content: CompileMDXResult['content']
}
