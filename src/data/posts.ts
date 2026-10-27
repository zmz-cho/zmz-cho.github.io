import type { Post, Note } from './types.ts'
export { categories } from './types.ts'
export type { Category, ContentBlock, Post } from './types.ts'

// 文章按日期倒序排列；新文章在这里新增一项即可。
const entries: Post[] = []

export const posts = entries.sort((a, b) => b.date.localeCompare(a.date))

export const notes: Note[] = []
