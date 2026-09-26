import { BrandImage } from "@/components/brand-image"
import { Container, CopyBlock } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomePromise({ t }: { t: Copy }) {
  return (
    <section id="promise" className="scroll-mt-24 bg-cream py-20 md:py-28">
      <Container className="flex flex-col gap-14 md:gap-16">
        <div className="grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-[0.7rem] font-light tracking-[0.28em] text-navy/45">
              {t.promise.chapter}
              <span className="mx-3 text-navy/25">/</span>
              {t.promise.kicker}
            </p>
            <h2 className="text-3xl leading-[1.15] font-light md:text-5xl">
              {t.promise.title}
              <span className="mt-1 block">{t.promise.titleLine2}</span>
            </h2>
            <CopyBlock
              text={`${t.promise.body}\n${t.promise.vision}`}
              className="max-w-xl text-base font-light leading-8 text-navy/75 md:text-[1.05rem]"
            />
          </div>
          <BrandImage
            src="/brand/cinema/film-aerial.jpg"
            alt=""
            simLabel={t.sim}
            className="aspect-[4/5] min-h-72"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
        <ul className="grid gap-8 border-t border-navy/10 pt-10 sm:grid-cols-3">
          {t.promise.specs.map((spec) => (
            <li key={spec.label} className="flex flex-col gap-2">
              <p className="text-[0.7rem] font-light tracking-[0.22em] text-navy/45">
                {spec.label}
              </p>
              <p className="max-w-xs text-base font-light leading-7 text-navy/80">
                {spec.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
