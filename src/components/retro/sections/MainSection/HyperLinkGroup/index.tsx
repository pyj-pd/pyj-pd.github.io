import { GITHUB_PROFILE_LINK } from '@/constants/routes'
import HyperLinkButton from './HyperLinkButton'
import styles from './styles.module.scss'

export default function HyperLinkGroup() {
  return (
    <div className={styles.container}>
      <HyperLinkButton url="/posts">Blog(한국어/Korean)</HyperLinkButton>
      <HyperLinkButton
        url={GITHUB_PROFILE_LINK}
        openInNewTab
      >
        GitHub
      </HyperLinkButton>
    </div>
  )
}
