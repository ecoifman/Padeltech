import Link from "next/link"

import { SimBadge } from "@/components/brand/section"
import { CinematicVideo } from "@/components/cinematic-video"
import { FilmGrain } from "@/components/film-grain"
import { Button } from "@/components/ui/button"
import { primaryCta } from "@/lib/booking"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function HomeHero({ locale, t }: { locale: Locale; t: Copy }) {
  const cta = primaryCta(locale, t)

  return (
    <section className="dark relative isolate h-[92svh] min-h-[34rem] w-full overflow-hidden bg-ink text-paper">
      <CinematicVideo
        src="/brand/cinema/hero.mp4"
        webmSrc="/brand/cinema/hero.webm"
        poster="/brand/cinema/hero-video-poster.jpg"
        className="contrast-[1.06] saturate-[0.82]"
      />
      <FilmGrain />
      <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-32 bg-gradient-to-b from-ink/60 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col justify-end px-4 pb-12 sm:px-6 md:pb-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="type-eyebrow text-paper/75">{t.hero.eyebrow}</p>
          <h1 className="type-display mt-4">{t.hero.title}</h1>
          <p className="type-lead mt-6 max-w-xl text-paper/85">{t.hero.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              variant="accent"
              className="w-full sm:w-auto"
              render={<Link href={cta.href} />}
              nativeButton={false}
            >
              {cta.label}
            </Button>
            <Button
              size="lg"
              variant="inverse"
              className="w-full sm:w-auto"
              render={<Link href={`${localePath(locale)}#how`} />}
              nativeButton={false}
            >
              {t.cta.secondary}
            </Button>
          </div>
        </div>
      </div>
      <SimBadge label={t.sim} className="start-auto end-4 bottom-4 z-10 sm:end-6 lg:end-10" />
    </section>
  )
}
