import type { Metadata } from 'next'
import { SITE_URL } from './project'

// Blog
export const BLOG_POST_TYPE = 'article',
  BLOG_TITLE_DESCRIPTION = '컴퓨터와 함께 한 경험을 공유하는 공간',
  BLOG_DESCRIPTION =
    'JavaScript/TypeScript를 다루며, 컴퓨터를 다루며 배우게 된 점, 느끼게 된 점을 나눕니다.'

// Home
export const HOMEPAGE_TITLE_DESCRIPTION = 'Frontend Developer',
  HOMEPAGE_DESCRIPTION =
    '반갑습니다. 이곳은 프론트엔드 분야를 탐구하는 학생으로서의 발자취를 기록하는 공간입니다. 저의 글 하나가 여러분들에게 조금이나마 도움이 되었으면 합니다.'

// Shared
export const SITE_NAME = 'pyj-pd',
  TITLE_SEPARATOR_DASH = ' — '

export const SITE_LOGO_PATH = `${SITE_URL}/apple-icon.png`

export const sharedOpenGraph: Metadata['openGraph'] = {
    siteName: SITE_NAME,
    images: [SITE_LOGO_PATH],
  },
  sharedMetadata: Metadata = {
    robots: 'all',
    openGraph: sharedOpenGraph,
  }
