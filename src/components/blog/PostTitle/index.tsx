import type { PostMetadata } from '@/types/post'
import styles from './styles.module.scss'
import {
  getPostDateString,
  getPostReadingTimeString,
} from '@/utils/blog/post-info'
import { DEFAULT_LANGUAGE, locales } from '@/locales'

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
              {locales[DEFAULT_LANGUAGE].postTitle.uploadedOn}
              <time dateTime={postMetadata.date}>
                {getPostDateString(postMetadata.date)}
              </time>
            </li>
          )}
          {postMetadata.lastUpdateDate && (
            <li>
              {locales[DEFAULT_LANGUAGE].postTitle.lastModifiedOn}
              <time dateTime={postMetadata.lastUpdateDate}>
                {getPostDateString(postMetadata.lastUpdateDate)}
              </time>
            </li>
          )}
          {postMetadata.readingTime && (
            <li>
              {locales[DEFAULT_LANGUAGE].postTitle.readingTime.replace(
                '{time}',
                getPostReadingTimeString(postMetadata.readingTime),
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
