import { notFound } from "next/navigation"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.about, description: t.v2.about.lead }))
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const a = t.v2.about

  return (
    <>
      <Section tone="dark">
        <SectionHeader as="h1" eyebrow={a.eyebrow} title={a.title} lead={a.lead} />
      </Section>
      <BrandImage
        src="/brand/cinema/closer-evening.jpg"
        alt=""
        simLabel={t.sim}
        className="aspect-[16/10] md:aspect-[21/9]"
        sizes="100vw"
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <p className="type-lead max-w-prose">{a.body}</p>
          <div>
            <h2 className="type-h3">{a.teamTitle}</h2>
            <p className="type-body mt-4 border border-dashed border-border p-6 text-muted-foreground">
              {a.teamPending}
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
