import { forwardRef } from 'react'
import { syneFont } from '@/styles/fonts'
import styles from './styles.module.scss'
import classNames from 'classnames'

export default forwardRef<HTMLDivElement>(function ScrollDownText(props, ref) {
  return (
    <div
      className={styles['text-container']}
      ref={ref}
    >
      <span className={classNames(syneFont.className, styles.text)}>
        Scroll Down
      </span>
      <span className={styles.circle} />
    </div>
  )
})
