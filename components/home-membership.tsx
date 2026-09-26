import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeMembership({ t }: { t: Copy }) {
  return (
    <section id="play-more" className="scroll-mt-24 bg-cream py-16 md:py-24">
      <Container>
        <p className="text-[0.7rem] font-light tracking-[0.28em] text-navy/45">
          {t.membership.kicker}
        </p>
        <h2 className="mt-4 text-3xl font-light leading-[1.15] md:text-5xl">
          {t.membership.title}
        </h2>
        <p className="mt-5 max-w-xl text-base font-light leading-8 text-navy/70">
          {t.membership.body}
        </p>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {t.membership.items.map((item) => (
            <li key={item.label} className="border-t border-navy/10 pt-6">
              <p className="text-[0.75rem] font-light tracking-[0.2em] text-navy/50">
                {item.label}
              </p>
              <p className="mt-3 text-base font-light leading-7 text-navy/80">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
