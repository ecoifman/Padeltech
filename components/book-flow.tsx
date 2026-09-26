"use client"

import { useState } from "react"
import Link from "next/link"

import { ActivityForm } from "@/components/activity-form"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui-layout"
import { externalBookingUrl } from "@/lib/booking"
import type { Copy } from "@/lib/copy"

export function BookFlow({ t }: { t: Copy }) {
  const [court, setCourt] = useState(t.bookPage.courts[0])
  const [time, setTime] = useState(t.bookPage.times[4])
  const bookingUrl = externalBookingUrl()

  return (
    <div className="flex flex-col gap-12">
      <ol className="grid gap-6 sm:grid-cols-4">
        {t.bookStrip.steps.map((step) => (
          <li key={step.label} className="border-t border-navy/10 pt-4">
            <p className="text-[0.7rem] font-light tracking-[0.2em] text-navy/40">
              {step.label}
            </p>
            <p className="mt-2 text-lg font-light">{step.title}</p>
          </li>
        ))}
      </ol>

      <div>
        <h2 className="text-sm font-light tracking-[0.2em] text-navy/45">
          {t.bookPage.court}
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {t.bookPage.courts.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCourt(name)}
              className={`min-h-14 border px-4 py-3 text-start text-sm font-light ${
                court === name
                  ? "border-navy bg-navy text-cream"
                  : "border-navy/15 text-navy"
              }`}
            >
              <span className="block">{name}</span>
              <span className="mt-1 block text-[0.65rem] tracking-[0.16em] opacity-60">
                {t.bookPage.coming}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-light tracking-[0.2em] text-navy/45">
          {t.bookPage.time}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {t.bookPage.times.map((slot) => (
            <button
              key={slot}
              type="button"
              dir="ltr"
              onClick={() => setTime(slot)}
              className={`min-h-12 min-w-20 px-4 text-sm font-light ${
                time === slot
                  ? "bg-navy text-cream"
                  : "border border-navy/15 text-navy"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-navy/10 pt-8">
        <h2 className="text-sm font-light tracking-[0.2em] text-navy/45">
          {t.bookPage.pay}
        </h2>
        <p className="mt-3 max-w-lg text-base font-light leading-7 text-navy/75">
          {t.bookPage.payNote}
        </p>
        <p className="mt-2 text-sm font-light text-navy/50">
          {court} · {time}
        </p>
        {bookingUrl ? (
          <Button
            className="mt-6"
            size="lg"
            render={<Link href={bookingUrl} />}
            nativeButton={false}
          >
            {t.bookPage.openBooking}
          </Button>
        ) : (
          <div className="mt-8 max-w-md">
            <p className="mb-4 text-base font-light text-navy/80">
              {t.bookPage.notify}
            </p>
            <ActivityForm
              t={t}
              source={`book:${court}:${time}`}
              defaultInterest="court"
              id="book-notify"
            />
          </div>
        )}
      </div>
    </div>
  )
}
