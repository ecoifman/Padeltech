import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { HomeHero } from "@/components/home-hero"
import {
  HomeDoors,
  HomeMeeting,
  HomePlayersBand,
  HomeProcess,
} from "@/components/v2-home"
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
    title: t.meta.title,
    description: t.v2.hero.body,
    alternates: { languages: { he: "/he", en: "/en" } },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "he" ? "he_IL" : "en_US",
      images: ["/brand/cinema/hero-poster-clean.jpg"],
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)

  // v2: business audiences first, proof next, players last.
  return (
    <>
      <HomeHero locale={locale} t={t} />
      <HomeDoors locale={locale} t={t} />
      <HomeProcess t={t} />
      <HomePlayersBand locale={locale} t={t} />
      <HomeMeeting locale={locale} t={t} />
    </>
  )
}
