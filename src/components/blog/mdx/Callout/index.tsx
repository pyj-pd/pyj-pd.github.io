import classNames from 'classnames'
import styles from './styles.module.scss'
import type { ReactNode } from 'react'

type CalloutType = 'normal' | 'info' | 'okay' | 'warn' | 'error'

type CalloutProps = {
  type: CalloutType

  title: string
  children: ReactNode
}

export default function Callout({ type, title, children }: CalloutProps) {
  return (
    <div className={classNames(styles.container, styles[type])}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  )
}
