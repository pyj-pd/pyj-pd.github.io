import { Comic_Neue, Noto_Serif_KR, PT_Mono } from 'next/font/google'

export const comicFont = Comic_Neue({
  weight: '700',
  subsets: ['latin'],
})

export const serifFont = Noto_Serif_KR({
  weight: ['600', '900'],
  subsets: ['latin'],
})

export const monospaceFont = PT_Mono({
  subsets: ['latin'],
  weight: '400',
})
