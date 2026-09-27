import Link from "next/link"

import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { regions, type Region } from "@/lib/options"
import { signupHref } from "@/lib/paths"
import { cn } from "@/lib/utils"

/** Region chips. Each one opens the signup form with that region preselected. */
export function RegionPicker({
  locale,
  t,
  page = "home",
  className,
}: {
  locale: Locale
  t: Copy
  page?: "home" | "clubs"
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <ul className="flex flex-wrap gap-2">
        {regions.map((region: Region) => (
          <li key={region}>
            <Link
              href={signupHref(locale, { region }, page)}
              scroll={false}
              className="type-small inline-flex min-h-11 items-center rounded-full border border-border px-5 transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              {t.regionLabels[region]}
            </Link>
          </li>
        ))}
      </ul>
      <p className="type-small max-w-xl text-muted-foreground">{t.clubsHome.disclaimer}</p>
    </div>
  )
}
