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
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <Container>
          <h1 className="type-h1 max-w-3xl">{t.wellnessPage.title}</h1>
          <p className="type-lead mt-6 max-w-prose text-muted-foreground">{t.wellnessPage.lead}</p>
        </Container>
      </section>

      <BrandImage
        src="/brand/cinema/cinema-night-rally.png"
        alt=""
        simLabel={t.sim}
        className="aspect-[16/10] md:aspect-[21/9]"
        sizes="100vw"
      />

      <section className="dark bg-background py-16 text-foreground md:py-24 lg:py-32">
        <Container className="grid gap-12 md:grid-cols-3">
          {ideas.map((item) => (
            <div key={item.title} className="border-s-2 border-lime ps-5 md:ps-8">
              <h2 className="type-h3">{item.title}</h2>
              <p className="type-body mt-3 text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
          <p className="type-small max-w-2xl text-muted-foreground md:col-span-3">
            {t.wellnessPage.close}
          </p>
        </Container>
      </section>

      <section id="signup" className="scroll-mt-20 bg-background py-16 md:py-24 lg:py-32">
        <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
          <h2 className="type-h2">{t.wellnessPage.cta}</h2>
          <ActivityForm t={t} source="wellness" defaultInterest="wellness" />
        </Container>
      </section>
    </>
  )
}
