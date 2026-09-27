import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import { Button } from "@/components/ui/button"
import { primaryCta } from "@/lib/booking"
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
  return { title: `${t.nav.story} — ${t.hero.brand}`, description: t.storyPage.more }
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const cta = primaryCta(locale, t)

  return (
    <>
      <Section tone="dark">
        <SectionHeader as="h1" title={t.storyPage.title} lead={t.storyPage.body} />
      </Section>
      <BrandImage
        src="/brand/cinema/closer-evening.jpg"
        alt=""
        simLabel={t.sim}
        className="aspect-[16/10] md:aspect-[21/9]"
        sizes="100vw"
      />
      <Section>
        <div className="max-w-prose">
          <p className="type-lead">{t.storyPage.more}</p>
          <p className="type-eyebrow mt-10">{t.storyPage.principles}</p>
          <div className="mt-10">
            <Button
              size="lg"
              variant="accent"
              className="w-full sm:w-auto"
              render={<Link href={cta.href} />}
              nativeButton={false}
            >
              {cta.label}
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
