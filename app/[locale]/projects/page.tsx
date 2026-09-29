import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { MakerGallery } from "@/components/maker"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { makerCountries } from "@/lib/maker"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.projects, description: t.v2.maker.galleryLead }))
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const m = t.v2.maker

  return (
    <>
      <Section>
        <SectionHeader as="h1" eyebrow={m.worldTitle} title={m.galleryTitle} lead={m.galleryLead} />
        <div className="mt-10 border-t border-border pt-6">
          <p className="type-eyebrow">{m.countriesTitle}</p>
          <p className="type-body mt-2">{makerCountries.map((c) => m.countries[c]).join(" · ")}</p>
        </div>
      </Section>
      <Section className="pt-0 md:pt-0 lg:pt-0">
        <MakerGallery t={t} />
      </Section>
    </>
  )
}
