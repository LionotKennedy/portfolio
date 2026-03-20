// SousPagesLayout.tsx
import type React from "react"
import type { JSX } from "react/jsx-runtime";
import HomeBtn from "../../components/HomeBtn";

interface SousPagesLayoutProps {
  children: React.ReactNode
}

export default function SousPagesLayout({ children }: SousPagesLayoutProps): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 xs:px-8 sm:px-16 lg:px-32 py-16 xs:py-18 sm:py-20">
      <HomeBtn />
      {children}
    </main>
  )
}