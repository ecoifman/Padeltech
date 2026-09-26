export const locales = ["he", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "he"

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function dirOf(locale: Locale): "rtl" | "ltr" {
  return locale === "he" ? "rtl" : "ltr"
}
