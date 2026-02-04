import { checkIfInternalLink } from '@/utils/url'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type NormalLinkProps = ComponentPropsWithoutRef<typeof Link>

export default function NormalLink(props: NormalLinkProps) {
  const rel =
    props.target === '_blank' && !checkIfInternalLink(props.href.toString())
      ? 'noreferrer noopener'
      : undefined

  return (
    <Link
      prefetch={false}
      {...props}
      rel={rel}
    />
  )
}
