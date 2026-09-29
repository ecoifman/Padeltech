import type { ParsedInquiry } from "@/lib/validation"

/**
 * Forward a lead to LEAD_WEBHOOK_URL (for example a Google Apps Script that
 * appends a row to a sheet and emails you). Returns false when not configured
 * or when the webhook fails, so the caller can decide what counts as success.
 */
export async function forwardLead(lead: ParsedInquiry & { id: string; createdAt: string }) {
  const url = process.env.LEAD_WEBHOOK_URL?.trim()
  if (!url) return false
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    })
    return response.ok
  } catch {
    return false
  }
}
