import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

import { ActivityForm } from "@/components/activity-form"
import { Section, SectionHeader } from "@/components/brand/section"
import { FaqList } from "@/components/faq-list"
import { RegionPicker } from "@/components/region-picker"
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
    title: `${t.nav.club} — ${t.hero.brand}`,
    description: t.clubsPage.body,
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
      <Section>
        <SectionHeader as="h1" eyebrow={t.clubsHome.kicker} title={t.clubsPage.title} lead={t.clubsPage.body} />
      </Section>

      <Section tone="dark">
        {clubs.length > 0 ? (
          <ul className="flex flex-col">
            {clubs.map((club) => (
              <li key={club.id} className="border-t border-border py-8">
                <p className="type-eyebrow text-lime">
                  {club.status === "active" ? t.clubsPage.statusActive : t.clubsPage.statusComing}
                </p>
                <h2 className="type-h2 mt-3">
                  <Link href={localePath(locale, `/clubs/${club.id}`)} className="hover:underline">
                    {club.name}
                  </Link>
                </h2>
                {club.location ? (
                  <p className="type-body mt-2 text-muted-foreground">{club.location}</p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <SectionHeader eyebrow={t.clubsPage.statusComing} title={t.clubsPage.emptyTitle} lead={t.clubsHome.body} />
            <RegionPicker locale={locale} t={t} page="clubs" className="md:pt-9" />
          </div>
        )}
      </Section>

      <Section id="signup">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <SectionHeader title={t.clubsPage.formTitle} lead={t.signup.body} />
          <ActivityForm
            key={`${interest}-${region}`}
            t={t}
            source="clubs"
            defaultInterest={interest}
            defaultRegion={region}
          />
        </div>
        <div className="mt-20">
          <FaqList title={t.faqTitle} items={generalFaq(locale)} />
        </div>
      </Section>
    </>
  )
}
