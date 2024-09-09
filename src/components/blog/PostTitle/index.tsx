import type { PostMetadata } from '@/types/post'
import styles from './styles.module.scss'

type PostTitleProps = { skeleton?: boolean; postMetadata: PostMetadata }

export default function PostTitle({
  skeleton: isSkeleton,
  postMetadata,
}: PostTitleProps) {
  return (
    <div className={styles.container}>
      <div className={styles['text-container']}>
        {isSkeleton ? (
          <span className={styles.skeleton} />
        ) : (
          <h1>{postMetadata.title}</h1>
        )}
      </div>
    </div>
  )
}
