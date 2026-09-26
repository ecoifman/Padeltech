import type { Locale } from "@/lib/locales"
import type { ActivityInterest, Region } from "@/lib/options"

export function localePath(locale: Locale, path = "") {
  const suffix = path.startsWith("/") ? path : path ? `/${path}` : ""
  return `/${locale}${suffix}`
}

export function withQuery(
  href: string,
  query: { interest?: ActivityInterest | ""; region?: Region | "" }
) {
  const params = new URLSearchParams()
  if (query.interest) params.set("interest", query.interest)
  if (query.region) params.set("region", query.region)
  const qs = params.toString()
  return qs ? `${href}?${qs}` : href
}

export function signupHref(
  locale: Locale,
  query: { interest?: ActivityInterest | ""; region?: Region | "" } = {},
  page: "home" | "padel" | "wellness" | "clubs" = "home"
) {
  const base =
    page === "home"
      ? localePath(locale)
      : localePath(locale, page)
  return `${withQuery(base, query)}#signup`
}
