import { postList } from '@/utils/blog/post'
import styles from './styles.module.scss'
import PostButton from '@/components/blog/PostButton'

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
