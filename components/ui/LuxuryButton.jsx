"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function LuxuryButton({ href, type = 'button', children, className, variant = 'primary', ...props }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return
    setPosition({ x: event.clientX - bounds.left - bounds.width / 2, y: event.clientY - bounds.top - bounds.height / 2 })
  }

  const shared = cn(
    'focus-ring group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] transition-transform duration-300 will-change-transform',
    variant === 'primary'
      ? 'border-champagne/30 bg-gradient-to-r from-[#b88c42] via-[#d3b463] to-[#a77c2f] text-[#11100d] shadow-glow'
      : 'border-white/12 bg-white/5 text-alabaster backdrop-luxury',
    className,
  )

  const content = (
    <motion.span
      animate={{ x: position.x * 0.08, y: position.y * 0.08 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="relative z-10 flex items-center gap-2"
    >
      {children}
    </motion.span>
  )

  const Component = href ? motion.a : motion.button

  const sharedProps = href ? { href } : { type }

  return (
    <Component
      ref={ref}
      {...sharedProps}
      type={href ? undefined : type}
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={shared}
      data-cursor="hover"
      {...props}
    >
      <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_18%,rgba(255,255,255,0.38)_28%,transparent_38%)] opacity-0 transition duration-700 group-hover:translate-x-[160%] group-hover:opacity-100" />
      {content}
    </Component>
  )
}