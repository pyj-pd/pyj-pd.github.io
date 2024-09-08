import PostTitle from '@/components/blog/PostTitle'
import styles from './styles.module.scss'
import {
  type PostMetadata,
  type PostContentData,
  type PostInfoData,
} from '@/types/post'
import { getPostContentData, getPostImagePath } from '@/utils/post'
import { compileMDX, type CompileMDXResult } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { monospaceFont } from '@/styles/fonts'

import rehypeShiki from '@shikijs/rehype'
import { transformerNotationHighlight } from '@shikijs/transformers'
import type { Metadata, ResolvingMetadata } from 'next'
import { cache } from 'react'
import { getTitleName } from '@/utils/blog'

const _getPostMDXData = cache(
  async (
    slug: string,
  ): Promise<{
    postInfo: PostInfoData
    mdxSource: CompileMDXResult<PostMetadata>
  } | null> => {
    const postContentData: PostContentData | null =
      await getPostContentData(slug)

    if (postContentData === null) return null

    const mdxSource = await compileMDX<PostMetadata>({
      source: postContentData.content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            [
              rehypeShiki,
              {
                theme: 'vitesse-black',
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
              src={getPostImagePath(slug, props.src)}
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

    const postInfo: PostInfoData = {
      ...postContentData,
      ...mdxSource.frontmatter,
    }

    return {
      postInfo,
      mdxSource,
    }
  },
)

type BlogPostPageProps = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const mdxData = await _getPostMDXData(params.slug)

  if (mdxData === null) return {}

  const { postInfo } = mdxData

  const previousMetadata = await parent,
    previousOGImages = previousMetadata.openGraph?.images ?? []

  return {
    title: getTitleName(postInfo.title),
    openGraph: {
      images: previousOGImages,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const mdxData = await _getPostMDXData(params.slug)

  if (mdxData === null) return null

  const { postInfo, mdxSource } = mdxData

  return (
    <div className={styles.container}>
      <PostTitle>{postInfo.title}</PostTitle>
      <main className={styles['content-container']}>{mdxSource.content}</main>
    </div>
  )
}
