import type { PostMetadata } from '@/types/post'
import styles from './styles.module.scss'
import {
  getPostDateString,
  getPostReadingTimeString,
} from '@/utils/blog/post-info'

type PostTitleProps = { postMetadata: PostMetadata }

export default function PostTitle({ postMetadata }: PostTitleProps) {
  const latestDate = postMetadata.lastUpdateDate || postMetadata.date

  return (
    <div className={styles.container}>
      <div className={styles['title-container']}>
        <h1>{postMetadata?.title}</h1>
      </div>
      <div className={styles['info-container']}>
        <ul>
          {latestDate && (
            <li>
              <time dateTime={latestDate}>{getPostDateString(latestDate)}</time>
            </li>
          )}
          {postMetadata.readingTime && (
            <li>
              읽는 데 {getPostReadingTimeString(postMetadata.readingTime)} 소요
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
