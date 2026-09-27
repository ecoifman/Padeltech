import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { BusinessForm } from "@/components/business-form"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.operators, description: t.v2.operators.lead }))
}

export default async function OperatorsPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const o = t.v2.operators

  return (
    <>
      <Section>
        <SectionHeader as="h1" eyebrow={o.eyebrow} title={o.title} lead={o.lead} />
      </Section>
      <Section className="border-t border-border">
        <SectionHeader title={o.productsTitle} />
        <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {o.products.map((item) => (
            <li key={item.title} className="flex flex-col border-t border-border pt-6">
              <h3 className="type-h3">{item.title}</h3>
              <p className="type-small mt-2 text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="contact" className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeader title={o.formTitle} lead={o.formBody} />
          <BusinessForm t={t} source="operators" audience="operator" />
        </div>
      </Section>
    </>
  )
}
