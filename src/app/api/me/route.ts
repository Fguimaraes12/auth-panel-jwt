import { NextResponse } from 'next/server'
import { api } from '@/services/api'

export async function GET(request: Request) {
    const token = request.headers.get('cookie')?.match(/token=([^;]+)/)?.[1]
    // .match(/token=([^;]+)/) → acha token= e captura tudo até o
    // ?.[1] → o valor capturado (o JWT). Se não tiver cookie/token, vira undefined e cai no 401 da linha 7-9.

    if (!token) {
        return NextResponse.json({ message: 'Não autenticado' }, { status: 401 })
    }

    const { data } = await api.get('https://dummyjson.com/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
    })

    return NextResponse.json(data)
}
