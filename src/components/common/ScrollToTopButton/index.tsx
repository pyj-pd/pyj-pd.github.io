import styles from './styles.module.scss'

export default function ScrollToTopButton() {
  return (
    <div className={styles.container}>
      <a
        href="#"
        tabIndex={-1}
      >
        <button
          className={styles.button}
          aria-label="맨 위로 스크롤"
        >
          <svg viewBox="0 0 100 100">
            <path d="M 0 50 L 50 0 L 100 50 M 50 0 L 50 100" />
          </svg>
        </button>
      </a>
    </div>
  )
}
