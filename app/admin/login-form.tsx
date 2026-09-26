"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { fieldControlClass } from "@/components/form-ui"

export function AdminLoginForm({ configured }: { configured: boolean }) {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  if (!configured) {
    return (
      <p className="max-w-md text-base leading-8">
        אזור הניהול אינו זמין. יש להגדיר את משתנה הסביבה ADMIN_PASSWORD לפני
        הכניסה. אין אפשרות למשתמש ציבורי להעניק לעצמו הרשאת מנהל.
      </p>
    )
  }

  return (
    <form
      className="flex max-w-md flex-col gap-5"
      onSubmit={async (event) => {
        event.preventDefault()
        if (submitting) return
        setSubmitting(true)
        setError("")
        try {
          const response = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
          })
          if (!response.ok) {
            setError("סיסמה שגויה.")
            return
          }
          router.refresh()
        } catch {
          setError("לא ניתן להתחבר כרגע.")
        } finally {
          setSubmitting(false)
        }
      }}
    >
      <h1 className="text-3xl">כניסת מנהל</h1>
      <Field>
        <FieldLabel htmlFor="admin-password">סיסמה</FieldLabel>
        <Input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={fieldControlClass}
          required
        />
      </Field>
      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={submitting}>
        {submitting ? <Spinner /> : null}
        כניסה
      </Button>
    </form>
  )
}
