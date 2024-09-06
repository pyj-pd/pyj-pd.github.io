export type PostCategory = string

export type PostData = {
  slug: string

  categories: PostCategory[]
  path: string

  title: string
  date?: string
}
