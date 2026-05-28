"use client"

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'
import { LuxuryButton } from '@/components/ui/LuxuryButton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LazyVideo } from '@/components/ui/LazyVideo'
import { heroReveal, staggerContainer } from '@/lib/animations'

const headline = 'Architectural sanctuaries for a rarified life.'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.76])
  const scale = useTransform(scrollYProgress, [0, 0.18], [1, 1.04])

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={!prefersReducedMotion ? { opacity, scale } : undefined}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster="/images/hero-poster.webp"
        >
          <source src="/videos/hero-mansion-loop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,14,12,0.14),rgba(15,14,12,0.7)_45%,rgba(10,10,10,0.96)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-obsidian" />
        <div className="noise-overlay absolute inset-0 opacity-60" />
      </motion.div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col justify-end px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="max-w-4xl">
            <motion.div variants={heroReveal} className="editorial-eyebrow mb-6 flex items-center gap-3 text-white/70">
              <span className="h-px w-12 bg-gradient-to-r from-champagne to-transparent" />
              Private Estates and Penthouse Residences
            </motion.div>

            <motion.h1
              variants={heroReveal}
              className="editorial-title max-w-5xl text-[clamp(4.25rem,10vw,11rem)] leading-[0.84] text-alabaster"
            >
              {headline.split(' ').map((word, index) => (
                <span key={word + index} className="mr-[0.2em] inline-block">
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p variants={heroReveal} className="editorial-copy mt-8 max-w-2xl text-white/72 sm:text-[1.05rem] sm:leading-9">
              A cinematic showcase for collectors of space, light, and silence. Every residence is framed like an editorial portrait, presented with the restraint of a private invitation.
            </motion.p>

            <motion.div variants={heroReveal} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <LuxuryButton href="#properties" className="sm:min-w-[220px]">
                Explore Residences
              </LuxuryButton>
              <LuxuryButton href="#tour" variant="secondary" className="sm:min-w-[220px]">
                <Play size={16} />
                Enter 3D Tour
              </LuxuryButton>
            </motion.div>
          </div>

          <motion.aside variants={heroReveal} className="grid gap-4 lg:justify-self-end">
            <SectionHeading eyebrow="Curated Portfolio" title="Quiet luxury, rendered in motion." align="right" className="max-w-md" />
            <div className="glass-panel rounded-[1.75rem] p-6 text-sm text-white/72">
              <div className="grid gap-4 border-b border-white/10 pb-4">
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-[0.3em] text-white/42">Collection</span>
                  <span className="text-alabaster">12 estates</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-[0.3em] text-white/42">Markets</span>
                  <span className="text-alabaster">Coastal, urban, alpine</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.34em] text-white/42">Signature approach</p>
                  <p className="editorial-title mt-2 text-2xl text-gradient-luxury">Editorial, immersive, restrained</p>
                </div>
                <ChevronDown className="text-white/40" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="media-shell rounded-[1.5rem]">
                <div className="relative aspect-[4/5]">
                  <LazyVideo className="h-full w-full object-cover" src="/videos/drone-estate-01.mp4" poster="/images/drone-estate-01.webp" />
                  <div className="vignette-overlay" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                  <p className="luxury-kicker">Aerial frame</p>
                  <p className="editorial-title mt-2 text-xl text-alabaster">Terrace and pool line</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="media-shell rounded-[1.5rem]">
                  <div className="relative aspect-[16/10]">
                    <Image src="/images/lifestyle-01.webp" alt="Luxury lifestyle frame" fill className="object-cover" sizes="(min-width: 640px) 20rem, 50vw" />
                    <div className="vignette-overlay" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                    <p className="luxury-kicker">Lifestyle</p>
                    <p className="editorial-title mt-2 text-xl text-alabaster">Private arrival sequence</p>
                  </div>
                </div>

                <div className="media-shell rounded-[1.5rem]">
                  <div className="relative aspect-[16/10]">
                    <LazyVideo className="h-full w-full object-cover" src="/videos/penthouse-render-series.mp4" poster="/images/penthouse-03.webp" />
                    <div className="vignette-overlay" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                    <p className="luxury-kicker">Penthouse study</p>
                    <p className="editorial-title mt-2 text-xl text-alabaster">Glass, stone, and dusk</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  )
}