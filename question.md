tu peux resoudre cette probleme qui bro "$ npm run dev

> portfolio1@0.1.0 dev
> next dev --turbopack

   ▲ Next.js 15.3.3 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.103:3000
   - Environments: .env.local

 ✓ Starting...
Slow filesystem detected. If D:\Projet\Projet_front\NextJS\pratique\portfolio1\.next is a network drive, consider moving it to a local folder. If you have an antivirus enabled, consider excluding your project directory.
 ✓ Compiled middleware in 327ms
 ✓ Ready in 2.1s
 ○ Compiling /[locale] ...
Failed to download `Inter` from Google Fonts. Using fallback font instead.
 ✓ Compiled /[locale] in 14.9s
 ⚠ [next]/internal/font/google/inter_9e72d27f.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap.


 ⨯ Error: Couldn't find next-intl config file. Please follow the instructions at https://next-intl.dev/docs/getting-started/app-router
    at LocaleLayout (app\[locale]\layout.tsx:328:35)
  326 |   }
  327 |
> 328 |   const messages = await getMessages();
      |                                   ^
  329 |
  330 |   return (
  331 |     <html lang={locale}> {
  digest: '479655768'
}
 GET /en 500 in 16763ms
 ⚠ [next]/internal/font/google/inter_9e72d27f.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap.


 ⚠ [next]/internal/font/google/inter_9e72d27f.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap.


 ○ Compiling /favicon.ico ...
 ✓ Compiled /favicon.ico in 543ms
 ⚠ [next]/internal/font/google/inter_9e72d27f.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap.


 GET /favicon.ico 200 in 917ms
"
et 
"Error: Couldn't find next-intl config file. Please follow the instructions at https://next-intl.dev/docs/getting-started/app-router
    at LocaleLayout (rsc://React/Server/D:%5CProjet%5CProjet_front%5CNextJS%5Cpratique%5Cportfolio1%5C.next%5Cserver%5Cchunks%5Cssr%5C%5Broot-of-the-server%5D__18412e96._.js?27:376:288)
    at resolveErrorDev (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:17582:48)
    at processFullStringRow (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:17798:23)
    at processFullBinaryRow (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:17786:9)
    at progress (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:17932:102)
    at InnerLayoutRouter (http://localhost:3000/_next/static/chunks/node_modules_next_dist_1a6ee436._.js:356:55)
    at OuterLayoutRouter (http://localhost:3000/_next/static/chunks/node_modules_next_dist_1a6ee436._.js:504:73)
"
voici tout mes informations 
"
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../i18n/routing';
import { Inter } from 'next/font/google';
import '../globals3.css';
import '../components/style/index.css';
import clsx from 'clsx';
import FireFliesBackground from '../components/FireFliesBackground';
import LanguageToggleBtn from '../components/LanguageToggleBtn';

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

// app/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'] as const,
  defaultLocale: 'en' as const,
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
"
et
"// app/i18n.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});"
et
"
// middleware.ts (à la racine du projet)
import createMiddleware from 'next-intl/middleware';
import { routing } from './app/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)']
};

"
et
"// app/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});"
et
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
"import Navigation from "../components/navigation";
import BackgroundHome from "../components/BackgroundHome";
import "../components/style/page.css"
import WizardImage from "../components/models/WizardImage";


export default function Home() {

  return (
    <>
      <BackgroundHome />
      <Navigation />
      <WizardImage />
    </>
  );
}
"
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
// app/components/LanguageToggleBtn.tsx
'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "./hooks/useLocale";
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
];

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelect: (lang: Language) => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const Dropdown = ({ isOpen, onClose, currentLang, onSelect, buttonRef }: DropdownProps) => {
  const [position, setPosition] = useState({ top: 0, right: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [isOpen, buttonRef]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-[60]" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        style={{ position: 'fixed', top: position.top, right: position.right }}
        className="w-40 xs:w-44 py-2 xs:py-3 rounded-xl 
          bg-background/80 border border-accent/30 border-solid backdrop-blur-[12px]
          shadow-2xl z-[70] overflow-hidden"
      >
        <div className="px-3 py-1.5 xs:px-4 xs:py-2 border-b border-accent/20 mb-1.5 xs:mb-2">
          <p className="text-[9px] xs:text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
            Language / Langue
          </p>
        </div>
        <div className="max-h-[250px] xs:max-h-[300px] overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelect(lang)}
              className={`w-full flex items-center gap-2 xs:gap-3 px-3 py-2.5 xs:px-4 xs:py-3 text-left 
                hover:bg-accent/10 transition-colors ${
                currentLang.code === lang.code ? 'text-accent bg-accent/5' : 'text-foreground'
              }`}
            >
              <span className="text-lg xs:text-xl">{lang.flag}</span>
              <span className="text-xs xs:text-sm font-medium flex-1">{lang.label}</span>
              {currentLang.code === lang.code && <Check size={14} className="text-accent" />}
            </button>
          ))}
        </div>
      </motion.div>
    </>,
    document.body
  );
};

