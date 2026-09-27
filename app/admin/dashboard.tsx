"use client"

import { useMemo, useState, useTransition } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { fieldControlClass } from "@/components/form-ui"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import type { Inquiry } from "@/lib/inquiries"
import {
  inquiryStatuses,
  inquiryTypes,
  type InquiryStatus,
  type InquiryType,
} from "@/lib/options"
import { cn } from "@/lib/utils"

const typeLabel: Record<InquiryType, string> = {
  activity: "פעילות",
  groups: "קבוצות",
  property: "נכסים",
}

const statusLabel: Record<InquiryStatus, string> = {
  new: "חדש",
  in_progress: "בטיפול",
  done: "טופל",
}

export function AdminDashboard({ items }: { items: Inquiry[] }) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const [query, setQuery] = useState("")
  const [type, setType] = useState<InquiryType | "">("")
  const [status, setStatus] = useState<InquiryStatus | "">("")
  const [notes, setNotes] = useState<Record<string, string>>(() =>
    Object.fromEntries(items.map((item) => [item.id, item.notes]))
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((item) => {
      if (type && item.type !== type) return false
      if (status && item.status !== status) return false
      if (!q) return true
      const hay = [
        item.name,
        item.email,
        item.phone,
        item.organization,
        item.region,
        item.interest,
        item.message,
        item.propertyLocation,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
      return hay.includes(q)
    })
  }, [items, query, type, status])

  async function patch(id: string, body: { status?: InquiryStatus; notes?: string }) {
    const response = await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    if (response.ok) startTransition(() => router.refresh())
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.refresh()
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl">פניות</h1>
          <p className="mt-2 text-sm text-muted-foreground">{filtered.length} רשומות</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {/* A file download from an API route, so a plain anchor is correct here. */}
          <Button size="lg" variant="outline" render={<a href="/api/inquiries/export" download />} nativeButton={false}>
            ייצוא CSV
          </Button>
          <Button size="lg" variant="secondary" onClick={() => void logout()}>
            יציאה
          </Button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="חיפוש לפי שם, דוא״ל או אזור"
          className={fieldControlClass}
        />
        <select
          value={type}
          onChange={(event) => setType(event.target.value as InquiryType | "")}
          className={fieldControlClass}
        >
          <option value="">כל הסוגים</option>
          {inquiryTypes.map((item) => (
            <option key={item} value={item}>
              {typeLabel[item]}
            </option>
          ))}
        </select>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as InquiryStatus | "")}
          className={fieldControlClass}
        >
          <option value="">כל הסטטוסים</option>
          {inquiryStatuses.map((item) => (
            <option key={item} value={item}>
              {statusLabel[item]}
            </option>
          ))}
        </select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>תאריך</TableHead>
            <TableHead>סוג</TableHead>
            <TableHead>שם</TableHead>
            <TableHead>דוא״ל</TableHead>
            <TableHead>אזור / עניין</TableHead>
            <TableHead>סטטוס</TableHead>
            <TableHead>הערות</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="py-10 text-muted-foreground">
                אין פניות להצגה.
              </TableCell>
            </TableRow>
          ) : (
            filtered.map((item) => (
              <TableRow key={item.id} className={cn(pending && "opacity-70")}>
                <TableCell className="whitespace-nowrap align-top">
                  {item.createdAt.slice(0, 16).replace("T", " ")}
                </TableCell>
                <TableCell className="align-top">{typeLabel[item.type]}</TableCell>
                <TableCell className="align-top">
                  <div>{item.name}</div>
                  {item.organization ? (
                    <div className="text-xs text-muted-foreground">{item.organization}</div>
                  ) : null}
                </TableCell>
                <TableCell className="align-top">
                  <div>{item.email}</div>
                  {item.phone ? (
                    <div className="text-xs text-muted-foreground">{item.phone}</div>
                  ) : null}
                  <div className="text-xs text-muted-foreground">
                    מענה: {item.wantsReply ? "כן" : "לא"} · שיווק:{" "}
                    {item.marketingConsent ? "כן" : "לא"}
                  </div>
                </TableCell>
                <TableCell className="align-top">
                  <div>{item.region || "—"}</div>
                  <div>{item.interest || item.propertyLocation || "—"}</div>
                </TableCell>
                <TableCell className="align-top">
                  <select
                    value={item.status}
                    className={cn(fieldControlClass, "min-h-10 h-10")}
                    onChange={(event) =>
                      void patch(item.id, {
                        status: event.target.value as InquiryStatus,
                      })
                    }
                  >
                    {inquiryStatuses.map((value) => (
                      <option key={value} value={value}>
                        {statusLabel[value]}
                      </option>
                    ))}
                  </select>
                </TableCell>
                <TableCell className="min-w-56 align-top">
                  <Textarea
                    value={notes[item.id] ?? ""}
                    onChange={(event) =>
                      setNotes((current) => ({
                        ...current,
                        [item.id]: event.target.value,
                      }))
                    }
                    className="min-h-20"
                  />
                  <Button
                    className="mt-2"
                    size="sm"
                    variant="outline"
                    onClick={() => void patch(item.id, { notes: notes[item.id] ?? "" })}
                  >
                    שמירת הערה
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}
