import Link from "next/link"

import { Logo } from "@/components/logo"
import { Container } from "@/components/ui-layout"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { footerGroups } from "@/lib/nav"

export function SiteFooter({ locale, t }: { locale: Locale; t: Copy }) {
  const year = new Date().getFullYear()

  return (
    <footer className="dark bg-background text-foreground">
      <Container className="flex flex-col gap-12 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div className="flex max-w-sm flex-col gap-5">
            <Logo inverted />
            <p className="type-body text-muted-foreground">{t.v2.hero.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerGroups(locale, t).map((group) => (
              <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
                <p className="type-eyebrow">{group.title}</p>
                {group.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="type-small py-1 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <p className="type-small border-t border-border pt-6 text-muted-foreground">
          © {year} {t.footer.brand} {t.footer.tagline}
        </p>
      </Container>
    </footer>
  )
}
