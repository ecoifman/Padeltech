import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://padeltech.co.il"
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: [] }],
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  }
}
