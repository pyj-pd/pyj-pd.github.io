import { GITHUB_PROFILE_LINK } from '@/constants/urls'
import HyperLinkButton from './HyperLinkButton'
import styles from './styles.module.scss'

export default function HyperLinkGroup() {
  return (
    <div className={styles.container}>
      <HyperLinkButton url={GITHUB_PROFILE_LINK}>GitHub</HyperLinkButton>
    </div>
  )
}
