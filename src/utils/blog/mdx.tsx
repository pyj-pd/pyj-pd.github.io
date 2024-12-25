import { monospaceFont } from '@/styles/fonts'
import type { MDXPostMetadata } from '@/types/post'
import rehypeShiki from '@shikijs/rehype'
import { transformerNotationHighlight } from '@shikijs/transformers'
import { compileMDX, type CompileMDXResult } from 'next-mdx-remote/rsc'
import MDXCallout from '@/components/blog/mdx/MDXCallout'
import { createCssVariablesTheme } from 'shiki/core'
import rehypeSlug from 'rehype-slug'
import MDXImage from '@/components/blog/mdx/MDXImage'
import MDXLink from '@/components/blog/mdx/MDXLink'
import { remark } from 'remark'
import stripMarkdown, {
  type Options as StripMarkdownOptions,
} from 'strip-markdown'

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
          rehypeSlug,
        ],
      },
    },
    components: {
      Callout: MDXCallout,
      Image: (props) => (
        <MDXImage
          {...props}
          slug={slug}
        />
      ),
      code: (props) => (
        <code
          {...props}
          className={monospaceFont.className}
        />
      ),
      a: MDXLink,
    },
  })

  return mdxSource
}

const remarkProcessor = remark().use(stripMarkdown, {
  remove: ['table'],
} as StripMarkdownOptions)

const FRONTMATTER_SEPARATOR_STRING = '---',
  FRONTMATTER_SEPARATOR_NUMBER = 2

export const extractTextFromMDX = async (
  rawContent: string,
): Promise<string> => {
  const rawContentWithoutFrontmatter = rawContent
    .split(FRONTMATTER_SEPARATOR_STRING)
    .slice(FRONTMATTER_SEPARATOR_NUMBER)
    .join(FRONTMATTER_SEPARATOR_STRING)

  const file = await remarkProcessor.process(rawContentWithoutFrontmatter),
    content = String(file)

  return content
}
