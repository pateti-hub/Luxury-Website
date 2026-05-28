import { cn } from '@/lib/utils'

export function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <div className={cn(align === 'right' ? 'text-right' : 'text-left', className)}>
      {eyebrow ? <p className="editorial-eyebrow text-white/48">{eyebrow}</p> : null}
      <h2 className="editorial-title mt-4 max-w-5xl text-[clamp(2.8rem,5.2vw,6rem)] leading-[0.9] text-alabaster">{title}</h2>
      {description ? <p className="editorial-copy mt-5 max-w-2xl text-white/66">{description}</p> : null}
    </div>
  )
}