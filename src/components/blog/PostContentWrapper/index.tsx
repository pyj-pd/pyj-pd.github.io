'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import PostTopBar from './PostTopBar'
import type { PostMetadata } from '@/types/post'
import { useScroll } from 'motion/react'

type PostContentWrapperProps = {
  children: ReactNode
  postMetadata: PostMetadata
}

export default function PostContentWrapper({
  children,
  postMetadata,
}: PostContentWrapperProps) {
  const ref = useRef<HTMLDivElement>(null),
    { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start start', 'end center'],
    })

  const [shouldTopBarRender, setShouldTopBarRender] = useState<boolean>(false)

  useEffect(() => {
    setShouldTopBarRender(true)
  }, [])

  return (
    <>
      {shouldTopBarRender && (
        <PostTopBar
          postTitle={postMetadata.title}
          progress={scrollYProgress}
        />
      )}
      <div ref={ref}>{children}</div>
    </>
  )
}
