import { useNavigate } from "react-router-dom"
import { LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { signOut } from "@/lib/auth-client"

export default function AppSidebar() {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate("/login")
  }

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-4">
        <span className="text-foreground font-semibold">Juicy Check</span>
      </SidebarHeader>

      <SidebarContent />

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleSignOut}>
              <LogOut className="size-4" />
              <span>Disconnect</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}