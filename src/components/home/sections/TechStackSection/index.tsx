'use client'

import styles from './styles.module.scss'
import SectionTitle from '../../SectionTitle'
import TechStackItem from './TechStackItem'
import { techStackList } from '@/constants/techstack'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function TechStackSection() {
  const dragRef = useRef<HTMLDivElement>(null)

  return (
    <section className={styles['tech-stack-section']}>
      <SectionTitle>I am capable of</SectionTitle>
      <div className={styles['tech-stack-container']}>
        <div
          className={styles['drag-container']}
          ref={dragRef}
        >
          <motion.div
            className={styles['drag-view']}
            drag="x"
            // WHY THE FUCK ISNT THIS WORKING @todo @todo @todo @todo @todo @todo @todo @todo
            dragConstraints={dragRef}
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
        </div>
      </div>
    </section>
  )
}
