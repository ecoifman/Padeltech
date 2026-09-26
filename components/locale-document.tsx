"use client"

import { useEffect } from "react"

import type { Locale } from "@/lib/locales"

export function LocaleDocument({
  locale,
  dir,
}: {
  locale: Locale
  dir: "rtl" | "ltr"
}) {
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale, dir])

  return null
}
