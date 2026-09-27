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
import { type PropertyKind } from "@/lib/options"
import { cn } from "@/lib/utils"

export function PropertyForm({ t, source }: { t: Copy; source: string }) {
  const formId = useId()
  const { submitting, success, error, fields, submit } = useInquirySubmit()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [propertyLocation, setPropertyLocation] = useState("")
  const [propertyArea, setPropertyArea] = useState("")
  const [propertyKind, setPropertyKind] = useState<PropertyKind | "">("")
  const [propertyHeight, setPropertyHeight] = useState("")
  const [propertyDescription, setPropertyDescription] = useState("")
  const [propertyLink, setPropertyLink] = useState("")
  const [wantsReply, setWantsReply] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)

  const control = fieldControlClass
  const openLabel = t.partnersPage.kind.includes("מבנה") ? "שטח פתוח" : "Open land"
  const buildingLabel = t.partnersPage.kind.includes("מבנה") ? "מבנה" : "Building"

  const labelFor = (code: string) => {
    if (code === "invalidEmail") return t.signup.invalidEmail
    if (code === "required") return t.signup.required
    return t.signup.error
  }

  if (success) {
    return <FormSuccess message={t.partnersPage.success} />
  }

  return (
    <form
      id="signup"
      className="flex scroll-mt-28 flex-col gap-5"
      noValidate
      onSubmit={async (event) => {
        event.preventDefault()
        await submit(
          {
            type: "property",
            source,
            name,
            email,
            phone,
            propertyLocation,
            propertyArea,
            propertyKind,
            propertyHeight,
            propertyDescription,
            propertyLink,
            wantsReply,
            marketingConsent,
          },
          labelFor
        )
      }}
    >
      <Field>
        <FieldLabel htmlFor={`${formId}-name`}>{t.partnersPage.contactName}</FieldLabel>
        <Input
          id={`${formId}-name`}
          required
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={control}
          aria-invalid={Boolean(fields.name)}
        />
        <FieldError>{fieldMessage(fields.name, t.signup)}</FieldError>
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-email`}>{t.partnersPage.email}</FieldLabel>
        <Input
          id={`${formId}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={control}
          aria-invalid={Boolean(fields.email)}
        />
        <FieldError>{fieldMessage(fields.email, t.signup)}</FieldError>
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-phone`}>{t.partnersPage.phone}</FieldLabel>
        <Input
          id={`${formId}-phone`}
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={control}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-location`}>{t.partnersPage.location}</FieldLabel>
        <Input
          id={`${formId}-location`}
          value={propertyLocation}
          onChange={(event) => setPropertyLocation(event.target.value)}
          className={control}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-area`}>{t.partnersPage.area}</FieldLabel>
        <Input
          id={`${formId}-area`}
          value={propertyArea}
          onChange={(event) => setPropertyArea(event.target.value)}
          className={control}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-kind`}>{t.partnersPage.kind}</FieldLabel>
        <select
          id={`${formId}-kind`}
          value={propertyKind}
          onChange={(event) => setPropertyKind(event.target.value as PropertyKind | "")}
          className={control}
        >
          <option value=""> </option>
          <option value="open">{openLabel}</option>
          <option value="building">{buildingLabel}</option>
        </select>
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-height`}>{t.partnersPage.height}</FieldLabel>
        <Input
          id={`${formId}-height`}
          value={propertyHeight}
          onChange={(event) => setPropertyHeight(event.target.value)}
          className={control}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-description`}>
          {t.partnersPage.description}
        </FieldLabel>
        <Textarea
          id={`${formId}-description`}
          value={propertyDescription}
          onChange={(event) => setPropertyDescription(event.target.value)}
          className={cn(control, "min-h-28 py-3")}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-link`}>{t.partnersPage.link}</FieldLabel>
        <Input
          id={`${formId}-link`}
          type="url"
          inputMode="url"
          value={propertyLink}
          onChange={(event) => setPropertyLink(event.target.value)}
          className={control}
        />
      </Field>
      <ConsentRow
        id={`${formId}-reply`}
        checked={wantsReply}
        onChange={setWantsReply}
        label={t.signup.wantsReply}
      />
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
      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? (
          <>
            <Spinner />
            {t.signup.sending}
          </>
        ) : (
          t.partnersPage.submit
        )}
      </Button>
      <p className="type-small text-muted-foreground">{t.partnersPage.disclaimer}</p>
      <PrivacyNote t={t} />
    </form>
  )
}
