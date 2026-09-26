import { cn } from "@/lib/utils"
import type { Locale } from "@/lib/locales"

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>
      {children}
    </div>
  )
}

export function Eyebrow({
  locale,
  children,
  className,
}: {
  locale: Locale
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium text-lime",
        locale === "en" && "tracking-[0.28em] uppercase",
        className
      )}
    >
      {children}
    </p>
  )
}

export function CopyBlock({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const lines = text.split("\n")
  return (
    <div className={className}>
      {lines.map((line) => (
        <p key={line} className="[&:not(:first-child)]:mt-4">
          {line}
        </p>
      ))}
    </div>
  )
}
