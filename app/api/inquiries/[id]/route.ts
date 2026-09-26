import { NextResponse } from "next/server"

import { requireAdmin } from "@/lib/admin-auth"
import { updateInquiry } from "@/lib/inquiries"
import { isInquiryStatus } from "@/lib/options"

export const runtime = "nodejs"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin()
  } catch {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 })
  }

  const { id } = await params
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  const input = body as Record<string, unknown>
  const patch: { status?: "new" | "in_progress" | "done"; notes?: string } = {}

  if (typeof input.status === "string") {
    if (!isInquiryStatus(input.status)) {
      return NextResponse.json({ error: "invalid" }, { status: 400 })
    }
    patch.status = input.status
  }

  if (typeof input.notes === "string") {
    patch.notes = input.notes.slice(0, 4000)
  }

  const updated = await updateInquiry(id, patch)
  if (!updated) {
    return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 })
  }

  return NextResponse.json({ item: updated })
}
