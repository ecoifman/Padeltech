import { notFound } from "next/navigation"

import { Section, SectionHeader } from "@/components/brand/section"
import { BusinessForm } from "@/components/business-form"
import { ContactChannels } from "@/components/contact-channels"
import { contactChannels } from "@/lib/contact"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.contact, description: t.v2.contact.lead }))
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const c = t.v2.contact

  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeader as="h1" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
          {contactChannels().phone || contactChannels().email ? (
            <div className="mt-10 border-t border-border pt-6">
              <p className="type-eyebrow">{c.direct}</p>
              <ContactChannels t={t} className="mt-3" />
            </div>
          ) : null}
        </div>
        <BusinessForm t={t} source="contact" />
      </div>
    </Section>
  )
}
