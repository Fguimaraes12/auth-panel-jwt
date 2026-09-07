'use client'

import { api } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export default function useUser() {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const { data } = await api.get('/api/me')
            return data
        },
    })
}
