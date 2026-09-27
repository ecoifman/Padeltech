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
    <section id="signup" className="scroll-mt-20 bg-background py-16 md:py-24 lg:py-32">
      <Container className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
        <div>
          <p className="type-eyebrow">{t.nav.groups}</p>
          <h1 className="type-h1 mt-3">{t.groupsPage.title}</h1>
          <CopyBlock
            text={t.groupsPage.body}
            className="type-lead mt-6 max-w-prose text-muted-foreground"
          />
          <p className="type-body mt-6 max-w-prose text-muted-foreground">{t.groupsPage.more}</p>
        </div>
        <GroupsForm t={t} source="groups" />
      </Container>
    </section>
  )
}
