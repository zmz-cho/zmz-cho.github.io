import type { NoteTranslations, PostTranslations } from '../types.ts'

export const enPosts: NonNullable<PostTranslations['en']> = {
  'correct-but-useless': {
    title: 'Correct, but useless: the kind of answer AI loves',
    summary:
      'Ask it what to do and it hands you a set of criteria. Three bullet points, bold lead-ins, every line reasonable, and you still have no idea what to do.',
    tags: ['AI', 'rant', 'writing'],
    content: [
      {
        type: 'paragraph',
        text: 'I wanted a project for my portfolio, so I asked an AI. First it suggested a token cost calculator. I said that seemed pointless. It immediately backed down: “You’re right… that suggestion was lazy.” Then it earnestly gave me this:',
      },
      {
        type: 'list',
        items: [
          'Solve a problem you actually have: you’ll use it every day, so you’ll make it good and you can explain why it exists.',
          'Find something others don’t know: run an experiment and reach a counterintuitive, data-backed conclusion.',
          'Show a trade-off judgment: faced with several options, which one you chose, why, and whether it turned out right.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Then it asked me back: What do you use AI for? What annoys you? What are you genuinely curious about?',
      },
      {
        type: 'paragraph',
        text: 'I stared at it for a long time. Every line was correct; I couldn’t fault any of it. And when I finished reading, I knew exactly as little about what to do as before.',
      },
      { type: 'heading', id: 'swap-test', text: 'Swap the noun, still true' },
      {
        type: 'paragraph',
        text: 'Try it: replace “portfolio project” with “startup idea” and the three points still hold. “Thesis topic”? Still holds. “Where to go this weekend”? A stretch, but you could make it work.',
      },
      {
        type: 'paragraph',
        text: 'A sentence that is true in every situation hasn’t touched anything specific. It can’t be wrong because it doesn’t say anything.',
      },
      {
        type: 'quote',
        text: 'Only advice that could be wrong carries information. Words that are always right are usually never useful.',
      },
      {
        type: 'heading',
        id: 'wrong-question',
        text: 'I asked “what to do”; it answered “how to judge”',
      },
      {
        type: 'paragraph',
        text: 'The subtler problem is that it answered a different question. I wanted a direction I could start on; it gave me a rubric for grading afterwards. A rubric is useful, once I have three candidate projects. Right now I have none, so its only use is to prove that every idea I have isn’t good enough.',
      },
      {
        type: 'paragraph',
        text: 'And those closing questions kicked the ball right back to me. I asked precisely because I couldn’t think of anything.',
      },
      { type: 'heading', id: 'why-ai', text: 'Why AI loves saying this' },
      { type: 'paragraph', text: 'My guesses:' },
      {
        type: 'list',
        items: [
          'Abstraction can’t be wrong. A concrete suggestion can be rejected, like the calculator; a set of criteria can’t be refuted. Having just been rejected once, retreating to the safest ground makes sense.',
          'Formatting looks like depth. Three bullets, bold text, colons, neat parallelism: it reads like a seasoned mentor distilling experience, but it’s just layout.',
          'It fits every context. The same paragraph sent to a thousand people never goes wrong, which is close to the optimal strategy for a system answering everyone at once.',
        ],
      },
      {
        type: 'paragraph',
        text: '…Yes, I just made a list of three too. The format really is handy, which is exactly why it’s dangerous.',
      },
      { type: 'heading', id: 'spot-it', text: 'How to spot it' },
      { type: 'paragraph', text: 'Since then I use two little tests:' },
      {
        type: 'list',
        items: [
          'The swap test: replace the topic word. If the paragraph still holds, it’s empty.',
          'The “for example?” test: ask for a concrete case. Good advice lands when pressed; empty words, when pressed, just grow another layer of empty words.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Only two. On purpose.',
      },
      {
        type: 'paragraph',
        text: 'Good advice usually takes a risk. It says “build this,” with specific names, numbers and steps, so it might be wrong. But because it might be wrong, you can try it and find out where it fails.',
      },
      { type: 'heading', id: 'to-be-fair', text: 'To be fair' },
      {
        type: 'paragraph',
        text: 'The three criteria aren’t wrong; the timing is. When you have nothing yet, you don’t need a ruler. You need something, imperfect if it must be, that you can start on right away.',
      },
      {
        type: 'paragraph',
        text: 'By the way, an AI helped write this post too. I pasted that paragraph back to it and asked for a post roasting this kind of answer. It was very enthusiastic.',
      },
      {
        type: 'paragraph',
        text: 'In summary, this post makes three points: never mind.',
      },
    ],
  },
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
