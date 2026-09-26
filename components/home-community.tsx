import { BrandImage } from "@/components/brand-image"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeCommunity({ t }: { t: Copy }) {
  return (
    <section id="community" className="scroll-mt-24 bg-cream py-16 md:py-20">
      <Container className="grid items-center gap-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-16">
        <BrandImage
          src="/brand/cinema/community-hero.jpg"
          alt=""
          simLabel={t.sim}
          className="aspect-[3/4] max-h-[28rem] w-full"
          sizes="(max-width: 768px) 100vw, 288px"
        />
        <div>
          <h2 className="max-w-md text-3xl font-light leading-[1.15] md:text-4xl">
            {t.community.title}
            {t.community.titleLine2 ? (
              <span className="mt-2 block">{t.community.titleLine2}</span>
            ) : null}
          </h2>
          <p className="mt-6 max-w-md text-base font-light leading-8 text-navy/70">
            {t.community.body}
          </p>
        </div>
      </Container>
    </section>
  )
}
