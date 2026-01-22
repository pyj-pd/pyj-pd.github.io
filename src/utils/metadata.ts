import {
  sharedOpenGraph,
  SITE_NAME,
  TITLE_SEPARATOR_DASH,
} from '@/constants/metadata'
import type { Metadata } from 'next'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

/**
 * Gets canonical metadata object from path.
 * @param url Absolute URL of the page.
 * @param openGraph Optional open graph content that you'd want to inherit. It contains shared open graph data initially.
 * @returns An metadata object with canonical links data and open graph metadata. It can be merged directly into Next.js' `metadata` object.
 */
export const getCanonicalMetadataFromPath = (
  url: string,
  openGraph?: OpenGraph,
): Metadata => {
  return {
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...sharedOpenGraph,
      ...(openGraph ?? {}),
      url,
    },
  }
}

export const getPageTitleName = (title?: string) => {
  if (title === undefined) return SITE_NAME
  else return `${SITE_NAME}${TITLE_SEPARATOR_DASH}${title}`
}
