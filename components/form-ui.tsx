import { cn } from "@/lib/utils"

export const fieldControlClass =
  "h-12 min-h-12 w-full rounded-md border border-input bg-transparent px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"

export function FormSuccess({
  message,
  className,
}: {
  message: string
  className?: string
}) {
  return (
    <p
      role="status"
      aria-live="polite"
      className={cn("text-lg leading-8", className)}
    >
      {message}
    </p>
  )
}

export function ConsentRow({
  id,
  checked,
  onChange,
  label,
  className,
}: {
  id: string
  checked: boolean
  onChange: (value: boolean) => void
  label: string
  className?: string
}) {
  return (
    <label
      htmlFor={id}
      className={cn("flex cursor-pointer items-start gap-3 text-sm leading-6", className)}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 size-5 shrink-0 rounded-sm border border-current accent-lime"
      />
      <span>{label}</span>
    </label>
  )
}
