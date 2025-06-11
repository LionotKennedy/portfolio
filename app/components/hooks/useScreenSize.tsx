
"use client"
import { useEffect, useState } from "react"

interface ScreenSize {
  width: number
  height: number
}

const useScreenSize = (): ScreenSize | undefined => {
  const [screenSize, setScreenSize] = useState<ScreenSize | undefined>(undefined)

  useEffect(() => {
    function getScreenSize(): ScreenSize {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }

    function handleResize(): void {
      setScreenSize(getScreenSize())
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenSize
}

export default useScreenSize
