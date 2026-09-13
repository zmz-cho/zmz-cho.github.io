# 未完 · The Unfinished

zmz-cho 的个人博客基础框架。暖白纸色、钴蓝点缀、中文衬线标题与原创 SVG 插画，让写作拥有一个安静、可以持续扩展的空间。

## 本地运行

```sh
npm install
npm run dev
```

打开终端显示的本地地址。Windows PowerShell 如果参数透传异常，可以使用 `npm.cmd` 替代 `npm`。

```sh
npm run build    # TypeScript 检查并生成 dist/
npm run lint     # Oxlint 检查
npm run preview  # 预览生产构建
```

继续使用仓库已有的 React、TypeScript、Vite，不依赖组件库、远程字体或图片服务。

## 已有页面与交互

- 首页：精选文章、文章列表、分类筛选、个人介绍。
- 阅读页：舒适行宽、段落、分节标题、引用、列表、代码块与复制、目录跳转、下一篇。
- 碎片页、按年份整理的归档页、关于页、未找到页面。
- 全文搜索：检索标题、摘要、标签、分类与正文；支持 `Ctrl K` / `⌘ K`、`Esc` 和键盘导航。
- 深浅主题：首次跟随系统偏好，手动选择后在本机保存；加载前应用主题，减少闪烁。
- 自适应布局：桌面双栏、平板、手机导航；支持键盘焦点、跳过导航、减少动态效果设置。

## 从哪里修改

| 文件                         | 用途                                        |
| ---------------------------- | ------------------------------------------- |
| `src/data/site.ts`           | 博客名称、英文名称、作者、介绍、GitHub 地址 |
| `src/data/posts.ts`          | 文章、分类与碎片内容                        |
| `src/index.css`              | 深浅主题颜色、字体与全局样式                |
| `src/App.css`                | 布局、组件样式、阅读排版与响应式断点        |
| `src/components/Artwork.tsx` | 首页植物与文章插图，均为本地 SVG            |
| `src/components/Icon.tsx`    | 图标与星形标志                              |
| `src/components/Search.tsx`  | 原生 dialog 搜索组件                        |
| `src/App.tsx`                | 页面结构、导航与阅读组件                    |
| `index.html`                 | 页面语言、默认标题、站点描述与主题初始化    |
| `public/favicon.svg`         | 浏览器标签页图标                            |

修改名字和描述时，同时更新 `index.html` 的默认标题、描述。主页与内页标签标题会读取 `site.ts`。

## 添加文章

当前包含 **5 篇示例文章和 3 条示例碎片**，用于展示排版。它们带有 `sample: true` 标记，不代表作者的实际经历。替换为自己的文章后，删除该标记即可；列表的示例提示会随内容自动消失。

在 `src/data/posts.ts` 的 `entries` 数组里新增一项。内容由 TypeScript 校验，不需要修改页面组件：

```ts
{
  slug: 'my-first-post', // 唯一、稳定的英文短名，用于文章链接
  title: '我的第一篇文章',
  summary: '写给这片小天地的第一段话。',
  date: '2026-09-13', // YYYY-MM-DD，文章会按日期倒序排列
  category: '生活', // 技术 / 设计 / 生活 / 思考
  tags: ['日常', '写作'],
  readingTime: 3, // 预计阅读分钟数
  art: 'walk', // garden / space / code / walk / notes
  featured: true, // 首页精选；建议只设置一篇
  content: [
    { type: 'paragraph', text: '从今天开始，认真记录。' },
    { type: 'heading', id: 'beginning', text: '一个小小的开始' },
    { type: 'paragraph', text: '每个小节的 id 应在这篇文章里唯一。目录自动生成。' },
    { type: 'quote', text: '保持好奇，未完待续。' },
    { type: 'list', items: ['一个想法', '一次尝试'] },
    { type: 'code', language: 'TypeScript', text: "const hello = 'world'" },
  ],
}
```

这是一个静态前端基础，当前使用结构化内容块，并未接入 Markdown 解析、CMS、评论、订阅或后台。后续可将内容层替换为 Markdown / MDX 或构建时生成的数据，复用已有页面和 `.prose` 阅读样式。

## 配色与排版

`src/index.css` 中的 CSS 变量是主题入口：`--page` 页面底色、`--ink` 正文、`--muted` 次要文字、`--accent` 强调色、`--line` 分隔线、`--serif` 标题字体。深色主题在 `[data-theme='dark']` 中单独覆盖。

布局断点位于 `src/App.css` 末尾。SVG 插画直接使用主题变量，换色后自动适配，不需要重新导出图片。中文字体使用本机宋体或衬线字体回退，不同设备会有细微字形差异。

## GitHub Pages

保留现有 `.github/workflows` 自动部署流程：推送到 `main` 后构建并发布 `dist/`。当前工作只修改本地文件，不会自动推送仓库。

路由采用 `#/post/my-first-post` 等 hash 地址，兼容 GitHub Pages；复制文章链接、直接打开或刷新都不依赖服务器路由回退。当前目标是用户站点 `zmz-cho.github.io`；若以后迁移到仓库子路径，需同步配置 Vite `base` 并调整站点图标路径。

当前内容在浏览器端渲染，页面级搜索引擎索引与社交分享元信息较有限。如果以后重视自然搜索流量，可在此视觉基础上接入静态预渲染。
