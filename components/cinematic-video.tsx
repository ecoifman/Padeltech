"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

export function CinematicVideo({
  src,
  webmSrc,
  poster,
  className,
}: {
  src: string
  /** Optional WebM (VP9) version, offered first for browsers without H.264. */
  webmSrc?: string
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
      poster={poster}
      className={cn(
        "pointer-events-none absolute inset-0 h-full min-h-full w-full min-w-full object-cover object-top",
        className
      )}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
    >
      {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
      <source src={src} type="video/mp4" />
    </video>
  )
}
