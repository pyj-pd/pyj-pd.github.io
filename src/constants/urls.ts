import type { MetadataRoute } from 'next'

export const GITHUB_PROFILE_LINK = 'https://github.com/pyj-pd',
  SITE_URL = 'https://pyj-pd.dev',
  SITEMAP_URL = `${SITE_URL}/sitemap.txt`

// Navbar
export type NavbarRouteData = {
  path: string
  name: string
  openInNewTab?: boolean
} & Partial<Pick<MetadataRoute.Sitemap[number], 'changeFrequency' | 'priority'>>

export const internalRoutesList: NavbarRouteData[] = [
  {
    path: '/',
    name: 'Home',
    priority: 0.9,
  },
  {
    path: '/techstacks',
    name: 'Tech Stacks',
    priority: 0.5,
  },
  {
    path: '/projects',
    name: 'Projects',
    priority: 0.5,
  },
  {
    path: '/posts',
    name: 'Blog(한국어/Korean)',

    priority: 1,
    changeFrequency: 'always',
  },
]

export const externalRoutesList: NavbarRouteData[] = [
  {
    path: GITHUB_PROFILE_LINK,
    name: 'GitHub',
    openInNewTab: true,
  },
]

export const navbarRouteList: NavbarRouteData[] = [
  ...internalRoutesList,
  ...externalRoutesList,
]
