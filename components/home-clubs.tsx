import Link from "next/link"

import { RegionPicker } from "@/components/region-picker"
import { Button } from "@/components/ui/button"
import { Container, CopyBlock } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function HomeClubs({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section id="clubs" className="scroll-mt-24 bg-cream py-16 md:py-24">
      <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <h2 className="text-3xl leading-[1.1] md:text-5xl">{t.clubsHome.title}</h2>
          <CopyBlock
            text={t.clubsHome.body}
            className="mt-5 max-w-md text-base leading-8 text-navy/80"
          />
          <div className="mt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              render={<Link href={`${localePath(locale, "/clubs")}#regions`} />}
              nativeButton={false}
            >
              {t.clubsHome.cta}
            </Button>
          </div>
        </div>
        <RegionPicker locale={locale} t={t} page="clubs" />
      </Container>
    </section>
  )
}
