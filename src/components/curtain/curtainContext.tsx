'use client'
import { createContext, useContext, useRef, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'

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

// Extrait le segment de chemin sans le préfixe locale (/fr, /en, etc.)
const stripLocale = (path: string) => {
  return path.replace(/^\/(fr|en)(\/|$)/, '/') || '/'
}

export function CurtainProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const closeAnimRef = useRef<(() => Promise<void>) | null>(null)
  const openAnimRef = useRef<(() => void) | null>(null)
  const pathnameRef = useRef(pathname)

  pathnameRef.current = pathname

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
    const currentPath = pathnameRef.current

    if (closeAnimRef.current) {
      await closeAnimRef.current()
    }

    router.push(href)

    // Comparer sans le préfixe locale pour couvrir tous les cas
    // ex: href='/fr' ou href='/' → même page que currentPath='/fr'
    const isSamePage = 
      href === currentPath ||
      stripLocale(href) === stripLocale(currentPath)

    if (isSamePage) {
      setTimeout(() => openAnimRef.current?.(), 150)
    }
  }, [router])

  return (
    <CurtainContext.Provider value={{ navigate, registerClose, registerOpen, openCurtain }}>
      {children}
    </CurtainContext.Provider>
  )
}

export const useCurtainRouter = () => useContext(CurtainContext)