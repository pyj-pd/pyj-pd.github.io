import type { Metadata } from 'next'
import { SITE_URL } from './routes'

// Blog
export const BLOG_NAME = 'pyj-pd',
  BLOG_POST_TYPE = 'article',
  TITLE_SEPARATOR_DASH = ' — ',
  BLOG_TITLE_DESCRIPTION = '컴퓨터와 함께 한 경험을 공유하는 공간',
  BLOG_DESCRIPTION =
    'JavaScript/TypeScript를 다루며, 컴퓨터를 다루며 배우게 된 점, 느끼게 된 점을 나눕니다.'

// Home
export const HOMEPAGE_TITLE = "PYJ's Homepage",
  HOMEPAGE_TITLE_DESCRIPTION = 'Frontend Developer',
  HOMEPAGE_DESCRIPTION = 'Hello! I am a student learning frontend development.'

export const sharedOpenGraph = {
    siteName: BLOG_NAME,

    type: BLOG_POST_TYPE,

    images: [`${SITE_URL}/apple-icon.png`],
  } satisfies Metadata['openGraph'],
  sharedMetadata = {
    robots: 'all',
    openGraph: sharedOpenGraph,
  } satisfies Metadata
