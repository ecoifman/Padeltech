import { Mail, MessageCircle, Phone } from "lucide-react"

import type { Copy } from "@/lib/copy"
import { contactChannels } from "@/lib/contact"
import { cn } from "@/lib/utils"

/** Phone, WhatsApp and email links. Renders nothing until they are configured. */
export function ContactChannels({ t, className }: { t: Copy; className?: string }) {
  const c2 = t.v2.contact
  const c = contactChannels(c2.whatsappMessage)
  const items = [
    c.phone && { href: c.phoneHref, label: c2.phone, value: c.phone, Icon: Phone },
    c.phone && { href: c.whatsappHref, label: c2.whatsapp, value: c.phone, Icon: MessageCircle },
    c.email && { href: c.emailHref, label: c2.email, value: c.email, Icon: Mail },
  ].filter(Boolean) as { href: string; label: string; value: string; Icon: typeof Phone }[]

  if (items.length === 0) return null

  return (
    <ul className={cn("flex flex-col gap-1", className)}>
      {items.map(({ href, label, value, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("https") ? "_blank" : undefined}
            rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
            className="type-body inline-flex min-h-11 items-center gap-3 underline-offset-8 hover:underline"
          >
            <Icon className="size-4 stroke-[1.5]" aria-hidden />
            <span className="text-muted-foreground">{label}</span>
            <span dir="ltr">{value}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
