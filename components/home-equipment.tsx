import { EquipmentSlideshow } from "@/components/equipment-slideshow"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeEquipment({ t }: { t: Copy }) {
  return (
    <section id="gear" className="scroll-mt-24 bg-navy text-cream">
      <Container className="flex flex-col gap-6 py-16 md:py-20">
        <p className="text-[0.7rem] font-light tracking-[0.28em] text-cream/45">
          {t.equipment.kicker}
        </p>
        <h2 className="text-3xl font-light leading-[1.15] md:text-5xl">
          {t.equipment.title}
        </h2>
        <p className="max-w-xl text-base font-light leading-8 text-cream/75">
          {t.equipment.body}
        </p>
      </Container>
      <EquipmentSlideshow
        slides={t.equipment.slides}
        prevLabel={t.equipment.prev}
        nextLabel={t.equipment.next}
      />
    </section>
  )
}
