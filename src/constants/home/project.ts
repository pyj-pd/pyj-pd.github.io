import type { StaticImageData } from 'next/image'
import type { TechStackName } from './techstack'

import randomSeatScreenshot from '@public/assets/retro/projects/random-seat.webp'
import lottoGeneratorScreenshot from '@public/assets/retro/projects/lotto-generator.webp'

export type ProjectData = {
  image: StaticImageData

  title: string
  description: string
  techStacks: TechStackName[]

  githubUrl?: string
  projectUrl?: string
}

export const projectList: ProjectData[] = [
  {
    image: randomSeatScreenshot,

    title: 'Random Seat Generator',
    description:
      'A web app for generating random seats for schools, offices, etc.',
    techStacks: ['Vue', 'Vite', 'Pinia', 'TypeScript', 'Sass(SCSS)'],

    githubUrl: 'https://github.com/pyj-pd/random-seat',
    projectUrl: 'https://seat.pyj-pd.dev/',
  },
  {
    image: lottoGeneratorScreenshot,

    title: 'Lotto Number Generator',
    description:
      'A simple website for generating random lotto numbers. I wrote it to be extremely lightweight, using vanilla JS only with GitHub Actions combined to minify the files.',
    techStacks: ['GitHub Actions'],

    githubUrl: 'https://github.com/pyj-pd/lotto-generator',
    projectUrl: 'https://pyj-pd.dev/lotto-generator/',
  },
]
