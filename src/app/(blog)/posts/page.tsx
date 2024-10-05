import { postList } from '@/utils/blog/post'
import styles from './styles.module.scss'
import PostButton from '@/components/blog/PostButton'
import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('posts'),
}

export default async function BlogPostListPage() {
  return (
    <main className={styles.container}>
      <div className={styles['post-list-container']}>
        {postList.map((postData, index) => (
          <PostButton
            key={index}
            postData={postData}
          />
        ))}
      </div>
    </main>
  )
}
