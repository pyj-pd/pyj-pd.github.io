import PostTitle from '@/components/blog/PostTitle'
import styles from './styles.module.scss'

import type { Metadata, ResolvingMetadata } from 'next'
import { getTitleName as getPageTitleName } from '@/utils/blog'
import { getPostData, postSlugList } from '@/utils/blog/post'

type BlogPostPageProps = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const mdxData = getPostData(params.slug)

  if (mdxData === null) return {}

  const previousMetadata = await parent,
    previousOGImages = previousMetadata.openGraph?.images ?? []

  return {
    title: getPageTitleName(mdxData.title),
    openGraph: {
      images: previousOGImages,
    },
  }
}

export async function generateStaticParams() {
  return postSlugList.map((postSlug) => ({
    slug: postSlug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const mdxData = getPostData(params.slug)

  if (mdxData === null) return null

  return (
    <div className={styles.container}>
      <PostTitle>{mdxData.title}</PostTitle>
      <main className={styles['content-container']}>{mdxData.content}</main>
    </div>
  )
}
