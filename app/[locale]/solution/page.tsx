import Link from "next/link"
import { notFound } from "next/navigation"
import { Cpu, Factory, Sun } from "lucide-react"

import { Section, SectionHeader } from "@/components/brand/section"
import { Button } from "@/components/ui/button"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"
import { localePath } from "@/lib/paths"

type Props = { params: Promise<{ locale: string }> }

const icons = { solar: Sun, sourcing: Factory, automation: Cpu } as const

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.solution, description: t.v2.solution.lead }))
}

export default async function SolutionPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const s = t.v2.solution

  return (
    <>
      <Section>
        <SectionHeader as="h1" eyebrow={s.eyebrow} title={s.title} lead={s.lead} />
      </Section>

      {s.sections.map((section) => {
        const Icon = icons[section.key as keyof typeof icons] ?? Sun
        return (
          <Section key={section.key} id={section.key} className="border-t border-border">
            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <div className="flex items-center gap-4">
                  <span className="type-eyebrow type-number" dir="ltr">{section.kicker}</span>
                  <Icon className="size-7 stroke-[1.25]" aria-hidden />
                </div>
                <h2 className="type-h1 mt-6">{section.title}</h2>
                <p className="type-lead mt-5 max-w-md text-muted-foreground">{section.lead}</p>
              </div>
              <div>
                <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  {section.points.map((point) => (
                    <div key={point.title} className="border-t border-border pt-5">
                      <dt className="type-h3">{point.title}</dt>
                      <dd className="type-body mt-2 text-muted-foreground">{point.body}</dd>
                    </div>
                  ))}
                </dl>
                <p className="type-body mt-10 border-s-2 border-foreground ps-4">{section.note}</p>
              </div>
            </div>
          </Section>
        )
      })}

      <Section className="border-t border-border">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader title={s.closerTitle} lead={s.closerBody} />
          <Button
            size="lg"
            variant="accent"
            className="w-full shrink-0 sm:w-auto"
            render={<Link href={localePath(locale, "/contact")} />}
            nativeButton={false}
          >
            {t.v2.closer.cta}
          </Button>
        </div>
      </Section>
    </>
  )
}
