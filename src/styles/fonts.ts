import { PT_Mono } from 'next/font/google'
import localFont from 'next/font/local'

export const monospaceFont = PT_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--f-mono',
})

export const sansSerifFont = localFont({
  src: '../../public/assets/fonts/AstaSans-VariableFont_wght.woff2',
  variable: '--f-sans-serif',
})
