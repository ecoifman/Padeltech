import Link from "next/link"
import { notFound } from "next/navigation"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import { HomeStandard } from "@/components/home-standard"
import {
  MakerCerts,
  MakerCustom,
  MakerFamilies,
  MakerGuide,
  MakerRoofs,
  MakerSpec,
  MakerTurf,
} from "@/components/maker"
import { Button } from "@/components/ui/button"
import { getCopy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { pageMeta } from "@/lib/page-meta"
import { localePath } from "@/lib/paths"

type Props = { params: Promise<{ locale: string }> }

export function generateMetadata({ params }: Props) {
  return pageMeta(params, (t) => ({ title: t.nav.court, description: t.v2.maker.lead }))
}

export default async function CourtPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const t = getCopy(locale)
  const m = t.v2.maker

  return (
    <>
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <SectionHeader as="h1" eyebrow={m.eyebrow} title={m.title} lead={m.lead} />
            <Link
              href={localePath(locale, "/projects")}
              className="type-small mt-8 inline-flex min-h-11 items-center font-medium underline underline-offset-8"
            >
              {m.projectsLink}
            </Link>
          </div>
          <BrandImage
            src="/brand/unipadel/night-aerial.jpg"
            alt={m.projectCaption}
            simLabel={m.projectCaption}
            className="aspect-[4/5]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </Section>
      <MakerCerts t={t} />
      <MakerFamilies t={t} />
      <MakerGuide t={t} />
      <MakerSpec t={t} />
      <MakerTurf t={t} />
      <MakerRoofs t={t} />
      <MakerCustom t={t} />
      <HomeStandard t={t} />
      <Section>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader title={t.v2.solution.closerTitle} lead={t.v2.solution.closerBody} />
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
