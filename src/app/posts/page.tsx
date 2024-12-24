import styles from './page.module.scss'
import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'
import { BLOG_TITLE_DESCRIPTION, BLOG_DESCRIPTION } from '@/constants/metadata'
import { getPageTitleName } from '@/utils/blog/page'
import PostList from '@/components/blog/PostList'
import PostListTitle from '@/components/blog/PostListTitle'
import { getPostList } from '@/utils/blog/post'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('posts'),
  title: getPageTitleName(BLOG_TITLE_DESCRIPTION),
  description: BLOG_DESCRIPTION,
}

export default async function BlogPostListPage() {
  const postList = await getPostList()
  
  return (
    <main className={styles.container}>
      <PostListTitle type="h1">글 목록</PostListTitle>
      <PostList postDataList={postList} />
    </main>
  )
}
