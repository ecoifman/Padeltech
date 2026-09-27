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
import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { navItems } from "@/lib/nav"
import { localePath } from "@/lib/paths"
import { cn } from "@/lib/utils"

function LanguageLink({ locale, t }: { locale: Locale; t: Copy }) {
  const pathname = usePathname()
  const nextLocale = locale === "he" ? "en" : "he"
  const href = pathname.replace(`/${locale}`, `/${nextLocale}`) || `/${nextLocale}`

  return (
    <Link
      href={href}
      hrefLang={nextLocale}
      aria-label={t.nav.languageLabel}
      lang={nextLocale}
      className="type-small inline-flex min-h-11 min-w-11 items-center justify-center px-2 opacity-75 transition-opacity hover:opacity-100"
    >
      {t.nav.language}
    </Link>
  )
}

export function SiteHeader({
  locale,
  t,
  cta,
}: {
  locale: Locale
  t: Copy
  cta: { href: string; label: string }
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const home = pathname === `/${locale}` || pathname === `/${locale}/`
  const items = navItems(locale, t)

  return (
    <header
      className={cn(
        "z-40 text-foreground",
        home
          ? "dark absolute inset-x-0 top-0 bg-transparent"
          : "sticky top-0 border-b border-border bg-background/95 backdrop-blur"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 md:h-20 lg:px-10">
        <Link href={localePath(locale)} className="shrink-0" aria-label={t.hero.brand}>
          <Logo inverted={home} />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label={t.nav.main}>
          {items.map((item) => {
            const active = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "type-small py-2 transition-opacity hover:opacity-100",
                  active
                    ? "underline decoration-lime decoration-2 underline-offset-8 opacity-100"
                    : "opacity-75"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageLink locale={locale} t={t} />
          <Button
            size="lg"
            variant={home ? "inverse" : "default"}
            className="hidden xl:inline-flex"
            render={<Link href={cta.href} />}
            nativeButton={false}
          >
            {cta.label}
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="size-11 xl:hidden"
                />
              }
            >
              <MenuIcon className="size-5" />
              <span className="sr-only">{t.nav.openMenu}</span>
            </SheetTrigger>
            <SheetContent
              side={locale === "he" ? "left" : "right"}
              className="bg-background text-foreground"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4 pb-8" aria-label={t.nav.main}>
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="type-h3 border-b border-border py-4"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="mt-8"
                  size="lg"
                  variant="accent"
                  render={<Link href={cta.href} />}
                  nativeButton={false}
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
