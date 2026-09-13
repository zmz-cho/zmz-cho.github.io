import type { Locale } from '../i18n/core.ts'

export const categories = ['all', 'tech', 'design', 'life', 'thoughts'] as const
export type Category = (typeof categories)[number]
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string; id: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; language: string; text: string }

export interface PostTranslation {
  title: string
  summary: string
  tags: string[]
  content: ContentBlock[]
  readingTime?: number
}

export interface Post extends PostTranslation {
  slug: string
  date: string
  category: Exclude<Category, 'all'>
  readingTime: number
  art: 'garden' | 'space' | 'code' | 'walk' | 'notes'
  featured?: boolean
  sample?: boolean
  sourceLocale?: Locale
}

export interface Note {
  id: string
  date: string
  text: string
  tag: string
  sample?: boolean
  sourceLocale?: Locale
}

export type PostTranslations = Partial<
  Record<Locale, Record<string, PostTranslation>>
>
export type NoteTranslations = Partial<
  Record<Locale, Record<string, Pick<Note, 'text' | 'tag'>>>
>
export type LocalizedPost = Post & { language: Locale }
export type LocalizedNote = Note & { language: Locale }
