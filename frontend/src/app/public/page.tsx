'use client'

import { useSession } from "next-auth/react"

export default function PublicPage() {

    const { data: session } = useSession();

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1 className="text-center">Publica rota</h1>
            {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
        </div>
    )
}