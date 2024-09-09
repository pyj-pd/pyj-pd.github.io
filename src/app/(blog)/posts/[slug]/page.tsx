import PostTitle from '@/components/blog/PostTitle'
import styles from './styles.module.scss'

import type { Metadata, ResolvingMetadata } from 'next'
import { getPageTitleName } from '@/utils/blog/page'
import { getPostData, postSlugList } from '@/utils/blog/post'
import type { PostMetadata } from '@/types/post'

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

  const postMetadata: PostMetadata = {
    title: mdxData.title,
    categories: mdxData.categories,
    slug: mdxData.slug,
    date: mdxData.date,
  }

  return (
    <div className={styles.container}>
      <PostTitle postMetadata={postMetadata} />
      <main className={styles['content-container']}>{mdxData.content}</main>
    </div>
  )
}
