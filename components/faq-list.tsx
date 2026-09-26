import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Copy } from "@/lib/copy"

export function FaqList({
  title,
  items,
}: {
  title: string
  items: { q: string; a: string }[]
}) {
  if (items.length === 0) return null

  return (
    <section className="border-t border-navy/10 py-14 md:py-16">
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      <Accordion className="mt-6">
        {items.map((item) => (
          <AccordionItem key={item.q} value={item.q}>
            <AccordionTrigger className="py-4 text-base">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-7 text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export function faqHeading(t: Copy) {
  return t.faqTitle
}
