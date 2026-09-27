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
import { regions, type Region } from "@/lib/options"
import { cn } from "@/lib/utils"

export function GroupsForm({ t, source }: { t: Copy; source: string }) {
  const formId = useId()
  const { submitting, success, error, fields, submit } = useInquirySubmit()
  const [name, setName] = useState("")
  const [organization, setOrganization] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [participants, setParticipants] = useState("")
  const [region, setRegion] = useState<Region | "">("")
  const [preferredDate, setPreferredDate] = useState("")
  const [message, setMessage] = useState("")
  const [wantsReply, setWantsReply] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)

  const control = fieldControlClass

  const labelFor = (code: string) => {
    if (code === "invalidEmail") return t.signup.invalidEmail
    if (code === "required") return t.signup.required
    return t.signup.error
  }

  if (success) {
    return <FormSuccess message={t.groupsPage.success} />
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
            type: "groups",
            source,
            name,
            organization,
            email,
            phone,
            participants,
            region,
            preferredDate,
            message,
            wantsReply,
            marketingConsent,
          },
          labelFor
        )
      }}
    >
      <Field>
        <FieldLabel htmlFor={`${formId}-name`}>{t.groupsPage.contactName}</FieldLabel>
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
        <FieldLabel htmlFor={`${formId}-org`}>{t.groupsPage.organization}</FieldLabel>
        <Input
          id={`${formId}-org`}
          value={organization}
          onChange={(event) => setOrganization(event.target.value)}
          className={control}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-email`}>{t.groupsPage.email}</FieldLabel>
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
        <FieldLabel htmlFor={`${formId}-phone`}>{t.groupsPage.phone}</FieldLabel>
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
        <FieldLabel htmlFor={`${formId}-participants`}>
          {t.groupsPage.participants}
        </FieldLabel>
        <Input
          id={`${formId}-participants`}
          inputMode="numeric"
          value={participants}
          onChange={(event) => setParticipants(event.target.value)}
          className={control}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-region`}>{t.groupsPage.region}</FieldLabel>
        <select
          id={`${formId}-region`}
          value={region}
          onChange={(event) => setRegion(event.target.value as Region | "")}
          className={control}
        >
          <option value="">{t.signup.regionPlaceholder}</option>
          {regions.map((item) => (
            <option key={item} value={item}>
              {t.regionLabels[item]}
            </option>
          ))}
        </select>
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-date`}>{t.groupsPage.date}</FieldLabel>
        <Input
          id={`${formId}-date`}
          value={preferredDate}
          onChange={(event) => setPreferredDate(event.target.value)}
          className={control}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={`${formId}-message`}>{t.groupsPage.message}</FieldLabel>
        <Textarea
          id={`${formId}-message`}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={cn(control, "min-h-28 py-3")}
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
          t.groupsPage.submit
        )}
      </Button>
      <p className="type-small text-muted-foreground">{t.groupsPage.disclaimer}</p>
      <PrivacyNote t={t} />
    </form>
  )
}
