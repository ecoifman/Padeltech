import { notFound } from "next/navigation"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import { BusinessForm } from "@/components/business-form"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.operators, description: t.v2.operators.lead }))
}

const productImages = [
  "/brand/cinema/cinema-glass-play.png",
  "/brand/equipment/02-pro.jpg",
  "/brand/cinema/cinema-club-arrival.png",
  "/brand/cinema/experience-lifestyle.jpg",
]

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
      <Section className="border-t border-border bg-card">
        <SectionHeader title={o.productsTitle} />
        <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {o.products.map((item, index) => (
            <li key={item.title} className="flex flex-col">
              <BrandImage
                src={productImages.at(index) ?? productImages[0]}
                alt=""
                simLabel={index === 1 ? undefined : t.sim}
                className="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <h3 className="type-h3 mt-6">{item.title}</h3>
              <p className="type-small mt-2 text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section id="contact">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeader title={o.formTitle} lead={o.formBody} />
          <BusinessForm t={t} source="operators" audience="operator" />
        </div>
      </Section>
    </>
  )
}
