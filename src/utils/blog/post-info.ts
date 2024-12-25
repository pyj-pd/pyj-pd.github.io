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

  return `${dateObject.getFullYear()}년 ${(dateObject.getMonth() + 1).toString().padStart(ZERO_PAD_LENGTH, ZERO_PAD_STRING)}월 ${dateObject.getDate().toString().padStart(ZERO_PAD_LENGTH, ZERO_PAD_STRING)}일`
}

export const getPostReadingTimeString = (minutes: number): string => {
  const ceiledMinutes = Math.ceil(minutes),
    flooredMinutes = ceiledMinutes - 1

  if (flooredMinutes < 1) return `${ceiledMinutes}분`
  else return `${flooredMinutes}~${ceiledMinutes}분`
}
