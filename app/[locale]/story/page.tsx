import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

import { BrandImage } from "@/components/brand-image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui-layout"
import { bookHref } from "@/lib/booking"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getCopy(locale)
  return { title: `${t.nav.story} — ${t.hero.brand}`, description: t.storyPage.body }
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)

  return (
    <>
      <section className="bg-navy py-16 text-cream md:py-28">
        <Container className="max-w-3xl">
          <h1 className="text-4xl leading-[1.08] md:text-6xl">{t.storyPage.title}</h1>
          <p className="mt-8 text-lg leading-8 text-cream/85">{t.storyPage.body}</p>
        </Container>
      </section>
      <BrandImage
        src="/brand/cinema/closer-evening.jpg"
        alt=""
        simLabel={t.sim}
        className="w-full aspect-[16/10] md:aspect-[21/9]"
        sizes="100vw"
      />
      <section className="bg-cream py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-lg leading-8 text-navy/80">{t.storyPage.more}</p>
          <p className="mt-6 text-lg leading-8 text-navy/80">{t.storyPage.principles}</p>
          <div className="mt-10">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              render={<Link href={bookHref(locale)} />}
              nativeButton={false}
            >
              {t.storyPage.cta}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
