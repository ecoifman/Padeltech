"use client"

import { useState } from "react"
import Image from "next/image"

import { SimBadge } from "@/components/brand/section"
import { cn } from "@/lib/utils"

/**
 * next/image inside a navy frame. If the file is missing the image hides
 * itself, leaving a clean navy block instead of a broken-image icon.
 */
export function BrandImage({
  src,
  alt,
  simLabel,
  className,
  sizes = "100vw",
  priority = false,
}: {
  src: string
  alt: string
  simLabel?: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className={cn("relative w-full overflow-hidden bg-ink", className)}>
      {failed ? null : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
      {simLabel ? <SimBadge label={simLabel} /> : null}
    </figure>
  )
}
