import type { PostMetadata } from '@/types/post'
import styles from './styles.module.scss'
import { getPostDateString } from '@/utils/blog/post-info'

type PostTitleProps = { skeleton?: boolean; postMetadata?: PostMetadata }

export default function PostTitle({
  skeleton: isSkeleton,
  postMetadata,
}: PostTitleProps) {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        {isSkeleton ? (
          <span className={styles.skeleton} />
        ) : (
          <h1>{postMetadata?.title}</h1>
        )}
      </div>
      <div className={styles['info-container']}>
        {isSkeleton ? (
          <span className={styles.skeleton} />
        ) : (
          postMetadata?.date && (
            <time dateTime={postMetadata.date}>
              {getPostDateString(postMetadata.date)}
            </time>
          )
        )}
      </div>
    </div>
  )
}
