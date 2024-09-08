export type PostCategory = string

export type PostData = {
  slug: string

  categories: PostCategory[]
  path: string
}

export type PostMetadata = {
  title: string
  date?: string
}

export type PostContentData = PostData & {
  content: string
}
