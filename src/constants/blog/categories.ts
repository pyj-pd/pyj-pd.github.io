export type PostCategoryList = {
  [categoryId: string]: {
    name: string
    description?: string
  }
}

export const categoryList = {
  computer: {
    name: '컴퓨터',
    description: '컴퓨터를 사용하며 공유하고 싶었던 경험들을 나눕니다.',
  },
  programming: {
    name: '프로그래밍',
    description: '프로그래밍 관련 팁, 기술, 경험 등을 공유합니다.',
  },
  seo: {
    name: 'SEO',
    description: '검색 엔진 최적화(SEO) 관련 팁과 정보를 공유합니다.',
  },
  server: {
    name: '서버',
  },
} as const satisfies PostCategoryList

export type CategoryId = keyof typeof categoryList
