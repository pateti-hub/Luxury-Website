"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MagneticCard } from '@/components/ui/MagneticCard'

const frames = [
  { src: '/images/lifestyle-01.webp', alt: 'Editorial lifestyle moment one' },
  { src: '/images/lifestyle-02.webp', alt: 'Editorial lifestyle moment two' },
]

export function LifestyleEditorial() {
  return (
    <section className="relative border-t border-white/8 bg-[#0c0b09] py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lifestyle Editorial"
          title="Fashion-house cinematography for the way a residence is actually felt."
          description="Quiet moments, silhouettes, and tactile atmospheres designed to make the viewer want to stay longer."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid gap-6">
            <p className="max-w-xl text-base leading-8 text-white/70">
              These experiences are curated like a campaign sequence: a pause at the threshold, a soft turn into light, and a final frame that feels like a memory rather than a listing.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {frames.map((frame) => (
                <MagneticCard key={frame.src}>
                  <div className="glass-panel overflow-hidden rounded-[2rem]">
                    <div className="relative aspect-[4/5]">
                      <Image src={frame.src} alt={frame.alt} fill className="object-cover" sizes="(min-width: 1024px) 28rem, 50vw" />
                    </div>
                  </div>
                </MagneticCard>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid gap-6">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="text-[0.64rem] uppercase tracking-[0.34em] text-white/42">Editorial note</p>
              <h3 className="mt-4 max-w-2xl font-serif text-4xl text-alabaster sm:text-5xl">
                The residence becomes a stage, but never loses its privacy.
              </h3>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/68">
                Camera movement is slow, contrast is sculpted, and every image is treated as a frame from a luxury fashion story anchored in architecture.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="glass-panel rounded-[2rem] p-6">
                <p className="text-[0.64rem] uppercase tracking-[0.34em] text-white/42">Mood</p>
                <p className="mt-3 font-serif text-2xl text-gradient-luxury">Warm restraint</p>
              </div>
              <div className="glass-panel rounded-[2rem] p-6">
                <p className="text-[0.64rem] uppercase tracking-[0.34em] text-white/42">Tempo</p>
                <p className="mt-3 font-serif text-2xl text-gradient-luxury">Slow reveal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}