export const fetchUser = async () => {
    const response = await fetch(`http://15.235.206.148:5001/users`)
    const data = await response.json()
    return data
}
