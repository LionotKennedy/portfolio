
"use client"

import type React from "react"
import useScreenSize from "./hooks/useScreenSize"

interface ScreenSize {
  width: number
  height: number
}

interface ResponsiveComponentProps {
  children: (props: { size: ScreenSize }) => React.ReactNode
}

const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({ children }) => {
  const size = useScreenSize()

  // Retourner null ou un fallback si size n'est pas encore défini
  if (!size) {
    return null
  }

  return <>{children({ size })}</>
}

export default ResponsiveComponent
