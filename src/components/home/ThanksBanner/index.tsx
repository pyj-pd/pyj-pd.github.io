import Image from 'next/image'

export default function ThanksBanner() {
  return (
    <Image
      src="/assets/thanks.gif"
      width={270}
      height={100}
      alt="Thanks for visiting!"
    />
  )
}
