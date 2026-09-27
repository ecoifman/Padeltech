import { ActivityForm } from "@/components/activity-form"
import { Section, SectionHeader } from "@/components/brand/section"
import type { Copy } from "@/lib/copy"
import type { ActivityInterest, Region } from "@/lib/options"

export function HomeSignup({
  t,
  defaultInterest = "",
  defaultRegion = "",
  source = "home-signup",
}: {
  t: Copy
  defaultInterest?: ActivityInterest | ""
  defaultRegion?: Region | ""
  source?: string
}) {
  return (
    <Section id="signup" className="border-t border-border bg-card">
      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">
        <SectionHeader eyebrow={t.signup.kicker} title={t.signup.title} lead={t.signup.body} />
        <ActivityForm
          key={`${defaultInterest}-${defaultRegion}`}
          t={t}
          source={source}
          defaultInterest={defaultInterest}
          defaultRegion={defaultRegion}
        />
      </div>
    </Section>
  )
}
