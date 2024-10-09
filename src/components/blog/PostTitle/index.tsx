import type { PostMetadata } from '@/types/post'
import styles from './styles.module.scss'
import { getPostDateString } from '@/utils/blog/post-info'

type PostTitleProps = { postMetadata: PostMetadata }

export default function PostTitle({ postMetadata }: PostTitleProps) {
  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <h1>{postMetadata?.title}</h1>
      </div>
      <div className={styles['info-container']}>
        <ul>
          {postMetadata.date && (
            <li>
              <time dateTime={postMetadata.date}>
                {getPostDateString(postMetadata.date)}
              </time>
              에 업로드
            </li>
          )}
          {postMetadata.lastUpdateDate && (
            <li>
              <time dateTime={postMetadata.lastUpdateDate}>
                {getPostDateString(postMetadata.lastUpdateDate)}
              </time>
              에 마지막 수정
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
