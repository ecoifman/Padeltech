"use client"

import { useId, useState } from "react"

import {
  ConsentRow,
  FormSuccess,
  PrivacyNote,
  fieldControlClass,
} from "@/components/form-ui"
import { fieldMessage, useInquirySubmit } from "@/components/use-inquiry-submit"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import type { Copy } from "@/lib/copy"
import { audiences, type Audience } from "@/lib/options"

/**
 * The business inquiry form (municipalities, developers, operators).
 * With `audience` set, the audience question is hidden and preselected.
 */
export function BusinessForm({
  t,
  source,
  audience: fixedAudience,
  id = "business-form",
}: {
  t: Copy
  source: string
  audience?: Audience
  id?: string
}) {
  const f = t.v2.form
  const formId = useId()
  const { submitting, success, error, fields, submit } = useInquirySubmit()
  const [name, setName] = useState("")
  const [organization, setOrganization] = useState("")
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [audience, setAudience] = useState<Audience | "">(fixedAudience ?? "")
  const [site, setSite] = useState("")
  const [message, setMessage] = useState("")
  const [marketingConsent, setMarketingConsent] = useState(false)

  const labelFor = (code: string) => {
    if (code === "invalidEmail") return t.signup.invalidEmail
    if (code === "required") return t.signup.required
    return t.signup.error
  }

  if (success) return <FormSuccess message={f.success} />

  return (
    <form
      id={id}
      className="flex scroll-mt-28 flex-col gap-6"
      noValidate
      onSubmit={async (event) => {
        event.preventDefault()
        await submit(
          {
            type: "business",
            source,
            name,
            email,
            phone,
            organization,
            role,
            audience,
            propertyLocation: site,
            message,
            wantsReply: true,
            marketingConsent,
          },
          labelFor
        )
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor={`${formId}-name`}>{f.name}</FieldLabel>
          <Input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldControlClass}
            aria-invalid={Boolean(fields.name)}
          />
          <FieldError>{fieldMessage(fields.name, t.signup)}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor={`${formId}-role`}>{f.role}</FieldLabel>
          <Input
            id={`${formId}-role`}
            name="role"
            autoComplete="organization-title"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={fieldControlClass}
          />
        </Field>
      </div>

      <Field>
        <FieldLabel htmlFor={`${formId}-org`}>{f.organization}</FieldLabel>
        <Input
          id={`${formId}-org`}
          name="organization"
          autoComplete="organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className={fieldControlClass}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field>
          <FieldLabel htmlFor={`${formId}-email`}>{f.email}</FieldLabel>
          <Input
            id={`${formId}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldControlClass}
            aria-invalid={Boolean(fields.email)}
          />
          <FieldError>{fieldMessage(fields.email, t.signup)}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor={`${formId}-phone`}>{f.phone}</FieldLabel>
          <Input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldControlClass}
          />
        </Field>
      </div>

      {fixedAudience ? null : (
        <Field>
          <FieldLabel htmlFor={`${formId}-audience`}>{f.audience}</FieldLabel>
          <select
            id={`${formId}-audience`}
            name="audience"
            value={audience}
            onChange={(e) => setAudience(e.target.value as Audience | "")}
            className={fieldControlClass}
          >
            <option value="">—</option>
            {audiences.map((item) => (
              <option key={item} value={item}>
                {f.audiences[item]}
              </option>
            ))}
          </select>
        </Field>
      )}

      <Field>
        <FieldLabel htmlFor={`${formId}-site`}>{f.site}</FieldLabel>
        <Input
          id={`${formId}-site`}
          name="site"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          className={fieldControlClass}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor={`${formId}-message`}>{f.message}</FieldLabel>
        <Textarea
          id={`${formId}-message`}
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldControlClass} h-auto min-h-24 py-3`}
        />
      </Field>

      <ConsentRow
        id={`${formId}-marketing`}
        checked={marketingConsent}
        onChange={setMarketingConsent}
        label={t.signup.marketing}
      />

      {error ? (
        <p role="alert" className="type-small text-destructive">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" variant="default" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? (
          <>
            <Spinner />
            {t.signup.sending}
          </>
        ) : (
          f.submit
        )}
      </Button>
      <PrivacyNote t={t} />
    </form>
  )
}
