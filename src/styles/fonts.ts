import {
  Comic_Neue,
  Noto_Serif_KR,
  PT_Mono,
  Noto_Color_Emoji,
} from 'next/font/google'

// Retro
export const comicFont = Comic_Neue({
  weight: '700',
  subsets: ['latin'],
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

export const emojiFont = Noto_Color_Emoji({
  subsets: ['emoji'],
  weight: '400',
  variable: '--f-emoji',
})
