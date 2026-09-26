"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

export function CinematicVideo({
  src,
  poster,
  className,
}: {
  src: string
  poster: string
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.playsInline = true

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduceMotion) {
      video.pause()
      return
    }

    const tryPlay = () => {
      video.muted = true
      void video.play().catch(() => undefined)
    }

    tryPlay()
    video.addEventListener("canplay", tryPlay)
    video.addEventListener("loadeddata", tryPlay)
    return () => {
      video.removeEventListener("canplay", tryPlay)
      video.removeEventListener("loadeddata", tryPlay)
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-top",
        className
      )}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
    />
  )
}
