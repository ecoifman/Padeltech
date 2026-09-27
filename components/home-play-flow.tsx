import Link from "next/link"
import { CalendarDays, MapPin, QrCode, ScanLine } from "lucide-react"

import { Section, SectionHeader } from "@/components/brand/section"
import { Button } from "@/components/ui/button"
import { primaryCta } from "@/lib/booking"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"

const icons = [QrCode, CalendarDays, MapPin, ScanLine]

export function HomePlayFlow({ locale, t }: { locale: Locale; t: Copy }) {
  const cta = primaryCta(locale, t)
  return (
    <Section id="how">
      <SectionHeader
        eyebrow={t.bookStrip.kicker}
        title={t.bookStrip.title}
        lead={t.bookStrip.body}
      />
      <ol className="mt-12 grid sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {t.bookStrip.steps.map((step, index) => {
          const Icon = icons[index] ?? QrCode
          return (
            <li
              key={step.label}
              className="border-t border-border py-8 lg:border-t-0 lg:border-s lg:px-6 lg:py-0 lg:first:border-s-0 lg:first:ps-0"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="type-eyebrow type-number" dir="ltr">
                  {step.label}
                </span>
                <Icon className="size-7 stroke-[1.25]" aria-hidden />
              </div>
              <h3 className="type-h3 mt-8">{step.title}</h3>
              <p className="type-small mt-3 max-w-xs text-muted-foreground">
                {step.body}
              </p>
            </li>
          )
        })}
      </ol>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Button
          size="lg"
          className="w-full sm:w-auto"
          render={<Link href={cta.href} />}
          nativeButton={false}
        >
          {cta.label}
        </Button>
        {cta.external ? null : (
          <p className="type-small max-w-md text-muted-foreground">{t.bookStrip.pending}</p>
        )}
      </div>
    </Section>
  )
}
