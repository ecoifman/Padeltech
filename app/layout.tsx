import type { Metadata } from "next"
import "@fontsource-variable/heebo"
import "@fontsource-variable/noto-sans-hebrew/wdth.css"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:4321"
  ),
  title: "PADELTECH ישראל",
  description:
    "תכנון, הקמה והפעלה של מתחמי פאדל לרשויות, ליזמים ולמפעילים.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Static export: every page ships as Hebrew/RTL, and English pages switch
  // before first paint. LocaleDocument keeps it in sync on client navigation.
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning className="font-sans antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(location.pathname.indexOf('/en')===0){document.documentElement.lang='en';document.documentElement.dir='ltr'}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
