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
    description:
      '저와 같은 삽질을 하지 마시길 바라며, 또는 한 번쯤 읽어볼 만한 주제들을 다룹니다.',
  },
} as const satisfies PostCategoryList

export type CategoryId = keyof typeof categoryList
