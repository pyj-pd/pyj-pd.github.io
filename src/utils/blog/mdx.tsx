import { monospaceFont } from '@/styles/fonts'
import type { MDXPostMetadata } from '@/types/post'
import rehypeShiki from '@shikijs/rehype'
import { transformerNotationHighlight } from '@shikijs/transformers'
import { compileMDX, type CompileMDXResult } from 'next-mdx-remote/rsc'
import { getPostAssetsPath } from './post'
import Image from 'next/image'
import styles from '@/styles/blog/mdx.module.scss'
import { createCssVariablesTheme } from 'shiki/core'

export const shikiTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

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
        ],
      },
    },
    components: {
      Image: (props) => (
        <div className={styles['image-container']}>
          <Image
            {...props}
            src={getPostAssetsPath(slug, props.src)}
            width={Number(props.width)}
            height={Number(props.height)}
            alt={props.alt}
            className={styles.image}
          />
        </div>
      ),
      code: (props) => (
        <code
          {...props}
          className={monospaceFont.className}
        />
      ),
      a: (props) => (
        <a
          {...props}
          target="_blank"
        />
      ),
    },
  })

  return mdxSource
}
