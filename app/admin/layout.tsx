import { Logo } from "@/components/logo"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-cream text-navy">
      <header className="border-b border-navy/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center px-5">
          <Logo />
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10">{children}</main>
    </div>
  )
}
