import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { GroupsForm } from "@/components/groups-form"
import { Container, CopyBlock } from "@/components/ui-layout"
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
  return { title: `${t.nav.groups} — ${t.hero.brand}`, description: t.groupsPage.body }
}

export default async function GroupsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)

  return (
    <section className="bg-cream py-16 md:py-24">
      <Container className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <h1 className="text-4xl leading-[1.08] md:text-6xl">{t.groupsPage.title}</h1>
          <CopyBlock
            text={t.groupsPage.body}
            className="mt-6 text-base leading-8 text-navy/80 md:text-lg"
          />
          <p className="mt-6 text-base leading-8 text-navy/80">{t.groupsPage.more}</p>
        </div>
        <GroupsForm t={t} source="groups" />
      </Container>
    </section>
  )
}
