import Image from 'next/image'
import thanksGif from '@public/assets/retro/thanks.gif'

export default function ThanksBanner() {
  return (
    <Image
      src={thanksGif}
      unoptimized
      alt="Thanks for visiting!"
    />
  )
}
