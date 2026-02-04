import NormalLink from '@/components/common/NormalLink'
import { checkIfInternalLink } from '@/utils/url'
import type { ComponentPropsWithoutRef } from 'react'

type MDXLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string
}

export default function MDXLink(props: MDXLinkProps) {
  const isExternalLink = !checkIfInternalLink(props.href)

  return (
    <NormalLink
      {...props}
      href={props.href}
      target={isExternalLink ? '_blank' : props.target}
    />
  )
}
