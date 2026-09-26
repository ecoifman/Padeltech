import { NextResponse } from "next/server"

import { requireAdmin } from "@/lib/admin-auth"
import { listInquiries, toCsv } from "@/lib/inquiries"

export const runtime = "nodejs"

export async function GET() {
  try {
    await requireAdmin()
  } catch {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 })
  }

  const items = await listInquiries()
  const csv = toCsv(items)
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="padeltech-inquiries.csv"',
      "Cache-Control": "no-store",
    },
  })
}
