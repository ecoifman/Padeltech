import Link from "next/link"
import { ArrowLeft, Cpu, Factory, Hammer, MapPinned, PencilRuler, Sun } from "lucide-react"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import { Button } from "@/components/ui/button"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

const doorHref = {
  municipalities: "/municipalities",
  developers: "/partners",
  operators: "/operators",
} as const

const doorImage = {
  municipalities: "/brand/cinema/film-aerial-clean.jpg",
  developers: "/brand/cinema/cinema-club-arrival.png",
  operators: "/brand/equipment/01-lineup.jpg",
} as const

function Arrow() {
  return <ArrowLeft className="size-4 ltr:-scale-x-100" aria-hidden />
}

const pillarIcons = { solar: Sun, sourcing: Factory, automation: Cpu } as const

/** The three differentiators: solar roof, direct sourcing, automated operation. */
export function HomePillars({ locale, t }: { locale: Locale; t: Copy }) {
  const p = t.v2.pillars
  return (
    <Section id="pillars">
      <SectionHeader eyebrow={p.kicker} title={p.title} />
      <ul className="mt-12 grid gap-x-10 gap-y-12 md:mt-16 md:grid-cols-3">
        {p.items.map((item) => {
          const Icon = pillarIcons[item.key as keyof typeof pillarIcons] ?? Sun
          return (
            <li key={item.key} className="border-t border-foreground pt-8">
              <Icon className="size-8 stroke-[1.25]" aria-hidden />
              <h3 className="type-h2 mt-8">{item.title}</h3>
              <p className="type-body mt-4 max-w-sm text-muted-foreground">{item.body}</p>
            </li>
          )
        })}
      </ul>
      <Link
        href={localePath(locale, "/solution")}
        className="type-small mt-12 inline-flex min-h-11 items-center gap-2 font-medium underline-offset-8 hover:underline"
      >
        {p.cta}
        <Arrow />
      </Link>
    </Section>
  )
}

/** Three audience entry points. */
export function HomeDoors({ locale, t }: { locale: Locale; t: Copy }) {
  const d = t.v2.doors
  return (
    <Section id="doors" className="border-t border-border">
      <SectionHeader eyebrow={d.kicker} title={d.title} />
      <ul className="mt-12 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-3">
        {d.items.map((item) => {
          const key = item.key as keyof typeof doorHref
          return (
            <li key={item.key}>
              <Link
                href={localePath(locale, doorHref[key])}
                className="group flex h-full flex-col"
              >
                <BrandImage
                  src={doorImage[key]}
                  alt=""
                  className="aspect-[4/3] transition-opacity group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="flex flex-1 flex-col gap-2 pt-6">
                  <h3 className="type-h3">{item.title}</h3>
                  <p className="type-body flex-1 text-muted-foreground">{item.body}</p>
                  <span className="type-small inline-flex items-center gap-2 font-medium group-hover:underline group-hover:underline-offset-8">
                    {item.cta}
                    <Arrow />
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

/** Network numbers. Values stay "—" until real data is provided. */
export function HomeStats({ t }: { t: Copy }) {
  const s = t.v2.stats
  return (
    <Section className="border-y border-border py-14 md:py-16 lg:py-20">
      <div className="flex items-baseline justify-between gap-4">
        <p className="type-eyebrow">{s.kicker}</p>
        <p className="type-caption text-muted-foreground">{s.pending}</p>
      </div>
      <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        {s.items.map((item) => (
          <div key={item.label}>
            <dt className="type-small text-muted-foreground">{item.label}</dt>
            <dd className="type-number type-h1 mt-2" dir="ltr">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

const processIcons = [MapPinned, PencilRuler, Factory, Hammer]

/** The four-stage delivery process. */
export function HomeProcess({ t }: { t: Copy }) {
  const p = t.v2.process
  return (
    <Section id="how" className="border-t border-border">
      <SectionHeader eyebrow={p.kicker} title={p.title} lead={p.body} />
      <ol className="mt-12 grid sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {p.steps.map((step, index) => {
          const Icon = processIcons.at(index) ?? MapPinned
          return (
            <li
              key={step.label}
              className="border-t border-border py-8 lg:border-t-0 lg:border-s lg:px-6 lg:py-0 lg:first:border-s-0 lg:first:ps-0"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="type-eyebrow type-number" dir="ltr">
                  {step.label}
                </span>
                <Icon className="size-7 stroke-[1.25]" aria-hidden />
              </div>
              <h3 className="type-h3 mt-8">{step.title}</h3>
              <p className="type-small mt-3 max-w-xs text-muted-foreground">{step.body}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

/** A compact band for players: region choice goes to the clubs page signup. */
export function HomePlayersBand({ locale, t }: { locale: Locale; t: Copy }) {
  const b = t.v2.playersBand
  return (
    <Section className="border-t border-border">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow={b.kicker} title={b.title} lead={b.body} />
        <Link
          href={localePath(locale, "/clubs")}
          className="type-small inline-flex min-h-11 shrink-0 items-center gap-2 font-medium underline-offset-8 hover:underline"
        >
          {b.cta}
          <Arrow />
        </Link>
      </div>
    </Section>
  )
}

/** Closing call to action for business visitors. */
export function HomeMeeting({ locale, t }: { locale: Locale; t: Copy }) {
  const c = t.v2.closer
  return (
    <section className="dark relative isolate overflow-hidden bg-background text-foreground">
      <BrandImage src="/brand/cinema/closer-evening.jpg" alt="" className="absolute inset-0 h-full" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="relative z-10 mx-auto flex min-h-[46svh] w-full max-w-[1200px] flex-col justify-end gap-6 px-4 py-16 sm:px-6 md:min-h-[56svh] md:py-24 lg:px-10">
        <h2 className="type-h1 max-w-3xl">{c.title}</h2>
        <p className="type-lead max-w-xl text-muted-foreground">{c.body}</p>
        <div>
          <Button
            size="lg"
            variant="accent"
            className="w-full sm:w-auto"
            render={<Link href={localePath(locale, "/contact")} />}
            nativeButton={false}
          >
            {c.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
