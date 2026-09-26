import Link from "next/link"

import { CinematicVideo } from "@/components/cinematic-video"
import { FilmGrain } from "@/components/film-grain"
import { Button } from "@/components/ui/button"
import { bookHref } from "@/lib/booking"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function HomeHero({ locale, t }: { locale: Locale; t: Copy }) {
  return (
    <section className="relative isolate h-[88svh] min-h-[32rem] w-full overflow-hidden bg-navy text-cream">
      <CinematicVideo
        src="/brand/cinema/hero.mp4"
        poster="/brand/cinema/hero-poster.jpg"
        className="contrast-[1.06] saturate-[0.82]"
      />
      <FilmGrain />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[42%] bg-[linear-gradient(to_top,rgba(27,27,27,0.78)_0%,transparent_100%)]" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-end px-5 pb-10 md:px-8 md:pb-14">
        <div className="flex max-w-lg flex-col gap-2">
          <p className="text-[0.68rem] font-light tracking-[0.32em] text-cream/70">
            {t.hero.brand}
          </p>
          <h1 className="text-4xl font-light leading-[1.1] md:text-6xl">{t.hero.title}</h1>
          {t.hero.body ? (
            <p className="mt-1 text-base font-light text-cream/75">{t.hero.body}</p>
          ) : null}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              render={<Link href={bookHref(locale)} />}
              nativeButton={false}
            >
              {t.hero.primary}
            </Button>
            {t.hero.secondary ? (
              <Button
                size="lg"
                variant="inverse"
                className="w-full sm:w-auto"
                render={<Link href={`${localePath(locale)}#play`} />}
                nativeButton={false}
              >
                {t.hero.secondary}
              </Button>
            ) : null}
          </div>
          <p className="mt-3 text-[0.62rem] font-light tracking-[0.16em] text-cream/45">
            {t.sim}
          </p>
        </div>
      </div>
    </section>
  )
}
