import { posts, notes } from './posts.ts'
import { enPosts, enNotes } from './translations/en.ts'
import { jaPosts, jaNotes } from './translations/ja.ts'
import type { Locale } from '../i18n/core.ts'
import type {
  LocalizedNote,
  LocalizedPost,
  Note,
  NoteTranslations,
  Post,
  PostTranslations,
} from './types.ts'

export const postTranslations: PostTranslations = { en: enPosts, ja: jaPosts }
export const noteTranslations: NoteTranslations = { en: enNotes, ja: jaNotes }

export function localizePost(
  post: Post,
  locale: Locale,
  translations = postTranslations,
): LocalizedPost {
  const source = post.sourceLocale ?? 'zh'
  const translation =
    locale === source ? undefined : translations[locale]?.[post.slug]
  return { ...post, ...translation, language: translation ? locale : source }
}

export function localizeNote(
  note: Note,
  locale: Locale,
  translations = noteTranslations,
): LocalizedNote {
  const source = note.sourceLocale ?? 'zh'
  const translation =
    locale === source ? undefined : translations[locale]?.[note.id]
  return { ...note, ...translation, language: translation ? locale : source }
}

export const getPosts = (locale: Locale) =>
  posts.map((post) => localizePost(post, locale))
export const getNotes = (locale: Locale) =>
  notes.map((note) => localizeNote(note, locale))
