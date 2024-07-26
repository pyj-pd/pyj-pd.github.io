import { Archivo, Syne } from 'next/font/google'
import localFont from 'next/font/local'

export const archivoFont = Archivo({ subsets: ['latin'] })
export const tiny5Font = localFont({
  src: '../assets/fonts/Tiny5-Regular.ttf',
})
export const syneFont = Syne({ subsets: ['latin'] })
