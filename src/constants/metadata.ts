import type { Metadata } from 'next'
import { SITE_URL } from './project'
import type { TechArticle } from 'schema-dts'
import { DEFAULT_LANGUAGE, locales } from '@/locales'

// Blog
export const BLOG_POST_TYPE = 'article',
  BLOG_TITLE_DESCRIPTION = locales[DEFAULT_LANGUAGE].metadata.blogTitle,
  BLOG_DESCRIPTION = locales[DEFAULT_LANGUAGE].metadata.blogDescription

// Home
export const HOMEPAGE_TITLE_DESCRIPTION =
    locales[DEFAULT_LANGUAGE].metadata.homepageTitle,
  HOMEPAGE_DESCRIPTION = locales[DEFAULT_LANGUAGE].metadata.homepageDescription

// Shared
export const SITE_NAME = 'pyj-pd',
  TITLE_SEPARATOR_DASH = ' — '

// JSON-LD
export const BLOG_AUTHORS: TechArticle['author'] = [
  {
    '@type': 'Person',
    name: 'PYJ',
    url: SITE_URL,
  },
]

export const SITE_LOGO_PATH = `${SITE_URL}/apple-icon.png`

export const sharedOpenGraph: Metadata['openGraph'] = {
    siteName: SITE_NAME,
    images: [SITE_LOGO_PATH],
    type: 'website',
  },
  sharedMetadata: Metadata = {
    robots: 'all',
    openGraph: sharedOpenGraph,
  }
