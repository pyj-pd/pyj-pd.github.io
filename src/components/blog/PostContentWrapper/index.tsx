'use client'

import { useRef, type ReactNode } from 'react'
import { useScroll } from 'motion/react'
import ScrollToTopButton from './ScrollToTopButton'

type PostContentWrapperProps = {
  children: ReactNode
}

export default function PostContentWrapper({
  children,
}: PostContentWrapperProps) {
  const ref = useRef<HTMLDivElement>(null),
    { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start start', 'end end'],
    })

  return (
    <>
      <ScrollToTopButton progress={scrollYProgress} />
      <div ref={ref}>{children}</div>
    </>
  )
}
