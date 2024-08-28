'use client'

import { customEase } from '@/constants/animation'
import styles from './styles.module.scss'
import {
  PATTERN_IMAGE_EXT,
  PATTERN_IMAGE_PATH,
  type ProjectItem,
} from '@/constants/section-data/project'
import { syneFont, tiny5Font } from '@/styles/fonts'
import { getTechStackData } from '@/utils/tech-stacks'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

type ProjectItemProps = {
  data: ProjectItem
  alignToRight?: boolean
}

export default function ProjectItem({ data, alignToRight }: ProjectItemProps) {
  const patternImagePath =
    PATTERN_IMAGE_PATH + data.patternImageId + PATTERN_IMAGE_EXT

  const techStackDataList = useMemo(
    () => data.techStacks.map((techStackId) => getTechStackData(techStackId)),
    [data.techStacks],
  )

  return (
    <motion.div
      className={classNames(styles['project-item-container'], {
        [styles['align-to-right']]: alignToRight,
      })}
      initial={{ scale: 0.9, opacity: 0, y: 30 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        y: 0,
      }}
      viewport={{
        margin: '-30%',
        once: true,
      }}
      transition={{
        ease: customEase,
        duration: 2,
        opacity: { duration: 0 },
      }}
    >
      <div
        className={styles['pattern-image']}
        style={{
          backgroundImage: `url(${patternImagePath})`,
        }}
      />
      <div className={styles['info-container']}>
        <div className={styles['text-container']}>
          <h3 className={classNames(tiny5Font.className, styles['project-id'])}>
            {data.projectId}
          </h3>
          <p className={syneFont.className}>{data.description}</p>
        </div>
        <div className={styles['tech-stack-container']}>
          {techStackDataList.map(
            (techStack, index) =>
              techStack && (
                <span
                  className={syneFont.className}
                  key={index}
                  style={{
                    backgroundColor: techStack.backgroundColor,
                    color: techStack.textColor,
                  }}
                >
                  {techStack.name}
                </span>
              ),
          )}
        </div>
      </div>
    </motion.div>
  )
}
