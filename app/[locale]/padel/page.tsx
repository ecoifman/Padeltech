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
      <section className="dark bg-background pt-8 text-foreground md:pt-10">
        <Container className="grid gap-10 py-12 md:grid-cols-2 md:items-end md:py-20">
          <div>
            <h1 className="type-h1">{t.padelPage.title}</h1>
            <p className="type-lead mt-6 max-w-xl text-muted-foreground">
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

      <section className="bg-background py-16 md:py-24 lg:py-32">
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <h2 className="type-h2">{t.padelPage.beginnersTitle}</h2>
            <p className="type-body mt-5 max-w-prose text-muted-foreground">
              {t.padelPage.beginnersBody}
            </p>
          </div>
          <div>
            <h2 className="type-h2">{t.padelPage.stagesTitle}</h2>
            <p className="type-body mt-5 max-w-prose text-muted-foreground">
              {t.padelPage.stagesBody}
            </p>
          </div>
        </Container>
      </section>

      <section id="signup" className="scroll-mt-20 bg-background pb-16 md:pb-24 lg:pb-32">
        <Container className="grid gap-10 border-t border-border pt-14 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="type-h2">{t.padelPage.cta}</h2>
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
