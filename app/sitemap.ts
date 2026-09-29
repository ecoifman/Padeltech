import type { MetadataRoute } from "next"

const pages = ["", "/municipalities", "/partners", "/operators", "/court", "/projects", "/solution", "/about", "/contact", "/privacy"]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return pages.map((path) => ({
    url: `${base}/he${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
    alternates: { languages: { he: `${base}/he${path}`, en: `${base}/en${path}` } },
  }))
}
