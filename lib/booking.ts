import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function externalBookingUrl() {
  return process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ?? ""
}

export function bookHref(locale: Locale) {
  const external = externalBookingUrl()
  if (external) return external
  return localePath(locale, "/book")
}
