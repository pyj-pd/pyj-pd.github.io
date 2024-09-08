import { Comic_Neue } from 'next/font/google'
import localFont from 'next/font/local'

export const comicFont = Comic_Neue({
  weight: '700',
  subsets: ['latin'],
})

export const serifFont = localFont({
  src: '../assets/fonts/RIDIBatang.otf',
})
