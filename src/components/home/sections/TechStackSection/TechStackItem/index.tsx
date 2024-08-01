import classNames from 'classnames'
import styles from './styles.module.scss'
import { syneFont } from '@/styles/fonts'
import type { CSSProperties } from 'react'
import { type TechStackItem } from '@/constants/section-data/tech-stacks'

type TechStackItemProps = TechStackItem

export default function TechStackItem({
  name,
  backgroundColor,
  textColor,
}: TechStackItemProps) {
  return (
    <div
      className={styles['tech-stack-item-container']}
      style={
        {
          '--background-color': backgroundColor,
          '--text-color': textColor,
        } as CSSProperties
      }
    >
      <span className={classNames(syneFont.className, styles['tech-name'])}>
        {name}
      </span>
    </div>
  )
}
