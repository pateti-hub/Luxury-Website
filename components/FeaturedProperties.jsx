"use client"

import { useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MapPin, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { LazyVideo } from '@/components/ui/LazyVideo'

gsap.registerPlugin(ScrollTrigger)

const properties = [
  {
    name: 'Casa Lumen',
    location: 'Montecito Coastline',
    price: '$38.5M',
    image: '/images/penthouse-01.webp',
    video: '/videos/penthouse-render-series.mp4',
    poster: '/images/penthouse-01.webp',
    mediaType: 'video',
    note: 'Marble, oak, and a horizon-facing salon composed for long dinners and late light.',
  },
  {
    name: 'The Observatory',
    location: 'Upper Pacific Heights',
    price: '$21.2M',
    image: '/images/penthouse-02.webp',
    poster: '/images/penthouse-02.webp',
    mediaType: 'image',
    note: 'A sky-level residence with sculptural interiors and a private rooftop thermal pool.',
  },
  {
    name: 'Noir Pavilion',
    location: 'Beverly Hills Post Office',
    price: '$44.0M',
    image: '/images/penthouse-03.webp',
    poster: '/images/penthouse-03.webp',
    mediaType: 'image',
    note: 'A composition of stone, steel, and glass with a gallery-like procession of spaces.',
  },
  {
    name: 'The Terrace Vault',
    location: 'Malibu Canyon Edge',
    price: '$29.8M',
    image: '/images/drone-estate-01.webp',
    video: '/videos/drone-estate-01.mp4',
    poster: '/images/drone-estate-01.webp',
    mediaType: 'video',
    note: 'A landscape-led estate where structure disappears into terrain and reflective water.',
  },
]

export function FeaturedProperties() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    if (prefersReducedMotion || !isDesktop || !sectionRef.current || !trackRef.current) return undefined

    const section = sectionRef.current
    const track = trackRef.current
    const panels = gsap.utils.toArray(track.children)
    const totalWidth = panels.reduce((sum, panel) => sum + panel.getBoundingClientRect().width, 0)

    const tween = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: () => Math.min(0, section.clientWidth - totalWidth - 96),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.max(1200, totalWidth)}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [prefersReducedMotion])

  const cards = useMemo(() => properties, [])

  return (
    <section id="properties" ref={sectionRef} className="section-surface relative bg-obsidian py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Properties"
          title="A horizontal gallery of private architectural statements."
          description="Pinned storytelling, layered depth, and editorial scale for residences that read like collectible objects, with moving film frames threaded through the collection."
        />

        <div className="mt-12 overflow-hidden">
          <div ref={trackRef} className="grid gap-6 will-change-transform lg:flex lg:w-max lg:gap-8">
            {cards.map((property, index) => (
              <motion.article key={property.name} whileHover={prefersReducedMotion ? undefined : { y: -4 }} transition={{ duration: 0.25 }} className="w-full flex-none sm:w-[66vw] lg:w-[36rem] xl:w-[40rem]">
                <GlassPanel className="group luxury-halo relative h-full overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {property.mediaType === 'video' ? (
                      <LazyVideo
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                        src={property.video}
                        poster={property.poster}
                      />
                    ) : (
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.06]"
                        sizes="(min-width: 1280px) 40rem, (min-width: 640px) 66vw, 84vw"
                        priority={index === 0}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="vignette-overlay" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/62">
                        <span>{property.location}</span>
                        <span>{property.price}</span>
                      </div>
                      <h3 className="editorial-title mt-4 text-[clamp(2.8rem,4vw,4.6rem)] leading-[0.88] text-alabaster">{property.name}</h3>
                    </div>
                  </div>

                  <div className="space-y-4 p-6 sm:p-8">
                    <p className="editorial-copy text-white/68">{property.note}</p>
                    <div className="flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.32em] text-white/44">
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={14} />
                        Private address
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Sparkles size={14} />
                        Curated release
                      </span>
                    </div>
                  </div>
                </GlassPanel>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}