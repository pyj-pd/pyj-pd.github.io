import type { Metadata } from 'next'

// Blog
export const BLOG_POST_TYPE = 'article',
  BLOG_TITLE_DESCRIPTION = '컴퓨터와 함께 한 경험을 공유하는 공간',
  BLOG_DESCRIPTION =
    'JavaScript/TypeScript를 다루며, 컴퓨터를 다루며 배우게 된 점, 느끼게 된 점을 나눕니다.'

// Home
export const HOMEPAGE_TITLE_DESCRIPTION = '프론트엔드 개발자',
  HOMEPAGE_DESCRIPTION =
    '안녕하세요. 저는 프론트엔드 개발에 집중 중인 개발자입니다.'

// Shared
export const SITE_NAME = 'pyj-pd',
  TITLE_SEPARATOR_DASH = ' — '

export const sharedOpenGraph: Metadata['openGraph'] = {
    siteName: SITE_NAME,
  },
  sharedMetadata: Metadata = {
    robots: 'all',
    openGraph: sharedOpenGraph,
  }
