import { api } from '@/services/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export function useLogout() {
    const router = useRouter()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async () => {
            const { data } = await api.post('/api/logout')
            return data
        },
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ['user'] })
            router.push('/')
        },
    })
}
