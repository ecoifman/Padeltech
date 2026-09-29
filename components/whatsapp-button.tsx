import type { Copy } from "@/lib/copy"
import { contactChannels } from "@/lib/contact"

/** Floating WhatsApp shortcut with a prefilled first message. */
export function WhatsAppButton({ t }: { t: Copy }) {
  const { whatsappHref } = contactChannels(t.v2.contact.whatsappMessage)
  if (!whatsappHref) return null
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.v2.contact.whatsappButton}
      title={t.v2.contact.whatsappButton}
      className="fixed bottom-4 end-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-navy text-paper outline-offset-4 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-navy sm:bottom-6 sm:end-6 motion-reduce:transition-none"
    >
      <svg viewBox="0 0 32 32" aria-hidden className="size-7 fill-current">
        <path d="M16.04 3C9.39 3 4 8.36 4 14.97c0 2.11.56 4.17 1.62 5.99L4 29l8.24-2.15a12.1 12.1 0 0 0 3.8.61h.01C22.68 27.46 28 22.1 28 15.49 28.02 8.37 22.68 3 16.04 3Zm0 22.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-4.89 1.28 1.3-4.76-.24-.39a9.83 9.83 0 0 1-1.52-5.25c0-5.47 4.47-9.92 9.98-9.92 2.66 0 5.17 1.04 7.05 2.92a9.84 9.84 0 0 1 2.92 7.01c0 5.47-4.47 9.92-9.98 9.92Zm5.47-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  )
}
