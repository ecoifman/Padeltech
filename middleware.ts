import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { defaultLocale, locales } from "@/lib/locales"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const locale = locales.find(
    (item) => pathname === `/${item}` || pathname.startsWith(`/${item}/`)
  )

  if (!locale) {
    const url = request.nextUrl.clone()
    url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`
    // Rewrite so preview proxies are not bounced to 127.0.0.1 in the browser.
    return NextResponse.rewrite(url)
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-locale", locale)
  return NextResponse.next({
    request: { headers: requestHeaders },
  })
}

export const config = {
  matcher: ["/((?!_next|api|admin|brand|favicon.svg|.*\\..*).*)"],
}
