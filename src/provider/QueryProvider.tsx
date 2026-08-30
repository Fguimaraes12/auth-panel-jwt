'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from 'react'

export function QueryProvider({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
