import type { ComponentPropsWithoutRef } from 'react'

type LogoSvgProps = Partial<ComponentPropsWithoutRef<'svg'>>

export default function LogoSvg(props: LogoSvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="477 434 45 45"
    >
      <path
        d="M483 434h15v15h-3v15h-3v15h-15v-15h3v-15h3v-15Zm9 30h-12m27-30h15v15h-4v15h-15v-15h4v-15Zm11 15h-11m-12 0h-12"
        fill="currentColor"
      />
    </svg>
  )
}
