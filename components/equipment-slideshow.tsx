"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type Slide = {
  src: string
  label: string
  alt: string
}

export function EquipmentSlideshow({
  slides,
  prevLabel,
  nextLabel,
}: {
  slides: Slide[]
  prevLabel: string
  nextLabel: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || slides.length < 2) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, 4200)
    return () => window.clearInterval(id)
  }, [slides.length])

  const go = (next: number) => {
    const total = slides.length
    setIndex(((next % total) + total) % total)
  }

  return (
    <div className="relative overflow-hidden bg-navy">
      <div className="relative aspect-[16/9] min-h-[18rem] w-full">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={i === index ? slide.alt : ""}
            fill
            sizes="100vw"
            priority={i === 0}
            className="pointer-events-none object-cover transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-4 z-10 flex items-end justify-between gap-4 px-5 md:px-8">
        <p className="text-[0.7rem] font-light tracking-[0.22em] text-cream/85">
          {slides[index]?.label}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="pointer-events-auto min-h-11 min-w-11 text-cream/70 hover:text-cream"
            aria-label={prevLabel}
            onClick={() => go(index - 1)}
          >
            ‹
          </button>
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={slide.label}
              aria-current={i === index}
              className={`pointer-events-auto h-2 w-2 rounded-full ${
                i === index ? "bg-lime" : "bg-cream/35"
              }`}
              onClick={() => go(i)}
            />
          ))}
          <button
            type="button"
            className="pointer-events-auto min-h-11 min-w-11 text-cream/70 hover:text-cream"
            aria-label={nextLabel}
            onClick={() => go(index + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}
