import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ClubView } from "@/components/club-view"
import { FaqList } from "@/components/faq-list"
import { Container } from "@/components/ui-layout"
import { generalFaq, getClub, publishedClubs } from "@/lib/clubs"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"

export function generateStaticParams() {
  return publishedClubs().map((club) => ({ id: club.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params
  if (!isLocale(locale)) return {}
  const club = getClub(id)
  if (!club) return {}
  const t = getCopy(locale)
  return { title: `${club.name} — ${t.hero.brand}` }
}

export default async function ClubPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  if (!isLocale(locale)) notFound()
  const club = getClub(id)
  if (!club) notFound()
  const t = getCopy(locale)
  const clubFaq = club.faq ?? []

  return (
    <>
      <ClubView club={club} t={t} simLabel={t.sim} />
      <Container className="pb-16">
        <FaqList title={club.name} items={clubFaq} />
        <FaqList title={t.faqTitle} items={generalFaq(locale)} />
      </Container>
    </>
  )
}
