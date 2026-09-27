export const activityInterests = [
  "beginner",
  "social",
  "training",
  "court",
  "wellness",
] as const

export type ActivityInterest = (typeof activityInterests)[number]

export const regions = [
  "center",
  "sharon",
  "jerusalem",
  "north",
  "south",
  "other",
] as const

export type Region = (typeof regions)[number]

export const inquiryStatuses = ["new", "in_progress", "done"] as const
export type InquiryStatus = (typeof inquiryStatuses)[number]

export const inquiryTypes = ["activity", "groups", "property", "business"] as const
export type InquiryType = (typeof inquiryTypes)[number]

export function isActivityInterest(value: string): value is ActivityInterest {
  return activityInterests.includes(value as ActivityInterest)
}

export function isRegion(value: string): value is Region {
  return regions.includes(value as Region)
}

export function isInquiryType(value: string): value is InquiryType {
  return inquiryTypes.includes(value as InquiryType)
}

export function isInquiryStatus(value: string): value is InquiryStatus {
  return inquiryStatuses.includes(value as InquiryStatus)
}

export const audiences = ["municipal", "developer", "operator", "other"] as const
export type Audience = (typeof audiences)[number]

export function isAudience(value: string): value is Audience {
  return audiences.includes(value as Audience)
}

export const propertyKinds = ["open", "building"] as const
export type PropertyKind = (typeof propertyKinds)[number]

export function isPropertyKind(value: string): value is PropertyKind {
  return propertyKinds.includes(value as PropertyKind)
}
