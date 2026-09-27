import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { BookFlow } from "@/components/book-flow"
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
  return { title: `${t.bookPage.title} — ${t.hero.brand}`, description: t.bookPage.lead }
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
    <Section>
      <SectionHeader
        as="h1"
        eyebrow={t.bookStrip.kicker}
        title={t.bookPage.title}
        lead={t.bookPage.lead}
      />
      <div className="mt-14">
        <BookFlow t={t} />
      </div>
    </Section>
  )
}