const LanguageToggleBtn: React.FC = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('Language');
  
  const [currentLang, setCurrentLang] = useState<Language>(
    languages.find(l => l.code === currentLocale) || languages[1] // Default EN
  );
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang");
    if (savedLang && savedLang !== currentLocale) {
      // Rediriger si la langue sauvegardée est différente
      const newPathname = pathname.replace(`/${currentLocale}`, `/${savedLang}`);
      router.push(newPathname);
    }
  }, []);

  const handleLanguageSelect = (lang: Language) => {
    if (lang.code === currentLocale) {
      setIsOpen(false);
      return;
    }

    setCurrentLang(lang);
    localStorage.setItem("portfolio-lang", lang.code);
    setIsOpen(false);

    // Redirection vers la même page avec nouvelle locale
    const newPathname = pathname.replace(`/${currentLocale}`, `/${lang.code}`);
    router.push(newPathname);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Dropdown
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            currentLang={currentLang}
            onSelect={handleLanguageSelect}
            buttonRef={buttonRef}
          />
        )}
      </AnimatePresence>

      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="text-foreground rounded-full flex items-center justify-center
          custom-bg fixed top-3 xs:top-4 right-3 xs:right-4 w-fit self-start z-[80]
          glass-effect custom-btn"
        aria-label={t('select')}
      >
        <span className="relative w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 p-3 xs:p-3.5 sm:p-4 hover:text-accent text-btn-change flex items-center justify-center">
          <span className="text-lg xs:text-xl sm:text-2xl leading-none">{currentLang.flag}</span>
          
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-accent/30 border border-background flex items-center justify-center">
            <ChevronDown 
              size={8} 
              className={`text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </span>

          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className="absolute hidden sm:peer-hover:block px-2 py-1 right-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            {currentLang.label}
          </span>
        </span>
        <span className="sr-only">{t('select')}: {currentLang.label}</span>
      </motion.button>
    </>
  );
};

export default LanguageToggleBtn;"
et
"{
  "Metadata": {
    "title": "Portfolio | Lionot RAZAFIMANDIMBY",
    "description": "Développeur Web, Mobile et Desktop"
  },
  "Navigation": {
    "home": "Accueil",
    "about": "À propos",
    "projects": "Projets",
    "contact": "Contact",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "twitter": "Twitter",
    "resume": "CV"
  },
  "Home": {
    "title": "Architecte de l'Enchantement",
    "subtitle": "Web, Mobile et Desktop",
    "name": "Je suis RAZAFIMANDIMBY Lionot",
    "role1": "Web",
    "role2": "Mobile",
    "role3": "Desktop",
    "roleConnector": "et",
    "developer": "Développeur"
  }
}"
et
"{
  "Metadata": {
    "title": "Portfolio | Lionot RAZAFIMANDIMBY",
    "description": "Web, Mobile and Desktop Developer"
  },
  "Navigation": {
    "home": "Home",
    "about": "About",
    "projects": "Projects",
    "contact": "Contact",
    "github": "GitHub",
    "linkedin": "LinkedIn",
    "twitter": "Twitter",
    "resume": "Resume"
  },
  "Home": {
    "title": "Architect of Enchantment",
    "subtitle": "Web, Mobile and Desktop",
    "name": "I'm RAZAFIMANDIMBY Lionot",
    "role1": "Web",
    "role2": "Mobile",
    "role3": "Desktop",
    "roleConnector": "and",
    "developer": "Developer"
  }
}"
