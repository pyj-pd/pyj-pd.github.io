'use client'

import { useRef, type ReactNode } from 'react'
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

  return (
    <>
      {
        <PostTopBar
          postTitle={postMetadata.title}
          progress={scrollYProgress}
        />
      }
      <div ref={ref}>{children}</div>
    </>
  )
}
