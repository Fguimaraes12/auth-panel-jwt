import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const token = request.headers.get('cookie')?.match(/token=([^;]+)/)?.[1]

    if (!token) {
        return NextResponse.json({ message: 'Não autenticado' }, { status: 401 })
    }

    const response = NextResponse.json({ message: 'Logout feito com sucesso' })
    response.cookies.set('token', '', { path: '/', maxAge: 0 })

    return response
}
