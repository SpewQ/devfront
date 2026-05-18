import type { User } from "../get-users/user.type"

export const fetchMe = async (): Promise<{ user: User }> => {
  const response = await fetch(`http://15.235.206.148:5001/users/me`, {
    credentials: "include",
  })

  if (!response.ok) {
    throw new Error("Failed to fetch current user")
  }

  return response.json()
}
