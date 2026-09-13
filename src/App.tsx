import { useEffect, useRef, useState } from 'react'
import { Asterisk, Icon } from './components/Icon'
import { GardenArt, PostArt } from './components/Artwork'
import { Search } from './components/Search'
import { categories, formatDate, notes, posts } from './data/posts'
import type { Category, ContentBlock, Post } from './data/posts'
import { site } from './data/site'
import './App.css'

const navigation = [
  { href: '#/', label: '文章' },
  { href: '#/notes', label: '碎片' },
  { href: '#/archive', label: '归档' },
  { href: '#/about', label: '关于' },
]

function useRoute() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || '/')
  useEffect(() => {
    const update = () => setRoute(window.location.hash.slice(1) || '/')
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  return route
}

function PostMeta({ post }: { post: Post }) {
  return (
    <div className="post-meta">
      <span className="category-text">{post.category}</span>
      <span className="meta-dot">·</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span className="meta-dot reading-dot">·</span>
      <span className="reading-time">{post.readingTime} 分钟阅读</span>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="博客简介">
      <section className="profile-card">
        <div className="profile-top">
          <span className="profile-avatar">
            z<span>✳</span>
          </span>
          <span className="tiny-label">A LITTLE ABOUT ME</span>
        </div>
        <h3>
          你好，我是 {site.author}
          <span className="hello-dot">.</span>
        </h3>
        <p>
          一个保持好奇的人。
          <br />
          在这里，记录探索，也收集日常。
        </p>
        <a href="#/about" className="text-link">
          更多关于我 <Icon name="arrow" size={16} />
        </a>
        <div className="profile-bottom">
          <span className="status-dot" />
          一个慢慢生长的个人空间
          <Asterisk />
        </div>
      </section>
      <section className="side-note">
        <div className="section-kicker">
          <span className="tiny-label">MARGIN NOTES</span>
          <span>↙</span>
        </div>
        <p>
          “保持记录，
          <br />
          是对日常的一点偏爱。”
        </p>
        <a href="#/notes" className="text-link">
          看看最近的碎片 <Icon name="arrow" size={16} />
        </a>
      </section>
      <div className="garden-status">
        <span className="status-dot" />
        <span>持续生长中</span>
        <span className="status-line" />
        <span>EST. 2026</span>
      </div>
    </aside>
  )
}

function Home() {
  const [category, setCategory] = useState<Category>('全部')
  const featured = posts.find((post) => post.featured)
  const visible = posts.filter(
    (post) =>
      (category !== '全部' || post.slug !== featured?.slug) &&
      (category === '全部' || post.category === category),
  )
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="small-line" />A PERSONAL SPACE FOR IDEAS
          </div>
          <h1 id="hero-title">
            在好奇心里，
            <br />
            慢慢
            <span className="hero-emphasis">
              生长
              <svg viewBox="0 0 190 18" fill="none" aria-hidden="true">
                <path
                  d="M3 12C54 1 112 1 185 7M26 16c47-7 87-8 130-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            。
          </h1>
          <p>
            写代码，也写生活。
            <br />
            把沿途的思考，种在这一小片自留地。
          </p>
          <a className="hero-link" href="#/about">
            关于这片小天地 <Icon name="arrowUp" size={17} />
          </a>
        </div>
        <GardenArt />
        <div className="hero-bottom">
          <span>随笔 / 技术 / 生活 / 一切有趣的事</span>
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
                  精选一篇
                </h2>
                <span className="tiny-label">EDITOR’S PICK / 01</span>
              </div>
              <a className="featured-card" href={`#/post/${featured.slug}`}>
                <div className="featured-visual">
                  <PostArt kind={featured.art} />
                  <span className="featured-art-label">IDEAS TAKE ROOT.</span>
                </div>
                <div className="featured-copy">
                  <div className="feature-category">
                    <span className="category-text">{featured.category}</span>
                    <span className="featured-badge">置顶</span>
                    {featured.sample && (
                      <span className="sample-label">示例</span>
                    )}
                  </div>
                  <h3>{featured.title}</h3>
                  <p>{featured.summary}</p>
                  <div className="featured-foot">
                    <time dateTime={featured.date}>
                      {formatDate(featured.date)}
                    </time>
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
                最近的文字
                <span className="heading-count">
                  {String(posts.length).padStart(2, '0')}
                </span>
              </h2>
              <span className="tiny-label">THE JOURNAL</span>
            </div>
            <div className="filter-row" aria-label="按分类筛选文章">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`filter-button ${item === category ? 'is-active' : ''}`}
                  aria-pressed={item === category}
                  onClick={() => setCategory(item)}
                >
                  {item}
                  {item === '全部' && <span>{posts.length}</span>}
                </button>
              ))}
              {posts.some((post) => post.sample) && (
                <span className="sample-label">含示例内容</span>
              )}
            </div>
            <div className="post-list" aria-live="polite">
              {visible.length === 0 && (
                <div className="empty-state">
                  <span>这一页，留给新的想法。</span>
                  <p>这个分类还没有文章，先去其他地方逛逛吧。</p>
                  <button
                    className="text-link"
                    onClick={() => setCategory('全部')}
                  >
                    查看全部 <Icon name="arrow" size={16} />
                  </button>
                </div>
              )}
              {visible.map((post) => (
                <article className="post-row" key={post.slug}>
                  <a className="post-row-link" href={`#/post/${post.slug}`}>
                    <div className="post-row-copy">
                      <PostMeta post={post} />
                      <h3>{post.title}</h3>
                      <p>{post.summary}</p>
                      <div className="post-tags">
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
            <a href="#/archive" className="archive-link">
              <span>每一篇，都是生长的痕迹。</span>
              <span>
                浏览所有文章 <Icon name="arrow" size={17} />
              </span>
            </a>
          </section>
        </div>
        <Sidebar />
      </div>
      <section className="closing-note">
        <Asterisk />
        <p>
          不急着抵达，<em>先认真路过。</em>
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
  return (
    <div className="inner-page">
      <PageIntro
        label="SMALL THINGS, BIG FEELINGS"
        title="生活的边角料"
        description="还没长成文章的念头，和不想忘记的小事。"
      />
      <div className="notes-layout">
        <div className="notes-list">
          {notes.map((note) => (
            <article className="note-card" key={note.id}>
              <div className="note-date">
                <span className="status-dot" />
                <time dateTime={note.date}>{formatDate(note.date)}</time>
                {note.sample && <span className="sample-label">示例碎片</span>}
              </div>
              <p>{note.text}</p>
              <span className="note-tag">#{note.tag}</span>
              <Asterisk className="note-star" />
            </article>
          ))}
        </div>
        <aside className="notes-aside">
          <span className="handwritten">a note to remember.</span>
          <div className="paper-note">
            <span className="tiny-label">NOTE TO SELF</span>
            <p>
              不是所有记录
              <br />
              都需要一个标题。
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
  const years = [...new Set(posts.map((post) => post.date.slice(0, 4)))]
  return (
    <div className="inner-page">
      <PageIntro
        label="AN INDEX OF CURIOSITY"
        title="时间的目录"
        description={`共 ${posts.length} 篇文字。沿着时间，回看每一次思考留下的足迹。`}
      />
      <div className="archive-summary">
        <span>
          <Icon name="book" size={18} /> {posts.length} 篇文章
        </span>
        <span>{categories.length - 1} 个分类</span>
        {posts.some((post) => post.sample) && (
          <span className="sample-label">含示例内容</span>
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
                  href={`#/post/${post.slug}`}
                  className="archive-row"
                  key={post.slug}
                >
                  <time dateTime={post.date}>
                    {post.date.slice(5).replace('-', '.')}
                  </time>
                  <h3>{post.title}</h3>
                  <span className="category-text">{post.category}</span>
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
  return (
    <div className="inner-page about-page">
      <PageIntro
        label="THE PERSON BEHIND THE WORDS"
        title="你好，很高兴遇见你"
        description="这是一个关于探索、创造，以及认真生活的小小空间。"
      />
      <div className="about-layout">
        <div className="about-copy">
          <span className="about-avatar">
            z<Asterisk />
          </span>
          <h2>
            我是 {site.author}，<br />
            一个始终在路上的人。
          </h2>
          <p>
            {site.description}{' '}
            我希望这个博客能像一本随手翻开的笔记，装得下完整的思考，也容得下偶然闪过的念头。
          </p>
          <p>
            这里叫「未完」。因为学习没有终点，想法会继续变化，很多有趣的事情也才刚刚开始。
          </p>
          <div className="about-interests">
            <span>⌘ 技术与创造</span>
            <span>◌ 设计与审美</span>
            <span>↗ 日常与远方</span>
          </div>
          <a
            className="primary-link"
            href={site.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={18} />在 GitHub 找到我
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
          <h3>一个可以慢慢长大的地方。</h3>
        </div>
        <p>
          在文字之间留出呼吸，在日常之中保持好奇。
          <br />
          欢迎常来坐坐，也祝你找到自己的表达方式。
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
        <button onClick={copy} aria-label="复制代码">
          <Icon name={status === 'copied' ? 'check' : 'copy'} size={15} />
          <span aria-live="polite">
            {status === 'copied'
              ? '已复制'
              : status === 'failed'
                ? '请手动复制'
                : '复制'}
          </span>
        </button>
      </div>
      <pre>
        <code>{block.text}</code>
      </pre>
    </div>
  )
}

function Article({ post }: { post: Post }) {
  const headings = post.content.filter((block) => block.type === 'heading')
  const next =
    posts[
      (posts.findIndex((item) => item.slug === post.slug) + 1) % posts.length
    ]
  return (
    <div className="article-page">
      <a className="back-link" href="#/">
        <Icon name="arrow" size={17} />
        回到全部文章
      </a>
      <header className="article-header">
        <PostMeta post={post} />
        <h1>{post.title}</h1>
        <p className="article-summary">{post.summary}</p>
        <div className="article-byline">
          <span className="mini-avatar">z</span>
          <span>{site.author}</span>
          <span className="byline-divider" />
          <span>文字，慢慢生长。</span>
        </div>
      </header>
      <div className="article-layout">
        <article className="prose" aria-label="文章正文">
          {post.sample && (
            <div className="sample-notice">
              <Icon name="book" size={18} />
              <span>这是一篇示例文章，用来展示阅读与排版效果。</span>
            </div>
          )}
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
          <div className="article-end">
            <Asterisk />
            <span>写到这里，下次继续。</span>
          </div>
          <div className="article-tags">
            {post.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          {next && next.slug !== post.slug && (
            <a href={`#/post/${next.slug}`} className="next-post">
              <span className="tiny-label">接着读 / UP NEXT</span>
              <h3>
                {next.title}
                <Icon name="arrow" />
              </h3>
            </a>
          )}
        </article>
        <aside className="article-toc">
          <span className="tiny-label">这篇文章里</span>
          <nav aria-label="文章目录">
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
                <span>0{index + 1}</span>
                {heading.text}
              </button>
            ))}
          </nav>
          <div className="toc-note">
            一段文字，
            <br />
            一小块属于自己的时间。
          </div>
        </aside>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="not-found">
      <span className="eyebrow">404 / A PATH NOT YET PLANTED</span>
      <Asterisk />
      <h1>这条小径，还没有开辟。</h1>
      <p>文章可能已经搬家，也许我们可以从首页重新出发。</p>
      <a className="primary-link" href="#/">
        回到首页 <Icon name="arrow" size={17} />
      </a>
    </div>
  )
}

function App() {
  const route = useRoute()
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
  const activeNav = route.startsWith('/post/') ? '#/' : `#${route}`
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
    const title =
      post?.title ||
      navigation.find((item) => item.href === `#${route}`)?.label ||
      '页面未找到'
    document.title =
      route === '/'
        ? `${site.name} · ${site.author} 的数字花园`
        : `${title} · ${site.name}`
    if (previousRoute.current !== route) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      main.current?.focus({ preventScroll: true })
      previousRoute.current = route
    }
  }, [route, post])
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
        跳到主要内容
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a
            href="#/"
            className="brand"
            aria-label={`${site.name}，回到首页`}
            onClick={() => setMenuOpen(false)}
          >
            <Asterisk />
            <span className="brand-name">
              {site.name}
              <span>未完待续，慢慢书写。</span>
            </span>
          </a>
          <div className="header-right">
            <nav className="desktop-nav" aria-label="主导航">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeNav === item.href ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="header-tools">
              <button
                className="search-trigger"
                onClick={() => setSearchOpen(true)}
                aria-label="搜索文章"
              >
                <Icon name="search" size={18} />
                <kbd>Ctrl K</kbd>
              </button>
              <span className="tool-divider" />
              <button
                className="icon-button theme-toggle"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label={
                  theme === 'light' ? '切换到深色主题' : '切换到浅色主题'
                }
              >
                <Icon name={theme === 'light' ? 'sun' : 'moon'} size={20} />
              </button>
              <button
                className="icon-button mobile-menu-trigger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                aria-label={menuOpen ? '关闭导航' : '打开导航'}
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
            aria-label="移动端主导航"
          >
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.href}
                aria-current={activeNav === item.href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
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
            <span>保持好奇，未完待续。</span>
          </p>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="访问 GitHub 主页"
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

export default App
