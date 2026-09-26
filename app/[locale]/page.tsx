import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { HomeCloser } from "@/components/home-closer"
import { HomeCommunity } from "@/components/home-community"
import { HomeCourts } from "@/components/home-courts"
import { HomeEquipment } from "@/components/home-equipment"
import { HomeExperience } from "@/components/home-experience"
import { HomeFirstClub } from "@/components/home-first-club"
import { HomeHero } from "@/components/home-hero"
import { HomePlayFlow } from "@/components/home-play-flow"
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
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      images: ["/brand/cinema/hero-poster.jpg"],
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

  return (
    <>
      <HomeHero locale={locale} t={t} />
      <HomeExperience t={t} />
      <HomePlayFlow locale={locale} t={t} />
      <HomeCourts t={t} />
      <HomeCommunity t={t} />
      <HomeEquipment t={t} />
      <HomeFirstClub locale={locale} t={t} />
      <HomeCloser t={t} />
    </>
  )
}
