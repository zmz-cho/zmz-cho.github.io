import type { Post } from '../data/posts'

export function GardenArt() {
  return (
    <div className="garden-art" aria-hidden="true">
      <svg viewBox="0 0 470 360" fill="none">
        <defs>
          <pattern
            id="garden-grid"
            width="26"
            height="26"
            patternUnits="userSpaceOnUse"
          >
            <path d="M26 0H0v26" stroke="currentColor" strokeWidth=".55" />
          </pattern>
        </defs>
        <circle
          cx="244"
          cy="180"
          r="147"
          fill="url(#garden-grid)"
          className="art-grid"
        />
        <circle
          cx="244"
          cy="180"
          r="147"
          stroke="currentColor"
          strokeOpacity=".12"
          strokeDasharray="2 7"
        />
        <ellipse
          cx="248"
          cy="305"
          rx="102"
          ry="12"
          fill="currentColor"
          opacity=".045"
        />
        <g
          className="garden-plant"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M246 261c-2-55 19-124-2-191" />
          <path
            d="M252 184c-35-12-64-34-66-61 33-4 67 17 66 61Z"
            fill="var(--page)"
          />
          <path
            d="M250 207c42-4 78-32 82-59-39-2-74 24-82 59Z"
            fill="var(--page)"
          />
          <path
            d="M253 139c29-10 42-31 39-55-31 7-43 29-39 55Z"
            fill="var(--page)"
          />
          <path
            d="M249 102c-28-4-48-24-46-48 29 0 47 21 46 48Z"
            fill="var(--accent)"
          />
          <path d="m196 133 57 51m66-25-69 48m33-110-30 42" />
          <path
            d="M241 236c-26-1-49-13-56-32 27-5 47 9 56 32Z"
            fill="var(--accent)"
          />
        </g>
        <g stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
          <path d="m149 272 95-23 96 22-94 29-97-28Z" fill="var(--page)" />
          <path d="M149 272v17l96 28 95-29v-17M245 300v17" fill="var(--page)" />
          <path d="m159 289 86 25 86-26m-170-6 84 25 85-26" opacity=".4" />
          <path d="m192 270 51-13 49 12-47 15-53-14Z" strokeOpacity=".35" />
        </g>
        <circle cx="346" cy="74" r="19" fill="var(--orange)" />
        <path
          d="M122 145v22m-11-11h22m236 77v16m-8-8h16"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="m337 117 24 24m-19-30 24 24"
          stroke="currentColor"
          strokeWidth=".8"
          opacity=".4"
        />
        <circle cx="148" cy="228" r="3" fill="currentColor" />
        <circle cx="316" cy="44" r="2" fill="currentColor" />
        <path
          d="M80 283c9 18 26 27 45 29m-4-7 7 8-10 1"
          stroke="currentColor"
          strokeWidth="1"
        />
        <text
          x="56"
          y="267"
          fill="currentColor"
          stroke="none"
          fontSize="11"
          fontFamily="Georgia, serif"
          fontStyle="italic"
          transform="rotate(-9 56 267)"
        >
          a little, every day.
        </text>
      </svg>
      <span className="art-caption">Nº 001 &nbsp; / &nbsp; KEEP GROWING</span>
    </div>
  )
}

export function PostArt({
  kind,
  className = '',
}: {
  kind: Post['art']
  className?: string
}) {
  return (
    <div
      className={`post-art post-art--${kind} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 280 210" fill="none">
        {kind === 'garden' && (
          <>
            <g stroke="currentColor" strokeWidth="1.1" opacity=".17">
              <path d="M0 35h280M0 70h280M0 105h280M0 140h280M0 175h280M35 0v210M70 0v210M105 0v210M140 0v210M175 0v210M210 0v210M245 0v210" />
            </g>
            <g stroke="currentColor" strokeWidth="1.6">
              <ellipse
                cx="140"
                cy="103"
                rx="74"
                ry="29"
                transform="rotate(-45 140 103)"
              />
              <ellipse
                cx="140"
                cy="103"
                rx="74"
                ry="29"
                transform="rotate(45 140 103)"
              />
              <ellipse
                cx="140"
                cy="103"
                rx="74"
                ry="29"
                transform="rotate(90 140 103)"
              />
              <ellipse cx="140" cy="103" rx="74" ry="29" />
              <circle cx="140" cy="103" r="17" fill="currentColor" />
            </g>
            <circle cx="231" cy="40" r="6" fill="var(--orange)" />
            <path d="M43 165v14m-7-7h14" stroke="currentColor" />
          </>
        )}
        {kind === 'space' && (
          <>
            <rect
              x="69"
              y="41"
              width="111"
              height="133"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <rect
              x="88"
              y="57"
              width="111"
              height="119"
              rx="2"
              fill="var(--art-bg)"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle cx="144" cy="104" r="24" fill="currentColor" />
            <path
              d="M115 146h58m-42 10h26"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path d="M206 49v19m-9-10h18" stroke="currentColor" />
            <circle cx="62" cy="155" r="4" fill="var(--orange)" />
          </>
        )}
        {kind === 'code' && (
          <>
            <rect
              x="48"
              y="47"
              width="184"
              height="119"
              rx="7"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path d="M48 70h184" stroke="currentColor" />
            <g fill="currentColor">
              <circle cx="61" cy="59" r="2" />
              <circle cx="71" cy="59" r="2" />
              <circle cx="81" cy="59" r="2" />
            </g>
            <path
              d="m111 94-23 23 23 23m58-46 23 23-23 23m-19-55-20 64"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path d="M205 181h25" stroke="var(--orange)" strokeWidth="3" />
          </>
        )}
        {kind === 'walk' && (
          <>
            <circle cx="188" cy="62" r="22" fill="var(--orange)" />
            <path
              d="M28 162c33-70 71-86 121-31s72 13 104-22M28 176c46-47 92-36 120-7s83 12 105-2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M96 130V61m0 33c-28-1-36-15-33-33 22 0 34 14 33 33Zm0-16c24-2 37-20 32-35-22 4-31 17-32 35Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </>
        )}
        {kind === 'notes' && (
          <>
            <g stroke="currentColor" strokeWidth="1.5">
              <rect
                x="56"
                y="57"
                width="90"
                height="114"
                rx="3"
                transform="rotate(-12 56 57)"
              />
              <rect
                x="128"
                y="40"
                width="90"
                height="119"
                rx="3"
                fill="var(--art-bg)"
                transform="rotate(9 128 40)"
              />
              <path d="m145 72 49 8m-52 8 40 7m-43 8 46 7m-49 8 29 5" />
            </g>
            <circle cx="85" cy="106" r="13" fill="var(--orange)" />
          </>
        )}
      </svg>
    </div>
  )
}
