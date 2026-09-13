import { useEffect, useMemo, useRef, useState } from 'react'
import { Asterisk, Icon } from './components/Icon'
import { GardenArt, PostArt } from './components/Artwork'
import { Search } from './components/Search'
import { categories } from './data/types'
import type { Category, ContentBlock, LocalizedPost } from './data/types'
import { site } from './data/site'
import { createI18n, I18nContext, useI18n } from './i18n/context'
import {
  languageNames,
  languageTags,
  locales,
  localeHref,
  parseRoute,
  preferredLocale,
  isLocale,
} from './i18n/core'
import './App.css'
import './i18n.css'

const navigation = [
  { path: '/', key: 'articles' },
  { path: '/notes', key: 'notes' },
  { path: '/archive', key: 'archive' },
  { path: '/about', key: 'about' },
] as const

function useRoute() {
  const [view, setView] = useState(() =>
    parseRoute(window.location.hash, preferredLocale()),
  )
  useEffect(() => {
    const update = () =>
      setView(parseRoute(window.location.hash, preferredLocale()))
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => {
    const canonical = localeHref(view.locale, view.path)
    if (window.location.hash !== canonical)
      window.history.replaceState(window.history.state, '', canonical)
    document.documentElement.lang = languageTags[view.locale]
    try {
      localStorage.setItem('unfinished-locale', view.locale)
    } catch {
      /* Language selection works without storage. */
    }
  }, [view])
  return view
}

function OriginalLabel({ language }: { language: LocalizedPost['language'] }) {
  const { locale, t } = useI18n()
  return language === locale ? null : (
    <span className="translation-label">
      {t.fallbackNote(languageNames[language])}
    </span>
  )
}

function PostMeta({ post }: { post: LocalizedPost }) {
  const { t, date } = useI18n()
  return (
    <div className="post-meta">
      <span className="category-text">{t.categories[post.category]}</span>
      <span className="meta-dot">·</span>
      <time dateTime={post.date}>{date(post.date)}</time>
      <span className="meta-dot reading-dot">·</span>
      <span className="reading-time">{t.readingTime(post.readingTime)}</span>
    </div>
  )
}

function Sidebar() {
  const { t, href } = useI18n()
  return (
    <aside className="sidebar" aria-label={t.profileLabel}>
      <section className="profile-card">
        <div className="profile-top">
          <span className="profile-avatar">
            z<span>✳</span>
          </span>
          <span className="tiny-label">A LITTLE ABOUT ME</span>
        </div>
        <h3>
          {t.hello(site.author)}
          <span className="hello-dot">.</span>
        </h3>
        <p>
          {t.profileFirst}
          <br />
          {t.profileSecond}
        </p>
        <a href={href('/about')} className="text-link">
          {t.moreAbout}
          <Icon name="arrow" size={16} />
        </a>
        <div className="profile-bottom">
          <span className="status-dot" />
          {t.personalSpace}
          <Asterisk />
        </div>
      </section>
      <section className="side-note">
        <div className="section-kicker">
          <span className="tiny-label">MARGIN NOTES</span>
          <span>↙</span>
        </div>
        <p>
          {t.marginFirst}
          <br />
          {t.marginSecond}
        </p>
        <a href={href('/notes')} className="text-link">
          {t.recentNotes}
          <Icon name="arrow" size={16} />
        </a>
      </section>
      <div className="garden-status">
        <span className="status-dot" />
        <span>{t.growing}</span>
        <span className="status-line" />
        <span>EST. 2026</span>
      </div>
    </aside>
  )
}

function Home() {
  const { t, href, posts, date } = useI18n()
  const [category, setCategory] = useState<Category>('all')
  const featured = posts.find((post) => post.featured)
  const visible = posts.filter(
    (post) =>
      (category !== 'all' || post.slug !== featured?.slug) &&
      (category === 'all' || post.category === category),
  )
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="small-line" />A PERSONAL SPACE FOR IDEAS
          </div>
          <h1 id="hero-title">
            {t.heroFirst}
            <br />
            {t.heroBefore}
            <span className="hero-emphasis">
              {t.heroAccent}
              <svg viewBox="0 0 190 18" fill="none" aria-hidden="true">
                <path
                  d="M3 12C54 1 112 1 185 7M26 16c47-7 87-8 130-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {t.heroAfter}
          </h1>
          <p>
            {t.heroLine1}
            <br />
            {t.heroLine2}
          </p>
          <a className="hero-link" href={href('/about')}>
            {t.heroAbout}
            <Icon name="arrowUp" size={17} />
          </a>
        </div>
        <GardenArt />
        <div className="hero-bottom">
          <span>{t.heroTopics}</span>
          <span>
            SCROLL TO EXPLORE <span className="down-arrow">↓</span>
          </span>
        </div>
      </section>
      <div className="home-layout">
        <div className="posts-column">
          {featured && (
            <section
              className="featured-section"
              aria-labelledby="featured-label"
            >
              <div className="section-kicker">
                <h2 id="featured-label">
                  <Asterisk />
                  {t.featured}
                </h2>
                <span className="tiny-label">EDITOR’S PICK / 01</span>
              </div>
              <a
                className="featured-card"
                href={href(`/post/${featured.slug}`)}
              >
                <div className="featured-visual">
                  <PostArt kind={featured.art} />
                  <span className="featured-art-label">IDEAS TAKE ROOT.</span>
                </div>
                <div className="featured-copy">
                  <div className="feature-category">
                    <span className="category-text">
                      {t.categories[featured.category]}
                    </span>
                    <span className="featured-badge">{t.pinned}</span>
                    {featured.sample && (
                      <span className="sample-label">{t.sample}</span>
                    )}
                  </div>
                  <h3 lang={languageTags[featured.language]}>
                    {featured.title}
                  </h3>
                  <p lang={languageTags[featured.language]}>
                    {featured.summary}
                  </p>
                  <OriginalLabel language={featured.language} />
                  <div className="featured-foot">
                    <time dateTime={featured.date}>{date(featured.date)}</time>
                    <span className="circle-arrow">
                      <Icon name="arrowUp" size={19} />
                    </span>
                  </div>
                </div>
              </a>
            </section>
          )}
          <section className="latest-section" aria-labelledby="latest-title">
            <div className="section-kicker latest-heading">
              <h2 id="latest-title">
                {t.latest}
                <span className="heading-count">
                  {String(posts.length).padStart(2, '0')}
                </span>
              </h2>
              <span className="tiny-label">THE JOURNAL</span>
            </div>
            <div className="filter-row" aria-label={t.filter}>
              {categories.map((item) => (
                <button
                  key={item}
                  className={`filter-button ${item === category ? 'is-active' : ''}`}
                  aria-pressed={item === category}
                  onClick={() => setCategory(item)}
                >
                  {t.categories[item]}
                  {item === 'all' && <span>{posts.length}</span>}
                </button>
              ))}
              {posts.some((post) => post.sample) && (
                <span className="sample-label">{t.sampleContent}</span>
              )}
            </div>
            <div className="post-list" aria-live="polite">
              {visible.length === 0 && (
                <div className="empty-state">
                  <span>{t.emptyTitle}</span>
                  <p>{t.emptyDescription}</p>
                  <button
                    className="text-link"
                    onClick={() => setCategory('all')}
                  >
                    {t.viewAll}
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
              )}
              {visible.map((post) => (
                <article className="post-row" key={post.slug}>
                  <a
                    className="post-row-link"
                    href={href(`/post/${post.slug}`)}
                  >
                    <div className="post-row-copy">
                      <PostMeta post={post} />
                      <h3 lang={languageTags[post.language]}>{post.title}</h3>
                      <p lang={languageTags[post.language]}>{post.summary}</p>
                      <OriginalLabel language={post.language} />
                      <div
                        className="post-tags"
                        lang={languageTags[post.language]}
                      >
                        {post.tags.map((tag) => (
                          <span key={tag}>#{tag}</span>
                        ))}
                      </div>
                    </div>
                    <PostArt kind={post.art} className="post-thumbnail" />
                    <Icon name="arrowUp" className="row-arrow" size={18} />
                  </a>
                </article>
              ))}
            </div>
            <a href={href('/archive')} className="archive-link">
              <span>{t.archiveTrail}</span>
              <span>
                {t.browseAll}
                <Icon name="arrow" size={17} />
              </span>
            </a>
          </section>
        </div>
        <Sidebar />
      </div>
      <section className="closing-note">
        <Asterisk />
        <p>
          {t.closingFirst}
          <em>{t.closingSecond}</em>
        </p>
        <span className="tiny-label">STAY CURIOUS. KEEP MAKING.</span>
      </section>
    </>
  )
}

