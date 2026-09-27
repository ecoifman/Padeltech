import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

/** Main navigation — shared by the header (client) and footer (server). */
export function navItems(locale: Locale, t: Copy) {
  return [
    { href: localePath(locale, "/padel"), label: t.nav.padel },
    { href: localePath(locale, "/clubs"), label: t.nav.club },
    { href: localePath(locale, "/groups"), label: t.nav.groups },
    { href: localePath(locale, "/wellness"), label: t.nav.wellness },
    { href: localePath(locale, "/story"), label: t.nav.story },
    { href: localePath(locale, "/partners"), label: t.nav.partners },
  ]
}
