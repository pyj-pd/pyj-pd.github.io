import { BLOG_NAME, TITLE_SEPARATOR_DASH } from '@/constants/metadata'

export const getPageTitleName = (title?: string) => {
  if (title === undefined) return BLOG_NAME
  else return `${title}${TITLE_SEPARATOR_DASH}${BLOG_NAME}`
}
