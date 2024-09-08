import styles from './styles.module.scss'
import Image from 'next/image'

export default function UnderConstructionImage() {
  return (
    <div className={styles.container}>
      <Image
        src="/assets/retro/underconstruction.gif"
        width={570}
        height={50}
        alt="Under construction"
      />
    </div>
  )
}
