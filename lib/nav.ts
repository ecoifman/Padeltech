import type { Copy } from "@/lib/copy"
import type { Locale } from "@/lib/locales"
import { localePath } from "@/lib/paths"

/** Main navigation: business audiences first, then proof, then players and company. */
export function navItems(locale: Locale, t: Copy) {
  return [
    { href: localePath(locale, "/municipalities"), label: t.nav.municipalities },
    { href: localePath(locale, "/partners"), label: t.nav.developers },
    { href: localePath(locale, "/operators"), label: t.nav.operators },
    { href: localePath(locale, "/projects"), label: t.nav.projects },
    { href: localePath(locale, "/court"), label: t.nav.court },
    { href: localePath(locale, "/clubs"), label: t.nav.clubs },
    { href: localePath(locale, "/about"), label: t.nav.about },
  ]
}

/** Footer navigation, grouped by audience. */
export function footerGroups(locale: Locale, t: Copy) {
  return [
    {
      title: t.nav.business,
      links: [
        { href: localePath(locale, "/municipalities"), label: t.nav.municipalities },
        { href: localePath(locale, "/partners"), label: t.nav.developers },
        { href: localePath(locale, "/operators"), label: t.nav.operators },
        { href: localePath(locale, "/projects"), label: t.nav.projects },
        { href: localePath(locale, "/court"), label: t.nav.court },
      ],
    },
    {
      title: t.nav.players,
      links: [
        { href: localePath(locale, "/clubs"), label: t.nav.clubs },
        { href: localePath(locale, "/padel"), label: t.nav.padel },
        { href: localePath(locale, "/wellness"), label: t.nav.wellness },
        { href: localePath(locale, "/groups"), label: t.nav.groups },
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
