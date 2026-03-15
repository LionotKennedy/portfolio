en fait bro j'ai question a tes pose si ce possible de le faire, en fait il s'agit de style rideaux, en fait j'aimerais ajoute une style rideaux avant affiche le page exemple avant affiche afficher home ou contact ou about tout le page tu va ajouter cette style et quel est librairie capable de faire ca ou on va créer une component capable de faire ca ce a toi de choici quel est le plus sympa et ne rend pas lourd a la application 
voici tout mes information concernant
"import Navigation from "../components/navigation";
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
""use client"
import React, { useEffect } from "react"
import NavButton from "./NavButton"
import "./navbutton.css"
import { motion } from "framer-motion"
import useScreenSize from "../hooks/useScreenSize"

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

const Navigation: React.FC = () => {
  const size = useScreenSize()

  // Valeur par défaut pendant l'hydration SSR
  const width = size?.width ?? 1024

  const radius =
    width >= 1024 ? "calc(20vw - 1rem)" :
      width >= 768 ? "calc(30vw - 1rem)" :
        "calc(40vw - 1rem)"

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
            return <NavButton key={btn.label} x={x} y={y} size={width} {...btn} />
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
            {navButtons.slice(0, 4).map((btn) => (
              <NavButton key={btn.label} x={0} y={0} size={width} {...btn} />
            ))}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
          >
            {navButtons.slice(4, 8).map((btn) => (
              <NavButton key={btn.label} x={0} y={0} size={width} {...btn} labelDirection="left" />
            ))}
          </motion.div>
        </>
      )}
    </div>
  )
}

export default Navigation
"
et
"import dynamic from 'next/dynamic'
import Navigation from "../../components/navigation"
import BackgroundHome from "../../components/BackgroundHome"
import "../../components/style/page.css"
import { getTranslations } from 'next-intl/server'

// Three.js chargé uniquement côté client, après le rendu principal
const WizardImage = dynamic(
    () => import("../../components/models/WizardImage"),
    { ssr: false }
)

export default async function HomePage() {
    const t = await getTranslations('Home')

    return (
        <>
            <BackgroundHome />
            <Navigation />
            <WizardImage />
            <div className="absolute bottom-20 left-0 right-0 text-center z-30 px-4">
                <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-accent mb-4">
                    {t('title')}
                </h1>
                <p className="text-lg xs:text-xl sm:text-2xl text-foreground">
                    {t('subtitle')}
                </p>
            </div>
        </>
    )
}"
et
"// app/[locale]/about/page.tsx  (ou le fichier page qui contient ce composant)
'use client';

import type { JSX } from "react/jsx-runtime";
import AboutDetails from "@/app/components/about";
import BackgroundHome from "@/app/components/BackgroundHome";
import WizardImage from "@/app/components/models/WizardImage";
import { useTranslations } from 'next-intl';

export default function Home(): JSX.Element {
  const t = useTranslations('About');
  const tHome = useTranslations('Home');

  return (
    <>
      <BackgroundHome />

      {/* Image */}
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
          <WizardImage />
        </div>
      </div>

      {/* Nom avec animation */}
      <div className="text-center -mt-4 sm:-mt-6 md:-mt-8 z-20 px-4">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mx-auto text-title bold-name">
          {tHome('name')}
        </h2>

        {/* Partie animée */}
        <div className="animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mt-2 sm:mt-3 md:mt-4">
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role1')} </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">, </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role2')} </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">{tHome('roleConnector')} </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role3')} </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('developer')}</span>
        </div>
      </div>

      {/* Titre About */}
      <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-fadeIn">
            {t('aboutPage.title')}
          </h1>
          <p className="font-light text-foreground text-lg mt-2 text-content-change">
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}"
et
"// app/[locale]/contact/ContactContent.tsx
"use client";

import { useTranslations } from 'next-intl';

const ContactContent = () => {
  const t = useTranslations('Contact');

  return (
    <>
      <h1 className="text-accent font-semibold text-center text-4xl capitalize">
        {t('title')}
      </h1>
      <p className="text-center font-light text-sm xs:text-base text-content-change">
        {t('description')}
      </p>
    </>
  );
};

export default ContactContent;"
et
"// app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import type { JSX } from "react/jsx-runtime";
import { getTranslations } from 'next-intl/server'; // ← IMPORT MANQUANT
import Form from "@/app/components/contact/Form";
import BackgroundHome from "@/app/components/BackgroundHome";
import ContactContent from "./ContactContent";

// ← PAS DE "use client" ICI ! C'est un Server Component

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('title')} | Contact`,
  };
}

const Contact = (): JSX.Element => {
  return (
    <>
      <BackgroundHome />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <ContactContent />
        </div>
        <Form />
      </article>
    </>
  );
};

export default Contact;"
et
"import type { JSX } from "react";
import { getTranslations } from 'next-intl/server';
import ProjectList from "../../../components/projects/index";
import { projectsData } from "../../../data/data";
import BackgroundHome from "@/app/components/BackgroundHome";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('title')} | ${locale === 'fr' ? 'Projets' : 'Projects'}`,
    description: t('description'),
  };
}

export default function ProjectsPage(): JSX.Element {
  return (
    <main className="relative min-h-screen">
      <BackgroundHome />
      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <ProjectList projects={projectsData} />
      </div>
    </main>
  );
}"
et
"// SousPagesLayout.tsx
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
}"
et
"// app/[locale]/layout.tsx
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
import AOSInit from '../components/AOSInit'

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
          <AOSInit />
          <LanguageToggleBtn />
          {children}
          <FireFliesBackground />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
"
moderne et intuitive