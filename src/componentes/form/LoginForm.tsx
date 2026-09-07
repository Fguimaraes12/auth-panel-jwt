'use client'

import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react'

export default function LoginForm() {
    const { mutate, isPending, isError } = useLogin()
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        mutate(loginForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={loginForm.username}
                    onChange={(e) =>
                        setLoginForm((prev) => ({
                            ...prev,
                            username: e.target.value,
                        }))
                    }
                />
                <input
                    type="text"
                    value={loginForm.password}
                    onChange={(e) =>
                        setLoginForm((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }))
                    }
                />
                <button type="submit">{isPending ? 'Entrando...' : 'Entrar'}</button>
                {isError && <p>Usuário ou senha invalidos.</p>}
            </form>
        </div>
    )
}
