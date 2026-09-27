import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { signupHref } from "@/lib/paths"

export function externalBookingUrl() {
  return process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ?? ""
}

/**
 * The site's main call to action. Until a live booking system exists
 * (NEXT_PUBLIC_BOOKING_URL), it saves a spot on the opening list — the site
 * never promises a booking it cannot make.
 */
export function primaryCta(locale: Locale, t: Copy) {
  const external = externalBookingUrl()
  if (external) return { href: external, label: t.cta.book, external: true }
  return { href: signupHref(locale), label: t.cta.primary, external: false }
}
