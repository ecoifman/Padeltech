import { BrandImage } from "@/components/brand-image"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeExperience({ t }: { t: Copy }) {
  return (
    <section id="experience" className="scroll-mt-24 bg-cream py-14 md:py-20">
      {t.experience.kicker ? (
        <Container>
          <p className="text-[0.7rem] font-light tracking-[0.28em] text-navy/40">
            {t.experience.kicker}
          </p>
        </Container>
      ) : null}
      <div className="mt-8 flex gap-3 overflow-x-auto px-5 pb-2 md:px-8">
        {t.experience.moments.map((moment) => (
          <figure key={moment.word} className="w-[58vw] max-w-64 shrink-0 md:w-56">
            <BrandImage
              src={moment.src}
              alt=""
              simLabel={t.sim}
              className="aspect-[4/5]"
              sizes="(max-width: 768px) 58vw, 224px"
            />
            <figcaption className="mt-3 text-sm font-light text-navy/70">
              {moment.word}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
