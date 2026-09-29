import { NextResponse } from "next/server"

import { requireAdmin } from "@/lib/admin-auth"
import { createInquiry, listInquiries } from "@/lib/inquiries"
import { forwardLead } from "@/lib/lead-webhook"
import { parseInquiryPayload } from "@/lib/validation"

export const runtime = "nodejs"

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  const parsed = parseInquiryPayload(body)
  if (!parsed.ok) {
    return NextResponse.json(
      { error: parsed.error, fields: parsed.fields },
      { status: 400 }
    )
  }

  // Store locally when the file system allows it, and forward to the lead
  // webhook when one is configured. Either one succeeding keeps the lead.
  const fallback = { id: crypto.randomUUID(), createdAt: new Date().toISOString() }
  const stored = await createInquiry(parsed.data).catch(() => null)
  const meta = stored ? { id: stored.id, createdAt: stored.createdAt } : fallback
  const forwarded = await forwardLead({ ...parsed.data, ...meta })

  if (!stored && !forwarded) {
    return NextResponse.json({ error: "error" }, { status: 500 })
  }
  return NextResponse.json(meta)
}

export async function GET() {
  try {
    await requireAdmin()
  } catch {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 })
  }

  const items = await listInquiries()
  return NextResponse.json({ items })
}
