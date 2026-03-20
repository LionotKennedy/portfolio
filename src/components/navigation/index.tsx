"use client"
import React from "react"
import NavButton from "./NavButton"
import "./navbutton.css"
import { motion } from "framer-motion"
import useScreenSize from "../hooks/useScreenSize"
import { useCurtainRouter } from "../curtain/curtainContext"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
}

const navButtons = [
  { label: 'Navigation.home', link: '/', icon: 'home', newTab: false },
  { label: 'Navigation.about', link: '/about', icon: 'about', newTab: false },
  { label: 'Navigation.projects', link: '/projects', icon: 'projects', newTab: false },
  { label: 'Navigation.contact', link: '/contact', icon: 'contact', newTab: false },
  { label: 'Navigation.github', link: 'https://github.com/LionotKennedy', icon: 'github', newTab: true },
  { label: 'Navigation.linkedin', link: 'https://www.linkedin.com/in/lionot-razafimandimby-244073266/', icon: 'linkedin', newTab: true },
  { label: 'Navigation.twitter', link: 'https://x.com/RLionot', icon: 'twitter', newTab: true },
  { label: 'Navigation.resume', link: '/resume.pdf', icon: 'resume', newTab: true },
]

const angleIncrement = 360 / 8

// ← Type explicite pour extraProps
type ExtraProps = {
  x: string | number
  y: string | number
  labelDirection?: "left" | "right"
}

const Navigation: React.FC = () => {
  const size = useScreenSize()
  const { navigate } = useCurtainRouter()

  const width = size?.width ?? 1024

  const radius =
    width >= 1024 ? "calc(20vw - 1rem)" :
      width >= 768 ? "calc(30vw - 1rem)" :
        "calc(40vw - 1rem)"

  const handleClick = (link: string, newTab: boolean) => {
    if (newTab) {
      window.open(link, "_blank", "noopener,noreferrer")
    } else {
      navigate(link)
    }
  }

  // ← extraProps bien typé maintenant
  const renderBtn = (btn: typeof navButtons[0], extraProps: ExtraProps) => (
    <NavButton
      key={btn.label}
      {...btn}
      {...extraProps}
      size={width}
      onClick={() => handleClick(btn.link, btn.newTab)}
    />
  )

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      {width >= 480 ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
        >
          {navButtons.map((btn, index) => {
            const angleRad = (index * angleIncrement * Math.PI) / 180
            const x = `calc(${radius}*${Math.cos(angleRad)})`
            const y = `calc(${radius}*${Math.sin(angleRad)})`
            return renderBtn(btn, { x, y })
          })}
        </motion.div>
      ) : (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative group xs:hidden"
          >
            {navButtons.slice(0, 4).map((btn) => renderBtn(btn, { x: 0, y: 0 }))}
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
          >
            {navButtons.slice(4, 8).map((btn) => renderBtn(btn, { x: 0, y: 0, labelDirection: "left" }))}
          </motion.div>
        </>
      )}
    </div>
  )
}

export default Navigation