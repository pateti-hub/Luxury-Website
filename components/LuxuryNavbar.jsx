"use client"

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LuxuryButton } from '@/components/ui/LuxuryButton'

const items = [
  { label: 'Residences', href: '#properties' },
  { label: 'Architecture', href: '#showcase' },
  { label: 'Tour', href: '#tour' },
  { label: 'Concierge', href: '#concierge' },
]

export function LuxuryNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.2 })

  useEffect(() => {
    const close = () => setIsOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: progress }} className="h-[2px] origin-left bg-gradient-to-r from-champagne via-alabaster to-transparent" />
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-4 focus-ring" data-cursor="hover">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-black/30 backdrop-blur-md">
            <span className="font-serif text-lg text-gradient-luxury">NE</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-[0.65rem] uppercase tracking-[0.36em] text-white/45">Noir Estate</p>
            <p className="text-xs uppercase tracking-[0.28em] text-white/75">Architectural Invitation</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 rounded-full border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-xl lg:flex">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.7rem] uppercase tracking-[0.32em] text-white/70 transition hover:text-alabaster focus-ring"
              data-cursor="hover"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LuxuryButton href="#concierge" className="min-w-[190px]">
            Request Viewing
          </LuxuryButton>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/30 text-white/85 backdrop-blur-xl lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          data-cursor="hover"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="mx-4 mb-4 rounded-[1.75rem] border border-white/10 bg-black/85 p-4 shadow-luxury backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-2">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/8 px-4 py-4 text-sm uppercase tracking-[0.28em] text-white/80 focus-ring"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <LuxuryButton href="#concierge" className="mt-4 w-full">
              Request Viewing
            </LuxuryButton>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}