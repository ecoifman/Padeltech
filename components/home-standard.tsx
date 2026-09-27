import { Section, SectionHeader } from "@/components/brand/section"
import type { Copy } from "@/lib/copy"

/** The full FIP specification. Lives on /partners, where site owners need it. */
export function HomeStandard({ t }: { t: Copy }) {
  return (
    <Section id="standard" tone="dark">
      <SectionHeader
        eyebrow={t.standard.kicker}
        title={t.standard.title}
        titleLine2={t.standard.titleLine2}
        lead={t.standard.body}
      />
      <p className="type-body mt-4 max-w-prose text-muted-foreground">{t.standard.glass}</p>
      <ol className="mt-12 border-t border-border md:mt-16">
        {t.standard.items.map((item) => (
          <li
            key={item.label}
            className="grid gap-2 border-b border-border py-8 md:grid-cols-[10rem_15rem_1fr] md:gap-8"
          >
            <p className="type-eyebrow md:pt-1.5">{item.label}</p>
            <p dir="ltr" className="type-number type-h3 rtl:text-end md:rtl:text-start">
              <bdi>{item.value}</bdi>
            </p>
            <p className="type-body max-w-xl text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
