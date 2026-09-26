import { ActivityForm } from "@/components/activity-form"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"
import type { ActivityInterest, Region } from "@/lib/options"

export function HomeSignup({
  t,
  defaultInterest = "",
  defaultRegion = "",
}: {
  t: Copy
  defaultInterest?: ActivityInterest | ""
  defaultRegion?: Region | ""
}) {
  return (
    <section className="bg-cream py-16 md:py-24">
      <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <h2 className="text-3xl leading-[1.1] md:text-5xl">{t.signup.title}</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-navy/80">
            {t.signup.body}
          </p>
        </div>
        <ActivityForm
          key={`${defaultInterest}-${defaultRegion}`}
          t={t}
          source="home-signup"
          defaultInterest={defaultInterest}
          defaultRegion={defaultRegion}
        />
      </Container>
    </section>
  )
}
