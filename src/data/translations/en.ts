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
}

export const enNotes: NonNullable<NoteTranslations['en']> = {}
