import React from 'react'
import type { AppKey } from '../data/apps'

type IconKey = AppKey | 'next'

interface Props {
  app: IconKey
  size?: number
  className?: string
}

/**
 * 이모지 대신 쓰는 라인아트 마크. stroke 는 currentColor 라
 * 부모의 color(=tint) 로 색을 제어한다.
 */
const paths: Record<IconKey, React.ReactNode> = {
  walkten: (
    <>
      <path d="M7 4v7l-2 9M7 11l4 2 2 8" strokeLinecap="round" />
      <circle cx="9" cy="3.5" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  piaco: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M8 5v8M12 5v8M16 5v8" strokeWidth="1.5" />
    </>
  ),
  guico: (
    <>
      <circle cx="9" cy="16" r="3.8" />
      <path d="M12 13l7-9M15 6l2 2" />
    </>
  ),
  dateyomi: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  katayomi: <path d="M5 6h11M9 6c0 6-2 10-4 12M12 10c1 4 4 7 7 8" strokeLinecap="round" />,
  next: (
    <path
      d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10c-1 1-1 2-1 3H9c0-1 0-2-1-3a6 6 0 0 1 4-10z"
      strokeLinecap="round"
    />
  ),
}

const AppIcon: React.FC<Props> = ({ app, size = 24, className }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    {paths[app]}
  </svg>
)

export default AppIcon
