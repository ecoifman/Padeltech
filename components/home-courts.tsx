import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeCourts({ t }: { t: Copy }) {
  return (
    <section id="courts" className="scroll-mt-24 bg-navy py-16 text-cream md:py-20">
      <Container>
        <p className="text-[0.7rem] font-light tracking-[0.28em] text-cream/40">
          {t.courts.kicker}
        </p>
        <h2 className="mt-4 max-w-xl text-3xl font-light leading-[1.15] md:text-4xl">
          {t.courts.title}
        </h2>
        <p className="mt-5 max-w-xl text-base font-light leading-8 text-cream/70">
          {t.courts.body}
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.courts.items.map((item) => (
            <li key={item.label} className="border-t border-cream/12 pt-6">
              <p className="text-[0.7rem] font-light tracking-[0.16em] text-cream/55">
                {item.label}
              </p>
              <p className="mt-3 max-w-sm text-sm font-light leading-7 text-cream/75">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
