import Link from "next/link"

import { BrandImage } from "@/components/brand-image"
import { Button } from "@/components/ui/button"
import { Container, CopyBlock } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function HomeWellness({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section className="bg-cream">
      <div className="grid md:grid-cols-2">
        <BrandImage
          src="/brand/cinema/film-wellness.jpg"
          alt=""
          simLabel={t.sim}
          className="aspect-[4/5] w-full min-h-[22rem] md:min-h-full md:h-full md:aspect-auto"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="flex flex-col justify-center px-5 py-14 md:px-12 md:py-24">
          <h2 className="max-w-md text-3xl leading-[1.1] md:text-5xl">
            {t.wellness.title}
          </h2>
          <p className="mt-5 text-lg text-navy/80">{t.wellness.lines}</p>
          <CopyBlock
            text={`${t.wellness.body}\n${t.wellness.note}`}
            className="mt-6 max-w-md text-base leading-8 text-navy/75"
          />
          <div className="mt-8">
            <Button
              size="lg"
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
