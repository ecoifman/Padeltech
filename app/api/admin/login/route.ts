import { NextResponse } from "next/server"

import {
  adminPasswordConfigured,
  createAdminSession,
  verifyAdminPassword,
} from "@/lib/admin-auth"

export const runtime = "nodejs"

export async function POST(request: Request) {
  if (!adminPasswordConfigured()) {
    return NextResponse.json(
      { error: "NOT_CONFIGURED" },
      { status: 503 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  const password =
    body && typeof body === "object" && "password" in body
      ? String((body as { password?: unknown }).password ?? "")
      : ""

  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 })
  }

  await createAdminSession()
  return NextResponse.json({ ok: true })
}
