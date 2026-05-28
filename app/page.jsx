import { LuxuryNavbar } from '@/components/LuxuryNavbar'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedProperties } from '@/components/FeaturedProperties'
import { ArchitecturalShowcase } from '@/components/ArchitecturalShowcase'
import { MaterialsMosaic } from '@/components/MaterialsMosaic'
import { PropertyExperience } from '@/components/PropertyExperience'
import { LifestyleEditorial } from '@/components/LifestyleEditorial'
import { Testimonials } from '@/components/Testimonials'
import { ConciergeCTA } from '@/components/ConciergeCTA'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="overflow-x-clip bg-obsidian text-alabaster">
      <LuxuryNavbar />
      <HeroSection />
      <FeaturedProperties />
      <ArchitecturalShowcase />
      <MaterialsMosaic />
      <PropertyExperience />
      <LifestyleEditorial />
      <Testimonials />
      <ConciergeCTA />
      <Footer />
    </main>
  )
}