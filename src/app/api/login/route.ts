import { NextResponse } from 'next/server'
import type { LoginPayload, LoginResponse } from '@/types/Login'

export async function POST(request: Request) {
    const { username, password }: LoginPayload = await request.json()

    const dummyResponse = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })

    if (!dummyResponse.ok) {
        return NextResponse.json(
            { message: 'Usuário ou senha inválidos' },
            { status: dummyResponse.status },
        )
    }

    const data: LoginResponse = await dummyResponse.json()

    const response = NextResponse.json(data)

    response.cookies.set('token', data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60,
    })

    return response
}
