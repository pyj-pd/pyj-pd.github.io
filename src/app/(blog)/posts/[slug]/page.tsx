import PostTitle from '@/components/blog/PostTitle'
import styles from './styles.module.scss'

import type { Metadata } from 'next'
import { getPageTitleName } from '@/utils/blog/page'
import { getPostData, postSlugList } from '@/utils/blog/post'
import type { PostMetadata } from '@/types/post'
import { getCanonicalMetadataFromPath } from '@/utils/metadata'
import { navbarRouteList } from '@/constants/urls'

type BlogPostPageProps = {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const mdxData = getPostData(params.slug)

  if (mdxData === null) return {}

  const canonicalMetadata = getCanonicalMetadataFromPath(
    `${navbarRouteList.posts.path}/${mdxData.slug}`,
  )

  return {
    title: getPageTitleName(mdxData.title),
    ...canonicalMetadata,
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
