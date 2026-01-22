import NormalLink from '@/components/common/NormalLink'
import type { ComponentPropsWithoutRef } from 'react'

type MDXLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string
}

export default function MDXLink(props: MDXLinkProps) {
  return (
    <NormalLink
      {...props}
      href={props.href}
    />
  )
}
