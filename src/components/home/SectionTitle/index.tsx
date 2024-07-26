import classNames from 'classnames'
import styles from './styles.module.scss'
import { archivoFont } from '@/styles/fonts'

type SectionTitleProps = {
  children: string
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className={styles['section-title-container']}>
      <span className={styles.square} />
      <span className={classNames(archivoFont.className, styles.title)}>
        {children}
      </span>
    </div>
  )
}
