import MDXLink from '@/components/blog/mdx/MDXLink'
import { compileMDX } from 'next-mdx-remote/rsc'

/**
 * Internal. Used for parsing portfolio description to MDX content.
 * @param rawContent Raw MDX content string.
 * @returns MDX element.
 */
export const parsePortfolioMDX = async (rawContent: string) => {
  const mdxSource = await compileMDX({
    source: rawContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [],
      },
    },
    components: {
      a: MDXLink,
    },
  })

  return mdxSource.content
}
