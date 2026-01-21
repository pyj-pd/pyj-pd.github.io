import { PT_Mono, Asta_Sans } from 'next/font/google'

export const monospaceFont = PT_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--f-mono',
})

export const sansSerifFont = Asta_Sans({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--f-sans-serif',
})
