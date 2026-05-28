"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassPanel } from '@/components/ui/GlassPanel'

const moments = [
  {
    title: 'Material honesty',
    description: 'Concrete, brass, and smoked glass are framed as if they were fashion accessories: precise, tactile, and rare.',
    image: '/images/architecture-detail-01.webp',
  },
  {
    title: 'Spatial procession',
    description: 'The visual rhythm moves from compressed entries to open salons and then to framed exterior voids.',
    image: '/images/architecture-detail-02.webp',
  },
]

export function ArchitecturalShowcase() {
  return (
    <section id="showcase" className="section-surface relative border-t border-white/8 bg-[#0d0c0a] py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architectural Showcase"
          title="Editorial storytelling for homes that behave like monuments."
          description="Light, proportion, and silence become the primary luxuries, staged with a slower camera and layered visual depth."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="media-shell luxury-halo h-full rounded-[2rem] p-6 sm:p-8">
              <p className="luxury-kicker">Detail study</p>
              <h3 className="editorial-title mt-4 max-w-sm text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.92] text-alabaster">
                Concrete, brass, and shadow in slow motion.
              </h3>
              <p className="editorial-copy mt-5 max-w-xl text-white/68">
                The architecture is treated like a film still: crisp edges, deep contrast, and a restrained rhythm that lets the materials feel tactile.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={moments[0].image}
                    alt={moments[0].title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 28vw, 50vw"
                  />
                  <div className="vignette-overlay" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/architecture-detail-02.webp"
                  >
                    <source src="/videos/architecture-detail-01.mp4" type="video/mp4" />
                  </video>
                  <div className="vignette-overlay" />
                </div>
              </div>
            </div>
          </motion.article>

          {moments.map((moment, index) => (
            <motion.article
              key={moment.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <GlassPanel className="group overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>
                <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="luxury-kicker">Section {index + 1}</p>
                    <h3 className="editorial-title mt-3 text-[clamp(2rem,3vw,3.4rem)] leading-[0.95] text-alabaster">{moment.title}</h3>
                  </div>
                  <p className="editorial-copy max-w-xl text-white/68">{moment.description}</p>
                </div>
              </GlassPanel>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}