function PageIntro({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <header className="page-intro">
      <span className="eyebrow">
        <span className="small-line" />
        {label}
      </span>
      <h1>
        {title}
        <span className="accent-dot">.</span>
      </h1>
      <p>{description}</p>
    </header>
  )
}

function Notes() {
  const { t, notes, date } = useI18n()
  return (
    <div className="inner-page">
      <PageIntro
        label="SMALL THINGS, BIG FEELINGS"
        title={t.notesTitle}
        description={t.notesDescription}
      />
      <div className="notes-layout">
        <div className="notes-list">
          {notes.map((note) => (
            <article className="note-card" key={note.id}>
              <div className="note-date">
                <span className="status-dot" />
                <time dateTime={note.date}>{date(note.date)}</time>
                {note.sample && (
                  <span className="sample-label">{t.sampleNote}</span>
                )}
              </div>
              <p lang={languageTags[note.language]}>{note.text}</p>
              <OriginalLabel language={note.language} />
              <span className="note-tag" lang={languageTags[note.language]}>
                #{note.tag}
              </span>
              <Asterisk className="note-star" />
            </article>
          ))}
        </div>
        <aside className="notes-aside">
          <span className="handwritten">a note to remember.</span>
          <div className="paper-note">
            <span className="tiny-label">NOTE TO SELF</span>
            <p>
              {t.paperFirst}
              <br />
              {t.paperSecond}
            </p>
            <svg
              width="53"
              height="42"
              viewBox="0 0 53 42"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 8c12 23 31 28 44 5m-13 2 14-5-1 14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </aside>
      </div>
    </div>
  )
}

