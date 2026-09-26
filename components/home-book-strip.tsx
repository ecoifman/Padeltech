import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui-layout"
import { bookHref } from "@/lib/booking"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"

export function HomeBookStrip({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section id="book" className="scroll-mt-24 bg-cream py-16 md:py-24">
      <Container>
        <p className="text-[0.7rem] font-light tracking-[0.28em] text-navy/45">
          {t.bookStrip.kicker}
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-light leading-[1.15] md:text-5xl">
          {t.bookStrip.title}
        </h2>
        <p className="mt-5 max-w-xl text-base font-light leading-8 text-navy/70">
          {t.bookStrip.body}
        </p>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.bookStrip.steps.map((step) => (
            <li key={step.label} className="border-t border-navy/10 pt-5">
              <p className="text-[0.7rem] font-light tracking-[0.2em] text-navy/40">
                {step.label}
              </p>
              <p className="mt-3 text-xl font-light">{step.title}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            render={<Link href={bookHref(locale)} />}
            nativeButton={false}
          >
            {t.bookStrip.cta}
          </Button>
          <p className="max-w-md text-sm font-light leading-6 text-navy/55">
            {t.bookStrip.pending}
          </p>
        </div>
      </Container>
    </section>
  )
}
