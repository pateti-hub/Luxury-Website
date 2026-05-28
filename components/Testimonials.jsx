import { GlassPanel } from '@/components/ui/GlassPanel'
import { SectionHeading } from '@/components/ui/SectionHeading'

const quotes = [
  {
    text: 'It feels less like a property website and more like a private screening for the architecture itself.',
    author: 'Private client, Los Angeles',
  },
  {
    text: 'The pacing, imagery, and materiality all land with the restraint of a world-class fashion campaign.',
    author: 'Principal broker, Manhattan',
  },
  {
    text: 'Every interaction is deliberate. The result is quiet, expensive, and unmistakably premium.',
    author: 'Family office advisor, London',
  },
]

export function Testimonials() {
  return (
    <section className="relative border-t border-white/8 bg-obsidian py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trust, composed with the same restraint as the site itself."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {quotes.map((quote) => (
            <GlassPanel key={quote.author} className="rounded-[2rem] p-6 sm:p-8">
              <p className="font-serif text-2xl leading-10 text-alabaster">“{quote.text}”</p>
              <p className="mt-8 text-xs uppercase tracking-[0.34em] text-white/44">{quote.author}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  )
}