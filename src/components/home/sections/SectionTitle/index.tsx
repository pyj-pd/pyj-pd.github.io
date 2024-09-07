import RainbowSeparator from '../../RainbowSeparator'
import styles from './styles.module.scss'

type SectionTitleProps = { children: string }

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className={styles.container}>
      <RainbowSeparator />
      <h2>{children}</h2>
    </div>
  )
}
