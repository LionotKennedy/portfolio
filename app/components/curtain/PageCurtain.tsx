"use client"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useCurtainRouter } from "./curtainContext"

const CurtainPanel = ({
  side,
  isOpen,
  sequenceKey,
}: {
  side: "left" | "right"
  isOpen: boolean
  sequenceKey: number
}) => {
  const xOpen = side === "left" ? "-100%" : "100%"

  return (
    <motion.div
      key={`${side}-${sequenceKey}`}
      initial={{ x: 0 }}
      animate={{ x: isOpen ? xOpen : 0 }}
      transition={{
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
        delay: isOpen ? 0.15 : 0,
      }}
      className="fixed top-0 h-full w-1/2 z-[9999] overflow-hidden"
      style={{ [side]: 0 }}
    >
      <div
        className="w-full h-full relative"
        style={{
          background:
            side === "left"
              ? "linear-gradient(to right, var(--curtain-dark), var(--curtain-mid))"
              : "linear-gradient(to left, var(--curtain-dark), var(--curtain-mid))",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id={`fold-${side}-${sequenceKey}`}
              x="0" y="0"
              width="60" height="100%"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" />
              <line x1="20" y1="0" x2="20" y2="100%" stroke="white" strokeWidth="0.5" />
              <line x1="40" y1="0" x2="40" y2="100%" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#fold-${side}-${sequenceKey})`} />
        </svg>

        <div
          className="absolute top-0 h-full w-12 pointer-events-none"
          style={{
            [side === "left" ? "right" : "left"]: 0,
            background:
              side === "left"
                ? "linear-gradient(to left, rgba(0,0,0,0.35), transparent)"
                : "linear-gradient(to right, rgba(0,0,0,0.35), transparent)",
          }}
        />
      </div>
    </motion.div>
  )
}

const CurtainCenter = ({ visible }: { visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        key="curtain-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.4 } }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
        className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
      >
        <div className="flex flex-col items-center gap-3 select-none">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, transition: { delay: 0.2, duration: 0.4 } }}
            className="h-px w-24 bg-accent opacity-70"
          />
          <span
            className="text-foreground font-bold tracking-[0.3em] uppercase text-xl opacity-90"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            LR
          </span>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1 h-1 rounded-full bg-accent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1, transition: { delay: 0.2, duration: 0.4 } }}
            className="h-px w-24 bg-accent opacity-70"
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default function PageCurtain() {
  const pathname = usePathname()
  const prevPathRef = useRef<string | null>(null)
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const { registerClose } = useCurtainRouter()

  const [isOpen, setIsOpen] = useState(false)
  const [showCenter, setShowCenter] = useState(false)
  const [sequenceKey, setSequenceKey] = useState(0)

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }

  // Séquence ouverture (arrivée sur une page)
  const runOpenSequence = (initialDelay = 600) => {
    clearAllTimers()
    setSequenceKey(k => k + 1)
    setIsOpen(false)
    setShowCenter(true)

    const t1 = setTimeout(() => setIsOpen(true), initialDelay)
    const t2 = setTimeout(() => setShowCenter(false), initialDelay + 800)

    timersRef.current = [t1, t2]
  }

  // Séquence fermeture (quitter une page) — retourne une Promise
  const runCloseSequence = (): Promise<void> => {
    return new Promise((resolve) => {
      clearAllTimers()

      // On incrémente la clé pour forcer le remontage des panneaux depuis x:0 (ouvert)
      // MAIS on veut qu'ils partent de leur position ouverte (xOpen) vers 0
      // Donc on ne change PAS la clé ici, on laisse les panneaux continuer depuis leur état actuel
      setShowCenter(true)
      setIsOpen(false) // referme le rideau (x revient à 0)

      // La durée de fermeture est 0.9s (duration de la transition)
      // On resolve après que le rideau soit bien fermé
      const t1 = setTimeout(() => resolve(), 1000)
      timersRef.current = [t1]
    })
  }

  // Enregistrer la fonction de fermeture dans le contexte
  useEffect(() => {
    registerClose(runCloseSequence)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Premier chargement
  useEffect(() => {
    prevPathRef.current = pathname
    runOpenSequence(600)
    return clearAllTimers
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Changements de route (après navigation)
  useEffect(() => {
    if (prevPathRef.current === null) return
    if (prevPathRef.current === pathname) return

    prevPathRef.current = pathname
    runOpenSequence(200) // délai court car le rideau est déjà fermé
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <CurtainPanel side="left" isOpen={isOpen} sequenceKey={sequenceKey} />
      <CurtainPanel side="right" isOpen={isOpen} sequenceKey={sequenceKey} />
      <CurtainCenter visible={showCenter} />
    </>
  )
}