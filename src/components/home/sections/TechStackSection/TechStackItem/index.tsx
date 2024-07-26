import classNames from 'classnames'
import styles from './styles.module.scss'
import { syneFont } from '@/styles/fonts'
import { CSSProperties } from 'react'
import { TechStack } from '@/constants/techstack'

type TechStackItemProps = TechStack

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
