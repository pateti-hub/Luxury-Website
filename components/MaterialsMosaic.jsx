"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { LazyVideo } from '@/components/ui/LazyVideo'

const mosaicTiles = [
  {
    title: 'Refined surface',
    copy: 'Marble, glass, and grain create a tactile rhythm that keeps the page from feeling empty.',
    src: '/images/texture-marble.webp',
    kind: 'image',
  },
  {
    title: 'Coastal aerial',
    copy: 'A wider estate frame grounds the collection and fills the whitespace between sections.',
    src: '/images/drone-estate-02.webp',
    kind: 'image',
  },
  {
    title: 'Architectural drift',
    copy: 'A moving detail sequence keeps the composition alive without turning aggressive.',
    src: '/videos/architecture-detail-02.mp4',
    poster: '/images/architecture-detail-02.webp',
    kind: 'video',
  },
  {
    title: 'Lifestyle frame',
    copy: 'Silhouettes and interior light add scale and softness to the editorial pacing.',
    src: '/videos/lifestyle-02.mp4',
    poster: '/images/lifestyle-02.webp',
    kind: 'video',
  },
]

export function MaterialsMosaic() {
  return (
    <section className="section-surface relative border-t border-white/8 bg-[#0b0a09] py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Material Atlas"
          title="A denser editorial band that uses the remaining estate imagery as atmosphere."
          description="These layered studies keep the page visually continuous and make the luxury feel intentional rather than sparse."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85 }}
          >
            <GlassPanel className="luxury-halo h-full overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <p className="luxury-kicker">Collection studies</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem]">
                  <Image src="/images/texture-glass.webp" alt="Frosted glass texture" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
                  <div className="vignette-overlay" />
                </div>
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem]">
                  <Image src="/images/texture-grain.webp" alt="Film grain texture" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
                  <div className="vignette-overlay" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/8 bg-black/20 p-4 sm:grid-cols-[1fr_auto] sm:items-end sm:p-5">
                <div>
                  <h3 className="editorial-title text-[clamp(2rem,3vw,3rem)] leading-[0.95] text-alabaster">Surface, reflection, and measured grain.</h3>
                  <p className="editorial-copy mt-4 max-w-2xl text-white/68">
                    The textures are not decoration. They are the visual glue that keeps the luxury atmosphere consistent between the larger frames.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-[0.64rem] uppercase tracking-[0.34em] text-white/50">
                  Private collection
                </div>
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="grid gap-4"
          >
            {mosaicTiles.map((tile) => (
              <GlassPanel key={tile.title} className="overflow-hidden rounded-[2rem]">
                <div className="grid gap-0 md:grid-cols-[1fr_0.9fr]">
                  <div className="relative min-h-[14rem] overflow-hidden">
                    {tile.kind === 'video' ? (
                      <LazyVideo className="h-full w-full object-cover" src={tile.src} poster={tile.poster} />
                    ) : (
                      <Image src={tile.src} alt={tile.title} fill className="object-cover" sizes="(min-width: 768px) 20rem, 100vw" />
                    )}
                    <div className="vignette-overlay" />
                  </div>
                  <div className="flex flex-col justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <p className="luxury-kicker">{tile.title}</p>
                      <p className="editorial-copy mt-4 text-white/68">{tile.copy}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/8 pt-4 text-[0.64rem] uppercase tracking-[0.34em] text-white/42">
                      <span>Estate frame</span>
                      <span>Layered motion</span>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}