export const locales = ['zh', 'en', 'ja'] as const
export type Locale = (typeof locales)[number]
export const languageNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
}
export const languageTags: Record<Locale, string> = {
  zh: 'zh-CN',
  en: 'en',
  ja: 'ja',
}

export function isLocale(value: unknown): value is Locale {
  return locales.some((locale) => locale === value)
}

export function chooseLocale(
  saved: unknown,
  languages: readonly string[],
): Locale {
  if (isLocale(saved)) return saved
  for (const language of languages) {
    const base = language.toLowerCase().split('-')[0]
    if (isLocale(base)) return base
  }
  return 'zh'
}

export function preferredLocale(): Locale {
  let saved: string | null = null
  try {
    saved = localStorage.getItem('unfinished-locale')
  } catch {
    /* Storage is optional. */
  }
  return chooseLocale(saved, navigator.languages ?? [navigator.language])
}

export function localeHref(locale: Locale, path = '/') {
  return `#/${locale}${path.startsWith('/') ? path : `/${path}`}`
}

export function parseRoute(hash: string, fallback: Locale) {
  const raw = hash.replace(/^#/, '') || '/'
  const normalized = raw.startsWith('/') ? raw : `/${raw}`
  const segments = normalized.slice(1).split('/')
  const explicit = isLocale(segments[0])
  const locale: Locale = explicit ? (segments[0] as Locale) : fallback
  const path = explicit ? `/${segments.slice(1).join('/')}` : normalized
  return { locale, path: path.length > 1 ? path.replace(/\/+$/, '') : path }
}

export function formatDate(date: string, locale: Locale, short = false) {
  return new Intl.DateTimeFormat(languageTags[locale], {
    ...(short ? {} : { year: 'numeric' as const }),
    month: locale === 'en' ? 'short' : 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}
