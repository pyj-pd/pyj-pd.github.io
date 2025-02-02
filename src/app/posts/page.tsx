import styles from './page.module.scss'
import { getCanonicalMetadataFromPath } from '@/utils/metadata'
import type { Metadata } from 'next'
import { BLOG_DESCRIPTION, BLOG_TITLE_DESCRIPTION } from '@/constants/metadata'
import { getPageTitleName } from '@/utils/blog/page'
import PostList from '@/components/blog/PostList'
import { getPostList } from '@/utils/blog/post'
import { navbarRouteList } from '@/constants/routes'
import PageTitle from '@/components/common/PageTitle'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromPath(navbarRouteList['posts'].path),
  title: getPageTitleName(BLOG_TITLE_DESCRIPTION),
  description: BLOG_DESCRIPTION,
}

export default async function BlogPostListPage() {
  const postList = await getPostList()

  return (
    <main className={styles.container}>
      <PageTitle>글 목록</PageTitle>
      <PostList postDataList={postList} />
    </main>
  )
}
