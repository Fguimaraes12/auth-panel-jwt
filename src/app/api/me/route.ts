import { NextResponse } from 'next/server'
import { api } from '@/services/api'

export async function GET(request: Request) {
    const token = request.headers.get('cookie')?.match(/token=([^;]+)/)?.[1]

    if (!token) {
        return NextResponse.json({ message: 'Não autenticado' }, { status: 401 })
    }

    const { data } = await api.get('https://dummyjson.com/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
    })

    return NextResponse.json(data)
}
