"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function MagneticCard({ children, className }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return
    const x = (event.clientX - bounds.left - bounds.width / 2) / 22
    const y = (event.clientY - bounds.top - bounds.height / 2) / 22
    setPosition({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 160, damping: 16 }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}