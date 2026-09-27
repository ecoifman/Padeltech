import Link from "next/link"

import { BrandImage } from "@/components/brand-image"
import { Section, SectionHeader } from "@/components/brand/section"
import { Button } from "@/components/ui/button"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { signupHref } from "@/lib/paths"

const photos = [
  "/brand/cinema/film-play.jpg",
  "/brand/cinema/film-colonnade.jpg",
  "/brand/cinema/film-aerial.jpg",
  "/brand/cinema/film-evening.jpg",
] as const

export function HomePlay({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <Section id="play">
      <SectionHeader eyebrow={t.play.kicker} title={t.play.title} lead={t.play.intro} />
      <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {t.play.items.map((item, index) => (
          <li key={item.interest} className="flex flex-col">
            <BrandImage
              src={photos[index]}
              alt=""
              simLabel={t.sim}
              className="aspect-[4/5]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <h3 className="type-h3 mt-6">{item.title}</h3>
            <p className="type-small mt-2 flex-1 text-muted-foreground">{item.body}</p>
            <div className="mt-6">
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                render={<Link href={signupHref(locale, { interest: item.interest })} />}
                nativeButton={false}
              >
                {t.play.cta}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
