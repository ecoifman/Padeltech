import Image from "next/image"

import { cn } from "@/lib/utils"

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <span
      dir="ltr"
      className={cn(
        "relative inline-block h-8 w-[148px] shrink-0 md:h-9 md:w-[166px]",
        className
      )}
    >
      <Image
        src={inverted ? "/brand/logo-on-dark.png" : "/brand/logo.png"}
        alt="PADELTECH"
        fill
        priority
        sizes="166px"
        className="object-contain object-left"
      />
    </span>
  )
}
