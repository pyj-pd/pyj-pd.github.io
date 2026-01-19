import type { locales } from '@/locales'
import type { koreanLocale } from '@/locales/ko'

export type LocaleData = typeof koreanLocale

export type LocaleId = keyof typeof locales
