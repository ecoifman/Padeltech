import { notFound } from "next/navigation"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.projects, description: t.v2.projects.lead }))
}

const vision = [
  "/brand/cinema/film-aerial-clean.jpg",
  "/brand/cinema/cinema-hero-aerial.png",
  "/brand/cinema/film-colonnade-clean.jpg",
  "/brand/cinema/cinema-night-rally.png",
  "/brand/cinema/film-social-clean.jpg",
  "/brand/cinema/cinema-court-detail.png",
]

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const p = t.v2.projects

  return (
    <>
      <Section>
        <SectionHeader as="h1" eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
        <div className="mt-12 border border-dashed border-border p-8 md:p-10">
          <h2 className="type-h3">{p.emptyTitle}</h2>
          <p className="type-body mt-3 max-w-prose text-muted-foreground">{p.emptyBody}</p>
        </div>
      </Section>
      <Section className="border-t border-border bg-card">
        <SectionHeader title={p.visionTitle} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vision.map((src) => (
            <li key={src}>
              <BrandImage
                src={src}
                alt=""
                simLabel={t.sim}
                className="aspect-[4/3]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
