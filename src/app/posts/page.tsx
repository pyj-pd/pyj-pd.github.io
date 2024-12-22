import { postList } from '@/utils/blog/post'
import styles from './page.module.scss'
import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'
import { BLOG_TITLE_DESCRIPTION, BLOG_DESCRIPTION } from '@/constants/metadata'
import { getPageTitleName } from '@/utils/blog/page'
import PostList from '@/components/blog/PostList'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('posts'),
  title: getPageTitleName(BLOG_TITLE_DESCRIPTION),
  description: BLOG_DESCRIPTION,
}

export default async function BlogPostListPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>글 목록</h1>
      <PostList postDataList={postList} />
    </main>
  )
}
