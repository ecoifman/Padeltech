import { cn } from "@/lib/utils"

import { Container } from "@/components/ui-layout"

/**
 * One section of a page. `tone="dark"` flips the design tokens to the black
 * palette, so every component inside renders correctly on either surface.
 */
export function Section({
  id,
  tone = "light",
  bleed = false,
  className,
  containerClassName,
  children,
}: {
  id?: string
  tone?: "light" | "dark"
  /** Skip the inner Container (for full-width media). */
  bleed?: boolean
  className?: string
  containerClassName?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 bg-background py-16 text-foreground md:py-24 lg:py-28",
        tone === "dark" && "dark",
        className
      )}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  titleLine2,
  lead,
  as: Heading = "h2",
  size,
  align = "start",
  className,
}: {
  eyebrow?: string
  title: string
  titleLine2?: string
  lead?: string
  as?: "h1" | "h2"
  /** Defaults to type-h1 for an h1 and type-h2 for an h2. */
  size?: "display" | "h1" | "h2"
  align?: "start" | "center"
  className?: string
}) {
  const scale = size ?? (Heading === "h1" ? "h1" : "h2")
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <p className="type-eyebrow">{eyebrow}</p> : null}
      <Heading
        className={cn(
          eyebrow && "mt-3",
          scale === "display" && "type-display",
          scale === "h1" && "type-h1",
          scale === "h2" && "type-h2"
        )}
      >
        {title}
        {titleLine2 ? <span className="block">{titleLine2}</span> : null}
      </Heading>
      {lead ? (
        <p
          className={cn(
            "type-lead mt-5 max-w-prose whitespace-pre-line text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}

/** The "visualization" tag on renders that are not real PADELTECH photos. */
export function SimBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "type-caption pointer-events-none absolute bottom-3 start-3 text-paper/80 [text-shadow:0_1px_6px_rgb(0_0_0/0.5)]",
        className
      )}
    >
      {label}
    </span>
  )
}

/** A big FIP number with its label, over a hairline. */
export function SpecStat({
  value,
  label,
  body,
  className,
}: {
  value: string
  label: string
  body?: string
  className?: string
}) {
  return (
    <div className={cn("border-t border-border pt-6", className)}>
      <p className="type-eyebrow">{label}</p>
      <p className="type-number type-h2 mt-3">
        <span dir="ltr">{value}</span>
      </p>
      {body ? <p className="type-small mt-3 max-w-sm text-muted-foreground">{body}</p> : null}
    </div>
  )
}
