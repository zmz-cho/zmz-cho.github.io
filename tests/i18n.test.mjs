import assert from 'node:assert/strict'
import test from 'node:test'
import { chooseLocale, formatDate, localeHref, parseRoute, locales } from '../src/i18n/core.ts'
import { getNotes, getPosts, localizePost } from '../src/data/localized.ts'
import { posts } from '../src/data/posts.ts'

test('saved preference takes priority; regional browser locales are recognized', () => {
  assert.equal(chooseLocale('en', ['ja-JP']), 'en')
  assert.equal(chooseLocale('invalid', ['fr-FR', 'ja-JP', 'en-US']), 'ja')
  assert.equal(chooseLocale(null, ['zh-Hant-TW']), 'zh')
  assert.equal(chooseLocale(null, ['de-DE']), 'zh')
})

test('a shared URL overrides preferences and preserves the full article path', () => {
  assert.deepEqual(parseRoute('#/en/post/code-for-future-me', 'ja'), { locale: 'en', path: '/post/code-for-future-me' })
  assert.equal(localeHref('ja', parseRoute('#/en/post/code-for-future-me', 'zh').path), '#/ja/post/code-for-future-me')
})

test('legacy links, locale roots and trailing slashes normalize without losing routes', () => {
  assert.deepEqual(parseRoute('#/post/a-digital-garden', 'zh'), { locale: 'zh', path: '/post/a-digital-garden' })
  assert.deepEqual(parseRoute('#/', 'en'), { locale: 'en', path: '/' })
  assert.deepEqual(parseRoute('#/ja', 'zh'), { locale: 'ja', path: '/' })
  assert.deepEqual(parseRoute('#/ja/archive/', 'zh'), { locale: 'ja', path: '/archive' })
  assert.equal(localeHref('ja'), '#/ja/')
})

test('unknown language prefixes and unknown pages remain eligible for the 404 page', () => {
  assert.deepEqual(parseRoute('#/fr/post/missing', 'en'), { locale: 'en', path: '/fr/post/missing' })
  assert.deepEqual(parseRoute('#/ja/missing', 'en'), { locale: 'ja', path: '/missing' })
})

test('date-only values keep the same calendar day in each locale', () => {
  assert.equal(formatDate('2026-09-12', 'en'), 'Sep 12, 2026')
  assert.equal(formatDate('2026-09-12', 'ja'), '2026/9/12')
  assert.equal(formatDate('2026-09-12', 'zh'), '2026/9/12')
  assert.equal(formatDate('2026-09-12', 'en', true), 'Sep 12')
})

for (const locale of locales) {
  test(`${locale}: all sample articles and notes have complete translations`, () => {
    const localized = getPosts(locale)
    assert.equal(localized.length, posts.length)
    for (const post of localized) {
      const source = posts.find((entry) => entry.slug === post.slug)
      assert.equal(post.language, locale)
      assert.ok(post.title && post.summary && post.tags.length)
      assert.equal(post.category, source.category)
      assert.deepEqual(post.content.map((block) => block.type), source.content.map((block) => block.type))
      assert.deepEqual(post.content.filter((block) => block.type === 'heading').map((block) => block.id), source.content.filter((block) => block.type === 'heading').map((block) => block.id))
      assert.deepEqual(post.content.filter((block) => block.type === 'code'), source.content.filter((block) => block.type === 'code'))
      if (locale !== 'zh') assert.notEqual(post.title, source.title)
    }
    for (const note of getNotes(locale)) { assert.equal(note.language, locale); assert.ok(note.text && note.tag) }
  })
}

test('missing translations preserve the source and expose its language honestly', () => {
  const source = { ...posts[0], slug: 'not-translated-yet' }
  const fallback = localizePost(source, 'ja')
  assert.equal(fallback.language, 'zh')
  assert.equal(fallback.title, source.title)
  assert.deepEqual(fallback.content, source.content)
  assert.equal(localizePost({ ...source, sourceLocale: 'en' }, 'ja').language, 'en')
})

test('a translated article keeps identity and shared metadata', () => {
  const source = posts[0]
  const translated = localizePost(source, 'en')
  assert.equal(translated.slug, source.slug)
  assert.equal(translated.date, source.date)
  assert.equal(translated.art, source.art)
  assert.equal(translated.featured, source.featured)
  assert.notEqual(translated.title, source.title)
})
