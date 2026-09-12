'use client'

import postLogin from '@/services/apiServices'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useLogin() {
    const router = useRouter()
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: postLogin,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ['user'] })
            router.push('/dashboard')
        },
        onError: (error) => {
            console.error(error)
        },
    })
}
