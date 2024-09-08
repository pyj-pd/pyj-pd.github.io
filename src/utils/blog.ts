const BLOG_NAME = 'pyj-pd',
  TITLE_SEPARATOR = ' | '

export const getTitleName = (title?: string) => {
  if (title === undefined) return BLOG_NAME
  else return `${title}${TITLE_SEPARATOR}${BLOG_NAME}`
}
