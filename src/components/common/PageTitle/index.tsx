import classNames from 'classnames'
import type { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.scss'

type PageTitleProps = ComponentPropsWithoutRef<'h1'> & {
  headingType?: 'h1' | 'h2'
}

export default function PageTitle({
  children,
  className,
  headingType: HeadingTag = 'h1',
  ...props
}: PageTitleProps) {
  return (
    <HeadingTag
      className={classNames(styles.title, className)}
      {...props}
    >
      {children}
    </HeadingTag>
  )
}
