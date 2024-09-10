import type { CategoryId } from '@/constants/blog/categories'
import type { CompileMDXResult } from 'next-mdx-remote/rsc'

/**
 * Metadata inside MDX file.
 */
export type MDXPostMetadata = {
  title: string
  description?: string

  date?: string
  categories: CategoryId[]

  draft?: boolean
}

export type PostMetadata = MDXPostMetadata & {
  slug: string
}

export type PostData = PostMetadata & {
  content: CompileMDXResult['content']
}
