import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { contactChannels } from "@/lib/contact"
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
  return { title: `${t.privacyPage.title} — ${t.hero.brand}`, description: t.privacyPage.intro }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const email = (process.env.NEXT_PUBLIC_PRIVACY_EMAIL ?? contactChannels().email).trim()

  return (
    <Section>
      <SectionHeader as="h1" eyebrow={t.privacyPage.updated} title={t.privacyPage.title} lead={t.privacyPage.intro} />
      <div className="mt-14 flex max-w-prose flex-col">
        {t.privacyPage.sections.map((section) => (
          <section key={section.title} className="border-t border-border py-8">
            <h2 className="type-h3">{section.title}</h2>
            <p className="type-body mt-3 text-muted-foreground">{section.body}</p>
          </section>
        ))}
        <p className="type-body border-t border-border pt-8">
          {email ? (
            <>
              {t.privacyPage.contact}{" "}
              <a href={`mailto:${email}`} dir="ltr" className="underline underline-offset-4">
                {email}
              </a>
              .
            </>
          ) : (
            t.privacyPage.contactFallback
          )}
        </p>
      </div>
    </Section>
  )
}
