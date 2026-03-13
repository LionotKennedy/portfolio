"use client"
import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"
import { motion } from "framer-motion"
import type { JSX } from "react/jsx-runtime"
import { useTranslations } from 'next-intl'
import { useLocale } from "../hooks/useLocale"

type IconType = "home" | "about" | "projects" | "contact" | "github" | "linkedin" | "twitter" | "resume"

interface NavButtonProps {
  x: string | number
  y: string | number
  label: string
  link: string
  icon: IconType | string
  newTab?: boolean
  labelDirection?: "left" | "right"
  size: number  // ← reçu depuis Navigation, plus besoin du hook
}

const getIcon = (icon: IconType): JSX.Element => {
  switch (icon) {
    case "home": return <Home className="w-full h-auto" strokeWidth={1.5} />
    case "about": return <User className="w-full h-auto" strokeWidth={1.5} />
    case "projects": return <Palette className="w-full h-auto" strokeWidth={1.5} />
    case "contact": return <Phone className="w-full h-auto" strokeWidth={1.5} />
    case "github": return <Github className="w-full h-auto" strokeWidth={1.5} />
    case "linkedin": return <Linkedin className="w-full h-auto" strokeWidth={1.5} />
    case "twitter": return <Twitter className="w-full h-auto" strokeWidth={1.5} />
    case "resume": return <NotebookText className="w-full h-auto" strokeWidth={1.5} />
    default: return <Home className="w-full h-auto" strokeWidth={1.5} />
  }
}

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
}

const NavLink = motion(Link)

const NavButton: React.FC<NavButtonProps> = ({
  x, y, label, link, icon, newTab, labelDirection = "right", size
}) => {
  const t = useTranslations()
  const locale = useLocale()

  const localizedLink = newTab ? link : `/${locale}${link}`
  const isResume = icon === "resume"

  return size >= 480 ? (
    <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${x}, ${y})` }}>
      <NavLink
        variants={item}
        href={localizedLink}
        target={newTab ? "_blank" : "_self"}
        download={isResume ? "CV_Lionot_Kennedy.pdf" : undefined}
        className="text-foreground rounded-full flex items-center justify-center custom-btn glass-effect"
        aria-label={t(label)}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent text-btn-change">
          {getIcon(icon as IconType)}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            {t(label)}
          </span>
        </span>
      </NavLink>
    </div>
  ) : (
    <div className="w-fit cursor-pointer z-50">
      <NavLink
        variants={item}
        href={localizedLink}
        target={newTab ? "_blank" : "_self"}
        download={isResume ? "CV_Lionot_Kennedy.pdf" : undefined}
        className="text-foreground rounded-full flex items-center justify-center custom-btn glass-effect"
        aria-label={t(label)}
      >
        <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent text-btn-change">
          {getIcon(icon as IconType)}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className={clsx(
            "absolute hidden peer-hover:block px-2 py-1 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
            labelDirection === "left" ? "right-full mr-2" : "left-full ml-2"
          )}>
            {t(label)}
          </span>
        </span>
      </NavLink>
    </div>
  )
}

export default NavButton