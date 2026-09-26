import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Container, CopyBlock } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function HomeGroups({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section className="bg-navy py-16 text-cream md:py-24">
      <Container className="max-w-3xl">
        <h2 className="text-3xl leading-[1.1] md:text-5xl">{t.groupsHome.title}</h2>
        <CopyBlock
          text={t.groupsHome.body}
          className="mt-6 text-base leading-8 text-cream/80 md:text-lg"
        />
        <div className="mt-8">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            render={<Link href={`${localePath(locale, "/groups")}#signup`} />}
            nativeButton={false}
          >
            {t.groupsHome.cta}
          </Button>
        </div>
      </Container>
    </section>
  )
}
