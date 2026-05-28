"use client"

import { useEffect } from 'react'
import { setupLenis } from '@/lib/lenis'

export function SiteShell({ children }) {
  useEffect(() => setupLenis(), [])

  return (
    <div className="relative min-h-screen bg-obsidian text-alabaster">
      <a
        href="#content"
        className="focus-ring absolute left-4 top-4 z-[80] -translate-y-20 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <div id="content">{children}</div>
    </div>
  )
}