import { AdminDashboard } from "@/app/admin/dashboard"
import { AdminLoginForm } from "@/app/admin/login-form"
import { adminPasswordConfigured, isAdminSession } from "@/lib/admin-auth"
import { listInquiries } from "@/lib/inquiries"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export default async function AdminPage() {
  const allowed = await isAdminSession()
  if (!allowed) {
    return <AdminLoginForm configured={adminPasswordConfigured()} />
  }

  const items = await listInquiries()
  return <AdminDashboard items={items} />
}
