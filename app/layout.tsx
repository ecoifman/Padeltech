import type { Metadata } from "next"
import { headers } from "next/headers"
import "@fontsource-variable/heebo"

import "./globals.css"
import { dirOf, isLocale } from "@/lib/locales"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:4321"
  ),
  title: "PADELTECH ישראל",
  description:
    "נציגות הרשת העולמית PADELTECH בישראל.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerList = await headers()
  const raw = headerList.get("x-locale") ?? "he"
  const locale = isLocale(raw) ? raw : "he"
  const dir = dirOf(locale)

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className="font-sans antialiased"
    >
      <body>{children}</body>
    </html>
  )
}
