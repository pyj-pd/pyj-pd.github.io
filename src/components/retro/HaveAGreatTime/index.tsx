import MarqueeContent from '@/components/retro/MarqueeContent'
import styles from './styles.module.scss'

export default function HaveAGreatTime() {
  return (
    <MarqueeContent>
      <p className={styles.text}>Have a great time on my website!</p>
    </MarqueeContent>
  )
}
