import {
  isActivityInterest,
  isAudience,
  isInquiryType,
  isPropertyKind,
  isRegion,
  type ActivityInterest,
  type Audience,
  type InquiryType,
  type PropertyKind,
  type Region,
} from "@/lib/options"

export type FieldErrorCode = "required" | "invalidEmail" | "invalid"

export type ParsedInquiry = {
  type: InquiryType
  source: string
  name: string
  email: string
  phone?: string
  interest?: ActivityInterest | ""
  region?: Region | ""
  wantsReply: boolean
  marketingConsent: boolean
  organization?: string
  participants?: string
  preferredDate?: string
  message?: string
  propertyLocation?: string
  propertyArea?: string
  propertyKind?: PropertyKind | ""
  propertyHeight?: string
  propertyDescription?: string
  propertyLink?: string
  audience?: Audience | ""
  role?: string
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

function asString(value: unknown, max: number) {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, max)
}

function asBool(value: unknown) {
  return value === true || value === "true" || value === "on"
}

export function parseInquiryPayload(body: unknown):
  | { ok: true; data: ParsedInquiry }
  | { ok: false; fields: Record<string, FieldErrorCode>; error: FieldErrorCode } {
  if (!body || typeof body !== "object") {
    return { ok: false, fields: {}, error: "invalid" }
  }

  const input = body as Record<string, unknown>
  const fields: Record<string, FieldErrorCode> = {}
  const typeRaw = asString(input.type, 32)
  const name = asString(input.name, 120)
  const email = asString(input.email, 200).toLowerCase()
  const source = asString(input.source, 80) || "site"

  if (!isInquiryType(typeRaw)) fields.type = "required"
  // Business leads are followed up by phone, so the number is required there.
  if (typeRaw === "business" && !asString(input.phone, 40)) fields.phone = "required"
  if (!name) fields.name = "required"
  if (!email) fields.email = "required"
  else if (!EMAIL.test(email)) fields.email = "invalidEmail"

  const interestRaw = asString(input.interest, 32)
  if (interestRaw && !isActivityInterest(interestRaw)) fields.interest = "invalid"

  const regionRaw = asString(input.region, 32)
  if (regionRaw && !isRegion(regionRaw)) fields.region = "invalid"

  const propertyKindRaw = asString(input.propertyKind, 32)
  if (propertyKindRaw && !isPropertyKind(propertyKindRaw)) {
    fields.propertyKind = "invalid"
  }

  const audienceRaw = asString(input.audience, 32)
  if (audienceRaw && !isAudience(audienceRaw)) fields.audience = "invalid"

  if (Object.keys(fields).length > 0) {
    return { ok: false, fields, error: "invalid" }
  }

  return {
    ok: true,
    data: {
      type: typeRaw as InquiryType,
      source,
      name,
      email,
      phone: asString(input.phone, 40) || undefined,
      interest: interestRaw ? (interestRaw as ActivityInterest) : "",
      region: regionRaw ? (regionRaw as Region) : "",
      wantsReply: asBool(input.wantsReply),
      marketingConsent: asBool(input.marketingConsent),
      organization: asString(input.organization, 160) || undefined,
      participants: asString(input.participants, 40) || undefined,
      preferredDate: asString(input.preferredDate, 80) || undefined,
      message: asString(input.message, 4000) || undefined,
      propertyLocation: asString(input.propertyLocation, 200) || undefined,
      propertyArea: asString(input.propertyArea, 80) || undefined,
      propertyKind: propertyKindRaw ? (propertyKindRaw as PropertyKind) : "",
      propertyHeight: asString(input.propertyHeight, 80) || undefined,
      propertyDescription: asString(input.propertyDescription, 4000) || undefined,
      propertyLink: asString(input.propertyLink, 500) || undefined,
      audience: audienceRaw ? (audienceRaw as Audience) : "",
      role: asString(input.role, 120) || undefined,
    },
  }
}
