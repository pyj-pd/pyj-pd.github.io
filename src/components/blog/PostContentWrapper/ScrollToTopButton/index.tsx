'use client'

import { motion, useSpring, type MotionValue } from 'motion/react'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

type ScrollToTopButtonProps = {
  /**
   * Progress of progress bar between 0 and 1.
   */
  progress: MotionValue<number>
}

export default function ScrollToTopButton({
  progress,
}: ScrollToTopButtonProps) {
  const springProgress = useSpring(progress, { bounce: 0, visualDuration: 0.2 })

  const [isBorderVisible, setIsBorderVisible] = useState<boolean>(false)

  useEffect(() => {
    setIsBorderVisible(true)
  }, [])

  return (
    <div
      className={classNames(
        styles.container,
        isBorderVisible && styles['border-visible'],
      )}
    >
      {isBorderVisible && (
        <svg
          className={styles['progress-border']}
          viewBox="0 0 100 100"
          fill="red"
        >
          <motion.circle
            cx={50}
            cy={50}
            r={25}
            strokeWidth={50}
            style={{
              rotate: '-90deg',
              pathLength: springProgress,
            }}
          />
        </svg>
      )}
      <a
        href="#"
        tabIndex={-1}
        className={styles['button-container']}
      >
        <button
          className={styles.button}
          aria-label="맨 위로 스크롤"
        >
          <svg viewBox="0 0 100 100">
            <path d="M 0 50 L 50 0 L 100 50 M 50 0 L 50 100" />
          </svg>
        </button>
      </a>
    </div>
  )
}
