import type { User } from "./user.type"

export default function UserItem({ user }: { user: User }) {
    return (
        <p>
            {user.name}
        </p>
    )
}
