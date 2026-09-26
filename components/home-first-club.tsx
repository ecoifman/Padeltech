import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui-layout"
import { bookHref } from "@/lib/booking"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"

export function HomeFirstClub({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section id="club" className="scroll-mt-24 bg-cream py-16 md:py-24">
      <Container className="max-w-3xl">
        <p className="text-[0.7rem] font-light tracking-[0.28em] text-navy/45">
          {t.firstClub.kicker}
        </p>
        <h2 className="mt-4 text-3xl font-light leading-[1.15] md:text-5xl">
          {t.firstClub.title}
        </h2>
        <p className="mt-4 text-[0.75rem] font-light tracking-[0.22em] text-navy/50">
          {t.firstClub.coming}
        </p>
        <p className="mt-6 max-w-xl text-base font-light leading-8 text-navy/75">
          {t.firstClub.body}
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            render={<Link href={bookHref(locale)} />}
            nativeButton={false}
          >
            {t.hero.primary}
          </Button>
        </div>
      </Container>
    </section>
  )
}