function Archive() {
  const { t, posts, date, href } = useI18n()
  const years = [...new Set(posts.map((post) => post.date.slice(0, 4)))]
  return (
    <div className="inner-page">
      <PageIntro
        label="AN INDEX OF CURIOSITY"
        title={t.archiveTitle}
        description={t.archiveDescription(posts.length)}
      />
      <div className="archive-summary">
        <span>
          <Icon name="book" size={18} />
          {t.articleCount(posts.length)}
        </span>
        <span>{t.categoryCount(categories.length - 1)}</span>
        {posts.some((post) => post.sample) && (
          <span className="sample-label">{t.sampleContent}</span>
        )}
      </div>
      {years.map((year) => (
        <section className="archive-year" key={year}>
          <h2>
            {year}
            <span>
              {String(
                posts.filter((post) => post.date.startsWith(year)).length,
              ).padStart(2, '0')}{' '}
              ENTRIES
            </span>
          </h2>
          <div>
            {posts
              .filter((post) => post.date.startsWith(year))
              .map((post) => (
                <a
                  href={href(`/post/${post.slug}`)}
                  className="archive-row"
                  key={post.slug}
                >
                  <time dateTime={post.date}>{date(post.date, true)}</time>
                  <div className="archive-title">
                    <h3 lang={languageTags[post.language]}>{post.title}</h3>
                    <OriginalLabel language={post.language} />
                  </div>
                  <span className="category-text">
                    {t.categories[post.category]}
                  </span>
                  <Icon name="arrowUp" size={17} />
                </a>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function About() {
  const { t } = useI18n()
  return (
    <div className="inner-page about-page">
      <PageIntro
        label="THE PERSON BEHIND THE WORDS"
        title={t.aboutTitle}
        description={t.aboutDescription}
      />
      <div className="about-layout">
        <div className="about-copy">
          <span className="about-avatar">
            z<Asterisk />
          </span>
          <h2>
            {t.aboutFirst(site.author)}
            <br />
            {t.aboutSecond}
          </h2>
          <p>
            {t.description} {t.aboutParagraph}
          </p>
          <p>{t.aboutName}</p>
          <div className="about-interests">
            {t.interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
          <a
            className="primary-link"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={18} />
            {t.findGithub}
            <Icon name="arrowUp" size={16} />
          </a>
        </div>
        <div className="about-art">
          <GardenArt />
          <span className="handwritten">always a work in progress.</span>
        </div>
      </div>
      <div className="about-colophon">
        <div>
          <span className="tiny-label">ABOUT THIS SPACE</span>
          <h3>{t.colophonTitle}</h3>
        </div>
        <p>
          {t.colophonFirst}
          <br />
          {t.colophonSecond}
        </p>
      </div>
    </div>
  )
}

function CodeBlock({
  block,
}: {
  block: Extract<ContentBlock, { type: 'code' }>
}) {
  const { t } = useI18n()
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(block.text)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus('idle'), 2500)
  }
  return (
    <div className="code-block">
      <div className="code-heading">
        <span>{block.language}</span>
        <button onClick={copy} aria-label={t.copyCode}>
          <Icon name={status === 'copied' ? 'check' : 'copy'} size={15} />
          <span aria-live="polite">
            {status === 'copied'
              ? t.copied
              : status === 'failed'
                ? t.copyFailed
                : t.copy}
          </span>
        </button>
      </div>
      <pre>
        <code>{block.text}</code>
      </pre>
    </div>
  )
}

function Article({ post }: { post: LocalizedPost }) {
  const { t, posts, locale, href } = useI18n()
  const headings = post.content.filter((block) => block.type === 'heading')
  const next =
    posts[
      (posts.findIndex((item) => item.slug === post.slug) + 1) % posts.length
    ]
  return (
    <div className="article-page">
      <a className="back-link" href={href()}>
        <Icon name="arrow" size={17} />
        {t.backArticles}
      </a>
      <header className="article-header">
        <PostMeta post={post} />
        <h1 lang={languageTags[post.language]}>{post.title}</h1>
        <p className="article-summary" lang={languageTags[post.language]}>
          {post.summary}
        </p>
        <div className="article-byline">
          <span className="mini-avatar">z</span>
          <span>{site.author}</span>
          <span className="byline-divider" />
          <span>{t.byline}</span>
        </div>
      </header>
      <div className="article-layout">
        <article className="prose" aria-label={t.articleBody}>
          {post.language !== locale && (
            <div className="translation-notice">
              <p>{t.fallback(languageNames[post.language])}</p>
              <a href={localeHref(post.language, `/post/${post.slug}`)}>
                {t.original}
                <Icon name="arrow" size={16} />
              </a>
            </div>
          )}
          {post.sample && (
            <div className="sample-notice">
              <Icon name="book" size={18} />
              <span>{t.sampleNotice}</span>
            </div>
          )}
          <div className="article-content" lang={languageTags[post.language]}>
            {post.content.map((block, index) => {
              switch (block.type) {
                case 'heading':
                  return (
                    <h2 id={block.id} key={block.id}>
                      {block.text}
                    </h2>
                  )
                case 'paragraph':
                  return <p key={index}>{block.text}</p>
                case 'quote':
                  return (
                    <blockquote key={index}>
                      <p>{block.text}</p>
                    </blockquote>
                  )
                case 'list':
                  return (
                    <ul key={index}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                case 'code':
                  return <CodeBlock key={index} block={block} />
              }
            })}
          </div>
          <div className="article-end">
            <Asterisk />
            <span>{t.articleEnd}</span>
          </div>
          <div className="article-tags" lang={languageTags[post.language]}>
            {post.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          {next && next.slug !== post.slug && (
            <a href={href(`/post/${next.slug}`)} className="next-post">
              <span className="tiny-label">{t.upNext}</span>
              <h3 lang={languageTags[next.language]}>
                {next.title}
                <Icon name="arrow" />
              </h3>
            </a>
          )}
        </article>
        <aside className="article-toc">
          <span className="tiny-label">{t.toc}</span>
          <nav aria-label={t.tocLabel} lang={languageTags[post.language]}>
            {headings.map((heading, index) => (
              <button
                key={heading.id}
                onClick={() => {
                  const target = document.getElementById(heading.id)
                  target?.scrollIntoView({
                    behavior: window.matchMedia(
                      '(prefers-reduced-motion: reduce)',
                    ).matches
                      ? 'instant'
                      : 'smooth',
                    block: 'start',
                  })
                  target?.setAttribute('tabindex', '-1')
                  target?.focus({ preventScroll: true })
                }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {heading.text}
              </button>
            ))}
          </nav>
          <div className="toc-note">
            {t.tocFirst}
            <br />
            {t.tocSecond}
          </div>
        </aside>
      </div>
    </div>
  )
}

function NotFound() {
  const { t, href } = useI18n()
  return (
    <div className="not-found">
      <span className="eyebrow">404 / A PATH NOT YET PLANTED</span>
      <Asterisk />
      <h1>{t.notFoundTitle}</h1>
      <p>{t.notFoundDescription}</p>
      <a className="primary-link" href={href()}>
        {t.backHome}
        <Icon name="arrow" size={17} />
      </a>
    </div>
  )
}

function AppShell({ route }: { route: string }) {
  const { locale, t, posts, href } = useI18n()
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  )
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const main = useRef<HTMLElement>(null)
  const previousRoute = useRef(route)
  const post = route.startsWith('/post/')
    ? posts.find((item) => item.slug === route.slice(6))
    : undefined
  const activeNav = route.startsWith('/post/') ? '/' : route
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#1d2421' : '#f8f7f3')
    try {
      localStorage.setItem('unfinished-theme', theme)
    } catch {
      /* Theme works without storage. */
    }
  }, [theme])
  useEffect(() => {
    const nav = navigation.find((item) => item.path === route)
    const title = post?.title || (nav ? t.nav[nav.key] : t.notFound)
    document.title =
      route === '/'
        ? `${site.name} · ${t.homeTitle(site.author)}`
        : `${title} · ${site.name}`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', post?.summary || t.description)
    if (previousRoute.current !== route) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      main.current?.focus({ preventScroll: true })
      previousRoute.current = route
    }
  }, [route, post, t])
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen((open) => !open)
      }
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault()
          main.current?.focus()
        }}
      >
        {t.skip}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a
            href={href()}
            className="brand"
            aria-label={`${site.name} · ${t.backHome}`}
            onClick={() => setMenuOpen(false)}
          >
            <Asterisk />
            <span className="brand-name">
              {site.name}
              <span>{t.tagline}</span>
            </span>
          </a>
          <div className="header-right">
            <nav className="desktop-nav" aria-label={t.mainNav}>
              {navigation.map((item) => (
                <a
                  key={item.path}
                  href={href(item.path)}
                  aria-current={activeNav === item.path ? 'page' : undefined}
                >
                  {t.nav[item.key]}
                </a>
              ))}
            </nav>
            <div className="header-tools">
              <button
                className="search-trigger"
                onClick={() => setSearchOpen(true)}
                aria-label={t.searchLabel}
              >
                <Icon name="search" size={18} />
                <kbd>Ctrl K</kbd>
              </button>
              <label className="language-picker">
                <span className="language-symbol" aria-hidden="true">
                  文
                </span>
                <select
                  aria-label={t.language}
                  value={locale}
                  onChange={(event) => {
                    const selected = event.target.value
                    if (isLocale(selected)) {
                      setMenuOpen(false)
                      window.location.hash = localeHref(selected, route)
                    }
                  }}
                >
                  {locales.map((language) => (
                    <option
                      key={language}
                      value={language}
                      lang={languageTags[language]}
                    >
                      {languageNames[language]}
                    </option>
                  ))}
                </select>
              </label>
              <span className="tool-divider" />
              <button
                className="icon-button theme-toggle"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label={theme === 'light' ? t.dark : t.light}
              >
                <Icon name={theme === 'light' ? 'sun' : 'moon'} size={20} />
              </button>
              <button
                className="icon-button mobile-menu-trigger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                aria-label={menuOpen ? t.closeMenu : t.openMenu}
              >
                <Icon name={menuOpen ? 'close' : 'menu'} />
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label={t.mobileNav}
          >
            {navigation.map((item) => (
              <a
                href={href(item.path)}
                key={item.path}
                aria-current={activeNav === item.path ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[item.key]}
                <Icon name="arrowUp" size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="main-content" ref={main} tabIndex={-1} className="site-main">
        {route === '/' ? (
          <Home />
        ) : route === '/notes' ? (
          <Notes />
        ) : route === '/archive' ? (
          <Archive />
        ) : route === '/about' ? (
          <About />
        ) : post ? (
          <Article key={post.slug} post={post} />
        ) : (
          <NotFound />
        )}
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Asterisk />
            <span>
              {site.name}
              <span className="footer-divider">/</span>
              <span className="tiny-label">{site.englishName}</span>
            </span>
          </div>
          <p>
            © {new Date().getFullYear()} {site.author}
            <span>{t.footer}</span>
          </p>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label={t.github}
          >
            <Icon name="github" size={17} />
            <span>GitHub</span>
            <Icon name="arrowUp" size={14} />
          </a>
        </div>
      </footer>
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

function App() {
  const view = useRoute()
  const value = useMemo(() => createI18n(view.locale), [view.locale])
  return (
    <I18nContext.Provider value={value}>
      <AppShell route={view.path} />
    </I18nContext.Provider>
  )
}

export default App
