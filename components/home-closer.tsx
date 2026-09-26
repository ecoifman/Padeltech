import { BrandImage } from "@/components/brand-image"
import { FilmGrain } from "@/components/film-grain"
import { Logo } from "@/components/logo"
import type { Copy } from "@/lib/copy"

export function HomeCloser({ t }: { t: Copy }) {
  return (
    <section className="relative isolate min-h-[42svh] overflow-hidden bg-navy text-cream md:min-h-[52svh]">
      <BrandImage
        src="/brand/cinema/closer-evening.jpg"
        alt=""
        className="absolute inset-0 min-h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/45" />
      <FilmGrain />
      <div className="relative z-10 mx-auto flex min-h-[42svh] max-w-6xl flex-col justify-end px-5 py-12 md:min-h-[52svh] md:px-8 md:py-16">
        <Logo inverted />
        <p className="mt-6 text-lg font-light tracking-[0.18em] text-cream/85">
          {t.closer.title}
        </p>
      </div>
    </section>
  )
}
