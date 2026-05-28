"use client"

import { useEffect, useRef, useState } from 'react'

export function LazyVideo({ src, poster, className, children, priority = false, ...props }) {
  const ref = useRef(null)
  const [isReady, setIsReady] = useState(priority)

  useEffect(() => {
    if (priority || !ref.current) return undefined

    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsReady(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [priority])

  return (
    <video ref={ref} className={className} poster={poster} preload={isReady ? 'metadata' : 'none'} autoPlay muted playsInline loop {...props}>
      {isReady ? <source src={src} type="video/mp4" /> : null}
      {children}
    </video>
  )
}