import type { PostDate } from '@/types/post'

/**
 * Gets human-readable date string from post date.
 * @param date Post date
 * @returns Human-readable date string
 */
export const getPostDateString = (date: PostDate) => {
  const dateObject = new Date(date)

  return `${dateObject.getFullYear()}년 ${dateObject.getMonth() + 1}월 ${dateObject.getDate()}일`
}
