import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type MyLinkProps = ComponentPropsWithoutRef<typeof Link>

export default function MyLink(props: MyLinkProps) {
  return (
    <Link
      {...props}
      prefetch={false}
    />
  )
}
