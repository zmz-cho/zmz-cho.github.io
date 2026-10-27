import type { Post, Note } from './types.ts'
export { categories } from './types.ts'
export type { Category, ContentBlock, Post } from './types.ts'

// 展示用内容。发布自己的文章时，新增一项并移除 sample 标记即可。
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
  {
    slug: 'a-digital-garden',
    title: '把博客当作一座数字花园',
    summary:
      '不必等到想法成熟才落笔。让零散的念头在这里扎根，在时间里，长成自己的样子。',
    date: '2026-09-12',
    category: 'thoughts',
    tags: ['数字花园', '写作', '长期主义'],
    readingTime: 3,
    art: 'garden',
    featured: true,
    sample: true,
    content: [
      {
        type: 'paragraph',
        text: '一个新博客最迷人的时刻，或许就是它还空着的时候。没有固定的栏目，没有需要维持的更新频率，只有一小块可以自由生长的地方。',
      },
      {
        type: 'paragraph',
        text: '这篇示例文章，也是一份邀请：把这里当成自己的笔记本，从一个还没有答案的问题开始。',
      },
      { type: 'heading', id: 'start-small', text: '从一颗小小的种子开始' },
      {
        type: 'paragraph',
        text: '我们很容易把写作想得太郑重。仿佛必须读完很多书、想清楚所有细节，才能写出第一句话。但很多念头，恰恰是在写下来的过程中才逐渐清晰。',
      },
      {
        type: 'quote',
        text: '不必每一次都写出答案。有时，把问题好好留下来，就已经足够。',
      },
      {
        type: 'paragraph',
        text: '一个刚解决的小问题、一段反复读了几遍的话、一次散步途中冒出来的联想，都可以成为起点。文章的长度不重要，重要的是它对当下的自己有意义。',
      },
      { type: 'heading', id: 'keep-growing', text: '允许想法继续生长' },
      {
        type: 'paragraph',
        text: '比起一条只能向前的时间线，我更喜欢花园的比喻。旧文章可以被重新照料，新的观察可以接在旧问题后面。发布不是终点，只是给一个想法暂时安了家。',
      },
      {
        type: 'list',
        items: [
          '先记录，再整理。不要让分类成为开始的门槛。',
          '给旧文章留出修改的空间，也给自己留出改变看法的空间。',
          '把相关的想法连起来，让文章之间产生小径。',
        ],
      },
      { type: 'heading', id: 'at-your-pace', text: '按照自己的节奏' },
      {
        type: 'paragraph',
        text: '这个地方可以很慢。可以一周写几段，也可以一个月只更新一篇。它不需要追赶热点，也不必向任何人证明效率。只要回来的时候，仍然愿意在这里坐一会儿。',
      },
      {
        type: 'paragraph',
        text: '愿这里保存的不只是结论，还有观察、犹豫、尝试，以及每一次重新出发。未完，也很好。',
      },
    ],
  },
  {
    slug: 'room-to-breathe',
    title: '留一点空白，让设计自己呼吸',
    summary:
      '好的界面不总是关于增加什么。有时候，退后一步，才会看见真正重要的东西。',
    date: '2026-09-10',
    category: 'design',
    tags: ['界面设计', '排版'],
    readingTime: 2,
    art: 'space',
    sample: true,
    content: [
      {
        type: 'paragraph',
        text: '空白并不是还没有填满的地方。它是内容与内容之间的停顿，是读者进入一页文字时，能够先深呼吸的空间。',
      },
      { type: 'heading', id: 'hierarchy', text: '先决定什么最重要' },
      {
        type: 'paragraph',
        text: '当每个元素都在强调自己，页面就失去了重点。开始设计之前，可以先问：读者来到这里，第一眼应该看到什么？接下来又应该做什么？',
      },
      {
        type: 'list',
        items: [
          '用字号和字重建立清楚的阅读顺序。',
          '让相关的信息靠近，让不同的段落保持距离。',
          '把强调色留给真正需要引导注意力的地方。',
        ],
      },
      { type: 'heading', id: 'rhythm', text: '让间距成为节奏' },
      {
        type: 'paragraph',
        text: '标题、正文、注释之间的距离，像音乐里的长短拍。建立一组有限的间距值，比凭感觉给每个元素单独设定，更容易让整个页面保持统一。',
      },
      { type: 'quote', text: '设计的从容感，常常来自那些没有被填满的地方。' },
      { type: 'heading', id: 'read-first', text: '回到阅读本身' },
      {
        type: 'paragraph',
        text: '最后，把所有装饰暂时藏起来，读一遍页面。文字是否清晰？行宽是否舒服？链接是否容易找到？当这些问题都有了答案，再加回那些确实能让体验更好的细节。',
      },
    ],
  },
  {
    slug: 'code-for-future-me',
    title: '写给未来自己的代码',
    summary:
      '命名、边界与一点点耐心。比起聪明的写法，我开始更喜欢那些一眼就能读懂的代码。',
    date: '2026-09-08',
    category: 'tech',
    tags: ['编程', '开发笔记'],
    readingTime: 2,
    art: 'code',
    sample: true,
    content: [
      {
        type: 'paragraph',
        text: '读自己的旧代码，有时像拆一封没有署名的信。知道它大概在解决什么问题，却想不起当时为什么这么写。可读性，就是给未来的自己多留一点线索。',
      },
      { type: 'heading', id: 'names', text: '把意图写进名字里' },
      {
        type: 'paragraph',
        text: '一个清楚的名字，往往比一段解释实现过程的注释更有用。函数名说明动作，变量名说明内容，而条件表达式应该尽可能贴近我们描述问题的语言。',
      },
      {
        type: 'code',
        language: 'TypeScript',
        text: "const publishedPosts = posts\n  .filter((post) => post.status === 'published')\n  .sort((a, b) => b.date.localeCompare(a.date))\n\nconst recentPosts = publishedPosts.slice(0, 5)",
      },
      { type: 'heading', id: 'boundaries', text: '让变化有自己的边界' },
      {
        type: 'paragraph',
        text: '把内容、界面和配置分开，能让一次小改动停留在一个小范围里。更新站点介绍不应该需要翻阅组件，换一个主题色也不应该需要改动十几个文件。',
      },
      { type: 'heading', id: 'why', text: '留下为什么' },
      {
        type: 'paragraph',
        text: '好的注释记录代码本身无法表达的原因：一个看似奇怪的兼容处理、一次权衡、一个暂时接受的限制。几个月后，真正帮到自己的，常常就是这一两句话。',
      },
    ],
  },
  {
    slug: 'a-walk-without-a-plan',
    title: '在散步时，找回注意力',
    summary: '收起耳机，不设目的地。把一个傍晚，交还给街道、树影和路过的风。',
    date: '2026-09-05',
    category: 'life',
    tags: ['日常', '观察'],
    readingTime: 2,
    art: 'walk',
    sample: true,
    content: [
      {
        type: 'paragraph',
        text: '屏幕把一天切成很多小块。消息、标签页、待办事项，每一块都在索取一点注意力。散步的好处，是终于可以不用回应它们。',
      },
      { type: 'heading', id: 'notice', text: '重新看见附近' },
      {
        type: 'paragraph',
        text: '同一条路，慢一点走，会出现不同的细节。墙角的新叶，关门的小店，某一扇窗里亮起来的灯。并没有发生什么特别的事，但世界忽然具体了起来。',
      },
      { type: 'quote', text: '有些时间不需要被利用，只需要被好好度过。' },
      { type: 'heading', id: 'return', text: '带着一点空白回来' },
      {
        type: 'paragraph',
        text: '不必期待每次散步都会带来灵感。身体走过一段路，思绪自然松开一点。回来以后，那个一直卡住的问题也许依旧没有答案，但已经可以重新开始。',
      },
    ],
  },
  {
    slug: 'a-lightweight-note-system',
    title: '建立一个轻盈的个人知识系统',
    summary: '收藏不是理解，整理也不是目的。让笔记真正回到思考与创造的过程里。',
    date: '2026-09-01',
    category: 'tech',
    tags: ['笔记', '知识管理'],
    readingTime: 2,
    art: 'notes',
    sample: true,
    content: [
      {
        type: 'paragraph',
        text: '笔记工具很容易越用越复杂：标签、文件夹、模板、自动化。真正需要回顾时，却仍然想不起该去哪里找。或许值得从一个更小的系统重新开始。',
      },
      { type: 'heading', id: 'capture', text: '一个入口就够了' },
      {
        type: 'paragraph',
        text: '先给所有零散想法一个统一的收件箱。记录的时候不急着归类，降低从想到写之间的阻力。每周花一点时间回看，比每次记录都设计一套结构更轻松。',
      },
      { type: 'heading', id: 'connect', text: '用自己的话连接' },
      {
        type: 'list',
        items: [
          '写下一句话，说明这条笔记为什么对自己有用。',
          '连接到一个正在做的项目，或一个仍在思考的问题。',
          '允许删掉不再需要的内容，不把收藏数量当作收获。',
        ],
      },
      { type: 'heading', id: 'use', text: '在使用中整理' },
      {
        type: 'paragraph',
        text: '开始写文章、做项目或回答一个具体问题时，再把相关笔记聚在一起。结构可以随着使用慢慢长出来。一个经常被打开的小系统，比一个从不使用的完美系统更有价值。',
      },
    ],
  },
]

export const posts = entries.sort((a, b) => b.date.localeCompare(a.date))

export const notes: Note[] = [
  {
    id: 'small-beginnings',
    date: '2026-09-12',
    text: '先开始，再慢慢变好。一个属于自己的小站，也可以是一次认真对待好奇心的练习。',
    tag: '写作',
    sample: true,
  },
  {
    id: 'less-but-better',
    date: '2026-09-09',
    text: '今天的设计备忘：如果不知道该加什么，就试着减掉一点。让文字、间距和颜色各司其职。',
    tag: '设计随记',
    sample: true,
  },
  {
    id: 'pay-attention',
    date: '2026-09-06',
    text: '想保存的，不只是远方的风景。也有窗边的光、一段恰好的音乐，和一个没有安排的下午。',
    tag: '日常观察',
    sample: true,
  },
]
