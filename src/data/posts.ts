import type { Post, Note } from './types.ts'
export { categories } from './types.ts'
export type { Category, ContentBlock, Post } from './types.ts'

// 文章按日期倒序排列；新文章在这里新增一项即可。
const entries: Post[] = [
  {
    slug: 'correct-but-useless',
    title: '正确，但没用：AI 最爱的那种发言',
    summary:
      '问它该做什么，它给你一套评判标准。三条要点、加粗开头、句句在理，读完还是不知道该干嘛。',
    date: '2026-10-27',
    category: 'thoughts',
    tags: ['AI', '吐槽', '写作'],
    readingTime: 4,
    art: 'notes',
    content: [
      {
        type: 'paragraph',
        text: '最近想给作品集做个项目，就去问 AI。它先建议我做一个 token 成本计算器。我说这没什么意义。它立刻改口：「你说得对……我刚才那个建议太偷懒了。」然后认真地给了我这样一段话：',
      },
      {
        type: 'list',
        items: [
          '解决你自己真实遇到的问题：你会天天用它，所以会把它做好，也说得清楚为什么要做。',
          '有别人不知道的发现：做了实验，得出一个反直觉、有数据支撑的结论。',
          '体现一个取舍判断：面对几种方案，你选了哪种、为什么，事后证明对不对。',
        ],
      },
      {
        type: 'paragraph',
        text: '接着它反问我：平时用 AI 做什么？有什么让你烦的事？你真正好奇的是什么？',
      },
      {
        type: 'paragraph',
        text: '我盯着这段话看了很久。每一句都对，挑不出毛病。但读完之后，我和读之前一样，不知道该做什么。',
      },
      { type: 'heading', id: 'swap-test', text: '换个词，照样成立' },
      {
        type: 'paragraph',
        text: '试一下：把「作品」换成「创业方向」，这三条照样成立。换成「论文选题」，也成立。换成「周末去哪玩」，有点勉强，但硬要说也说得通。',
      },
      {
        type: 'paragraph',
        text: '一句话放到什么场景都对，说明它没碰到任何具体的东西。它不会错，是因为它什么也没说。',
      },
      {
        type: 'quote',
        text: '可能出错的建议才有信息量。永远正确的话，通常也永远用不上。',
      },
      {
        type: 'heading',
        id: 'wrong-question',
        text: '我问的是「做什么」，它答的是「怎么判断」',
      },
      {
        type: 'paragraph',
        text: '更微妙的问题是答非所问。我要的是一个能动手的方向，它给的是一套事后打分的标准。标准当然有用，等我手上有三个候选项目的时候。可现在我一个都没有，这套标准唯一的用处，就是证明我现在的想法都不够好。',
      },
      {
        type: 'paragraph',
        text: '结尾那几个反问，又把球踢回给了我。我就是因为想不出来才问的。',
      },
      { type: 'heading', id: 'why-ai', text: 'AI 为什么这么爱说这种话' },
      { type: 'paragraph', text: '我猜有几个原因：' },
      {
        type: 'list',
        items: [
          '抽象就不会错。具体建议可能被否定，就像那个计算器；一套标准却没法反驳。刚被否定过一次，退回到最安全的地方，很合理。',
          '格式看起来像深度。三条要点、加粗、冒号、整齐的对仗，读起来像一位资深前辈在总结经验，其实只是排版。',
          '什么场景都能套。同一段话发给一千个人都不出错，对一个要同时回答所有人的系统来说，这几乎是最优策略。',
        ],
      },
      {
        type: 'paragraph',
        text: '……对，我刚刚也列了三条。这种格式确实好用，所以才危险。',
      },
      { type: 'heading', id: 'spot-it', text: '怎么识别' },
      { type: 'paragraph', text: '后来我给自己定了两个小测试：' },
      {
        type: 'list',
        items: [
          '换词测试：把主题词换掉，如果这段话依然成立，它就是空的。',
          '「比如呢」测试：追问一个具体例子。好的建议一追问就能落地，空话一追问，只会再长出一层空话。',
        ],
      },
      {
        type: 'paragraph',
        text: '只有两条，故意的。',
      },
      {
        type: 'paragraph',
        text: '好的建议通常是有风险的。它会说「做这个」，会给出具体的名字、数字和步骤，所以它可能是错的。但正因为可能错，你才能拿它去试，然后知道哪里不对。',
      },
      { type: 'heading', id: 'to-be-fair', text: '公平地说' },
      {
        type: 'paragraph',
        text: '那三条标准本身没错，错的是出现的时机。在你什么都还没有的时候，需要的不是一把尺子，而是一个哪怕不完美、但能马上动手的东西。',
      },
      {
        type: 'paragraph',
        text: '顺便一提，这篇文章也是 AI 帮我写的。我把那段话原样贴给它，让它写篇文章吐槽这种发言。它写得很起劲。',
      },
      { type: 'paragraph', text: '总结一下，本文有三点：算了。' },
    ],
  },
]

export const posts = entries.sort((a, b) => b.date.localeCompare(a.date))

export const notes: Note[] = []
