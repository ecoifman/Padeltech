import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-ink px-6 text-center text-paper">
      <Logo inverted />
      <h1 className="text-4xl">העמוד לא נמצא</h1>
      <Button render={<Link href="/he" />} nativeButton={false} size="lg">
        PADELTECH
      </Button>
    </div>
  )
}
