"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check, ChevronDown } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

interface Language {
    code: string;
    label: string;
    flag: string;
}

const languages: Language[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
];

interface ModalProps {
    onClose: () => void;
    onSelect: (lang: Language) => void;
}

const Modal = ({ onClose, onSelect }: ModalProps) => {
    return createPortal(
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div
                className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
            py-6 px-4 xs:py-8 xs:px-6 sm:px-10 rounded shadow-glass-inset text-center space-y-6 xs:space-y-8
            max-w-[280px] xs:max-w-sm mx-4"
            >
                <p className="font-light text-foreground text-sm xs:text-base">Choisissez votre langue préférée</p>
                <div className="flex flex-col items-center justify-center space-y-2 xs:space-y-3">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => onSelect(lang)}
                            className="w-full px-3 py-2.5 xs:px-4 xs:py-3 border border-accent/30 border-solid hover:shadow-glass-sm rounded
                flex items-center justify-center gap-2 xs:gap-3 transition-all hover:bg-accent/10"
                        >
                            <span className="text-xl xs:text-2xl">{lang.flag}</span>
                            <span className="text-foreground font-medium text-sm xs:text-base">{lang.label}</span>
                        </button>
                    ))}
                </div>
                <button
                    onClick={onClose}
                    className="text-xs xs:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    Fermer
                </button>
            </div>
        </div>,
        document.getElementById("my-modal") || document.body
    );
};

// Dropdown en portal
interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (lang: Language) => void;
    currentLang: Language;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const Dropdown = ({ isOpen, onClose, onSelect, currentLang, buttonRef }: DropdownProps) => {
    const [position, setPosition] = useState({ top: 0, right: 0 });

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + 8, // Marge réduite sur mobile
                right: window.innerWidth - rect.right,
            });
        }
    }, [isOpen, buttonRef]);

    if (!isOpen) return null;

    return createPortal(
        <>
            <div
                className="fixed inset-0 z-[60]"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                    position: 'fixed',
                    top: position.top,
                    right: position.right,
                }}
                className="w-40 xs:w-44 py-2 xs:py-3 rounded-xl 
          bg-background/80 border border-accent/30 border-solid backdrop-blur-[12px]
          shadow-2xl z-[70] overflow-hidden"
            >
                <div className="px-3 py-1.5 xs:px-4 xs:py-2 border-b border-accent/20 mb-1.5 xs:mb-2">
                    <p className="text-[9px] xs:text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                        Langue / Language
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
                            {currentLang.code === lang.code && (
                                <Check size={14} className="text-accent" />
                            )}
                        </button>
                    ))}
                </div>
            </motion.div>
        </>,
        document.body
    );
};

const LanguageToggle = () => {
    const [currentLang, setCurrentLang] = useState<Language>(languages[0]);
    const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const savedLangCode = localStorage.getItem("portfolio-lang");
        const savedLang = languages.find(l => l.code === savedLangCode);

        if (savedLang) {
            setCurrentLang(savedLang);
        } else {
            setShowModal(true);
        }
    }, []);

    const handleLanguageSelect = (lang: Language) => {
        setCurrentLang(lang);
        localStorage.setItem("portfolio-lang", lang.code);
        localStorage.setItem("langConsentTime", new Date().toISOString());
        setShowModal(false);
        setIsOpen(false);
        window.location.reload();
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <>
            {showModal && (
                <Modal
                    onClose={() => setShowModal(false)}
                    onSelect={handleLanguageSelect}
                />
            )}

            <AnimatePresence>
                {isOpen && !showModal && (
                    <Dropdown
                        isOpen={isOpen}
                        onClose={closeDropdown}
                        onSelect={handleLanguageSelect}
                        currentLang={currentLang}
                        buttonRef={buttonRef}
                    />
                )}
            </AnimatePresence>

            {/* Bouton principal - Responsive réduit mais style identique */}
            <motion.button
                ref={buttonRef}
                onClick={toggleDropdown}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                className="text-foreground rounded-full flex items-center justify-center
          custom-bg fixed top-3 xs:top-4 right-3 xs:right-4 w-fit self-start z-[80]
          glass-effect custom-btn"
                aria-label="Changer de langue"
                name="Language toggle button"
            >
                {/* Container responsive : 44px mobile → 56px desktop */}
                <span className="relative w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 p-3 xs:p-3.5 sm:p-4 hover:text-accent text-btn-change flex items-center justify-center">
                    {/* Drapeau responsive : plus petit sur mobile */}
                    <span className="text-lg xs:text-xl sm:text-2xl leading-none">{currentLang.flag}</span>

                    {/* Indicateur dropdown responsive */}
                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-accent/30 border border-background flex items-center justify-center">
                        <ChevronDown
                            size={8}
                            className={`text-accent transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        />
                    </span>

                    {/* Zone hover pour tooltip */}
                    <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                    {/* Tooltip - caché sur mobile, visible sur sm+ */}
                    <span className="absolute hidden sm:peer-hover:block px-2 py-1 right-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                        {currentLang.label}
                    </span>
                </span>
                <span className="sr-only">Change language to {currentLang.label}</span>
            </motion.button>
        </>
    );
};

export default LanguageToggle;