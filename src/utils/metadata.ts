import { navbarRouteList, SITE_URL, type NavbarRouteId } from '@/constants/urls'
import type { Metadata } from 'next'

type CanonicalMetadata = Pick<Metadata, 'alternates'>

/**
 * Gets canonical metadata object from route id.
 * @param routeId Route id
 * @returns An metadata object with canonical links data. It can be merged directly into Next.js' `metadata` object.
 */
export const getCanonicalMetadataFromRouteId = (
  routeId: NavbarRouteId,
): CanonicalMetadata =>
  getCanonicalMetadataFromPath(navbarRouteList[routeId].path)

/**
 * Gets canonical metadata object from path.
 * @param path Page path. For example, `/posts`.
 * @returns An metadata object with canonical links data. It can be merged directly into Next.js' `metadata` object.
 */
export const getCanonicalMetadataFromPath = (
  path: string,
): CanonicalMetadata => ({
  alternates: {
    canonical: `${SITE_URL}${path}`,
  },
})
