'use client'

import PageTitle from '@/components/common/PageTitle'
import styles from './styles.module.scss'
import { techStackList } from '@/constants/home/techstack'
import type { CSSProperties } from 'react'
import { DEFAULT_LANGUAGE, locales } from '@/locales'

export default function TechStackSection() {
  return (
    <section className={styles.container}>
      <PageTitle headingType="h2">
        {locales[DEFAULT_LANGUAGE].techStackSection.title}
      </PageTitle>
      <ul className={styles['list-container']}>
        {techStackList.map((category, categoryIndex) => (
          <li key={categoryIndex}>
            <ul className={styles['category-container']}>
              {category.items.map((techStack, techStackIndex) => (
                <li
                  className={styles['techstack-item']}
                  key={techStackIndex}
                  style={
                    {
                      '--background-color': techStack.backgroundColor,
                      '--text-color': techStack.textColor,
                    } as CSSProperties
                  }
                >
                  {techStack.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
