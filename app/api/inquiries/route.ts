import { NextResponse } from "next/server"

import { requireAdmin } from "@/lib/admin-auth"
import { createInquiry, listInquiries } from "@/lib/inquiries"
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

  try {
    const inquiry = await createInquiry(parsed.data)
    return NextResponse.json({
      id: inquiry.id,
      createdAt: inquiry.createdAt,
    })
  } catch {
    return NextResponse.json({ error: "error" }, { status: 500 })
  }
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
