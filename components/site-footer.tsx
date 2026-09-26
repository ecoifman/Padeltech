import Link from "next/link"

import { Logo } from "@/components/logo"
import { Separator } from "@/components/ui/separator"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

export function SiteFooter({ locale, t }: { locale: Locale; t: Copy }) {
  const year = new Date().getFullYear()
  const home = localePath(locale)
  const links = [
    { href: `${home}#experience`, label: t.nav.experience },
    { href: `${home}#play`, label: t.nav.book },
    { href: `${home}#courts`, label: t.nav.courts },
    { href: `${home}#gear`, label: t.nav.gear },
    { href: `${home}#club`, label: t.nav.club },
    { href: localePath(locale, "/story"), label: t.nav.story },
  ]

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="flex max-w-md flex-col gap-4">
            <Logo inverted />
            <p className="text-sm font-light tracking-[0.18em] text-cream/55">
              {t.footer.tagline}
            </p>
            <p className="text-sm font-light leading-7 text-cream/70">{t.line}</p>
          </div>
          <nav className="flex max-w-lg flex-wrap gap-x-6 gap-y-3 text-sm font-light">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-cream">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Separator className="bg-cream/15" />
        <p className="text-xs font-light text-cream/55">
          © {year} {t.footer.brand}
        </p>
      </div>
    </footer>
  )
}
