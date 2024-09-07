import HyperLinkButton from './HyperLinkButton'
import styles from './styles.module.scss'

export default function HyperLinkGroup() {
  return (
    <div className={styles.container}>
      <HyperLinkButton url="https://github.com/pyj-pd">GitHub</HyperLinkButton>
    </div>
  )
}
