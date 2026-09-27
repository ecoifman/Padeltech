import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { HomeCloser } from "@/components/home-closer"
import { HomeClubs } from "@/components/home-clubs"
import { HomeCourts } from "@/components/home-courts"
import { HomeEquipment } from "@/components/home-equipment"
import { HomeExperience } from "@/components/home-experience"
import { HomeGroups } from "@/components/home-groups"
import { HomeHero } from "@/components/home-hero"
import { HomePlay } from "@/components/home-play"
import { HomePlayFlow } from "@/components/home-play-flow"
import { HomeSignup } from "@/components/home-signup"
import { HomeWellness } from "@/components/home-wellness"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { isActivityInterest, isRegion } from "@/lib/options"

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
    description: t.meta.description,
    alternates: { languages: { he: "/he", en: "/en" } },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      locale: locale === "he" ? "he_IL" : "en_US",
      images: ["/brand/cinema/hero-poster.jpg"],
    },
  }
}

export default async function HomePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ interest?: string; region?: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const query = await searchParams
  const t = getCopy(locale)
  const interest = query.interest && isActivityInterest(query.interest) ? query.interest : ""
  const region = query.region && isRegion(query.region) ? query.region : ""

  // Order follows the message map in .cursor/rules/padeltech-voice.mdc.
  return (
    <>
      <HomeHero locale={locale} t={t} />
      <HomeExperience t={t} />
      <HomePlayFlow locale={locale} t={t} />
      <HomeCourts locale={locale} t={t} />
      <HomeEquipment t={t} />
      <HomePlay locale={locale} t={t} />
      <HomeWellness locale={locale} t={t} />
      <HomeGroups locale={locale} t={t} />
      <HomeClubs locale={locale} t={t} />
      <HomeSignup t={t} defaultInterest={interest} defaultRegion={region} />
      <HomeCloser t={t} />
    </>
  )
}
