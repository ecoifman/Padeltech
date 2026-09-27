import { mkdir, readFile, writeFile } from "fs/promises"
import path from "path"

import type {
  ActivityInterest,
  InquiryStatus,
  InquiryType,
  Region,
} from "@/lib/options"

export type Inquiry = {
  id: string
  createdAt: string
  type: InquiryType
  source: string
  status: InquiryStatus
  name: string
  email: string
  phone?: string
  interest?: ActivityInterest | ""
  region?: Region | ""
  notes: string
  wantsReply: boolean
  marketingConsent: boolean
  organization?: string
  participants?: string
  preferredDate?: string
  message?: string
  propertyLocation?: string
  propertyArea?: string
  propertyKind?: string
  propertyHeight?: string
  propertyDescription?: string
  propertyLink?: string
  audience?: string
  role?: string
}

const dataDir = path.join(process.cwd(), "data")
const dataFile = path.join(dataDir, "inquiries.json")

let writeQueue: Promise<unknown> = Promise.resolve()

function enqueue<T>(work: () => Promise<T>) {
  const run = writeQueue.then(work, work)
  writeQueue = run.then(
    () => undefined,
    () => undefined
  )
  return run
}

async function readAll(): Promise<Inquiry[]> {
  try {
    const raw = await readFile(dataFile, "utf8")
    const parsed = JSON.parse(raw) as Inquiry[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function writeAll(items: Inquiry[]) {
  await mkdir(dataDir, { recursive: true })
  await writeFile(dataFile, JSON.stringify(items, null, 2), "utf8")
}

export async function listInquiries() {
  const items = await readAll()
  return items.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function createInquiry(
  input: Omit<Inquiry, "id" | "createdAt" | "status" | "notes">
) {
  const inquiry: Inquiry = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
    notes: "",
  }
  await enqueue(async () => {
    const items = await readAll()
    items.push(inquiry)
    await writeAll(items)
  })
  return inquiry
}

export async function updateInquiry(
  id: string,
  patch: Partial<Pick<Inquiry, "status" | "notes">>
) {
  let updated: Inquiry | null = null
  await enqueue(async () => {
    const items = await readAll()
    const index = items.findIndex((item) => item.id === id)
    if (index === -1) return
    items[index] = { ...items[index], ...patch }
    updated = items[index]
    await writeAll(items)
  })
  return updated
}

export function toCsv(items: Inquiry[]) {
  const headers = [
    "id",
    "createdAt",
    "type",
    "source",
    "status",
    "name",
    "email",
    "phone",
    "interest",
    "region",
    "wantsReply",
    "marketingConsent",
    "organization",
    "role",
    "audience",
    "participants",
    "preferredDate",
    "propertyLocation",
    "propertyArea",
    "propertyKind",
    "notes",
    "message",
  ]
  const lines = [
    headers.join(","),
    ...items.map((item) =>
      headers
        .map((key) => {
          const value = String(item[key as keyof Inquiry] ?? "")
          return `"${value.replaceAll('"', '""')}"`
        })
        .join(",")
    ),
  ]
  return lines.join("\n")
}
