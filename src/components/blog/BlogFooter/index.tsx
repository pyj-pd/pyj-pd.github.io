import styles from './styles.module.scss'

export default function BlogFooter() {
  return (
    <footer className={styles.container}>
      <div className={styles['smiley-container']}>
        <div className={styles['eyes-container']}>
          <span />
          <span />
        </div>
        <span />
      </div>
    </footer>
  )
}
