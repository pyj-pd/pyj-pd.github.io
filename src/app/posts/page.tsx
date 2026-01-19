import PostList from '@/components/blog/PostList'
import PostListTitle from '@/components/blog/PostListTitle'
import { getPostList } from '@/utils/blog/post'
import styles from './page.module.scss'
import { navbarRouteList } from '@/constants/routes'
import { getCanonicalMetadataFromPath } from '@/utils/metadata'
import type { Metadata } from 'next'
import { getPageTitleName } from '@/utils/blog/page'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromPath(navbarRouteList['posts'].path),
  title: getPageTitleName('블로그 글 목록'),
}

export default async function PostListPage() {
  const postList = await getPostList()

  return (
    <main className={styles.container}>
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
