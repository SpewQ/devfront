export const fetchUser = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`)
    const data = await response.json()
    return data
}