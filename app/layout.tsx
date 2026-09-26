import type { Metadata } from "next"
import { headers } from "next/headers"
import { Heebo } from "next/font/google"

import "./globals.css"
import { dirOf, isLocale } from "@/lib/locales"
import { cn } from "@/lib/utils"

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("http://127.0.0.1:4321"),
  title: "PADELTECH ישראל",
  description:
    "נציגות הרשת העולמית PADELTECH בישראל.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
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
      className={cn(heebo.variable, "font-sans antialiased")}
    >
      <body>{children}</body>
    </html>
  )
}
