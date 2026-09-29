"use client"

import { useState } from "react"

import { contactChannels } from "@/lib/contact"
import { parseInquiryPayload, type FieldErrorCode, type ParsedInquiry } from "@/lib/validation"

const LABELS: Record<string, [string, string]> = {
  name: ["שם", "Name"],
  role: ["תפקיד", "Role"],
  organization: ["ארגון", "Organisation"],
  audience: ["פונה בתור", "Contacting as"],
  phone: ["טלפון", "Phone"],
  email: ["דוא״ל", "Email"],
  propertyLocation: ["אתר", "Site"],
  message: ["הודעה", "Message"],
}

/** The lead as a readable WhatsApp message. */
function whatsappText(data: ParsedInquiry) {
  const en = document.documentElement.lang === "en"
  const lines = Object.entries(LABELS)
    .map(([key, [he, eng]]) => {
      const value = data[key as keyof ParsedInquiry]
      return typeof value === "string" && value ? `${en ? eng : he}: ${value}` : ""
    })
    .filter(Boolean)
  const intro = en ? "New enquiry from the PADELTECH website" : "פנייה חדשה מהאתר של PADELTECH"
  return `${intro}\n\n${lines.join("\n")}`
}

/**
 * Static-site lead submission. Validates in the browser, then:
 * - with NEXT_PUBLIC_LEAD_WEBHOOK_URL set, posts the lead to it (e.g. a Google
 *   Apps Script that appends to a sheet and emails the owner);
 * - otherwise opens WhatsApp with the lead written out, so nothing is lost.
 */
export function useInquirySubmit() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [via, setVia] = useState<"webhook" | "whatsapp">("webhook")
  const [error, setError] = useState("")
  const [fields, setFields] = useState<Record<string, FieldErrorCode>>({})

  async function submit(payload: unknown, label: (code: string) => string) {
    if (submitting) return false
    setError("")
    setFields({})

    const parsed = parseInquiryPayload(payload)
    if (!parsed.ok) {
      setFields(parsed.fields)
      setError(label(parsed.error))
      return false
    }

    const webhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL?.trim()
    const lead = { ...parsed.data, createdAt: new Date().toISOString(), page: window.location.pathname }

    if (!webhook) {
      // Must run inside the click, before any await, or the popup is blocked.
      const { whatsappHref } = contactChannels(whatsappText(parsed.data))
      if (!whatsappHref) {
        setError(label("error"))
        return false
      }
      window.open(whatsappHref, "_blank", "noopener")
      setVia("whatsapp")
      setSuccess(true)
      return true
    }

    setSubmitting(true)
    try {
      // text/plain + no-cors: a "simple" request that Apps Script accepts without CORS.
      await fetch(webhook, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(lead),
      })
      setSuccess(true)
      return true
    } catch {
      setError(label("error"))
      return false
    } finally {
      setSubmitting(false)
    }
  }

  return { submitting, success, via, error, fields, submit }
}

export function fieldMessage(
  code: FieldErrorCode | undefined,
  t: { required: string; invalidEmail: string; error: string }
) {
  if (!code) return undefined
  if (code === "invalidEmail") return t.invalidEmail
  if (code === "required") return t.required
  return t.error
}
