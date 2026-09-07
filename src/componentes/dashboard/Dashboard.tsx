'use client'

import useUser from '@/hooks/useUser'

export default function Dashboard() {
    const { data, isLoading } = useUser()
    console.log(data)

    if (isLoading) return <p>Carregando...</p>
    return (
        <div>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}
