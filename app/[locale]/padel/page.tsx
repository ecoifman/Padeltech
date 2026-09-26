import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ActivityForm } from "@/components/activity-form"
import { BrandImage } from "@/components/brand-image"
import { Container } from "@/components/ui-layout"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { isActivityInterest } from "@/lib/options"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getCopy(locale)
  return { title: `${t.nav.padel} — ${t.hero.brand}`, description: t.padelPage.lead }
}

export default async function PadelPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ interest?: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const query = await searchParams
  const t = getCopy(locale)
  const interest =
    query.interest && isActivityInterest(query.interest) ? query.interest : ""

  return (
    <>
      <section className="bg-navy pt-8 text-cream md:pt-10">
        <Container className="grid gap-10 py-12 md:grid-cols-2 md:items-end md:py-20">
          <div>
            <h1 className="text-4xl leading-[1.08] md:text-6xl">{t.padelPage.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-cream/80 md:text-lg">
              {t.padelPage.lead}
            </p>
          </div>
          <BrandImage
            src="/brand/cinema/film-play.jpg"
            alt=""
            simLabel={t.sim}
            className="aspect-[16/11] min-h-56"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-4xl">{t.padelPage.beginnersTitle}</h2>
            <p className="mt-5 text-base leading-8 text-navy/80">
              {t.padelPage.beginnersBody}
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl">{t.padelPage.stagesTitle}</h2>
            <p className="mt-5 text-base leading-8 text-navy/80">
              {t.padelPage.stagesBody}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-16 md:pb-24">
        <Container className="grid gap-10 border-t border-navy/10 pt-14 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl md:text-4xl">{t.padelPage.cta}</h2>
          </div>
          <ActivityForm
            key={interest || "none"}
            t={t}
            source="padel"
            defaultInterest={interest}
          />
        </Container>
      </section>
    </>
  )
}
