import styles from './styles.module.scss'
import MyLink from '@/components/common/MyLink'

export default function NavigationBar() {
  return (
    <div className={styles['navbar-container']}>
      <nav className={styles.container}>
        <ul className={styles['list-container']}>
          <li>
            <span className={styles.name}>pyj-pd</span>
          </li>
          <li>
            <MyLink href="/posts">블로그</MyLink>
          </li>
          <li>
            <MyLink href="/">About me</MyLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
