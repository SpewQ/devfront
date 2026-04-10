import { useEffect, useState } from 'react'
import { fetchUser } from './fetch-user'
import type { User } from './user.type'
import UserItem from './user'

export default function Users() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        fetchUser().then((data) => setUsers(data))
    }, [])
    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}