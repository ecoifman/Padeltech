import { createHmac, randomBytes, timingSafeEqual } from "crypto"
import { cookies } from "next/headers"

const COOKIE = "padeltech_admin"

function secret() {
  return process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD || ""
}

export function adminPasswordConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD)
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return false
  const a = Buffer.from(password)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

function sign(value: string) {
  const key = secret()
  if (!key) return ""
  return `${value}.${createHmac("sha256", key).update(value).digest("hex")}`
}

function unsign(token: string) {
  const index = token.lastIndexOf(".")
  if (index === -1) return null
  const value = token.slice(0, index)
  const digest = token.slice(index + 1)
  const expected = sign(value).slice(value.length + 1)
  const a = Buffer.from(digest)
  const b = Buffer.from(expected)
  if (!expected || a.length !== b.length || !timingSafeEqual(a, b)) return null
  return value
}

export async function createAdminSession() {
  const token = sign(`${Date.now()}.${randomBytes(8).toString("hex")}`)
  const jar = await cookies()
  jar.set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
    secure: process.env.NODE_ENV === "production",
  })
}

export async function clearAdminSession() {
  const jar = await cookies()
  jar.delete(COOKIE)
}

export async function isAdminSession() {
  if (!adminPasswordConfigured()) return false
  const jar = await cookies()
  const token = jar.get(COOKIE)?.value
  if (!token) return false
  return Boolean(unsign(token))
}

export async function requireAdmin() {
  if (!(await isAdminSession())) {
    const error = new Error("UNAUTHORIZED")
    throw error
  }
}
