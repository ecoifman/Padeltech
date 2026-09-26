import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PropertyForm } from "@/components/property-form"
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
  return {
    title: `${t.nav.partners} — ${t.hero.brand}`,
    description: t.partnersPage.body,
  }
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)

  return (
    <section className="bg-cream py-16 md:py-24">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <h1 className="text-4xl leading-[1.08] md:text-6xl">
            {t.partnersPage.title}
            <span className="mt-2 block">{t.partnersPage.titleLine2}</span>
          </h1>
          <p className="mt-6 text-base leading-8 text-navy/80 md:text-lg">
            {t.partnersPage.body}
          </p>
          <p className="mt-4 text-base leading-8 text-navy/80">
            {t.partnersPage.audience}
          </p>
          <h2 className="mt-10 text-2xl">{t.partnersPage.includeTitle}</h2>
          <ul className="mt-5 space-y-3 text-base leading-7 text-navy/80">
            {t.partnersPage.include.map((item) => (
              <li key={item} className="border-s-2 border-lime ps-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <PropertyForm t={t} source="partners" />
      </Container>
    </section>
  )
}
