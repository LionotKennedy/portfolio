// 'use client';

// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// interface AOSProviderProps {
//     children: React.ReactNode;
// }

// export default function AOSProvider({ children }: AOSProviderProps) {
//     useEffect(() => {
//         AOS.init({
//             duration: 800,
//             easing: 'ease-out-cubic',
//             once: true,
//             offset: 100,
//             // delay: 0,
//             delay: 800,
//             anchorPlacement: 'top-bottom',
//         });

//         // Rafraîchir AOS après le chargement complet
//         const timer = setTimeout(() => {
//             AOS.refresh();
//         }, 100);

//         return () => clearTimeout(timer);
//     }, []);

//     return <>{children}</>;
// }
















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
        // Détecter si on est sur mobile
        const checkMobile = () => {
            const mobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsMobile(mobile);
            return mobile;
        };

        const mobile = checkMobile();

        if (!mobile) {
            // Desktop : AOS normal
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100,
                delay: 0, // Enlever le délay par défaut
                anchorPlacement: 'top-bottom',
                disable: false,
            });
        } else {
            // Mobile : Désactiver AOS proprement
            AOS.init({
                disable: true, // Désactive complètement AOS
            });
            
            // S'assurer que tous les éléments sont visibles
            document.querySelectorAll('[data-aos]').forEach((el) => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'none';
            });
        }

        // Rafraîchir après chargement des images
        const timer = setTimeout(() => {
            AOS.refresh();
        }, 100);

        // Gérer le resize
        const handleResize = () => {
            checkMobile();
            AOS.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>{children}</>;
}