import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

/** Main navigation: business audiences first, then the solution and the company. */
export function navItems(locale: Locale, t: Copy) {
  return [
    { href: localePath(locale, "/municipalities"), label: t.nav.municipalities },
    { href: localePath(locale, "/partners"), label: t.nav.developers },
    { href: localePath(locale, "/operators"), label: t.nav.operators },
    { href: localePath(locale, "/solution"), label: t.nav.solution },
    { href: localePath(locale, "/about"), label: t.nav.about },
  ]
}

/** Footer navigation. Player pages stay unlinked until a facility opens. */
export function footerGroups(locale: Locale, t: Copy) {
  return [
    {
      title: t.nav.business,
      links: [
        { href: localePath(locale, "/municipalities"), label: t.nav.municipalities },
        { href: localePath(locale, "/partners"), label: t.nav.developers },
        { href: localePath(locale, "/operators"), label: t.nav.operators },
        { href: localePath(locale, "/solution"), label: t.nav.solution },
        { href: localePath(locale, "/court"), label: t.nav.court },
      ],
    },
    {
      title: t.nav.company,
      links: [
        { href: localePath(locale, "/about"), label: t.nav.about },
        { href: localePath(locale, "/contact"), label: t.nav.contact },
        { href: localePath(locale, "/privacy"), label: t.nav.privacy },
      ],
    },
  ]
}

export function meetingCta(locale: Locale, t: Copy) {
  return { href: localePath(locale, "/contact"), label: t.nav.meeting }
}
