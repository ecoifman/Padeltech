"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { bookHref } from "@/lib/booking"
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"
import { cn } from "@/lib/utils"

function navItems(locale: Locale, t: Copy) {
  const home = localePath(locale)
  return [
    { href: `${home}#experience`, label: t.nav.experience },
    { href: `${home}#play`, label: t.nav.book },
    { href: `${home}#courts`, label: t.nav.courts },
    { href: `${home}#gear`, label: t.nav.gear },
    { href: `${home}#club`, label: t.nav.club },
  ]
}

function LanguageLink({
  locale,
  inverted,
}: {
  locale: Locale
  inverted?: boolean
}) {
  const pathname = usePathname()
  const nextLocale = locale === "he" ? "en" : "he"
  const href = pathname.replace(`/${locale}`, `/${nextLocale}`) || `/${nextLocale}`

  return (
    <Link
      href={href}
      className={cn(
        "min-h-12 min-w-12 px-2 text-xs font-light tracking-[0.18em]",
        inverted ? "text-white/80 hover:text-white" : "text-navy/70 hover:text-navy"
      )}
    >
      {locale === "he" ? "EN" : "עב"}
    </Link>
  )
}

export function SiteHeader({ locale, t }: { locale: Locale; t: Copy }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const home = pathname === `/${locale}` || pathname === `/${locale}/`
  const inverted = home
  const items = navItems(locale, t)

  return (
    <header
      className={cn(
        "z-40",
        inverted
          ? "absolute inset-x-0 top-0 text-white"
          : "sticky top-0 border-b border-navy/10 bg-cream text-navy"
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-16 items-center gap-3 px-5 md:h-20 md:px-8",
          home ? "max-w-none" : "max-w-6xl justify-between"
        )}
      >
        {home ? (
          <Link href={localePath(locale)} className="sr-only">
            {t.hero.brand}
          </Link>
        ) : (
          <Link href={localePath(locale)} className="shrink-0">
            <Logo inverted={inverted} />
          </Link>
        )}
        <div
          className={cn(
            "flex items-center gap-3",
            home && "ml-auto"
          )}
        >
          <nav
            className="hidden items-center gap-5 xl:flex"
            aria-label={t.hero.brand}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-light transition-opacity hover:opacity-70",
                  pathname === item.href && "text-lime"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 xl:flex">
            <LanguageLink locale={locale} inverted={inverted} />
            <Button
              render={<Link href={bookHref(locale)} />}
              nativeButton={false}
              size="lg"
            >
              {t.nav.cta}
            </Button>
          </div>
          <div className="flex items-center gap-1 xl:hidden">
          <LanguageLink locale={locale} inverted={inverted} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className={cn(
                    "min-h-12 min-w-12",
                    inverted ? "text-white hover:bg-white/10" : undefined
                  )}
                />
              }
            >
              <MenuIcon />
              <span className="sr-only">{t.nav.openMenu}</span>
            </SheetTrigger>
            <SheetContent side={locale === "he" ? "left" : "right"} className="bg-cream">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pb-8" aria-label={t.hero.brand}>
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="min-h-12 py-3 text-xl font-light text-navy"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="mt-4"
                  render={<Link href={bookHref(locale)} />}
                  nativeButton={false}
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.cta}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  )
}
