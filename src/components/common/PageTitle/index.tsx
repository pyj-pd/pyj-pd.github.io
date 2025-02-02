import classNames from 'classnames'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'

type PageTitleProps = ComponentPropsWithoutRef<'h1'>

export default function PageTitle({
  children,
  className,
  ...props
}: PageTitleProps) {
  return (
    <h1
      className={classNames(styles.title, className)}
      {...props}
    >
      {children}
    </h1>
  )
}
