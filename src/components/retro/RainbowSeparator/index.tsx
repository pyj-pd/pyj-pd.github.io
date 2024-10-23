import Image from 'next/image'
import styles from './styles.module.scss'
import separatorImage from '@public/assets/retro/separator.webp'

export default function RainbowSeparator() {
  return (
    <div className={styles.container}>
      <Image
        src={separatorImage}
        alt="Section separator"
        className={styles.separator}
      />
      {/* <span className={styles.separator} /> */}
    </div>
  )
}
