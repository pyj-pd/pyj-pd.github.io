import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
  type Variants,
} from 'motion/react'
import styles from './styles.module.scss'
import { useState } from 'react'
import { normalTransition } from '@/styles/motion'

type PostTopBar = {
  postTitle: string
  /**
   * Progress of progress bar between 0 and 1.
   */
  progress: MotionValue<number>
}

const variants: Variants = {
  visible: {
    translateY: '0%',
  },
  hidden: { translateY: '-100%' },
}

export default function PostTopBar({ postTitle, progress }: PostTopBar) {
  const width = useTransform(progress, [0, 1], ['0%', '100%'])
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useMotionValueEvent(progress, 'change', (value) => {
    if (value > 0) setIsVisible(true)
    else setIsVisible(false)
  })

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      transition={normalTransition}
      className={styles['fixed-container']}
    >
      <div className={styles.container}>{postTitle}</div>
      <div className={styles['progress-bar']}>
        <motion.span style={{ width }} />
      </div>
    </motion.div>
  )
}
