import Link from "next/link"

import { ActivityForm } from "@/components/activity-form"
import { Button } from "@/components/ui/button"
import { externalBookingUrl } from "@/lib/booking"
import type { Copy } from "@/lib/copy"

/**
 * Until a live booking system exists, /book explains how booking will work and
 * saves a spot — it never simulates a checkout.
 */
export function BookFlow({ t }: { t: Copy }) {
  const bookingUrl = externalBookingUrl()

  return (
    <div className="flex flex-col gap-14">
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.bookStrip.steps.map((step) => (
          <li key={step.label} className="border-t border-border pt-5">
            <p className="type-eyebrow type-number" dir="ltr">
              {step.label}
            </p>
            <h2 className="type-h3 mt-3">{step.title}</h2>
            <p className="type-small mt-2 text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>

      {bookingUrl ? (
        <div>
          <Button
            size="lg"
            variant="accent"
            render={<Link href={bookingUrl} />}
            nativeButton={false}
          >
            {t.bookPage.openBooking}
          </Button>
        </div>
      ) : (
        <div className="grid gap-10 border-t border-border pt-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="type-h2">{t.bookPage.formTitle}</h2>
            <p className="type-body mt-4 max-w-md text-muted-foreground">{t.bookStrip.pending}</p>
          </div>
          <ActivityForm t={t} source="book" defaultInterest="court" id="signup" />
        </div>
      )}
    </div>
  )
}
