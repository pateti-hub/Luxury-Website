"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { LuxuryButton } from '@/components/ui/LuxuryButton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlassPanel } from '@/components/ui/GlassPanel'

export function ConciergeCTA() {
  const [formState, setFormState] = useState({ name: '', email: '', interest: '' })

  const submit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Private viewing request')
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nInterest: ${formState.interest}`)
    window.location.href = `mailto:concierge@noirestate.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="concierge" className="relative border-t border-white/8 bg-[#0d0c0a] py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Concierge"
          title="Request a private introduction to the collection."
          description="A discreet contact experience for buyers, advisors, and principals seeking a direct conversation."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <GlassPanel className="rounded-[2rem] p-6 sm:p-8">
            <p className="max-w-xl text-sm leading-8 text-white/70">
              We curate opportunities across coastal estates, urban penthouses, and singular architectural homes. Share your priorities and the concierge team will respond with a tailored introduction.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-white/64 sm:grid-cols-2">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.34em] text-white/42">Direct line</p>
                <a href="tel:+13105550123" className="mt-2 block text-alabaster focus-ring">
                  +1 (310) 555-0123
                </a>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.34em] text-white/42">Email</p>
                <a href="mailto:concierge@noirestate.com" className="mt-2 block text-alabaster focus-ring">
                  concierge@noirestate.com
                </a>
              </div>
            </div>
          </GlassPanel>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm text-white/70">
                Name
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
                  className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-alabaster placeholder:text-white/30"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/70">
                Email
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                  className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-alabaster placeholder:text-white/30"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/70">
                Interest
                <textarea
                  rows={5}
                  value={formState.interest}
                  onChange={(event) => setFormState((current) => ({ ...current, interest: event.target.value }))}
                  className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-alabaster placeholder:text-white/30"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs uppercase tracking-[0.32em] text-white/42">Private response within one business day</p>
              <LuxuryButton type="submit" className="sm:min-w-[220px]">
                <Send size={16} />
                Send Inquiry
              </LuxuryButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}