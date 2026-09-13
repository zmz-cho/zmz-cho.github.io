import { useEffect, useRef, useState } from 'react'
import { posts } from '../data/posts'
import { Icon } from './Icon'

export function Search({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const normalized = query.trim().toLocaleLowerCase()
  const results = posts.filter((post) =>
    [
      post.title,
      post.summary,
      post.category,
      ...post.tags,
      ...post.content.map((block) =>
        block.type === 'list' ? block.items.join(' ') : block.text,
      ),
    ]
      .join(' ')
      .toLocaleLowerCase()
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
            在花园里找一找
          </span>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="关闭搜索"
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
            placeholder="搜索文章、标签或一句话…"
            aria-label="搜索文章"
          />
        </div>
        <div className="search-summary" role="status">
          {normalized ? `找到 ${results.length} 篇文章` : '从这些文章开始'}
        </div>
        <div className="search-results">
          {results.map((post) => (
            <a
              key={post.slug}
              href={`#/post/${post.slug}`}
              onClick={onClose}
              className="search-result"
            >
              <div>
                <span className="category-text">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </div>
              <Icon name="arrow" />
            </a>
          ))}
          {results.length === 0 && (
            <div className="empty-state">
              <span>还没有找到这个想法。</span>
              <p>试试「设计」「代码」或「写作」？</p>
              <button
                className="text-link"
                onClick={() => {
                  setQuery('')
                  input.current?.focus()
                }}
              >
                清空搜索 <Icon name="arrow" size={16} />
              </button>
            </div>
          )}
        </div>
        <div className="search-footer">
          <span>让好奇心带路。</span>
          <span>
            <kbd>Esc</kbd> 关闭
          </span>
        </div>
      </div>
    </dialog>
  )
}
