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
    <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10", className)}>
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
    <p lang={locale} className={cn("type-eyebrow", className)}>
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
