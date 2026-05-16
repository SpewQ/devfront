import { Navigate } from "react-router-dom"
import { useSession } from "@/lib/auth-client"
import AppLayout from "@/components/app-layout"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession()

  if (isPending) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <span className="text-muted-foreground text-sm">Loading…</span>
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/login" replace />
  }

  return <AppLayout>{children}</AppLayout>
}