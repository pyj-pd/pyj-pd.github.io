'use client'

import { syneFont } from '@/styles/fonts'
import classNames from 'classnames'
import styles from './styles.module.scss'

const SCROLL_DOWN_TEXT_NUMBER = 30

export default function ScrollDown() {
  return (
    <div className={styles['scroll-down-container']}>
      <div className={styles['animation-area']}>
        {[...new Array(SCROLL_DOWN_TEXT_NUMBER)].map((_, index) => (
          <div
            className={styles['text-container']}
            key={index}
          >
            <span
              className={classNames(
                syneFont.className,
                styles['scroll-down-text'],
              )}
            >
              Scroll Down
            </span>
            <span className={styles.circle} />
          </div>
        ))}
      </div>
    </div>
  )
}
