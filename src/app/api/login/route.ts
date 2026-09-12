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
        httpOnly: true, // ele fala para o navegador não deixar o JS ler o cookie (document.cookie não enxerga).
        secure: process.env.NODE_ENV === 'production', // secure automático: true em HTTPS (produção), false em HTTP (localhost)
        sameSite: 'strict', // não envia este cookie em pedidos vindos de outros sites (anti-CSRF)
        path: '/', // em quais rotas o navegador deve enviar o cookie., Se fosse '/dashboard' → só mandaria dentro de /dashboard.
        maxAge: 60 * 60, // tempo de expiração do token
    })

    return response
}
