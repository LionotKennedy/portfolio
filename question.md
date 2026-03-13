la ce bon maintenant tu peux optimiser mon code car la navigation et trop prendre plus de temps je sais pas pourquoi, tu peux rendre plus rapide, en realite lorsque j'ai essayer de naviger vers une autre page il prendre plus de temps pour passe là
voici tout mes information :

"{
  "name": "portfolio1",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@react-three/drei": "^10.0.6",
    "@react-three/fiber": "^9.1.2",
    "@tailwindcss/postcss": "^4.1.8",
    "@types/aos": "^3.0.7",
    "@types/reveal": "^4.2.0",
    "aos": "^2.3.4",
    "clsx": "^2.1.1",
    "framer-motion": "^12.16.0",
    "lucide-react": "^0.513.0",
    "next": "15.3.3",
    "next-intl": "^4.8.3",
    "nodemailer": "^7.0.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.55.0",
    "reveal.js": "^5.2.1",
    "sonner": "^2.0.3",
    "tailwindcss": "^4.1.8",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.177.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/nodemailer": "^7.0.1",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5"
  }
}
"
et
"
import Navigation from "../components/navigation";
import BackgroundHome from "../components/BackgroundHome";
import "../components/style/page.css"
import WizardImage from "../components/models/WizardImage";


export default function Home() {

  return (
    <>
      <BackgroundHome />
      <div className="w-full fixed h-screen flex items-center justify-center">
      <Navigation />
      <WizardImage />
      </div>
    </>
  );
}

"
et 
"
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import '../globals3.css';
import '../components/style/index.css';
import clsx from 'clsx';
import FireFliesBackground from '../components/FireFliesBackground';
import LanguageToggleBtn from '../components/LanguageToggleBtn';
import { routing } from '../../i18n/routing'; 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter relative")}>
        <div id="my-modal" />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LanguageToggleBtn />
          {children}
          <FireFliesBackground />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
"
et
"
import Navigation from "../components/navigation";
import BackgroundHome from "../components/BackgroundHome";
import "../components/style/page.css"
import WizardImage from "../components/models/WizardImage";


export default function Home() {

  return (
    <>
      <BackgroundHome />
      <div className="w-full fixed h-screen flex items-center justify-center">
      <Navigation />
      <WizardImage />
      </div>
    </>
  );
}

"
et
"// app/components/navigation/index.tsx
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
et 
"// app/components/navigation/NavButton.tsx
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
  
  // Vérifier si c'est le bouton du CV pour activer le téléchargement
  const isResume = icon === "resume";

  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size.width >= 480 ? (
          <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${x}, ${y})` }}>
            <NavLink
              variants={item}
              href={localizedLink}
              target={newTab ? "_blank" : "_self"}
              download={isResume ? "CV_Lionot_Kennedy.pdf" : undefined} // <-- Modification ici
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
              download={isResume ? "CV_Lionot_Kennedy.pdf" : undefined} // <-- Modification ici
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
"import React from 'react'
import Image from 'next/image'
import imge from "../../../public/profile311.jpg"

const Wizard = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
                            rounded-full overflow-hidden border-2 border-accent/30 shadow-glass-inset">
                <Image 
                    src={imge || "/placeholder.svg"} 
                    alt="profile-image" 
                    fill
                    sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, (max-width: 1280px) 14rem, 16rem"
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}

export default Wizard;"

et 
"
import "./style/BackgroundHome.css";

export default function BackgroundHome() {
  return (
    <div className="backgroundWrapper">
      <div className="arrow arrow-left">
        <svg width="270.11" height="649.9" overflow="visible">
          <g className="item-to bounce-1">
            <path
              className="geo-arrow draw-in"
              d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
            />
          </g>
          <circle className="geo-arrow item-to bounce-2" cx="194.65" cy="69.54" r="7.96" />
          <circle className="geo-arrow draw-in" cx="194.65" cy="39.5" r="7.96" />
          <circle className="geo-arrow item-to bounce-3" cx="194.65" cy="9.46" r="7.96" />
          <g className="geo-arrow item-to bounce-2">
            <path className="draw-in" d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552" />
          </g>
        </svg>
      </div>

      <div className="arrow arrow-right">
        <svg width="31.35" height="649.9" overflow="visible">
          <g className="item-to bounce-1">
            <circle className="geo-arrow item-to bounce-3" cx="15.5" cy="580.36" r="7.96" />
            <circle className="geo-arrow draw-in" cx="15.5" cy="610.4" r="7.96" />
            <circle className="geo-arrow item-to bounce-2" cx="15.5" cy="640.44" r="7.96" />
            <g className="item-to bounce-2">
              <path
                className="geo-arrow draw-in"
                d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552"
              />
            </g>
          </g>
        </svg>
      </div>

      <div className="containerBackground">
        {/* TEXTES SUPPRIMÉS */}
        <svg className="dotted-circle" width="352" height="352" overflow="visible">
          <circle
            cx="176"
            cy="176"
            r="174"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeDasharray="12.921, 11.9271"
          />
        </svg>
      </div>
    </div>
  );
}"
et
"import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl({
  // ta config existante
});"
et 
"
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
"
et
"// app/[locale]/(home)/page.tsx
import Navigation from "../../components/navigation";
import BackgroundHome from "../../components/BackgroundHome";
import "../../components/style/page.css"
import WizardImage from "../../components/models/WizardImage";
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
    const t = await getTranslations('Home');

    return (
        <>
            <BackgroundHome />

            {/* Navigation avec traduction */}
            <Navigation />

            {/* Wizard Image */}
            <WizardImage />

            {/* Texte centré avec traduction côté serveur */}
            <div className="absolute bottom-20 left-0 right-0 text-center z-30 px-4">
                <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-accent mb-4">
                    {t('title')}
                </h1>
                <p className="text-lg xs:text-xl sm:text-2xl text-foreground">
                    {t('subtitle')}
                </p>
            </div>
        </>
    );
}"
et
"
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
"
et
"import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl({
  // ta config existante
});"
et 
"import type React from "react"
import type { JSX } from "react/jsx-runtime";
import HomeBtn from "../../components/HomeBtn";
// import Link from "next/link";

interface SousPagesLayoutProps {
  children: React.ReactNode
}

export default function SousPagesLayout({ children }: SousPagesLayoutProps): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
      <HomeBtn />
      {children}
    </main>
  )
}
"

sans enlever le style animation garder toujours juste rendre plus rapide la navigation de la page meme si on utilise une biblioteque ou une module pour le rendre plus rapide ce n'es pas probleme