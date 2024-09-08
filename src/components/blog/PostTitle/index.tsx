import styles from './styles.module.scss'

type PostTitleProps = { children: string }

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <div className={styles.container}>
      <h1>{children}</h1>
    </div>
  )
}
