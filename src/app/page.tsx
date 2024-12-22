import { getCanonicalMetadataFromRouteId } from '@/utils/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  ...getCanonicalMetadataFromRouteId('posts'),
}

export default function HomePage() {
  return <div>sdfsdfsdfsdfsdfsd</div>
}
