import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function setupLenis() {
  if (typeof window === 'undefined') return () => {}

  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const raf = (time) => {
    lenis.raf(time)
    frame = requestAnimationFrame(raf)
  }

  let frame = requestAnimationFrame(raf)

  return () => {
    cancelAnimationFrame(frame)
    lenis.destroy()
  }
}