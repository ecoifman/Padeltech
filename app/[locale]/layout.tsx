import { notFound } from "next/navigation"

import { LocaleDocument } from "@/components/locale-document"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { DirectionProvider } from "@/components/ui/direction"
import { getCopy } from "@/lib/copy"
import { meetingCta } from "@/lib/nav"
import { dirOf, isLocale, locales, type Locale } from "@/lib/locales"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: raw } = await params
  if (!isLocale(raw)) notFound()
  const locale: Locale = raw
  const dir = dirOf(locale)
  const t = getCopy(locale)

  return (
    <DirectionProvider direction={dir}>
      <LocaleDocument locale={locale} dir={dir} />
      <ThemeProvider>
        <SiteHeader locale={locale} t={t} cta={meetingCta(locale, t)} />
        <main>{children}</main>
        <SiteFooter locale={locale} t={t} />
      </ThemeProvider>
    </DirectionProvider>
  )
}
