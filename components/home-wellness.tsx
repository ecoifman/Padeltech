import Link from "next/link"

import { BrandImage } from "@/components/brand-image"
import { SectionHeader } from "@/components/brand/section"
import { Button } from "@/components/ui/button"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function HomeWellness({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section className="bg-secondary text-foreground">
      <div className="grid md:grid-cols-2">
        <BrandImage
          src="/brand/cinema/cinema-wellness.png"
          alt=""
          simLabel={t.sim}
          className="aspect-[4/3] md:aspect-auto md:h-full md:min-h-[36rem]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="flex flex-col justify-center px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:px-16">
          <SectionHeader eyebrow={t.wellness.kicker} title={t.wellness.title} lead={t.wellness.lines} />
          <p className="type-body mt-5 max-w-md text-muted-foreground">{t.wellness.body}</p>
          <div className="mt-10">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              render={<Link href={localePath(locale, "/wellness")} />}
              nativeButton={false}
            >
              {t.wellness.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
