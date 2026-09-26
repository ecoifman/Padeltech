import Link from "next/link"

import { BrandImage } from "@/components/brand-image"
import { Button } from "@/components/ui/button"
import { Container, CopyBlock } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { signupHref } from "@/lib/paths"
import { cn } from "@/lib/utils"

const photos = [
  "/brand/cinema/film-play.jpg",
  "/brand/cinema/film-colonnade.jpg",
  "/brand/cinema/film-aerial.jpg",
  "/brand/cinema/film-evening.jpg",
] as const

export function HomePlay({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section id="play" className="bg-navy py-16 text-cream md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-[1.1] md:text-5xl">{t.play.title}</h2>
          <CopyBlock
            text={t.play.intro}
            className="mt-5 text-base leading-8 text-cream/78 md:text-lg"
          />
        </div>
        <div className="mt-12 flex flex-col">
          {t.play.items.map((item, index) => {
            const page = item.interest === "court" ? "clubs" : "padel"
            return (
              <article
                key={item.interest}
                className={cn(
                  "grid gap-8 border-t border-cream/15 py-10 md:grid-cols-2 md:items-center md:gap-14",
                  index % 2 === 1 && "md:[&>div:first-child]:order-2"
                )}
              >
                <div className="flex flex-col gap-4">
                  <p className="text-xs tracking-[0.22em] text-lime">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl md:text-4xl">{item.title}</h3>
                  <p className="max-w-md text-base leading-8 text-cream/78">
                    {item.body}
                  </p>
                  <div>
                    <Button
                      size="lg"
                      className="w-full sm:w-auto"
                      render={
                        <Link
                          href={signupHref(locale, { interest: item.interest }, page)}
                        />
                      }
                      nativeButton={false}
                    >
                      {item.cta}
                    </Button>
                  </div>
                </div>
                <BrandImage
                  src={photos[index]}
                  alt=""
                  simLabel={t.sim}
                  className={cn(
                    "min-h-56",
                    index === 1 ? "aspect-[16/10]" : "aspect-[4/3]"
                  )}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
