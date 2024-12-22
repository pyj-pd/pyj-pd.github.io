import { PT_Mono, Gothic_A1, Archivo } from 'next/font/google'

export const monospaceFont = PT_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--f-mono',
})

export const sansSerifFont = Gothic_A1({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--f-sans-serif',
})

export const englishSansSerifFont = Archivo({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--f-eng-sans-serif',
})
