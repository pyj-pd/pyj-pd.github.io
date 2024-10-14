import HyperLinkButton from './HyperLinkButton'
import styles from './styles.module.scss'

export default function HyperLinkGroup() {
  return (
    <div className={styles.container}>
      <HyperLinkButton url="/posts">Blog(한국어/Korean)</HyperLinkButton>
    </div>
  )
}
