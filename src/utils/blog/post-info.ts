import type { PostDate } from '@/types/post'

const ZERO_PAD_STRING = '0',
  ZERO_PAD_LENGTH = 2

/**
 * Gets human-readable date string from post date.
 * @param date Post date
 * @returns Human-readable date string
 */
export const getPostDateString = (date: PostDate) => {
  const dateObject = new Date(date)

  return `${dateObject.getFullYear()}. ${(dateObject.getMonth() + 1).toString().padStart(ZERO_PAD_LENGTH, ZERO_PAD_STRING)}. ${dateObject.getDate().toString().padStart(ZERO_PAD_LENGTH, ZERO_PAD_STRING)}.`
}
