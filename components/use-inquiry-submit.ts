"use client"

import { useState } from "react"

import type { FieldErrorCode } from "@/lib/validation"

type Result =
  | { ok: true }
  | { ok: false; error: string; fields: Record<string, FieldErrorCode> }

export function useInquirySubmit() {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [fields, setFields] = useState<Record<string, FieldErrorCode>>({})

  async function submit(payload: unknown, label: (code: string) => string) {
    if (submitting) return false
    setSubmitting(true)
    setError("")
    setFields({})

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = (await response.json().catch(() => ({}))) as Result & {
        error?: string
        fields?: Record<string, FieldErrorCode>
      }

      if (!response.ok) {
        setFields(data.fields ?? {})
        setError(label(data.error ?? "error"))
        return false
      }

      setSuccess(true)
      return true
    } catch {
      setError(label("error"))
      return false
    } finally {
      setSubmitting(false)
    }
  }

  return { submitting, success, error, fields, submit }
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
