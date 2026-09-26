import Link from "next/link"

import { Button } from "@/components/ui/button"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { regions, type Region } from "@/lib/options"
import { signupHref } from "@/lib/paths"
import { cn } from "@/lib/utils"

export function RegionPicker({
  locale,
  t,
  page = "clubs",
  tone = "cream",
  className,
}: {
  locale: Locale
  t: Copy
  page?: "home" | "clubs"
  tone?: "cream" | "navy"
  className?: string
}) {
  const navy = tone === "navy"
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <div className="flex flex-wrap gap-2">
        {regions.map((region: Region) => (
          <Button
            key={region}
            size="lg"
            variant={navy ? "inverse" : "outline"}
            className={cn(
              "rounded-full",
              !navy && "border-navy/20 bg-transparent text-navy hover:bg-navy hover:text-cream"
            )}
            render={
              <Link href={signupHref(locale, { region }, page === "home" ? "home" : "clubs")} />
            }
            nativeButton={false}
          >
            {t.regionLabels[region]}
          </Button>
        ))}
      </div>
      <p
        className={cn(
          "max-w-xl text-sm leading-6",
          navy ? "text-cream/60" : "text-muted-foreground"
        )}
      >
        {t.clubsHome.disclaimer}
      </p>
    </div>
  )
}
