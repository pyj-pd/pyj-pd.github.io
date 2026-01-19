export const LANGUAGE_LIST = ['ko', 'en'] as const

export type Language = (typeof LANGUAGE_LIST)[number]
export const DEFAULT_LANGUAGE: Language = 'ko'
