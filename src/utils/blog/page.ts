import { SITE_NAME, TITLE_SEPARATOR_DASH } from '@/constants/metadata'

export const getPageTitleName = (title?: string) => {
  if (title === undefined) return SITE_NAME
  else return `${SITE_NAME}${TITLE_SEPARATOR_DASH}${title}`
}
