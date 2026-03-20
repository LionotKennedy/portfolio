"use client"
import { useEffect, useState, useCallback } from "react"

interface ScreenSize {
  width: number
  height: number
}

const useScreenSize = (): ScreenSize | undefined => {
  const [screenSize, setScreenSize] = useState<ScreenSize | undefined>(undefined)

  const handleResize = useCallback(() => {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    handleResize()
    let timer: ReturnType<typeof setTimeout>
    const debounced = () => {
      clearTimeout(timer)
      timer = setTimeout(handleResize, 150)
    }
    window.addEventListener("resize", debounced)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", debounced)
    }
  }, [handleResize])

  return screenSize
}

export default useScreenSize