import PostTitle from '@/components/blog/PostTitle'
import styles from './page.module.scss'
import type { Metadata } from 'next'
import {
  getPostData,
  retrieveNearbyPostSlugs,
  getPostSlugList,
  getPostURL,
} from '@/utils/blog/post'
import {
  getCanonicalMetadataFromPath,
  getPageTitleName,
} from '@/utils/metadata'
import { categoryList } from '@/constants/blog/categories'
import {
  SITE_NAME,
  BLOG_POST_TYPE,
  sharedOpenGraph,
  SITE_URL,
} from '@/constants/info'
import PostList from '@/components/blog/PostList'
// @todo
// import PostContentWrapper from '@/components/blog/PostContentWrapper'
import PostListTitle from '@/components/blog/PostListTitle'
import { generatePostJSONLD } from '@/utils/seo'
import { joinUrlPaths } from '@/utils/url'

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

  const canonicalUrl = joinUrlPaths(SITE_URL, getPostURL(mdxData.slug))

  const canonicalMetadata = getCanonicalMetadataFromPath(
    canonicalUrl,
    // Open graph data
    {
      ...sharedOpenGraph,
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
        <article className={styles['article-container']}>
          <header>
            <PostTitle postMetadata={postMetadata} />
          </header>
          {/* <PostContentWrapper> */}
          <div className={styles['content-container']}>{content}</div>
          {/* </PostContentWrapper> */}
        </article>
        <aside className={styles['more-posts-container']}>
          <PostListTitle
            type="h2"
            showViewAllButton
          >
            다른 글도 읽어보세요
          </PostListTitle>
          <PostList postDataList={nearbyPosts} />
        </aside>
      </main>
    </div>
  )
}
