import type { LocaleData, LocaleId } from '@/types/locales'
import { koreanLocale } from './ko'

export const locales = {
  ko: koreanLocale,
} as const satisfies Record<string, LocaleData>

export const LANGUAGE_LIST = Object.keys(locales) as Array<LocaleId>

export const DEFAULT_LANGUAGE: LocaleId = 'ko'
