import classNames from 'classnames'
import RainbowSeparator from '../RainbowSeparator'
import styles from './styles.module.scss'
import { comicFont } from '@/styles/fonts'

type SectionTitleProps = { children: string }

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className={classNames(styles.container, comicFont.className)}>
      <RainbowSeparator />
      <h2 className={styles.text}>{children}</h2>
      <RainbowSeparator />
    </div>
  )
}
