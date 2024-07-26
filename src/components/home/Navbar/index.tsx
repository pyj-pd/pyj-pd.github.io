import styles from './styles.module.scss'

export default function Navbar() {
  return (
    <header className={styles['navbar-container']}>
      <div className={styles['navbar-content']}>
        <div className={styles['logo-container']}>
          <span />
          <span />
        </div>
      </div>
    </header>
  )
}
