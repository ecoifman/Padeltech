import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { PropertyForm } from "@/components/property-form"
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
    title: `${t.nav.developers} — ${t.hero.brand}`,
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
    <>
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
          <div>
            <SectionHeader
              as="h1"
              eyebrow={t.v2.developers.eyebrow}
              title={t.partnersPage.title}
              titleLine2={t.partnersPage.titleLine2}
              lead={t.partnersPage.body}
            />
            <p className="type-body mt-4 max-w-prose text-muted-foreground">
              {t.partnersPage.audience}
            </p>
            <h2 className="type-h3 mt-12">{t.partnersPage.includeTitle}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {t.partnersPage.include.map((item) => (
                <li key={item} className="type-body border-s-2 border-lime ps-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <PropertyForm t={t} source="partners" />
        </div>
      </Section>
      <Section className="border-t border-border bg-card">
        <SectionHeader title={t.v2.developers.needsTitle} />
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.v2.developers.needs.map((item) => (
            <li key={item.title} className="border-t border-border pt-6">
              <h3 className="type-h3">{item.title}</h3>
              <p className="type-small mt-3 text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
