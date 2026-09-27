import { Section, SectionHeader } from "@/components/brand/section"
import { RegionPicker } from "@/components/region-picker"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"

export function HomeClubs({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <Section id="club">
      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
        <SectionHeader eyebrow={t.clubsHome.kicker} title={t.clubsHome.title} lead={t.clubsHome.body} />
        <RegionPicker locale={locale} t={t} page="home" className="md:pt-9" />
      </div>
    </Section>
  )
}
