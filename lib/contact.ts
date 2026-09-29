/**
 * Public contact channels. Env overrides the defaults, so they can change
 * without a code edit. Anything empty is simply not shown.
 */
const DEFAULT_PHONE = "054-236-3473"

export function contactChannels(message?: string) {
  const phone = (process.env.NEXT_PUBLIC_CONTACT_PHONE ?? DEFAULT_PHONE).trim()
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || ""
  // International digits for tel: and wa.me links (Israeli 05x → 9725x).
  const digits = phone.replace(/\D/g, "")
  const intl = digits.startsWith("0") ? `972${digits.slice(1)}` : digits
  const text = message ? `?text=${encodeURIComponent(message)}` : ""
  return {
    phone,
    phoneHref: phone ? `tel:+${intl}` : "",
    whatsappHref: phone ? `https://wa.me/${intl}${text}` : "",
    email,
    emailHref: email ? `mailto:${email}` : "",
  }
}
