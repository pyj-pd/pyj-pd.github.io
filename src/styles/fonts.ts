import { Archivo_Black } from 'next/font/google'
import localFont from 'next/font/local'

export const archivoBlackFont = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
})

export const msFont = localFont({
  src: [
    {
      path: '../assets/fonts/MS Sans Serif.ttf',
      style: 'normal',
    },
    {
      path: '../assets/fonts/MS Sans Serif Bold.ttf',
      weight: '500',
      style: 'bold',
    },
  ],
})

export const react95Font = localFont({
  src: '../assets/fonts/R95 Sans serif 12pt.ttf',
})
