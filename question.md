La ce bon tu peux mettre en fonctionne le bouton resume ou cv permet de telechager le fichie pdf dans le dossier projet sache que je veux deploye cette appl donc dans quel dossier qu'on va mettre tout le fichier pdf, image... tout qu'il prendre note lors de deployement
voici tout mes informations 
"
// app/components/navigation/NavButton.tsx
"use client"

import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"
import { motion } from "framer-motion";
import type { JSX } from "react/jsx-runtime"
import ResponsiveComponent from "../ResponsiveComponent"
import { useTranslations } from 'next-intl';
import { useLocale } from "../hooks/useLocale";

type IconType = "home" | "about" | "projects" | "contact" | "github" | "linkedin" | "twitter" | "resume"

interface NavButtonProps {
  x: string | number
  y: string | number
  label: string  // Clé de traduction, ex: "Navigation.home"
  link: string
  icon: IconType | string
  newTab?: boolean
  labelDirection?: "left" | "right"
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
  x, 
  y, 
  label, 
  link, 
  icon, 
  newTab, 
  labelDirection = "right" 
}) => {
  const t = useTranslations();
  const locale = useLocale();

  // Construire le lien avec la locale
  const localizedLink = newTab ? link : `/${locale}${link}`;

  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size.width >= 480 ? (
          <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${x}, ${y})` }}>
            <NavLink
              variants={item}
              href={localizedLink}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-btn glass-effect"
              aria-label={t(label)}
              prefetch={false}
              scroll={false}
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
              className="text-foreground rounded-full flex items-center justify-center custom-btn glass-effect"
              aria-label={t(label)}
              prefetch={false}
              scroll={false}
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
      }}
    </ResponsiveComponent>
  )
}

export default NavButton"

et
"
// app/components/navigation/index.tsx
"use client"
import React from "react"
import { useTranslations } from 'next-intl';
import NavButton from "./NavButton";
import "./navbutton.css";
import ResponsiveComponent from "../ResponsiveComponent";
import useScreenSize from "../hooks/useScreenSize";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation: React.FC = () => {
  const t = useTranslations('Navigation');
  const size = useScreenSize();
  const angleIncrement = 360 / 8; // 8 boutons

  // Définition des boutons avec clés de traduction
  const navButtons = [
    { label: 'Navigation.home', link: '/', icon: 'home', newTab: false },
    { label: 'Navigation.about', link: '/about', icon: 'about', newTab: false },
    { label: 'Navigation.projects', link: '/projects', icon: 'projects', newTab: false },
    { label: 'Navigation.contact', link: '/contact', icon: 'contact', newTab: false },
    { label: 'Navigation.github', link: 'https://github.com/LionotKennedy', icon: 'github', newTab: true },
    { label: 'Navigation.linkedin', link: 'https://www.linkedin.com/in/lionot-razafimandimby-244073266/', icon: 'linkedin', newTab: true },
    { label: 'Navigation.twitter', link: 'https://x.com/RLionot', icon: 'twitter', newTab: true },
    { label: 'Navigation.resume', link: '/resume.pdf', icon: 'resume', newTab: true },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size.width >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {navButtons.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = size.width >= 1024
                  ? "calc(20vw - 1rem)"
                  : size.width >= 768
                    ? "calc(30vw - 1rem)"
                    : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;
                
                return (
                  <NavButton 
                    key={btn.label} 
                    x={x} 
                    y={y} 
                    {...btn} 
                  />
                );
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                data-aos="slide-right"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative group xs:hidden"
              >
                {navButtons.slice(0, 4).map((btn) => (
                  <NavButton key={btn.label} x={0} y={0} {...btn} />
                ))}
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                data-aos="slide-left"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
              >
                {navButtons.slice(4, 8).map((btn) => (
                  <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left" />
                ))}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
"
