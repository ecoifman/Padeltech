"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

import type { Copy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"
import { localePath } from "@/lib/paths"
import { cn } from "@/lib/utils"

export const fieldControlClass =
  "h-12 min-h-12 w-full rounded-none border-0 border-b border-input bg-transparent px-0 text-base text-foreground outline-none transition-colors focus-visible:border-foreground focus-visible:ring-0 aria-invalid:border-destructive disabled:opacity-50"

export function FormSuccess({
  message,
  className,
}: {
  message: string
  className?: string
}) {
  return (
    <p
      role="status"
      aria-live="polite"
      className={cn("type-lead border-s-2 border-foreground ps-5", className)}
    >
      {message}
    </p>
  )
}

export function ConsentRow({
  id,
  checked,
  onChange,
  label,
  className,
}: {
  id: string
  checked: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
}) {
  return (
    <label
      htmlFor={id}
      className={cn("type-small flex min-h-11 cursor-pointer items-start gap-3", className)}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 size-5 shrink-0 accent-navy"
      />
      <span>{label}</span>
    </label>
  )
}

/** "Your details are kept according to the privacy policy" — under every form. */
export function PrivacyNote({ t, className }: { t: Copy; className?: string }) {
  const params = useParams<{ locale?: string }>()
  const locale = params?.locale && isLocale(params.locale) ? params.locale : "he"
  return (
    <p className={cn("type-small text-muted-foreground", className)}>
      {t.signup.privacyNote}{" "}
      <Link
        href={localePath(locale, "/privacy")}
        className="text-foreground underline underline-offset-4"
      >
        {t.signup.privacyLink}
      </Link>
      .
    </p>
  )
}
