"use client"

import { useEffect, useRef, useState } from 'react'
import { buildLuxuryScene } from '@/lib/three-scene'

export function InteractiveTour() {
  const canvasRef = useRef(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const supportsDesktop = window.matchMedia('(min-width: 1024px)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(supportsDesktop && finePointer)

    if (!canvasRef.current || !supportsDesktop || !finePointer) return undefined
    return buildLuxuryScene(canvasRef.current)
  }, [])

  return (
    <div className="relative min-h-[32rem] overflow-hidden rounded-[1.5rem] bg-[#060606]">
      <canvas ref={canvasRef} className="h-full w-full" aria-label="Interactive 3D property tour" />
      {!enabled ? <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(197,160,89,0.14),transparent_45%),radial-gradient(circle_at_top_left,rgba(247,244,240,0.22),transparent_35%),linear-gradient(180deg,#0a0908,#050505)]" /> : null}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.14),transparent_42%),linear-gradient(180deg,transparent,rgba(0,0,0,0.3))]" />
      <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[0.65rem] uppercase tracking-[0.34em] text-white/58 backdrop-blur-md">
        {enabled ? '3D Tour' : 'Desktop Preview'}
      </div>
    </div>
  )
}