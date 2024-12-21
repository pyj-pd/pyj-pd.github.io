import type { MetadataRoute } from 'next'

export const GITHUB_PROFILE_LINK = 'https://github.com/pyj-pd',
  SITE_URL = 'https://pyj-pd.dev',
  SITEMAP_URL = `${SITE_URL}/sitemap.xml`

// Navbar
export type NavbarRouteData = {
  [routeId: string]: {
    path: string
    name: string
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
    path: '/posts',
    name: '글 목록',

    priority: 1,
    changeFrequency: 'always',
  },
  /** @todo */
  projects: {
    path: '/projects',
    name: '프로젝트',

    priority: 0.5,
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
