import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeStandard({ t }: { t: Copy }) {
  return (
    <section id="standard" className="scroll-mt-24 bg-navy py-20 text-cream md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-light tracking-[0.28em] text-cream/45">
            {t.standard.chapter}
            <span className="mx-3 text-cream/25">/</span>
            {t.standard.kicker}
          </p>
          <h2 className="mt-5 text-3xl leading-[1.15] font-light md:text-5xl">
            {t.standard.title}
            <span className="mt-1 block">{t.standard.titleLine2}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-8 text-cream/78">
            {t.standard.body}
          </p>
          <p className="mt-4 max-w-xl text-base font-light leading-8 text-cream/78">
            {t.standard.glass}
          </p>
        </div>
        <ol className="border-t border-cream/15">
          {t.standard.items.map((item) => (
            <li
              key={item.label}
              className="grid gap-2 border-b border-cream/15 py-8 md:grid-cols-[10rem_14rem_1fr] md:gap-8 md:py-9"
            >
              <p className="text-[0.7rem] font-light tracking-[0.2em] text-cream/45">
                {item.label}
              </p>
              <p
                dir="ltr"
                className="text-xl font-light tracking-[0.02em] text-lime md:text-2xl"
              >
                {item.value}
              </p>
              <p className="max-w-xl text-base font-light leading-7 text-cream/80">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
