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
  bare = false,
}: {
  title: string
  items: { q: string; a: string }[]
  /** Drop the top rule and padding when the parent section already has them. */
  bare?: boolean
}) {
  if (items.length === 0) return null

  return (
    <section className={bare ? undefined : "border-t border-border pt-14 md:pt-16"}>
      <h2 className="type-h2">{title}</h2>
      <Accordion className="mt-6">
        {items.map((item) => (
          <AccordionItem key={item.q} value={item.q}>
            <AccordionTrigger className="type-body py-5">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="type-body text-muted-foreground">
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
