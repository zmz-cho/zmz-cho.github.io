import type { NoteTranslations, PostTranslations } from '../types.ts'

export const enPosts: NonNullable<PostTranslations['en']> = {
  'a-digital-garden': {
    title: 'A blog, a little digital garden',
    summary:
      'You don’t have to wait for an idea to be finished. Give it somewhere to take root, and time to become itself.',
    tags: ['digital garden', 'writing', 'slow growth'],
    content: [
      {
        type: 'paragraph',
        text: 'Perhaps the most inviting moment in a new blog’s life is when it is still empty. No fixed sections, no publishing schedule to maintain. Just a small space where things can grow freely.',
      },
      {
        type: 'paragraph',
        text: 'This sample article is an invitation, too: treat this place as your own notebook, and begin with a question you haven’t answered yet.',
      },
      { type: 'heading', id: 'start-small', text: 'Begin with a small seed' },
      {
        type: 'paragraph',
        text: 'It is easy to make writing feel too serious, as if we must read enough books and resolve every detail before earning the first sentence. But many thoughts only become clear in the act of putting them down.',
      },
      {
        type: 'quote',
        text: 'Not every piece needs an answer. Sometimes, keeping a good question is enough.',
      },
      {
        type: 'paragraph',
        text: 'A small problem you have just solved, a line you keep rereading, a connection that arrives on a walk: any of these can be a beginning. Length matters less than whether the thought means something to you now.',
      },
      { type: 'heading', id: 'keep-growing', text: 'Let ideas keep growing' },
      {
        type: 'paragraph',
        text: 'I prefer the image of a garden to a timeline that only moves forward. Older entries can be tended again; new observations can join old questions. Publishing is not the end. It is simply giving an idea a home for a while.',
      },
      {
        type: 'list',
        items: [
          'Capture first, organize later. Categories should not get in the way of starting.',
          'Leave room to revise old writing, and room to change your mind.',
          'Connect related thoughts, so that paths begin to form between them.',
        ],
      },
      { type: 'heading', id: 'at-your-pace', text: 'At your own pace' },
      {
        type: 'paragraph',
        text: 'This place is allowed to be slow. A few paragraphs a week, or one entry in a month. It need not chase trends or prove its productivity. All that matters is still wanting to sit here for a moment when you return.',
      },
      {
        type: 'paragraph',
        text: 'May it keep more than conclusions: observations, doubts, experiments, and each small beginning again. Unfinished is a good place to be.',
      },
    ],
  },
  'room-to-breathe': {
    title: 'A little space to let design breathe',
    summary:
      'A good interface isn’t always about adding more. Sometimes taking a step back reveals what really matters.',
    tags: ['interface design', 'typography'],
    content: [
      {
        type: 'paragraph',
        text: 'White space is not a part of the page waiting to be filled. It is a pause between ideas, a little room for the reader to breathe before entering the words.',
      },
      { type: 'heading', id: 'hierarchy', text: 'Decide what matters first' },
      {
        type: 'paragraph',
        text: 'When every element insists on being noticed, the page loses its focus. Before designing, ask what a reader should see first, and what they should be able to do next.',
      },
      {
        type: 'list',
        items: [
          'Use type size and weight to give the reading order a clear shape.',
          'Keep related information close, and give different sections some distance.',
          'Save the accent color for moments that genuinely need attention.',
        ],
      },
      { type: 'heading', id: 'rhythm', text: 'Make spacing a rhythm' },
      {
        type: 'paragraph',
        text: 'The gaps between headings, paragraphs, and notes are like long and short beats in music. A small, consistent set of spacing values brings a page together more easily than inventing a new distance for every element.',
      },
      {
        type: 'quote',
        text: 'A sense of ease often comes from the places we choose to leave empty.',
      },
      { type: 'heading', id: 'read-first', text: 'Come back to reading' },
      {
        type: 'paragraph',
        text: 'Finally, imagine the decorations gone and read the page. Is the text clear? Are the lines a comfortable length? Are links easy to find? Once those questions have answers, bring back the details that make the experience better.',
      },
    ],
  },
  'code-for-future-me': {
    title: 'Writing code for my future self',
    summary:
      'Names, boundaries, and a little patience. I’m growing fond of code that is easy to read at first glance.',
    tags: ['programming', 'dev notes'],
    content: [
      {
        type: 'paragraph',
        text: 'Reading your own old code can feel like opening an unsigned letter. You know roughly what problem it solves, but no longer remember why it was written that way. Readability means leaving a few more clues for your future self.',
      },
      { type: 'heading', id: 'names', text: 'Put the intention in the name' },
      {
        type: 'paragraph',
        text: 'A clear name often does more work than a comment describing the implementation. Functions name actions, variables name their contents, and conditions should stay close to the language we use to describe the problem.',
      },
      {
        type: 'code',
        language: 'TypeScript',
        text: "const publishedPosts = posts\n  .filter((post) => post.status === 'published')\n  .sort((a, b) => b.date.localeCompare(a.date))\n\nconst recentPosts = publishedPosts.slice(0, 5)",
      },
      { type: 'heading', id: 'boundaries', text: 'Give changes a boundary' },
      {
        type: 'paragraph',
        text: 'Keeping content, interface, and configuration separate lets a small change stay small. Updating a biography should not require searching through components, and changing a theme color should not mean editing a dozen files.',
      },
      { type: 'heading', id: 'why', text: 'Leave the reason behind' },
      {
        type: 'paragraph',
        text: 'Useful comments explain what the code cannot: an unusual compatibility fix, a trade-off, a limitation accepted for now. Months later, those one or two sentences are often exactly what you need.',
      },
    ],
  },
  'a-walk-without-a-plan': {
    title: 'Finding my attention on a walk',
    summary:
      'Put the headphones away. Leave the destination open. Give an evening back to the street, the trees, and the passing air.',
    tags: ['everyday life', 'noticing'],
    content: [
      {
        type: 'paragraph',
        text: 'Screens divide a day into small pieces. Messages, tabs, and to-do lists each ask for a share of our attention. One lovely thing about walking is finally not having to answer them.',
      },
      { type: 'heading', id: 'notice', text: 'See what is nearby, again' },
      {
        type: 'paragraph',
        text: 'Walk the same street more slowly and different details appear: a new leaf by the wall, a shop closing, a light coming on in a window. Nothing remarkable has happened, yet the world suddenly feels more tangible.',
      },
      {
        type: 'quote',
        text: 'Some time does not need to be put to use. It only needs to be lived.',
      },
      { type: 'heading', id: 'return', text: 'Bring a little space home' },
      {
        type: 'paragraph',
        text: 'There is no need to expect inspiration from every walk. As the body covers a little distance, thoughts begin to loosen. The problem that was stuck may still be unsolved when you return, but it is possible to begin again.',
      },
    ],
  },
  'a-lightweight-note-system': {
    title: 'A lighter way to keep what I learn',
    summary:
      'Collecting is not understanding, and organizing is not the destination. Bring notes back into thinking and making.',
    tags: ['note-taking', 'knowledge'],
    content: [
      {
        type: 'paragraph',
        text: 'A note-taking setup can easily grow more complicated: tags, folders, templates, automations. Yet when it is time to return to something, we still do not know where to look. Perhaps it is worth starting again with a smaller system.',
      },
      { type: 'heading', id: 'capture', text: 'One inbox is enough' },
      {
        type: 'paragraph',
        text: 'Give loose thoughts one place to land. Don’t classify them too quickly; reduce the distance between having a thought and writing it down. A little time spent reviewing each week is lighter than designing a structure with every note.',
      },
      {
        type: 'heading',
        id: 'connect',
        text: 'Make connections in your own words',
      },
      {
        type: 'list',
        items: [
          'Write a sentence explaining why the note is useful to you.',
          'Connect it to a project in progress or a question you are still thinking about.',
          'Let yourself remove what you no longer need. A collection’s size is not the same as what you have learned.',
        ],
      },
      { type: 'heading', id: 'use', text: 'Organize through use' },
      {
        type: 'paragraph',
        text: 'Gather the relevant notes when you start an article, a project, or an answer to a specific question. Structure can grow out of use. A small system you open often is worth more than a perfect one you never touch.',
      },
    ],
  },
}

export const enNotes: NonNullable<NoteTranslations['en']> = {
  'small-beginnings': {
    text: 'Begin first; get better along the way. A little site of your own can be a way of taking your curiosity seriously.',
    tag: 'writing',
  },
  'less-but-better': {
    text: 'A design reminder for today: when you don’t know what to add, try taking something away. Let words, space, and color each do their own job.',
    tag: 'design notes',
  },
  'pay-attention': {
    text: 'It isn’t only faraway scenery I want to keep. There is also the light by a window, a song at the right moment, and an afternoon without a plan.',
    tag: 'everyday observations',
  },
}
