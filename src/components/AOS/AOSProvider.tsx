'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
    children: React.ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Détection mobile
        const checkMobile = () => {
            return window.innerWidth < 768 ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        };

        const mobile = checkMobile();
        setIsMobile(mobile);

        // Configuration AOS
        AOS.init({
            duration: mobile ? 600 : 800, // Un peu plus rapide sur mobile
            // duration: mobile ? 1600 : 1800, // Un peu plus rapide sur mobile
            easing: 'ease-out-cubic',
            once: true,
            offset: mobile ? 50 : 100, // Déclenche plus tôt sur mobile
            // offset: mobile ? 800 : 900, // Déclenche plus tôt sur mobile
            delay: 0, // On gère les delays via les attributs data-aos-delay
            anchorPlacement: 'top-bottom',
            disable: false, // On ne désactive pas AOS sur mobile
            startEvent: 'DOMContentLoaded',
        });

        // 🔧 FIX MOBILE : Réduire automatiquement les delays trop longs sur mobile
        if (mobile) {
            document.querySelectorAll('[data-aos-delay]').forEach((el) => {
                const delay = parseInt(el.getAttribute('data-aos-delay') || '0');
                if (delay > 400) {
                    // Réduire les gros delays sur mobile (800ms → 200ms, 600ms → 150ms)
                    const newDelay = Math.floor(delay * 0.25);
                    el.setAttribute('data-aos-delay', newDelay.toString());
                }
            });
        }

        // Rafraîchir après chargement
        const timer = setTimeout(() => {
            AOS.refresh();
        }, 100);

        // Gérer resize
        const handleResize = () => {
            const newMobile = checkMobile();
            if (newMobile !== isMobile) {
                window.location.reload(); // Recharger si changement de device
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    return <>{children}</>;
}