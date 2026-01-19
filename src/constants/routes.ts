import type { MetadataRoute } from 'next'
import { GITHUB_PROFILE_LINK } from './project'

// Navbar
export type NavbarRouteData = {
  [routeId: string]: {
    path: string
    name: string
    /** @default true */
    includeInSitemap?: boolean
    openInNewTab?: boolean
  } & Partial<
    Pick<MetadataRoute.Sitemap[number], 'changeFrequency' | 'priority'>
  >
}

export const internalRoutesList = {
  home: {
    path: '/',
    name: '홈',
    priority: 0.9,
  },
  posts: {
    /**
     * This URL should be only used for blog post list page.
     * To get URL of each blog post, use `getPostURL` function instead.
     */
    path: '/posts/',
    name: '블로그',

    priority: 1,
    changeFrequency: 'always',
  },
  portfolio: {
    path: '/portfolio/',
    name: '포트폴리오',

    priority: 0.8,
  },
} as const satisfies NavbarRouteData

export const externalRoutesList = {
  githubProfile: {
    path: GITHUB_PROFILE_LINK,
    name: 'GitHub',
    openInNewTab: true,
  },
} as const satisfies NavbarRouteData

export const navbarRouteList = {
  ...internalRoutesList,
  ...externalRoutesList,
} as const satisfies NavbarRouteData

export type NavbarRouteId = keyof typeof navbarRouteList
