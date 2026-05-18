import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: http://15.235.206.148:5001
})

export const { signIn, signUp, signOut, useSession } = authClient
