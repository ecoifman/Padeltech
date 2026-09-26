"use client"

import { useEffect, useState } from "react"

const cities = [
  { city: "Miami", place: "USA" },
  { city: "New York", place: "USA" },
  { city: "Madrid", place: "Europe" },
  { city: "London", place: "Europe" },
]

export function HeroNetworkCue() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % cities.length)
    }, 3400)
    return () => window.clearInterval(id)
  }, [])

  const item = cities[index]

  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[0.72rem] tracking-[0.22em] text-lime uppercase">
      <span className="text-cream/55">Worldwide</span>
      <span>{item.city}</span>
      <span className="text-cream/55">{item.place}</span>
    </p>
  )
}
