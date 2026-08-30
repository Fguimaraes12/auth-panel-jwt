'use client'

import postLogin from '@/services/apiServices'
import { useMutation } from '@tanstack/react-query'

export function useLogin() {
    return useMutation({
        mutationFn: postLogin,
        onError: (error) => {
            console.error(error)
        },
    })
}
