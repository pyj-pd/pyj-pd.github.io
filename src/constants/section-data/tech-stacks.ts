import palette from '@/styles/palette.module.scss'

export type TechStackItem = {
  id: string
  name: string

  backgroundColor: string
  textColor: string
}

export const techStackList = [
  [
    {
      id: 'typescript',
      name: 'TypeScript',

      backgroundColor: palette.typescriptBlue,
      textColor: palette.white,
    },
    {
      id: 'react',
      name: 'React',

      backgroundColor: palette.black,
      textColor: palette.reactCyan,
    },
    {
      id: 'nextjs',
      name: 'Next.js',

      backgroundColor: palette.black,
      textColor: palette.white,
    },
    {
      id: 'vue',
      name: 'Vue',

      backgroundColor: palette.vueGreen,
      textColor: palette.black,
    },
  ],
  [
    {
      id: 'recoil',
      name: 'Recoil',

      backgroundColor: palette.blue,
      textColor: palette.white,
    },
    {
      id: 'pinia',
      name: 'Pinia',

      backgroundColor: palette.black,
      textColor: palette.yellow,
    },
    {
      id: 'vite',
      name: 'Vite',

      backgroundColor: palette.purple,
      textColor: palette.white,
    },
  ],
] as const satisfies TechStackItem[][]

export type TechStackId = (typeof techStackList)[number][number]['id']
