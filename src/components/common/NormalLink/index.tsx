import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type NormalLinkProps = ComponentPropsWithoutRef<typeof Link>

export default function NormalLink(props: NormalLinkProps) {
  return (
    <Link
      prefetch={false}
      {...props}
    />
  )
}
