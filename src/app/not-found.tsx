import styles from './not-found.module.scss'

export default function NotFoundPage() {
  return (
    <main className={styles.container}>
      <p className={styles.text}>페이지를 찾을 수 없습니다.</p>
    </main>
  )
}
