'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

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
                hover:bg-accent/10 transition-colors ${currentLang.code === lang.code ? 'text-accent bg-accent/5' : 'text-foreground'
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
    languages.find(l => l.code === currentLocale) || languages[1]
  );
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const found = languages.find(l => l.code === currentLocale);
    if (found) setCurrentLang(found);
  }, [currentLocale]);

  const handleLanguageSelect = (lang: Language) => {
    if (lang.code === currentLocale) {
      setIsOpen(false);
      return;
    }

    setCurrentLang(lang);
    localStorage.setItem("portfolio-lang", lang.code);
    setIsOpen(false);

    const newPathname = pathname.replace(`/${currentLocale}`, `/${lang.code}`);
    router.push(newPathname);
    router.refresh();
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
          custom-bg fixed top-3 xs:top-4 left-auto right-3 xs:right-4 w-fit self-start z-[80]
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

export default LanguageToggleBtn;