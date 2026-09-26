import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

import { ActivityForm } from "@/components/activity-form"
import { FaqList } from "@/components/faq-list"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui-layout"
import { bookHref } from "@/lib/booking"
import { generalFaq, publishedClubs } from "@/lib/clubs"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { isActivityInterest, isRegion } from "@/lib/options"
import { localePath } from "@/lib/paths"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getCopy(locale)
  return {
    title: `${t.nav.clubs} — ${t.hero.brand}`,
    description: t.firstClub.body,
  }
}

export default async function ClubsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ interest?: string; region?: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const query = await searchParams
  const t = getCopy(locale)
  const clubs = publishedClubs()
  const interest =
    query.interest && isActivityInterest(query.interest) ? query.interest : ""
  const region = query.region && isRegion(query.region) ? query.region : ""

  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <Container className="max-w-3xl">
          <h1 className="text-4xl leading-[1.08] md:text-6xl">{t.clubsPage.title}</h1>
          <p className="mt-6 whitespace-pre-line text-lg font-light leading-8 text-navy/80">
            {t.firstClub.body}
          </p>
        </Container>
      </section>

      {clubs.length > 0 ? (
        <section className="bg-navy py-16 text-cream">
          <Container className="flex flex-col gap-10">
            {clubs.map((club) => (
              <article key={club.id} className="border-t border-cream/15 pt-8">
                <p className="text-xs tracking-[0.2em] text-lime">
                  {club.status === "active"
                    ? t.clubsPage.statusActive
                    : t.clubsPage.statusComing}
                </p>
                <h2 className="mt-3 text-3xl">{club.name}</h2>
                {club.location ? (
                  <p className="mt-2 text-cream/75">{club.location}</p>
                ) : null}
                <Link
                  href={localePath(locale, `/clubs/${club.id}`)}
                  className="mt-4 inline-flex min-h-12 items-center text-lime"
                >
                  {club.name}
                </Link>
              </article>
            ))}
          </Container>
        </section>
      ) : (
        <section className="scroll-mt-24 bg-navy py-16 text-cream md:py-24">
          <Container>
            <h2 className="text-3xl font-light md:text-5xl">{t.clubsPage.emptyTitle}</h2>
            <p className="mt-5 max-w-2xl text-base font-light leading-8 text-cream/80">
              {t.firstClub.body}
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                render={<Link href={bookHref(locale)} />}
                nativeButton={false}
              >
                {t.hero.primary}
              </Button>
            </div>
          </Container>
        </section>
      )}

      <section className="bg-cream py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl md:text-4xl">{t.clubsPage.cta}</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {t.clubsPage.disclaimer}
            </p>
          </div>
          <ActivityForm
            key={`${interest}-${region}`}
            t={t}
            source="clubs"
            defaultInterest={interest}
            defaultRegion={region}
          />
        </Container>
        <Container>
          <FaqList title={t.faqTitle} items={generalFaq(locale)} />
        </Container>
      </section>
    </>
  )
}
