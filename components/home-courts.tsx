import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Section, SectionHeader } from "@/components/brand/section"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function HomeCourts({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <Section id="courts" tone="dark">
      <SectionHeader eyebrow={t.courts.kicker} title={t.courts.title} lead={t.courts.body} />
      <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {t.courts.items.map((item) => (
          <li key={item.label} className="border-t border-border pt-6">
            <h3 className="type-h3">{item.label}</h3>
            <p className="type-small mt-3 max-w-xs text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>
      <Link
        href={localePath(locale, "/court")}
        className="type-small mt-12 inline-flex min-h-11 items-center gap-2 underline-offset-8 hover:underline"
      >
        {t.courts.more}
        <ArrowLeft className="size-4 ltr:-scale-x-100" aria-hidden />
      </Link>
    </Section>
  )
}
