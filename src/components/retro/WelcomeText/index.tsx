import Image from 'next/image'
import styles from './styles.module.scss'
import GlowStar from './GlowStar'
import welcomeTextImage from '@public/assets/retro/welcome-text.webp'

const STAR_MARGIN = '10px'

export default function WelcomeText() {
  return (
    <div className={styles.container}>
      <h1>
        <Image
          className={styles['welcome-text-image']}
          src={welcomeTextImage}
          alt="Welcome to my homepage"
        />
      </h1>
      <GlowStar style={{ top: STAR_MARGIN, left: STAR_MARGIN }} />
      <GlowStar
        style={{ bottom: STAR_MARGIN, right: STAR_MARGIN }}
        delay={0.7}
      />
    </div>
  )
}
