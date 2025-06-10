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

  return <>{children({ size})}</>
}

export default ResponsiveComponent
