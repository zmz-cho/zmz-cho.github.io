import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import { useI18n } from '../i18n/context'
import { languageTags, languageNames } from '../i18n/core'

export function Search({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { t, locale, posts, href } = useI18n()
  const dialog = useRef<HTMLDialogElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const normalized = query.normalize('NFKC').trim().toLocaleLowerCase(locale)
  const results = posts.filter((post) =>
    [
      post.title,
      post.summary,
      t.categories[post.category],
      ...post.tags,
      ...post.content.map((block) =>
        block.type === 'list' ? block.items.join(' ') : block.text,
      ),
    ]
      .join(' ')
      .normalize('NFKC')
      .toLocaleLowerCase(locale)
      .includes(normalized),
  )
  useEffect(() => {
    if (open) {
      dialog.current?.showModal()
      input.current?.focus()
    } else dialog.current?.close()
  }, [open])
  return (
    <dialog
      ref={dialog}
      className="search-dialog"
      aria-labelledby="search-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="search-content">
        <div className="search-heading">
          <span className="eyebrow" id="search-title">
            {t.searchTitle}
          </span>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label={t.searchClose}
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="search-input-wrap">
          <Icon name="search" size={23} />
          <input
            ref={input}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchLabel}
          />
        </div>
        <div className="search-summary" role="status">
          {normalized ? t.searchCount(results.length) : t.searchStart}
        </div>
        <div className="search-results">
          {results.map((post) => (
            <a
              key={post.slug}
              href={href(`/post/${post.slug}`)}
              onClick={onClose}
              className="search-result"
            >
              <div>
                <span className="category-text">
                  {t.categories[post.category]}
                </span>
                <h3 lang={languageTags[post.language]}>{post.title}</h3>
                <p lang={languageTags[post.language]}>{post.summary}</p>
                {post.language !== locale && (
                  <span className="translation-label">
                    {t.fallbackNote(languageNames[post.language])}
                  </span>
                )}
              </div>
              <Icon name="arrow" />
            </a>
          ))}
          {results.length === 0 && (
            <div className="empty-state">
              <span>{t.searchEmpty}</span>
              <p>{t.searchHint}</p>
              <button
                className="text-link"
                onClick={() => {
                  setQuery('')
                  input.current?.focus()
                }}
              >
                {t.clearSearch}
                <Icon name="arrow" size={16} />
              </button>
            </div>
          )}
        </div>
        <div className="search-footer">
          <span>{t.searchFooter}</span>
          <span>
            <kbd>Esc</kbd> {t.close}
          </span>
        </div>
      </div>
    </dialog>
  )
}
