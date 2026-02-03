import { SITE_URL } from '@/constants/info'
import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type NormalLinkProps = ComponentPropsWithoutRef<typeof Link>

export default function NormalLink(props: NormalLinkProps) {
  const rel =
    props.target === '_blank' && !props.href.toString().startsWith(SITE_URL)
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
