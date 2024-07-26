import palette from '@/styles/palette.module.scss'

export type TechStack = {
  name: string

  backgroundColor: string
  textColor: string
}

export const techStackList: TechStack[][] = [
  [
    {
      name: 'TypeScript',

      backgroundColor: palette.typescriptBlue,
      textColor: palette.white,
    },
    {
      name: 'React',

      backgroundColor: palette.black,
      textColor: palette.reactCyan,
    },
    {
      name: 'Next.js',

      backgroundColor: palette.black,
      textColor: palette.white,
    },
    {
      name: 'Vue',

      backgroundColor: palette.vueGreen,
      textColor: palette.black,
    },
  ],
  [
    {
      name: 'Recoil',

      backgroundColor: palette.blue,
      textColor: palette.white,
    },
    {
      name: 'Pinia',

      backgroundColor: palette.black,
      textColor: palette.yellow,
    },
    {
      name: 'Vite',

      backgroundColor: palette.purple,
      textColor: palette.white,
    },
  ],
]
