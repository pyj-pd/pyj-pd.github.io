'use client'

import styles from './styles.module.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type SectionTitleProps = {
  children: string
}

export default function SectionTitle({ children }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end 80%', 'start 50%'],
  })

  const clipPath = useTransform(
    scrollYProgress,
    (value) =>
      `polygon(0% 0%, ${value * 100}% 0%, ${value * 100}% 100%, 0% 100%)`,
  )

  return (
    <div
      ref={ref}
      className={styles['section-title-container']}
    >
      <span className={styles.square} />
      <motion.span
        style={{
          clipPath: clipPath,
        }}
        className={styles.title}
      >
        {children}
      </motion.span>
    </div>
  )
}
