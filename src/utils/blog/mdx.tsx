import { monospaceFont } from '@/styles/fonts'
import type { MDXPostMetadata } from '@/types/post'
import rehypeShiki from '@shikijs/rehype'
import { transformerNotationHighlight } from '@shikijs/transformers'
import { compileMDX, type CompileMDXResult } from 'next-mdx-remote/rsc'
import { getPostAssetsPath } from './post'
import Image from 'next/image'
import styles from '@/styles/blog/mdx.module.scss'
import { createCssVariablesTheme } from 'shiki/core'
import rehypeSlug from 'rehype-slug'
import MDXImage from '@/components/blog/mdx/Callout/MDXImage'

export const shikiTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

const HEADING_LINK_PREFIX = '#'

/**
 * Internal. Parses raw MDX file content.
 * @param slug Post slug
 * @param rawContent Raw content in string
 * @returns Compiled MDX result
 */
export const parsePostMDX = async (
  slug: string,
  rawContent: string,
): Promise<CompileMDXResult<MDXPostMetadata>> => {
  const mdxSource = await compileMDX<MDXPostMetadata>({
    source: rawContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypeShiki,
            {
              theme: shikiTheme,
              transformers: [transformerNotationHighlight()],
            },
          ],
          rehypeSlug,
        ],
      },
    },
    components: {
      Image: (props) => (
        <MDXImage {...props} slug={slug} />
      ),
      code: (props) => (
        <code
          {...props}
          className={monospaceFont.className}
        />
      ),
      a: (props) => {
        const isHeadingLink = props.href?.startsWith(HEADING_LINK_PREFIX)

        return (
          <a
            {...props}
            target={!isHeadingLink ? '_blank' : undefined}
          />
        )
      },
    },
  })

  return mdxSource
}
