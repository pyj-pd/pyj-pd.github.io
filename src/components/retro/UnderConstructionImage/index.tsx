import styles from './styles.module.scss'
import Image from 'next/image'
import underConstructionGif from '@public/assets/retro/underconstruction.gif'

export default function UnderConstructionImage() {
  return (
    <div className={styles.container}>
      <Image
        src={underConstructionGif}
        unoptimized
        alt="Under construction"
      />
    </div>
  )
}
