"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * The PADELTECH logo. Falls back to a typographic wordmark if the logo file
 * is not available, so the header never shows a broken image.
 */
export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  const [failed, setFailed] = useState(false)

  return (
    <span
      dir="ltr"
      className={cn(
        "relative inline-flex h-8 w-[148px] shrink-0 items-center md:h-9 md:w-[166px]",
        className
      )}
    >
      {failed ? (
        <span
          className={cn(
            "text-lg font-medium tracking-widest",
            inverted ? "text-paper" : "text-ink"
          )}
        >
          PADELTECH
        </span>
      ) : (
        <Image
          src={inverted ? "/brand/logo-on-dark.png" : "/brand/logo.png"}
          alt="PADELTECH"
          fill
          priority
          sizes="166px"
          className="object-contain object-left"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  )
}
