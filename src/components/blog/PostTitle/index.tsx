import styles from './styles.module.scss'

type PostTitleProps = { skeleton?: boolean; children?: string }

export default function PostTitle({
  skeleton: isSkeleton,
  children,
}: PostTitleProps) {
  return (
    <div className={styles.container}>
      <div className={styles['text-container']}>
        {isSkeleton ? (
          <span className={styles.skeleton} />
        ) : (
          <h1>{children}</h1>
        )}
      </div>
    </div>
  )
}
