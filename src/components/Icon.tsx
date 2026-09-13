type IconName =
  | 'arrow'
  | 'arrowUp'
  | 'search'
  | 'sun'
  | 'moon'
  | 'github'
  | 'close'
  | 'menu'
  | 'copy'
  | 'check'
  | 'chevron'
  | 'book'

const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  moon: <path d="M20.5 13.5A8.7 8.7 0 0 1 10.5 3 8.8 8.8 0 1 0 20.5 13.5Z" />,
  github: (
    <>
      <path d="M9 19c-4 1-4-2-5-2m10 4v-3.5c0-1 .1-1.5-.5-2 3-.3 6-1.4 6-6a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0-.1-3.2s-1.1-.3-3.6 1.3a12 12 0 0 0-6.5 0C5.5 2.7 4.4 3 4.4 3a4.4 4.4 0 0 0-.1 3.2A4.7 4.7 0 0 0 3 9.5c0 4.6 3 5.7 6 6-.5.5-.6 1.1-.5 2V21" />
    </>
  ),
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  copy: (
    <>
      <rect x="8" y="8" width="12" height="13" rx="2" />
      <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  book: (
    <>
      <path d="M12 5v16M3 3c4-1 7 0 9 2 2-2 5-3 9-2v16c-4-1-7 0-9 2-2-2-5-3-9-2Z" />
    </>
  ),
}

export function Icon({
  name,
  size = 20,
  className = '',
}: {
  name: IconName
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}

export function Asterisk({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 3v34M3 20h34M8 8l24 24M8 32 32 8"
        stroke="currentColor"
        strokeWidth="5.5"
      />
    </svg>
  )
}
