export const GITHUB_PROFILE_LINK = 'https://github.com/pyj-pd'

// Navbar
export type NavbarRouteData = {
  path: string
  name: string
  openInNewTab?: boolean
}

export const navbarRouteList: NavbarRouteData[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/techstacks',
    name: 'Tech Stacks',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/posts',
    name: 'Blog',
  },

  // External links
  {
    path: GITHUB_PROFILE_LINK,
    name: 'GitHub',
    openInNewTab: true,
  },
]
