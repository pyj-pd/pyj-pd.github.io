import { sharedOpenGraph } from '@/constants/metadata'
import { SITE_URL } from '@/constants/project'
import type { Metadata } from 'next'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

/**
 * Gets canonical metadata object from path.
 * @param path Page path. For example, `/posts`.
 * @param openGraph Optional open graph content that you'd want to inherit. It contains shared open graph data initially.
 * @returns An metadata object with canonical links data and open graph metadata. It can be merged directly into Next.js' `metadata` object.
 */
export const getCanonicalMetadataFromPath = (
  path: string,
  openGraph?: OpenGraph,
): Metadata => {
  const canonical = `${SITE_URL}${path}`

  return {
    alternates: {
      canonical,
    },
    openGraph: {
      ...sharedOpenGraph,
      ...(openGraph ?? {}),
      url: canonical,
    },
  }
}
