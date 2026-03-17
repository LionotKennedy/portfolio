'use client'
import { createContext, useContext, useRef, useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

type CurtainContextType = {
    navigate: (href: string) => void
    registerClose: (fn: () => Promise<void>) => void
}

const CurtainContext = createContext<CurtainContextType>({
    navigate: () => { },
    registerClose: () => { },
})

export function CurtainProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const closeAnimRef = useRef<(() => Promise<void>) | null>(null)

    const registerClose = useCallback((fn: () => Promise<void>) => {
        closeAnimRef.current = fn
    }, [])

    const navigate = useCallback(async (href: string) => {
        if (closeAnimRef.current) {
            await closeAnimRef.current()
        }
        router.push(href)
    }, [router])

    return (
        <CurtainContext.Provider value={{ navigate, registerClose }}>
            {children}
        </CurtainContext.Provider>
    )
}

export const useCurtainRouter = () => useContext(CurtainContext)