import type { ComponentPropsWithoutRef } from 'react'

type MDXLinkProps = ComponentPropsWithoutRef<'a'>

const HEADING_LINK_PREFIX = '#'

export default function MDXLink(props: MDXLinkProps) {
  const isHeadingLink = props.href?.startsWith(HEADING_LINK_PREFIX)

  return (
    <a
      {...props}
      target={!isHeadingLink ? '_blank' : undefined}
    />
  )
}
