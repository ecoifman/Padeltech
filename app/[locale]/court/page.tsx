import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { HomeEquipment } from "@/components/home-equipment"
import { HomeStandard } from "@/components/home-standard"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.court, description: t.v2.court.lead }))
}

export default async function CourtPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const c = t.v2.court

  return (
    <>
      <Section>
        <SectionHeader as="h1" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      </Section>
      <HomeStandard t={t} />
      <HomeEquipment t={t} />
    </>
  )
}
