import Link from "next/link"
import { CalendarDays, MapPin, QrCode, ScanLine } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui-layout"
import { bookHref } from "@/lib/booking"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"

const icons = [QrCode, CalendarDays, MapPin, ScanLine]

export function HomePlayFlow({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section id="play" className="scroll-mt-24 bg-cream py-16 md:py-24">
      <Container>
        <p className="text-[0.7rem] font-light tracking-[0.28em] text-navy/40">
          {t.bookStrip.kicker}
        </p>
        <h2 className="mt-4 max-w-xl text-3xl font-light leading-[1.15] md:text-4xl">
          {t.bookStrip.title}
        </h2>
        <p className="mt-5 max-w-lg text-base font-light leading-8 text-navy/65">
          {t.bookStrip.body}
        </p>

        <ol className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {t.bookStrip.steps.map((step, index) => {
            const Icon = icons[index] ?? QrCode
            return (
              <li
                key={step.label}
                className="relative border-t border-navy/12 px-0 py-8 lg:border-t-0 lg:border-s lg:px-6 lg:py-0 first:lg:border-s-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[0.7rem] font-light tracking-[0.22em] text-navy/35">
                    {step.label}
                  </span>
                  <Icon className="size-8 stroke-[1.25] text-navy" aria-hidden />
                </div>
                {index === 0 ? <ScanMark /> : null}
                {index === 1 ? <CalendarMark times={t.bookPage.times.slice(0, 4)} /> : null}
                <h3 className="mt-8 text-xl font-light">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm font-light leading-7 text-navy/65">
                  {step.body}
                </p>
              </li>
            )
          })}
        </ol>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            render={<Link href={bookHref(locale)} />}
            nativeButton={false}
          >
            {t.bookStrip.cta}
          </Button>
          <p className="max-w-md text-sm font-light leading-6 text-navy/50">
            {t.bookStrip.pending}
          </p>
        </div>
      </Container>
    </section>
  )
}

function ScanMark() {
  const cells = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1]
  return (
    <div
      className="mt-6 grid size-16 grid-cols-5 grid-rows-5 gap-0.5 border border-navy p-1.5"
      aria-hidden
    >
      {cells.map((on, i) => (
        <span key={i} className={on ? "bg-navy" : "bg-transparent"} />
      ))}
    </div>
  )
}

function CalendarMark({ times }: { times: string[] }) {
  return (
    <div className="mt-6 w-36 border border-navy/20" aria-hidden>
      <div className="grid grid-cols-7 gap-px border-b border-navy/15 p-2">
        {Array.from({ length: 14 }, (_, i) => (
          <span
            key={i}
            className={`h-2.5 w-full ${i === 9 ? "bg-navy" : "bg-navy/15"}`}
          />
        ))}
      </div>
      <p dir="ltr" className="px-2 py-1.5 text-[0.65rem] font-light tracking-[0.12em] text-navy/50">
        {times[2]}
      </p>
    </div>
  )
}
