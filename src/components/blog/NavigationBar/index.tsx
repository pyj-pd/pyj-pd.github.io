import Link from 'next/link'
import styles from './styles.module.scss'

export default function NavigationBar() {
  return (
    <div className={styles['navbar-container']}>
      <nav className={styles.container}>
        <ul className={styles['list-container']}>
          <li>
            <span className={styles.name}>pyj-pd</span>
          </li>
          <li>
            <Link href="/posts">블로그</Link>
          </li>
          <li>
            <Link href="/">About me</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
