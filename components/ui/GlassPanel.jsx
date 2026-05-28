import { cn } from '@/lib/utils'

export function GlassPanel({ className, children }) {
  return <div className={cn('glass-panel cinematic-shadow border border-white/10', className)}>{children}</div>
}