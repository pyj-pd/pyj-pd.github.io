import { Vast_Shadow, Noto_Serif_KR, PT_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Retro
export const comicFont = Vast_Shadow({
  weight: '400',
  subsets: ['latin'],
})

export const uniFont = localFont({
  weight: '400',
  src: '../assets/fonts/Unifont-latin-hangul.woff2',
})

// Blog
export const serifFont = Noto_Serif_KR({
  weight: ['600', '900'],
  subsets: ['latin'],
  preload: true,
  variable: '--f-serif',
})

export const monospaceFont = PT_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--f-mono',
})
