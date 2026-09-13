import { createContext, useContext } from 'react'
import { formatDate, localeHref } from './core.ts'
import type { Locale } from './core.ts'
import { messages } from './messages.ts'
import { getNotes, getPosts } from '../data/localized.ts'

export function createI18n(locale: Locale) {
  return {
    locale,
    t: messages[locale],
    posts: getPosts(locale),
    notes: getNotes(locale),
    href: (path = '/') => localeHref(locale, path),
    date: (value: string, short = false) => formatDate(value, locale, short),
  }
}

export const I18nContext = createContext<ReturnType<typeof createI18n> | null>(
  null,
)
export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n requires I18nContext.Provider')
  return value
}
