import { BrandImage } from "@/components/brand-image"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeExperience({ t }: { t: Copy }) {
  return (
    <section id="experience" className="scroll-mt-20 bg-background py-16 md:py-24">
      <Container>
        <p className="type-eyebrow">{t.experience.kicker}</p>
      </Container>
      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:mx-auto lg:grid lg:max-w-[1200px] lg:grid-cols-6 lg:overflow-visible lg:px-10">
        {t.experience.moments.map((moment) => (
          <figure key={moment.word} className="w-[62vw] max-w-64 shrink-0 snap-start lg:w-auto">
            <BrandImage
              src={moment.src}
              alt=""
              simLabel={t.sim}
              className="aspect-[4/5]"
              sizes="(max-width: 1024px) 62vw, 180px"
            />
            <figcaption className="mt-4">
              <span className="type-h3 block">{moment.word}</span>
              <span className="type-small mt-1 block text-muted-foreground">{moment.line}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
