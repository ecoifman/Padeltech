import Link from "next/link"

import { Logo } from "@/components/logo"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { navItems } from "@/lib/nav"
import { localePath } from "@/lib/paths"

export function SiteFooter({ locale, t }: { locale: Locale; t: Copy }) {
  const year = new Date().getFullYear()

  return (
    <footer className="dark bg-background text-foreground">
      <Container className="flex flex-col gap-12 py-16 md:py-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="flex max-w-md flex-col gap-5">
            <Logo inverted />
            <p className="type-body text-muted-foreground">{t.hero.body}</p>
          </div>
          <nav
            className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3"
            aria-label={t.nav.main}
          >
            {navItems(locale, t).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="type-small py-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-small text-muted-foreground">
            © {year} {t.footer.brand} {t.footer.tagline}
          </p>
          <Link
            href={localePath(locale, "/privacy")}
            className="type-small text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            {t.nav.privacy}
          </Link>
        </div>
      </Container>
    </footer>
  )
}
