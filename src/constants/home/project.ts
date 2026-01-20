import type { StaticImageData } from 'next/image'
import type { TechStackName } from './techstack'

import randomSeatScreenshot from '@public/assets/projects/thumbnail/random-seat.webp'
import lottoGeneratorScreenshot from '@public/assets/projects/thumbnail/lotto-generator.webp'
import daySummaryScreenshot from '@public/assets/projects/thumbnail/day-summarry.webp'
import minecraftCraftingRecipeScreenshot from '@public/assets/projects/thumbnail/minecraft-crafting-recipe.webp'

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
    title: '무작위 자리 뽑기',
    description: `
사용자 지정 크기의 자리 배치에서 무작위로 자리를 지정하는 웹 앱입니다.
Step-by-step 식으로 진행되는 자리 배치 설정을 통해 손쉬운 사용과, 자리를 뽑을 때 재생되는 소리, 자리를 뽑고 나서 표시되는 콘페티 효과를 통해 더욱 재미있는 사용성을 챙길 수 있었습니다.
`.trim(),
    techStacks: ['Vue', 'Vite', 'Pinia', 'TypeScript', 'Sass(SCSS)'],

    githubUrl: 'https://github.com/pyj-pd/random-seat',
    projectUrl: 'https://seat.pyj-pd.dev/',
  },
  {
    image: lottoGeneratorScreenshot,

    id: 'lotto-generator',
    title: '로또 번호 생성기',
    description: `
버튼 클릭 한 번으로 간편하게 로또 번호를 생성할 수 있는 웹 앱입니다.
각종 프레임워크와 라이브러리 사용으로 복잡해진 웹 개발에서 탈피하여, 최소한의 기능과 코드만을 남겨 간단한 웹 앱을 제작하였습니다. 또한 GitHub Actions를 통해 GitHub Pages에 배포하기 전 JS, CSS 파일을 먼저 압축(Minify)하여 업로드하는 방식으로 최종 유저에게 도달하는 파일 용량도 줄일 수 있었습니다.
`.trim(),
    // 'A simple website for generating random lotto numbers. I wrote it to be extremely lightweight, using vanilla JS only with GitHub Actions combined to minify the files.',
    techStacks: ['GitHub Actions'],

    githubUrl: 'https://github.com/pyj-pd/lotto-generator',
    projectUrl: 'https://pyj-pd.dev/lotto-generator/',
  },
  {
    image: daySummaryScreenshot,

    id: 'day-summary',
    title: '시간표 이미지 생성기',
    description: `
손쉽게 학교 시간표 이미지를 생성하여 공유할 수 있도록 하는 웹 앱입니다.
SVG 이미지에 동적으로 글자를 변경한 후 PNG 이미지로 변환하는 과정을 통해 이미지를 생성하는 알고리즘을 구축하였습니다.
`.trim(),
    techStacks: [
      'React',
      'Next.js',
      'styled-components',
      'TypeScript',
      'Motion',
    ],

    projectUrl: 'https://day-summary.vercel.app/',
  },
  {
    image: minecraftCraftingRecipeScreenshot,

    id: 'minecraft-crafting-recipe',
    title: '마인크래프트 조합법 검색기(Minecraft Crafting Recipe)',
    description: `
게임 마인크래프트(Minecraft) 아이템들의 조합법을 손쉽게 검색할 수 있는 웹 앱입니다.
NodeJS 환경에서 미리 Raw 데이터를 처리한 후, 이를 프론트엔드 파일과 연계시키는 방법으로 구현하였습니다.
Vite-SSG를 이용해 정적 사이트로 내보내 배포하는 방식을 택했습니다.
`.trim(),
    techStacks: ['Vue', 'Vite', 'TypeScript', 'Sass(SCSS)', 'Pinia'],

    githubUrl: 'https://github.com/pyj-pd/minecraft-crafting-recipe',
  },
]
