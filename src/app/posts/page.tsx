import { postList } from '@/utils/blog/post'
import styles from './page.module.scss'
import PostButton from '@/components/blog/PostButton'
import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'
import { BLOG_TITLE_DESCRIPTION, BLOG_DESCRIPTION } from '@/constants/metadata'
import { getPageTitleName } from '@/utils/blog/page'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('posts'),
  title: getPageTitleName(BLOG_TITLE_DESCRIPTION),
  description: BLOG_DESCRIPTION,
}

export default async function BlogPostListPage() {
  return (
    <main className={styles.container}>
      <div className={styles['title-container']}>
        <h1>글 목록</h1>
      </div>
      <ol className={styles['post-list-container']}>
        {postList.map((postData, index) => (
          <PostButton
            key={index}
            postData={postData}
          />
        ))}
      </ol>
    </main>
  )
}
