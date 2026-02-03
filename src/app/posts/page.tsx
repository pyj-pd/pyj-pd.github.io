import PostListTitle from '@/components/blog/PostListTitle'
import { getPostList } from '@/utils/blog/post'
import styles from './page.module.scss'
import { internalRoutesList } from '@/constants/routes'
import {
  getCanonicalMetadataFromPath,
  getPageTitleName,
} from '@/utils/metadata'
import type { Metadata } from 'next'
import { getWebSiteJSONLDScript } from '@/utils/seo'
import { joinUrlPaths } from '@/utils/url'
import { BLOG_POST_LIST_PAGE_DESCRIPTION, SITE_URL } from '@/constants/info'
import PostList from '@/components/blog/PostList'

const canonicalUrl = joinUrlPaths(SITE_URL, internalRoutesList['posts'].path)

export const metadata: Metadata = {
  ...getCanonicalMetadataFromPath(canonicalUrl, {
    description: BLOG_POST_LIST_PAGE_DESCRIPTION,
  }),
  title: getPageTitleName('블로그 글 목록'),
  description: BLOG_POST_LIST_PAGE_DESCRIPTION,
}

export default async function PostListPage() {
  const postList = await getPostList()

  const { JSONLDScript } = getWebSiteJSONLDScript(canonicalUrl)

  return (
    <main className={styles.container}>
      {JSONLDScript}
      <PostListTitle
        type="h1"
        id="posts"
      >
        전체 글 목록
      </PostListTitle>
      <PostList postDataList={postList} />
    </main>
  )
}
