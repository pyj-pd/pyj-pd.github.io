import Image from 'next/image'
import styles from './styles.module.scss'
import GlowStar from './GlowStar'

const STAR_MARGIN = '10px'

export default function WelcomeText() {
  return (
    <div className={styles.container}>
      <Image
        className={styles['welcome-text-image']}
        src="/assets/retro/welcome-text.webp"
        width={500}
        height={120}
        alt="Welcome to my homepage"
      />
      <GlowStar style={{ top: STAR_MARGIN, left: STAR_MARGIN }} />
      <GlowStar
        style={{ bottom: STAR_MARGIN, right: STAR_MARGIN }}
        delay={0.7}
      />
    </div>
  )
}
