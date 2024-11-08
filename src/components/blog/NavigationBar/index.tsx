import LogoSvg from '@/components/common/LogoSvg'
import styles from './styles.module.scss'
import MyLink from '@/components/common/MyLink'

export default function NavigationBar() {
  return (
    <div className={styles['navbar-container']}>
      <nav className={styles.container}>
        <ul className={styles['list-container']}>
          <li>
            <LogoSvg className={styles['logo-svg']} />
          </li>
          <li>
            <MyLink href="/posts">글 목록</MyLink>
          </li>
          <li>
            <MyLink href="/">About me</MyLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
