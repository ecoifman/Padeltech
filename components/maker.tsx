import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { makerCountries, makerHighlights, makerProjects } from "@/lib/maker"
import { localePath } from "@/lib/paths"
import { cn } from "@/lib/utils"

function Arrow() {
  return <ArrowLeft className="size-4 ltr:-scale-x-100" aria-hidden />
}

function caption(t: Copy, country: keyof Copy["v2"]["maker"]["countries"]) {
  const m = t.v2.maker
  return `${m.countries[country]} · ${m.projectCaption}`
}

/** Home page: four real installations and the country count. */
export function HomeWorld({ locale, t }: { locale: Locale; t: Copy }) {
  const m = t.v2.maker
  return (
    <Section className="border-t border-border">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow={m.eyebrow} title={m.worldTitle} lead={m.worldBody} />
        <Link
          href={localePath(locale, "/projects")}
          className="type-small inline-flex min-h-11 shrink-0 items-center gap-2 font-medium underline-offset-8 hover:underline"
        >
          {m.projectsLink}
          <Arrow />
        </Link>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-3 md:mt-16 lg:grid-cols-4">
        {makerHighlights.map((p) => (
          <li key={p.src}>
            <BrandImage
              src={p.src}
              alt={caption(t, p.country)}
              simLabel={caption(t, p.country)}
              className="aspect-[4/5]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </li>
        ))}
      </ul>
      <p className="type-small mt-6 text-muted-foreground">
        {makerCountries.map((c) => m.countries[c]).join(" · ")}
      </p>
    </Section>
  )
}

export function MakerCerts({ t }: { t: Copy }) {
  const m = t.v2.maker
  return (
    <Section className="border-t border-border">
      <SectionHeader title={m.certsTitle} />
      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
        {m.certs.map((c) => (
          <li key={c.title} className="border-t border-foreground pt-5">
            <p className="type-h2"><bdi>{c.title}</bdi></p>
            <p className="type-small mt-2 text-muted-foreground">{c.body}</p>
          </li>
        ))}
      </ul>
      <p className="type-small mt-8 text-muted-foreground">{m.certsNote}</p>
    </Section>
  )
}

export function MakerSpec({ t }: { t: Copy }) {
  const m = t.v2.maker
  return (
    <Section className="border-t border-border">
      <SectionHeader title={m.specTitle} />
      <ol className="mt-10 border-t border-border">
        {m.spec.map((item) => (
          <li
            key={item.label}
            className="grid gap-2 border-b border-border py-6 md:grid-cols-[10rem_12rem_1fr] md:gap-8"
          >
            <p className="type-eyebrow md:pt-1.5">{item.label}</p>
            <p dir="ltr" className="type-number type-h3 rtl:text-end md:rtl:text-start">
              <bdi>{item.value}</bdi>
            </p>
            <p className="type-body text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function MakerFamilies({ t }: { t: Copy }) {
  const m = t.v2.maker
  return (
    <Section className="border-t border-border">
      <SectionHeader title={m.familiesTitle} />
      <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {m.families.map((f) => (
          <li key={f.key}>
            <BrandImage
              src={f.image}
              alt={f.title}
              simLabel={f.real ? m.projectCaption : t.sim}
              className="aspect-[4/5]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <h3 className="type-h3 mt-5"><bdi>{f.title}</bdi></h3>
            <p className="type-body mt-2 text-muted-foreground">{f.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function MakerGuide({ t }: { t: Copy }) {
  const m = t.v2.maker
  return (
    <Section className="border-t border-border">
      <SectionHeader title={m.guideTitle} lead={m.guideLead} />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-start">
          <thead>
            <tr className="border-b border-foreground">
              <th scope="col" className="type-eyebrow py-3 pe-6 text-start font-medium">{m.guideHead.model}</th>
              <th scope="col" className="type-eyebrow py-3 pe-6 text-start font-medium">{m.guideHead.use}</th>
              <th scope="col" className="type-eyebrow py-3 pe-6 text-start font-medium">{m.guideHead.level}</th>
              <th scope="col" className="type-eyebrow py-3 text-start font-medium">{m.guideHead.feature}</th>
            </tr>
          </thead>
          <tbody>
            {m.guide.map((row) => (
              <tr key={row.model} className="border-b border-border align-top">
                <th scope="row" className="type-h3 py-4 pe-6 text-start whitespace-nowrap"><bdi>{row.model}</bdi></th>
                <td className="type-body py-4 pe-6">{row.use}</td>
                <td className="type-body py-4 pe-6 text-muted-foreground">{row.level}</td>
                <td className="type-body py-4 text-muted-foreground">{row.feature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

export function MakerTurf({ t }: { t: Copy }) {
  const m = t.v2.maker
  return (
    <Section className="border-t border-border">
      <SectionHeader title={m.turfTitle} lead={m.turfNote} />
      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {m.turf.map((item) => (
          <li key={item.name}>
            <BrandImage src={item.image} alt={item.name} className="aspect-[2/1]" sizes="(max-width: 1024px) 50vw, 25vw" />
            <p className="type-eyebrow mt-4">{item.level}</p>
            <h3 className="type-h3 mt-1"><bdi>{item.name}</bdi></h3>
            <p className="type-small mt-1 text-muted-foreground">{item.spec}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function MakerRoofs({ t }: { t: Copy }) {
  const m = t.v2.maker
  return (
    <Section className="border-t border-border">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <SectionHeader title={m.roofsTitle} lead={m.roofsLead} />
          <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {m.roofs.map((r) => (
              <div key={r.title} className="border-t border-border pt-4">
                <dt className="type-h3">{r.title}</dt>
                <dd className="type-body mt-1 text-muted-foreground">{r.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <BrandImage
          src="/brand/unipadel/roof-semi.jpg"
          alt={m.roofsTitle}
          simLabel={m.projectCaption}
          className="aspect-[4/3]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </Section>
  )
}

export function MakerCustom({ t }: { t: Copy }) {
  const m = t.v2.maker
  return (
    <Section className="border-t border-border">
      <div className="grid gap-6 md:grid-cols-2 md:gap-16">
        <SectionHeader title={m.customTitle} />
        <p className="type-lead text-muted-foreground">{m.custom}</p>
      </div>
    </Section>
  )
}

/** Full gallery of the manufacturer's installations, captioned by country. */
export function MakerGallery({ t }: { t: Copy }) {
  return (
    <ul className="grid grid-flow-row-dense grid-cols-2 gap-3 lg:grid-cols-4">
      {makerProjects.map((p) => (
        <li key={p.src} className={cn(p.wide && "col-span-2")}>
          <BrandImage
            src={p.src}
            alt={caption(t, p.country)}
            simLabel={caption(t, p.country)}
            className={p.wide ? "aspect-[2/1] lg:aspect-[8/5]" : "aspect-[4/5]"}
            sizes={p.wide ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
          />
        </li>
      ))}
    </ul>
  )
}
