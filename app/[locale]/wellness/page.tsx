import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ActivityForm } from "@/components/activity-form"
import { BrandImage } from "@/components/brand-image"
import { Container } from "@/components/ui-layout"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getCopy(locale)
  return {
    title: `${t.nav.wellness} — ${t.hero.brand}`,
    description: t.wellnessPage.lead,
  }
}

export default async function WellnessPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const ideas = [
    { title: t.wellnessPage.moveTitle, body: t.wellnessPage.move },
    { title: t.wellnessPage.recoverTitle, body: t.wellnessPage.recover },
    { title: t.wellnessPage.spaceTitle, body: t.wellnessPage.space },
  ]

  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-4xl leading-[1.08] md:text-6xl">{t.wellnessPage.title}</h1>
          <p className="mt-6 text-lg leading-8 text-navy/80">{t.wellnessPage.lead}</p>
        </Container>
      </section>

      <BrandImage
        src="/brand/cinema/cinema-night-rally.png"
        alt=""
        simLabel={t.sim}
        className="w-full aspect-[16/10] md:aspect-[21/9]"
        sizes="100vw"
      />

      <section className="bg-navy py-16 text-cream md:py-24">
        <Container className="flex flex-col gap-12">
          {ideas.map((item) => (
            <div key={item.title} className="border-s-2 border-lime ps-5 md:ps-8">
              <h2 className="text-xl md:text-2xl">{item.title}</h2>
              <p className="mt-3 max-w-xl text-base leading-8 text-cream/80">
                {item.body}
              </p>
            </div>
          ))}
          <p className="max-w-2xl text-base leading-8 text-cream/75">
            {t.wellnessPage.close}
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl md:text-4xl">{t.wellnessPage.cta}</h2>
          <ActivityForm t={t} source="wellness" defaultInterest="wellness" />
        </Container>
      </section>
    </>
  )
}
