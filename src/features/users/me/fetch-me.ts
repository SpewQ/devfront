import type { User } from "../get-users/user.type"

export const fetchMe = async (): Promise<{ user: User }> => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/me`, {
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("Failed to fetch current user")
  }

  return response.json()
}
