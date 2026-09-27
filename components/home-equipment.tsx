import { SectionHeader } from "@/components/brand/section"
import { EquipmentSlideshow } from "@/components/equipment-slideshow"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"

export function HomeEquipment({ t }: { t: Copy }) {
  return (
    <section id="gear" className="dark scroll-mt-20 bg-background text-foreground">
      <Container className="py-16 md:py-24">
        <SectionHeader eyebrow={t.equipment.kicker} title={t.equipment.title} lead={t.equipment.body} />
      </Container>
      <EquipmentSlideshow
        slides={t.equipment.slides}
        prevLabel={t.equipment.prev}
        nextLabel={t.equipment.next}
      />
    </section>
  )
}
