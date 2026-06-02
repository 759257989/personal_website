'use client';

import { ReactNode } from 'react';

export type ThumbKey =
  | 'network'
  | 'chess'
  | 'brain'
  | 'pdf'
  | 'badge'
  | 'resume'
  | 'tag'
  | 'code'
  | 'game'
  | 'mountain'
  | 'news'
  | 'check';

export type ThumbCategory = 'AI/ML' | 'Backend' | 'Full-Stack' | 'Systems' | 'Games';

const GRADIENTS: Record<ThumbCategory, string> = {
  'AI/ML': 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
  Backend: 'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
  'Full-Stack': 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)',
  Systems: 'linear-gradient(135deg, #d97706 0%, #f97316 100%)',
  Games: 'linear-gradient(135deg, #db2777 0%, #f43f5e 100%)',
};

const ICONS: Record<ThumbKey, ReactNode> = {
  network: (
    <>
      <circle cx="32" cy="14" r="5" />
      <circle cx="14" cy="46" r="5" />
      <circle cx="50" cy="46" r="5" />
      <circle cx="32" cy="40" r="5" />
      <path d="M32 19v16M30 36 16 43M34 36l14 7" />
    </>
  ),
  chess: (
    <>
      <path d="M22 18h4v4h4v-4h4v4h4v-4h4v8l-4 4v18H22V34l-4-4v-8h4z" />
      <rect x="20" y="50" width="24" height="5" rx="1" />
    </>
  ),
  brain: (
    <>
      <path d="M40 18a8 8 0 0 0-16 0 7 7 0 0 0-4 12 7 7 0 0 0 6 10 7 7 0 0 0 14 0 7 7 0 0 0 6-10 7 7 0 0 0-6-12Z" />
      <path d="M32 16v34M24 28h8M40 24h-8M26 40h6" />
    </>
  ),
  pdf: (
    <>
      <path d="M20 12h16l10 10v30H20z" />
      <path d="M36 12v10h10" />
      <path d="M26 34h12M26 40h12M26 46h8" />
    </>
  ),
  badge: (
    <>
      <rect x="16" y="14" width="32" height="36" rx="3" />
      <circle cx="32" cy="28" r="6" />
      <path d="M22 44c2-5 6-7 10-7s8 2 10 7" />
      <path d="M28 10h8v6h-8z" />
    </>
  ),
  resume: (
    <>
      <rect x="18" y="12" width="28" height="40" rx="3" />
      <circle cx="27" cy="24" r="4" />
      <path d="M36 22h6M36 28h6M24 38h16M24 44h12" />
    </>
  ),
  tag: (
    <>
      <path d="M14 14h18l18 18-18 18-18-18z" />
      <circle cx="24" cy="24" r="3.5" />
    </>
  ),
  code: (
    <>
      <path d="M24 22 12 32l12 10M40 22l12 10-12 10M36 16 28 48" />
    </>
  ),
  game: (
    <>
      <rect x="10" y="24" width="44" height="20" rx="10" />
      <path d="M20 30v8M16 34h8" />
      <circle cx="42" cy="32" r="2.5" />
      <circle cx="48" cy="38" r="2.5" />
    </>
  ),
  mountain: (
    <>
      <path d="M10 48 26 20l10 16 6-8 12 20z" />
      <path d="M14 16l36 8" />
      <circle cx="14" cy="16" r="2.5" />
      <circle cx="50" cy="24" r="2.5" />
    </>
  ),
  news: (
    <>
      <rect x="12" y="16" width="36" height="32" rx="2" />
      <path d="M48 24h6v20a4 4 0 0 1-4 4H16" />
      <path d="M18 22h16v8H18zM38 22h6M18 36h24M18 42h24" />
    </>
  ),
  check: (
    <>
      <rect x="14" y="14" width="36" height="36" rx="4" />
      <path d="M22 32l7 7 14-15" />
    </>
  ),
};

interface ProjectThumbProps {
  thumb: ThumbKey;
  category: ThumbCategory;
  level?: number;
}

const ProjectThumb = ({ thumb, category, level }: ProjectThumbProps) => {
  return (
    <div
      className="relative h-40 w-full overflow-hidden scanlines"
      style={{ background: GRADIENTS[category] }}
    >
      {/* grid overlay */}
      <div className="absolute inset-0 arcade-grid opacity-40" />

      {/* glow blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />

      {/* icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 64 64"
          className="w-20 h-20 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[thumb]}
        </svg>
      </div>

      {/* category tag */}
      <span className="absolute top-2 left-2 font-pixel text-[8px] px-2 py-1 rounded bg-black/45 text-white backdrop-blur-sm">
        {category}
      </span>

      {/* level badge */}
      {level !== undefined && (
        <span className="absolute top-2 right-2 font-pixel text-[8px] px-2 py-1 rounded bg-black/45 text-white backdrop-blur-sm">
          LV.{String(level).padStart(2, '0')}
        </span>
      )}
    </div>
  );
};

export default ProjectThumb;
