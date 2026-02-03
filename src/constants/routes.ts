import type { MetadataRoute } from 'next'
import { BLOG_REPOSITORY_LINK, GITHUB_PROFILE_LINK } from './info'
import { portfolioProjectList } from './home/portfolio'

// Navbar
export type NavbarRouteData = {
  [routeId: string]: {
    path: string
    name: string
    /** @default true */
    includeInSitemap?: boolean
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
  },
  blogGithubRepository: {
    path: BLOG_REPOSITORY_LINK,
    name: '블로그 레포지토리',
  },
} as const satisfies NavbarRouteData

// Footer links
export type FooterLink = {
  name: string
  url: string
}

export type FooterLinkData = {
  categoryName: string
  links: FooterLink[]
  openInExternal?: boolean
}[]

export const footerLinks: FooterLinkData = [
  {
    categoryName: '블로그',
    links: Object.values(internalRoutesList).map<FooterLink>((routeData) => {
      return {
        name: routeData.name,
        url: routeData.path,
      }
    }),
    openInExternal: false,
  },
  {
    categoryName: '외부 링크',
    links: Object.values(externalRoutesList).map<FooterLink>((routeData) => {
      return {
        name: routeData.name,
        url: routeData.path,
      }
    }),
    openInExternal: true,
  },
  {
    categoryName: '패밀리 사이트',
    links: portfolioProjectList
      .map<FooterLink | null>((projectData) => {
        const url = projectData.projectUrl
        if (!url) return null

        return {
          name: projectData.title,
          url,
        }
      })
      .filter((link) => link !== null),
    openInExternal: true,
  },
]
