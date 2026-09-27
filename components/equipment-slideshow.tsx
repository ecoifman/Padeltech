"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const [missing, setMissing] = useState<Record<string, boolean>>({})

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
    <div className="relative overflow-hidden bg-ink">
      <div className="relative aspect-[16/9] min-h-[18rem] w-full">
        {slides.map((slide, i) =>
          missing[slide.src] ? null : (
            <Image
              key={slide.src}
              src={slide.src}
              alt={i === index ? slide.alt : ""}
              fill
              sizes="100vw"
              priority={i === 0}
              className="pointer-events-none object-cover transition-opacity duration-700"
              style={{ opacity: i === index ? 1 : 0 }}
              onError={() => setMissing((m) => ({ ...m, [slide.src]: true }))}
            />
          )
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-4 z-10 flex items-end justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <p className="type-eyebrow text-paper" lang="en">
          {slides[index]?.label}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="pointer-events-auto inline-flex min-h-11 min-w-11 items-center justify-center text-paper/70 hover:text-paper"
            aria-label={prevLabel}
            onClick={() => go(index - 1)}
          >
            <ChevronLeft className="size-5 rtl:-scale-x-100" aria-hidden />
          </button>
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={slide.label}
              aria-current={i === index}
              className={`pointer-events-auto relative size-2 rounded-full after:absolute after:-inset-[18px] after:content-[''] ${
                i === index ? "bg-paper" : "bg-paper/35"
              }`}
              onClick={() => go(i)}
            />
          ))}
          <button
            type="button"
            className="pointer-events-auto inline-flex min-h-11 min-w-11 items-center justify-center text-paper/70 hover:text-paper"
            aria-label={nextLabel}
            onClick={() => go(index + 1)}
          >
            <ChevronRight className="size-5 rtl:-scale-x-100" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}
