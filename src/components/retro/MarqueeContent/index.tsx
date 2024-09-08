import type { CSSProperties, ReactNode } from 'react'
import styles from './styles.module.scss'

type MarqueeContentProps = Partial<Pick<CSSProperties, 'width'>> & {
  /**
   * Animation duration in seconds.
   */
  duration?: number

  children: ReactNode
}

export default function MarqueeContent({
  width,
  duration,

  children,
}: MarqueeContentProps) {
  return (
    <div
      className={styles.container}
      style={width ? { width } : undefined}
    >
      <div
        className={styles['marquee-container']}
        style={{ '--duration': duration } as CSSProperties}
      >
        {children}
      </div>
    </div>
  )
}
