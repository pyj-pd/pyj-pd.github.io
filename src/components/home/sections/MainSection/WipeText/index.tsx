import styles from './styles.module.scss'
import type { CSSProperties, ReactNode } from 'react'

type WipeTextProps = {
  children?: ReactNode
  index: number
}

export default function WipeText({ children, index }: WipeTextProps) {
  return (
    <div
      className={styles['wipe-text-container']}
      style={{ '--i': index } as CSSProperties}
    >
      {typeof children === 'string' ? <span>{children}</span> : children}
    </div>
  )
}
