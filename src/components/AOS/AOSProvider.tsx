'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
    children: React.ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            // delay: 0,
            delay: 800,
            anchorPlacement: 'top-bottom',
        });

        // Rafraîchir AOS après le chargement complet
        const timer = setTimeout(() => {
            AOS.refresh();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return <>{children}</>;
}