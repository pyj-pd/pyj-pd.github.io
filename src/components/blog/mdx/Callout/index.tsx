import type { ReactNode } from 'react'

type CalloutType = 'info' | 'okay' | 'warn' | 'error'

type CalloutProps = {
  type: CalloutType
  children: ReactNode
}

export default function Callout({ type, children }: CalloutProps) {
  return (
    <div>
      <h4>{type}</h4>
      <div>{children}</div>
    </div>
  )
}
