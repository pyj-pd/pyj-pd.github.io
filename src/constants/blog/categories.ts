import { DEFAULT_LANGUAGE, locales } from '@/locales'

export type PostCategoryList = {
  [categoryId: string]: {
    name: string
    description?: string
  }
}

export const categoryList = {
  computer: {
    name: locales[DEFAULT_LANGUAGE].categories.computer.name,
    description: locales[DEFAULT_LANGUAGE].categories.computer.description,
  },
  programming: {
    name: locales[DEFAULT_LANGUAGE].categories.programming.name,
    description: locales[DEFAULT_LANGUAGE].categories.programming.description,
  },
  server: {
    name: locales[DEFAULT_LANGUAGE].categories.server.name,
  },
} as const satisfies PostCategoryList

export type CategoryId = keyof typeof categoryList
