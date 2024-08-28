'use client'

import styles from './styles.module.scss'
import SectionTitle from '../../SectionTitle'
import TechStackItem from './TechStackItem'
import { techStackList } from '@/constants/section-data/tech-stacks'
import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'
import { archivoFont } from '@/styles/fonts'
import classNames from 'classnames'

export default function TechStackSection() {
  const dragRef = useRef<HTMLDivElement>(null)

  const [leftDragConstraint, setLeftDragConstraint] = useState<number>(0)

  const [hasClicked, setHasClicked] = useState<boolean>(false)

  const updateDragConstraint = () => {
    if (dragRef.current === null) return

    const dragWidth = dragRef.current.getBoundingClientRect().width,
      screenWidth = window.innerWidth

    const constraint = -1 * (dragWidth - screenWidth)

    setLeftDragConstraint(constraint)
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updateDragConstraint)
    updateDragConstraint()

    return () => window.removeEventListener('resize', updateDragConstraint)
  }, [])

  return (
    <section className={styles['tech-stack-section']}>
      <SectionTitle>I am capable of using...</SectionTitle>
      <div className={styles['tech-stack-container']}>
        <motion.div
          className={styles['drag-view']}
          ref={dragRef}
          drag="x"
          dragConstraints={{
            left: leftDragConstraint,
            right: 0,
          }}
          onDragStart={() => setHasClicked(true)}
        >
          {techStackList.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={styles['tech-stack-row']}
            >
              {row.map((item, columnIndex) => (
                <TechStackItem
                  key={`${rowIndex},${columnIndex}`}
                  {...item}
                />
              ))}
            </div>
          ))}
        </motion.div>
        {!hasClicked && (
          <div className={styles['drag-text-container']}>
            <span className={styles['drag-arrow']} />
            <span className={archivoFont.className}>Try scrolling</span>
            <span className={classNames(styles['drag-arrow'], styles.right)} />
          </div>
        )}
      </div>
    </section>
  )
}
