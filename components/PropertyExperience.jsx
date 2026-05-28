"use client"

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassPanel } from '@/components/ui/GlassPanel'
import { LazyVideo } from '@/components/ui/LazyVideo'

const InteractiveTour = dynamic(() => import('@/components/InteractiveTour').then((mod) => mod.InteractiveTour), {
  ssr: false,
  loading: () => <div className="h-[32rem] rounded-[2rem] border border-white/8 bg-black/40" />,
})

const facts = [
  ['Interior', '7,800 sq ft'],
  ['Bedrooms', '5 suites'],
  ['Outdoor', 'Infinity terrace'],
  ['Amenity', 'Private spa floor'],
]

export function PropertyExperience() {
  return (
    <section id="tour" className="section-surface relative border-t border-white/8 bg-obsidian py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Property Experience"
          title="A cinematic detail study, with a live 3D room under glass."
          description="Hover notes, floorplan overlays, and a spatial model with restrained motion and reflective materials."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="grid gap-6">
            <GlassPanel className="luxury-halo rounded-[2rem] p-6 sm:p-8">
              <p className="luxury-kicker">Private viewing</p>
              <div className="mt-5 grid gap-4 rounded-[1.5rem] border border-white/8 bg-black/20 p-4 sm:grid-cols-[1.1fr_0.9fr] sm:p-5">
                <div className="relative min-h-[14rem] overflow-hidden rounded-[1.25rem]">
                  <LazyVideo className="h-full w-full object-cover" src="/videos/penthouse-render-series.mp4" poster="/images/penthouse-02.webp" />
                  <div className="vignette-overlay" />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="editorial-title text-[clamp(2rem,3vw,3rem)] leading-[0.95] text-alabaster">An edited sequence of arrival, light, and scale.</h3>
                    <p className="editorial-copy mt-4 text-white/68">
                      The room opens with a slow camera drift, then resolves into a precise floorplan, a reflective model, and an atmosphere that feels discreet.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {facts.slice(0, 2).map(([label, value]) => (
                      <div key={label} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                        <p className="text-[0.62rem] uppercase tracking-[0.34em] text-white/42">{label}</p>
                        <p className="editorial-title mt-2 text-xl text-alabaster">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {facts.map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-white/8 bg-white/5 p-4">
                    <p className="text-[0.62rem] uppercase tracking-[0.34em] text-white/42">{label}</p>
                    <p className="editorial-title mt-3 text-2xl text-alabaster">{value}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>

            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2">
              <GlassPanel className="overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/floorplan-01.webp" alt="Architectural floorplan study one" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
                </div>
              </GlassPanel>
              <GlassPanel className="overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/floorplan-02.webp" alt="Architectural floorplan study two" fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
                </div>
              </GlassPanel>
            </motion.div>
          </div>

          <GlassPanel className="rounded-[2rem] p-4 sm:p-6 lg:p-8">
            <InteractiveTour />
          </GlassPanel>
        </div>
      </div>
    </section>
  )
}