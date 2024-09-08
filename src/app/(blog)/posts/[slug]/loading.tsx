import PostTitle from '@/components/blog/PostTitle'
import styles from './styles.module.scss'
import loadingStyles from './loading.module.scss'
import classNames from 'classnames'
import type { CSSProperties } from 'react'

const SKELETON_NUMBER = 4

export default function BlogPostLoadingPage() {
  return (
    <div className={styles.container}>
      <PostTitle skeleton />
      <main
        className={classNames(
          styles['content-container'],
          loadingStyles['skeleton-container'],
        )}
      >
        {[...new Array(SKELETON_NUMBER)].map((_, index) => (
          <span
            key={index}
            className={
              index === 0
                ? loadingStyles.title
                : index === SKELETON_NUMBER - 1
                  ? loadingStyles.short
                  : undefined
            }
            style={{ '--index': index } as CSSProperties}
          />
        ))}
      </main>
    </div>
  )
}
