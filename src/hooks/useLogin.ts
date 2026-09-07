'use client'

import postLogin from '@/services/apiServices'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useLogin() {
    const router = useRouter()
    return useMutation({
        mutationFn: postLogin,
        onSuccess: () => {
            router.push('/dashboard')
        },
        onError: (error) => {
            console.error(error)
        },
    })
}
