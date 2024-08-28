import Link from 'next/link'
import styles from './styles.module.scss'

export default function Navbar() {
  return (
    <header className={styles['navbar-container']}>
      <div className={styles['navbar-content']}>
        <Link href="/">
          <div className={styles['logo-container']}>
            <span />
            <span />
          </div>
        </Link>
      </div>
    </header>
  )
}
