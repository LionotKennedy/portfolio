'use client'
import { createContext, useContext, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'

type CurtainContextType = {
  navigate: (href: string) => void
  registerClose: (fn: () => Promise<void>) => void
  registerOpen: (fn: () => void) => void
  openCurtain: () => void
}

const CurtainContext = createContext<CurtainContextType>({
  navigate: () => {},
  registerClose: () => {},
  registerOpen: () => {},
  openCurtain: () => {},
})

export function CurtainProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const closeAnimRef = useRef<(() => Promise<void>) | null>(null)
  const openAnimRef = useRef<(() => void) | null>(null)

  const registerClose = useCallback((fn: () => Promise<void>) => {
    closeAnimRef.current = fn
  }, [])

  const registerOpen = useCallback((fn: () => void) => {
    openAnimRef.current = fn
  }, [])

  const openCurtain = useCallback(() => {
    openAnimRef.current?.()
  }, [])

  const navigate = useCallback(async (href: string) => {
    if (closeAnimRef.current) {
      await closeAnimRef.current()
    }
    router.push(href)
    // Si même page → pathname ne changera pas → ouvrir manuellement
    setTimeout(() => openAnimRef.current?.(), 150)
  }, [router])

  return (
    <CurtainContext.Provider value={{ navigate, registerClose, registerOpen, openCurtain }}>
      {children}
    </CurtainContext.Provider>
  )
}

export const useCurtainRouter = () => useContext(CurtainContext)