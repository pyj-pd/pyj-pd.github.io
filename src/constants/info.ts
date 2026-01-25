import type { Metadata } from 'next'
import type { TechArticle } from 'schema-dts'

// URLs
export const GITHUB_PROFILE_LINK = 'https://github.com/pyj-pd',
  BLOG_REPOSITORY_LINK = 'https://github.com/pyj-pd/pyj-pd.github.io',
  SITE_URL = 'https://pyj-pd.github.io/',
  SITEMAP_URL = `${SITE_URL}sitemap.xml`

// Blog
export const BLOG_POST_TYPE = 'article',
  BLOG_TITLE_DESCRIPTION = '컴퓨터와 함께 한 경험을 공유하는 공간',
  BLOG_DESCRIPTION =
    'JavaScript/TypeScript를 다루며, 컴퓨터를 다루며 배우게 된 점, 느끼게 된 점을 나눕니다.'

// Blog post list page
export const BLOG_POST_LIST_PAGE_DESCRIPTION =
  '프론트엔드 개발, 컴퓨터, 프로그래밍 등 다양한 주제의 글들을 적습니다. 이곳에서 전체 글 목록을 확인해보세요.'

// Home
export const HOMEPAGE_TITLE_DESCRIPTION = 'Frontend Developer',
  HOMEPAGE_DESCRIPTION =
    '반갑습니다. 이곳은 프론트엔드 분야를 탐구하는 학생으로서의 발자취를 기록하는 공간입니다. 저의 글 하나가 여러분들에게 조금이나마 도움이 되었으면 합니다.'

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

export const SITE_LOGO_PATH = `${SITE_URL}apple-icon.png`

export const sharedOpenGraph: Metadata['openGraph'] = {
    siteName: SITE_NAME,
    images: [SITE_LOGO_PATH],
    type: 'website',
  },
  sharedMetadata: Metadata = {
    robots: 'index, follow',
    openGraph: sharedOpenGraph,
  }
