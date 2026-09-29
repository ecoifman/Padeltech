import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { BusinessForm } from "@/components/business-form"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.developers, description: t.v2.developers.lead }))
}

export default async function DevelopersPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const d = t.v2.developers

  return (
    <>
      <Section>
        <SectionHeader as="h1" eyebrow={d.eyebrow} title={d.title} lead={d.lead} />
      </Section>
      <Section className="border-t border-border">
        <SectionHeader title={d.needsTitle} />
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {d.needs.map((item) => (
            <li key={item.title} className="border-t border-border pt-6">
              <h3 className="type-h3">{item.title}</h3>
              <p className="type-body mt-3 text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="border-t border-border">
        <SectionHeader title={d.specialTitle} />
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {d.special.map((item) => (
            <li key={item.title} className="border-t border-foreground pt-6">
              <h3 className="type-h3">{item.title}</h3>
              <p className="type-body mt-3 text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="contact" className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeader title={d.formTitle} lead={d.formBody} />
          <BusinessForm t={t} source="developers" audience="developer" />
        </div>
      </Section>
    </>
  )
}
