/**
 * Public contact channels, from env so they can change without a code edit.
 * Anything left empty is simply not shown.
 */
export function contactChannels() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || ""
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || ""
  // International digits for tel: and wa.me links (Israeli 05x → 9725x).
  const digits = phone.replace(/\D/g, "")
  const intl = digits.startsWith("0") ? `972${digits.slice(1)}` : digits
  return {
    phone,
    phoneHref: phone ? `tel:+${intl}` : "",
    whatsappHref: phone ? `https://wa.me/${intl}` : "",
    email,
    emailHref: email ? `mailto:${email}` : "",
  }
}
