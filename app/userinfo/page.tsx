import ky from 'ky'

import { HoverCardDemo } from '@/components/HoverCardDemo'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

type User = {
    login: string
    id: number
    avatar_url: string
    email: string
    bio: string
}

// export const fetchCache = 'default-no-store'

export default async function Home() {
    const user: User = await ky.get(`http://localhost:8000/user`, { cache: 'no-store' }).json()

    if (!user.login) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">User no found</h1>
                </div>
            </div>
        )
    }

    const shortUserName: string = user.login.length > 2 ? user.login.substring(0, 2).toUpperCase() : user.login[0].toUpperCase()

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Welcome to your dashboard</h1>
                <div className="flex justify-center items-center mt-4 mb-0">
                    <Avatar>
                        <AvatarImage src={user.avatar_url} />
                        <AvatarFallback>{shortUserName}</AvatarFallback>
                    </Avatar>
                </div>
                <HoverCardDemo username={user.login} bio={user.bio} />
            </div>
        </div>
    );
}