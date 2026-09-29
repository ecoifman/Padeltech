import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { ContactChannels } from "@/components/contact-channels"
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
      <Section>
        <SectionHeader as="h1" eyebrow={a.eyebrow} title={a.title} lead={a.lead} />
      </Section>
      <Section className="border-t border-border">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <p className="type-lead max-w-prose">{a.body}</p>
          <div>
            <h2 className="type-eyebrow">{a.founderTitle}</h2>
            <p className="type-h3 mt-4">{a.founderName}</p>
            <p className="type-body mt-3 max-w-prose text-muted-foreground">{a.founderBody}</p>
            <ContactChannels t={t} className="mt-8" />
          </div>
        </div>
      </Section>
    </>
  )
}
