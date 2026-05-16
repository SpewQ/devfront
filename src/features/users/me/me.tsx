import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchMe } from "./fetch-me"
import type { User } from "../get-users/user.type"

export default function Me() {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMe()
      .then((data) => setUser(data.user))
      .catch((err) => setError(err.message))
  }, [])

  if (error) {
    return <p className="text-destructive text-sm">{error}</p>
  }

  if (!user) {
    return <p className="text-muted-foreground text-sm">Loading…</p>
  }

  console.log(user)

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground flex flex-col gap-1 text-sm">
        <span>
          <span className="text-foreground font-medium">ID</span> {user.id}
        </span>
        <span>
          <span className="text-foreground font-medium">Email</span> {user.email}
        </span>
      </CardContent>
    </Card>
  )
}