import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BookFlow } from "@/components/book-flow"
import { Container } from "@/components/ui-layout"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getCopy(locale)
  return { title: `${t.bookPage.title} — ${t.hero.brand}` }
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)

  return (
    <section className="bg-cream py-16 md:py-24">
      <Container className="max-w-4xl">
        <p className="text-[0.7rem] font-light tracking-[0.28em] text-navy/45">
          {t.bookStrip.kicker}
        </p>
        <h1 className="mt-4 text-4xl font-light leading-[1.1] md:text-6xl">
          {t.bookPage.title}
        </h1>
        <p className="mt-5 text-lg font-light text-navy/70">{t.bookPage.lead}</p>
        <div className="mt-14">
          <BookFlow t={t} />
        </div>
      </Container>
    </section>
  )
}
