'use client'

import styles from './styles.module.scss'

export default function PageFooter() {
  return (
    <footer className={styles.container}>
      <p>End of page</p>
      <a
        href="#"
        className={styles['go-to-top']}
      >
        맨 위로
      </a>
    </footer>
  )
}
