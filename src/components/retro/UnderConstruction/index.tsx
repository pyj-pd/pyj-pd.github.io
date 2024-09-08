import MarqueeContent from '@/components/retro/MarqueeContent'
import styles from './styles.module.scss'

export default function UnderConstruction() {
  return (
    <MarqueeContent>
      <p className={styles.text}>This website is under construction!</p>
    </MarqueeContent>
  )
}
