import Image from 'next/image'
import styles from './styles.module.scss'

export default function BackgroundTexture() {
  return (
    <div className={styles.container}>
      <Image
        src="/background-texture.jpg"
        fill
        alt="Concrete texture"
        className={styles.texture}
      />
    </div>
  )
}
