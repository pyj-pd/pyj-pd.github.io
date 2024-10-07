import { postList } from '@/utils/blog/post'
import styles from './styles.module.scss'
import PostButton from '@/components/blog/PostButton'
import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'
import { BLOG_NAME, TITLE_SEPARATOR_DASH } from '@/constants/metadata'

export const metadata: Metadata = {
  title: `${BLOG_NAME}${TITLE_SEPARATOR_DASH}컴퓨터와 함께 한 경험을 공유하는 공간`,
  ...getCanonicalMetadataFromRouteId('posts'),
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
