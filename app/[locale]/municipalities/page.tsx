import { notFound } from "next/navigation"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import { BusinessForm } from "@/components/business-form"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.municipalities, description: t.v2.municipalities.lead }))
}

export default async function MunicipalitiesPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const m = t.v2.municipalities

  return (
    <>
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <SectionHeader as="h1" eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
          <BrandImage
            src="/brand/cinema/film-aerial-clean.jpg"
            alt=""
            simLabel={t.sim}
            className="aspect-[4/3]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader title={m.modelsTitle} lead={m.modelsNote} />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-start">
            <thead>
              <tr className="border-b border-foreground">
                <th scope="col" className="type-eyebrow py-3 pe-6 text-start font-medium">{m.modelsHead.name}</th>
                <th scope="col" className="type-eyebrow py-3 pe-6 text-start font-medium">{m.modelsHead.invests}</th>
                <th scope="col" className="type-eyebrow py-3 pe-6 text-start font-medium">{m.modelsHead.operates}</th>
                <th scope="col" className="type-eyebrow py-3 text-start font-medium">{m.modelsHead.gets}</th>
              </tr>
            </thead>
            <tbody>
              {m.models.map((row) => (
                <tr key={row.name} className="border-b border-border align-top">
                  <th scope="row" className="type-h3 py-5 pe-6 text-start">{row.name}</th>
                  <td className="type-body py-5 pe-6">{row.invests}</td>
                  <td className="type-body py-5 pe-6">{row.operates}</td>
                  <td className="type-body py-5 text-muted-foreground">{row.gets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeader title={m.residentsTitle} />
        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {m.residents.map((item) => (
            <li key={item.title} className="border-t border-border pt-6">
              <h3 className="type-h3">{item.title}</h3>
              <p className="type-small mt-3 text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-6 md:grid-cols-2 md:gap-16">
          <SectionHeader title={m.neighboursTitle} />
          <p className="type-lead text-muted-foreground">{m.neighbours}</p>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeader title={m.tenderTitle} />
            <ul className="mt-8 flex flex-col gap-3">
              {m.tender.map((item) => (
                <li key={item} className="type-body border-s-2 border-foreground ps-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="type-small mt-6 text-muted-foreground">{m.tenderNote}</p>
          </div>
          <div id="contact" className="scroll-mt-24">
            <h2 className="type-h2">{m.formTitle}</h2>
            <p className="type-body mt-3 text-muted-foreground">{m.formBody}</p>
            <div className="mt-8">
              <BusinessForm t={t} source="municipalities" audience="municipal" />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
