import type { CSSProperties } from 'react'
import styles from '../styles.module.scss'
import Image from 'next/image'

type GlowStarProps = {
  style: Pick<CSSProperties, 'top' | 'right' | 'bottom' | 'left'>
  /**
   * Animation delay in seconds.
   */
  delay?: number
}

export default function GlowStar({ style, delay }: GlowStarProps) {
  return (
    <Image
      src="/assets/glow.webp"
      width={50}
      height={50}
      alt="Glowing"
      className={styles.glow}
      style={{
        ...style,
        animationDelay: `${delay}s`,
      }}
    />
  )
}
