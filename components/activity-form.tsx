"use client"

import { useId, useState } from "react"

import {
  ConsentRow,
  FormSuccess,
  PrivacyNote,
  fieldControlClass,
} from "@/components/form-ui"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import type { Copy } from "@/lib/copy"
import {
  activityInterests,
  regions,
  type ActivityInterest,
  type Region,
} from "@/lib/options"
import { fieldMessage, useInquirySubmit } from "@/components/use-inquiry-submit"

export function ActivityForm({
  t,
  source,
  defaultInterest = "",
  defaultRegion = "",
  id = "signup-form",
}: {
  t: Copy
  source: string
  defaultInterest?: ActivityInterest | ""
  defaultRegion?: Region | ""
  id?: string
}) {
  const formId = useId()
  const { submitting, success, error, fields, submit } = useInquirySubmit()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [region, setRegion] = useState<Region | "">(defaultRegion)
  const [interest, setInterest] = useState<ActivityInterest | "">(defaultInterest)
  const [wantsReply, setWantsReply] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)

  const control = fieldControlClass

  const labelFor = (code: string) => {
    if (code === "invalidEmail") return t.signup.invalidEmail
    if (code === "required") return t.signup.required
    return t.signup.error
  }

  if (success) {
    return <FormSuccess message={t.signup.success} />
  }

  return (
    <form
      id={id}
      className="flex scroll-mt-28 flex-col gap-6"
      onSubmit={async (event) => {
        event.preventDefault()
        await submit(
          {
            type: "activity",
            source,
            name,
            email,
            phone,
            region,
            interest,
            wantsReply,
            marketingConsent,
          },
          labelFor
        )
      }}
      noValidate
    >
      <Field>
        <FieldLabel htmlFor={`${formId}-name`}>{t.signup.name}</FieldLabel>
        <Input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={control}
          aria-invalid={Boolean(fields.name)}
        />
        <FieldError>{fieldMessage(fields.name, t.signup)}</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor={`${formId}-email`}>{t.signup.email}</FieldLabel>
        <Input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={control}
          aria-invalid={Boolean(fields.email)}
        />
        <FieldError>{fieldMessage(fields.email, t.signup)}</FieldError>
      </Field>

      <Field>
        <FieldLabel htmlFor={`${formId}-phone`}>{t.signup.phone}</FieldLabel>
        <Input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={control}
        />
      </Field>

      <Field>
        <FieldLabel htmlFor={`${formId}-region`}>{t.signup.region}</FieldLabel>
        <select
          id={`${formId}-region`}
          name="region"
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

      <fieldset className="flex flex-col gap-3">
        <legend className="type-small font-medium">{t.signup.interest}</legend>
        <div className="flex flex-col gap-2">
          {activityInterests.map((item) => (
            <label
              key={item}
              className="type-body flex min-h-11 cursor-pointer items-center gap-3"
            >
              <input
                type="radio"
                name={`${formId}-interest`}
                value={item}
                checked={interest === item}
                onChange={() => setInterest(item)}
                className="size-5 accent-ink dark:accent-lime"
              />
              {t.interests[item]}
            </label>
          ))}
        </div>
      </fieldset>

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
          t.signup.submit
        )}
      </Button>
      <PrivacyNote t={t} />
    </form>
  )
}
