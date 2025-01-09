import PostTitle from '@/components/blog/PostTitle'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import { getPageTitleName } from '@/utils/blog/page'
import {
  getPostData,
  retrieveNearbyPostSlugs,
  getPostSlugList,
} from '@/utils/blog/post'
import { getCanonicalMetadataFromPath } from '@/utils/metadata'
import { navbarRouteList } from '@/constants/routes'
import { categoryList } from '@/constants/blog/categories'
import {
  SITE_NAME,
  BLOG_POST_TYPE,
  sharedOpenGraph,
} from '@/constants/metadata'
import PostList from '@/components/blog/PostList'
import PostContentWrapper from '@/components/blog/PostContentWrapper'
import PostListTitle from '@/components/blog/PostListTitle'
import { generatePostJSONLD } from '@/utils/seo'

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params: paramsPromise,
}: BlogPostPageProps): Promise<Metadata> {
  const params = await paramsPromise,
    mdxData = await getPostData(params.slug)

  if (mdxData === null) return {}

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

  const canonicalMetadata = getCanonicalMetadataFromPath(
    `${navbarRouteList.posts.path}/${mdxData.slug}`,
    {
      title: mdxData.title,
      siteName: SITE_NAME,

      type: BLOG_POST_TYPE,

      publishedTime,
      modifiedTime,

      tags,
      section,
    },
  )

  return {
    title: getPageTitleName(mdxData.title),
    description,
    ...canonicalMetadata,
  }
}

export async function generateStaticParams() {
  const postSlugList = await getPostSlugList()

  return postSlugList.map((postSlug) => ({
    slug: postSlug,
  }))
}

export default async function BlogPostPage({
  params: paramsPromise,
}: BlogPostPageProps) {
  const params = await paramsPromise,
    mdxData = await getPostData(params.slug)

  if (mdxData === null) return null

  const { content, ...postMetadata } = mdxData

  const nearbyPosts = await retrieveNearbyPostSlugs(postMetadata.slug)

  const jsonLD = generatePostJSONLD(mdxData)

  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLD),
        }}
      />
      <main className={styles.container}>
        <header>
          <PostTitle postMetadata={postMetadata} />
        </header>
        <PostContentWrapper>
          <section className={styles['content-container']}>{content}</section>
        </PostContentWrapper>
        <section className={styles['more-posts-container']}>
          <PostListTitle
            type="h2"
            showViewAllButton
          >
            다른 글도 읽어보세요
          </PostListTitle>
          <PostList postDataList={nearbyPosts} />
        </section>
      </main>
    </div>
  )
}
