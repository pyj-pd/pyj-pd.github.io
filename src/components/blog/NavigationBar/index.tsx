import Link from 'next/link'
import styles from './styles.module.scss'

export default function NavigationBar() {
  return (
    <nav className={styles.container}>
      <ul className={styles['list-container']}>
        <li>pyj-pd</li>
        <li>
          <Link href="/posts">블로그</Link>
        </li>
        <li>
          <Link href="/">About me</Link>
        </li>
      </ul>
    </nav>
  )
}
