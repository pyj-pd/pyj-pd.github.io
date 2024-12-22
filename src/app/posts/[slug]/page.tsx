import PostTitle from '@/components/blog/PostTitle'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import { getPageTitleName } from '@/utils/blog/page'
import { getPostData, postSlugList } from '@/utils/blog/post'
import { getCanonicalMetadataFromPath } from '@/utils/metadata'
import { navbarRouteList } from '@/constants/routes'
import { categoryList } from '@/constants/blog/categories'
import {
  SITE_NAME,
  BLOG_POST_TYPE,
  sharedOpenGraph,
} from '@/constants/metadata'

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params: paramsPromise,
}: BlogPostPageProps): Promise<Metadata> {
  const params = await paramsPromise,
    mdxData = getPostData(params.slug)

  if (mdxData === null) return {}

  const canonicalMetadata = getCanonicalMetadataFromPath(
    `${navbarRouteList.posts.path}/${mdxData.slug}`,
  )

  // Open graph
  const description = mdxData.description

  const publishedTime = mdxData.date
      ? new Date(mdxData.date).toISOString()
      : undefined,
    modifiedTime = mdxData.lastUpdateDate
      ? new Date(mdxData.lastUpdateDate).toISOString()
      : publishedTime

  const tags = [
      ...mdxData.categories,
      ...mdxData.categories.map((categoryId) => categoryList[categoryId].name),
    ],
    section =
      mdxData.categories.length > 0
        ? categoryList[mdxData.categories[0]].name
        : undefined

  return {
    title: getPageTitleName(mdxData.title),
    description,
    openGraph: {
      ...sharedOpenGraph,
      title: mdxData.title,
      siteName: SITE_NAME,

      type: BLOG_POST_TYPE,

      publishedTime,
      modifiedTime,

      tags,
      section,
    },
    ...canonicalMetadata,
  }
}

export async function generateStaticParams() {
  return postSlugList.map((postSlug) => ({
    slug: postSlug,
  }))
}

export default async function BlogPostPage({
  params: paramsPromise,
}: BlogPostPageProps) {
  const params = await paramsPromise,
    mdxData = getPostData(params.slug)

  if (mdxData === null) return null

  const { content, ...postMetadata } = mdxData

  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <header>
          <PostTitle postMetadata={postMetadata} />
        </header>
        <section className={styles['content-container']}>{content}</section>
      </main>
    </div>
  )
}
