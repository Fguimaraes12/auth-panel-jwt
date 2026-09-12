'use client'

import { useLogout } from '@/hooks/useLogout'
import useUser from '@/hooks/useUser'

export default function Dashboard() {
    const { data, isLoading, isError } = useUser()
    const { mutate } = useLogout()

    if (isLoading) return <p>Carregando...</p>
    if (isError) return <p>erro</p>
    return (
        <div>
            <button onClick={() => mutate()} className="text-2xl">
                Logout
            </button>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}
