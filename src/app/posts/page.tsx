import PostList from '@/components/blog/PostList'
import PostListTitle from '@/components/blog/PostListTitle'
import { getPostList } from '@/utils/blog/post'
import styles from './page.module.scss'
import { navbarRouteList } from '@/constants/routes'
import {
  getCanonicalMetadataFromPath,
  getPageTitleName,
} from '@/utils/metadata'
import type { Metadata } from 'next'
import { SITE_URL } from '@/constants/project'
import { getWebSiteJSONLDScript } from '@/utils/seo'
import { joinUrlPaths } from '@/utils/url'

const canonicalUrl = joinUrlPaths(SITE_URL, navbarRouteList['posts'].path)

export const metadata: Metadata = {
  ...getCanonicalMetadataFromPath(canonicalUrl),
  title: getPageTitleName('블로그 글 목록'),
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
