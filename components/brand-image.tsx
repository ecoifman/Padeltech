import Image from "next/image"

import { cn } from "@/lib/utils"

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
  return (
    <figure className={cn("relative w-full overflow-hidden bg-navy", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {simLabel ? (
        <figcaption className="absolute bottom-3 start-3 bg-navy px-2.5 py-1 text-[0.68rem] tracking-[0.16em] text-cream">
          {simLabel}
        </figcaption>
      ) : null}
    </figure>
  )
}
