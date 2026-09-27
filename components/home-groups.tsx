import Link from "next/link"

import { Section, SectionHeader } from "@/components/brand/section"
import { Button } from "@/components/ui/button"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function HomeGroups({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <Section tone="dark">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <SectionHeader
          eyebrow={t.groupsHome.kicker}
          title={t.groupsHome.title}
          lead={t.groupsHome.body}
        />
        <Button
          size="lg"
          variant="outline"
          className="w-full shrink-0 sm:w-auto"
          render={<Link href={`${localePath(locale, "/groups")}#signup`} />}
          nativeButton={false}
        >
          {t.groupsHome.cta}
        </Button>
      </div>
    </Section>
  )
}
