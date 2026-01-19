import type { StaticImageData } from 'next/image'
import type { TechStackName } from './techstack'
import { DEFAULT_LANGUAGE, locales } from '@/locales'

import randomSeatScreenshot from '@public/assets/projects/thumbnail/random-seat.webp'
import lottoGeneratorScreenshot from '@public/assets/projects/thumbnail/lotto-generator.webp'
import daySummaryScreenshot from '@public/assets/projects/thumbnail/day-summarry.webp'

export type ProjectData = {
  image: StaticImageData

  /**
   * Used for projects page linking.
   */
  id: string
  title: string
  description: string
  techStacks: TechStackName[]

  githubUrl?: string
  projectUrl?: string
}

export const projectList: ProjectData[] = [
  {
    image: randomSeatScreenshot,

    id: 'random-seat',
    title: locales[DEFAULT_LANGUAGE].projects.randomSeat.title,
    description: locales[DEFAULT_LANGUAGE].projects.randomSeat.description,
    techStacks: ['Vue', 'Vite', 'Pinia', 'TypeScript', 'Sass(SCSS)'],

    githubUrl: 'https://github.com/pyj-pd/random-seat',
    projectUrl: 'https://seat.pyj-pd.dev/',
  },
  {
    image: lottoGeneratorScreenshot,

    id: 'lotto-generator',
    title: locales[DEFAULT_LANGUAGE].projects.lottoGenerator.title,
    description: locales[DEFAULT_LANGUAGE].projects.lottoGenerator.description,
    techStacks: ['GitHub Actions'],

    githubUrl: 'https://github.com/pyj-pd/lotto-generator',
    projectUrl: 'https://pyj-pd.dev/lotto-generator/',
  },
  {
    image: daySummaryScreenshot,

    id: 'day-summary',
    title: locales[DEFAULT_LANGUAGE].projects.daySummary.title,
    description: locales[DEFAULT_LANGUAGE].projects.daySummary.description,
    techStacks: [
      'React',
      'Next.js',
      'styled-components',
      'TypeScript',
      'Motion',
    ],

    projectUrl: 'https://day-summary.vercel.app/',
  },
]
