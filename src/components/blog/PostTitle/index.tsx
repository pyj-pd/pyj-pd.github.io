import styles from './styles.module.scss'

type PostTitleProps = { children: string }

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{children}</h1>
    </div>
  )
}
