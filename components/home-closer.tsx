import { BrandImage } from "@/components/brand-image"
import { FilmGrain } from "@/components/film-grain"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeCloser({ t }: { t: Copy }) {
  return (
    <section className="dark relative isolate overflow-hidden bg-background text-foreground">
      <BrandImage
        src="/brand/cinema/closer-evening.jpg"
        alt=""
        className="absolute inset-0 h-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <FilmGrain />
      <Container className="relative z-10 flex min-h-[48svh] flex-col justify-end py-16 md:min-h-[60svh] md:py-24">
        <p className="type-h1 max-w-3xl">
          {t.closer.title}
          <span className="block text-lime">{t.closer.titleLine2}</span>
        </p>
      </Container>
    </section>
  )
}
