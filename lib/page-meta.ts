import type { Metadata } from "next"

import { getCopy, type Copy } from "@/lib/copy"
import { isLocale } from "@/lib/locales"

/** Shared metadata for simple pages: "<title> — PADELTECH". */
export async function pageMeta(
  params: Promise<{ locale: string }>,
  pick: (t: Copy) => { title: string; description: string }
): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getCopy(locale)
  const { title, description } = pick(t)
  return {
    title: `${title} — ${t.hero.brand}`,
    description,
    openGraph: {
      title: `${title} — ${t.hero.brand}`,
      description,
      locale: locale === "he" ? "he_IL" : "en_US",
      images: ["/brand/unipadel/serbia-1.jpg"],
    },
  }
}
