































// // components/models/WizardImage.tsx
// "use client"

// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'

// const IMAGES = [
//     { src: "/IMG3.jpg", alt: "Profile 3" },
//     { src: "/IMG1.jpg", alt: "Profile 1" },
//     { src: "/IMG2.jpg", alt: "Profile 2" },
//     { src: "/IMG4.jpg", alt: "Profile 4" },
//     { src: "/profile311.jpg", alt: "Profile 311" },
// ]

// const WizardImage = () => {
//     const [currentIndex, setCurrentIndex] = useState(0)

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
//         }, 3000) // Change toutes les 3 secondes

//         return () => clearInterval(timer)
//     }, [])

//     return (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//             <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
//                           rounded-full overflow-hidden border-2 border-accent/30 shadow-glass-inset">
//                 <Image
//                     src={IMAGES[currentIndex].src}
//                     alt={IMAGES[currentIndex].alt}
//                     fill
//                     sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, (max-width: 1280px) 14rem, 16rem"
//                     className="object-cover transition-opacity duration-500"
//                     priority
//                 />
//             </div>
//         </div>
//     )
// }

// export default WizardImage


















// // components/models/WizardImage.tsx
// "use client"

// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'

// const IMAGES = [
//     "/IMG3.jpg",
//     "/IMG1.jpg", 
//     "/IMG2.jpg",
//     "/IMG4.jpg",
//     "/profile311.jpg"
// ]

// const WizardImage = () => {
//     const [index, setIndex] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((i) => (i + 1) % IMAGES.length)
//         }, 3000)

//         return () => clearInterval(interval)
//     }, [])

//     return (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//             <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
//                           rounded-full overflow-hidden border-2 border-accent/30">
//                 {IMAGES.map((src, i) => (
//                     <Image
//                         key={src}
//                         src={src}
//                         alt={`Profile ${i + 1}`}
//                         fill
//                         className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
//                             i === index ? 'opacity-100' : 'opacity-0'
//                         }`}
//                         priority={i === 0}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default WizardImage











































// import React from 'react'
// import Image from 'next/image'
// // import imge from "../../../public/profile311.jpg"
// // import imge from "../../../public/IMG1.jpg"
// // import imge from "../../../public/IMG2.jpg"
// import imge from "../../../public/IMG3.jpg"
// // import imge from "../../../public/IMG4.jpg"

// const Wizard = () => {
//     return (
//         <div className="absolute top-1/2 left-1/2 
//                         transform -translate-x-1/2 -translate-y-1/2 z-10">

//             {/* CERCLE PLUS GRAND */}
//             <div className="
//                 relative
//                 w-48 h-48
//                 sm:w-56 sm:h-56
//                 md:w-64 md:h-64
//                 lg:w-72 lg:h-72
//                 xl:w-80 xl:h-80
//                 rounded-full
//                 overflow-hidden
//                 border-4 border-accent/40
//                 shadow-glass-inset
//             ">

//                 <Image
//                     src={imge || "/placeholder.svg"}
//                     alt="profile-image"
//                     fill
//                     priority
//                     sizes="
//                         (max-width: 640px) 12rem,
//                         (max-width: 768px) 14rem,
//                         (max-width: 1024px) 16rem,
//                         (max-width: 1280px) 18rem,
//                         20rem
//                     "

//                     className="
//                         object-cover
//                         object-[50%_20%]
//                         scale-110
//                     "
//                 />

//             </div>
//         </div>
//     )
// }

// export default Wizard




































// components/models/WizardImage.tsx
"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

interface ImageConfig {
    src: string
    alt: string
    objectPosition: string
    duration?: number
}

const IMAGE_CONFIGS: ImageConfig[] = [
    { 
        src: "/IMG3.jpg", 
        alt: "Profile 3",
        objectPosition: "center 20%",
        duration: 4000
    },
    { 
        src: "/IMG1.jpg", 
        alt: "Profile 1",
        objectPosition: "center center",
        duration: 3000
    },
    { 
        src: "/IMG2.jpg", 
        alt: "Profile 2",
        objectPosition: "center 30%",
        duration: 3500
    },
    { 
        src: "/IMG4.jpg", 
        alt: "Profile 4",
        objectPosition: "center 25%",
        duration: 4000
    },
    { 
        src: "/profile311.jpg", 
        alt: "Profile 311",
        objectPosition: "center center",
        duration: 3000
    },
]

interface WizardImageProps {
    autoPlay?: boolean
    interval?: number
    pauseOnHover?: boolean
    transitionDuration?: number
    showControls?: boolean
    showIndicators?: boolean
    random?: boolean
}

const WizardImage = ({
    autoPlay = true,
    interval = 3000,
    pauseOnHover = true,
    transitionDuration = 500,
    showControls = true,
    showIndicators = true,
    random = false
}: WizardImageProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
    const [progress, setProgress] = useState(100)

    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const progressRef = useRef<NodeJS.Timeout | null>(null)
    const touchStartX = useRef<number>(0)

    const validIndices = IMAGE_CONFIGS.map((_, i) => i).filter(i => !failedImages.has(i))
    const currentConfig = IMAGE_CONFIGS[validIndices[activeIndex] ?? 0]
    const currentInterval = currentConfig?.duration || interval

    const goToNext = useCallback(() => {
        if (validIndices.length <= 1) return
        setIsLoaded(false)
        setActiveIndex((prev) => (prev + 1) % validIndices.length)
        setProgress(100)
    }, [validIndices.length])

    const goToPrev = useCallback(() => {
        if (validIndices.length <= 1) return
        setIsLoaded(false)
        setActiveIndex((prev) => (prev - 1 + validIndices.length) % validIndices.length)
        setProgress(100)
    }, [validIndices.length])

    const goToIndex = useCallback((index: number) => {
        setIsLoaded(false)
        setActiveIndex(index)
        setProgress(100)
    }, [])

    // Gestion du timer principal
    useEffect(() => {
        if (!autoPlay || isPaused || validIndices.length <= 1) {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
                timerRef.current = null
            }
            if (progressRef.current) {
                clearInterval(progressRef.current)
                progressRef.current = null
            }
            return
        }

        // Animation de la barre de progression
        const step = 100 / (currentInterval / 50) // Mise à jour toutes les 50ms
        progressRef.current = setInterval(() => {
            setProgress(prev => {
                if (prev <= 0) return 0
                return prev - step
            })
        }, 50)

        timerRef.current = setTimeout(() => {
            goToNext()
        }, currentInterval)

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
            if (progressRef.current) clearInterval(progressRef.current)
        }
    }, [autoPlay, isPaused, currentInterval, goToNext, validIndices.length, activeIndex])

    const handleMouseEnter = () => {
        if (pauseOnHover) setIsPaused(true)
    }

    const handleMouseLeave = () => {
        if (pauseOnHover) setIsPaused(false)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX
        const diff = touchStartX.current - touchEndX

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToNext()
            } else {
                goToPrev()
            }
        }
    }

    const handleImageError = () => {
        const realIndex = validIndices[activeIndex]
        setFailedImages(prev => new Set([...prev, realIndex]))
        if (validIndices.length > 1) {
            goToNext()
        }
    }

    const handleImageLoad = () => {
        setIsLoaded(true)
    }

    useEffect(() => {
        if (random && validIndices.length > 1) {
            const randomIndex = Math.floor(Math.random() * validIndices.length)
            setActiveIndex(randomIndex)
        }
    }, [random, validIndices.length])

    if (validIndices.length === 0) {
        return (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
                              rounded-full bg-gray-800 flex items-center justify-center border-2 border-red-500/30">
                    <span className="text-gray-400">Aucune image</span>
                </div>
            </div>
        )
    }

    return (
        <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="relative group">
                {/* Cercle principal */}
                <div 
                    className={`
                        relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
                        rounded-full overflow-hidden border-2 border-accent/30 shadow-glass-inset
                        bg-gray-900 transition-transform duration-300
                        ${isPaused ? 'scale-105' : 'scale-100'}
                    `}
                >
                    {/* Container d'image avec transition */}
                    <div 
                        className="absolute inset-0 transition-all ease-out"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
                            transitionDuration: `${transitionDuration}ms`
                        }}
                    >
                        <Image
                            src={currentConfig.src}
                            alt={currentConfig.alt}
                            fill
                            sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, (max-width: 1280px) 14rem, 16rem"
                            className="object-cover"
                            style={{ 
                                objectPosition: currentConfig.objectPosition 
                            }}
                            priority={activeIndex === 0}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    </div>

                    {/* Loading state */}
                    {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                            <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                        </div>
                    )}

                    {/* Barre de progression */}
                    {autoPlay && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 overflow-hidden">
                            <div 
                                className="h-full bg-accent/60 transition-all ease-linear"
                                style={{ 
                                    width: `${progress}%`,
                                    transitionDuration: isPaused ? '0ms' : '50ms'
                                }}
                            />
                        </div>
                    )}

                    {/* Indicateur de pause */}
                    {isPaused && autoPlay && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                            <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                            </svg>
                        </div>
                    )}
                </div>

                {/* Contrôles */}
                {showControls && validIndices.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={goToPrev}
                            className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm
                                     flex items-center justify-center text-white transition-all duration-200
                                     hover:scale-110 active:scale-95"
                            aria-label="Image précédente"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm
                                     flex items-center justify-center text-white transition-all duration-200
                                     hover:scale-110 active:scale-95"
                            aria-label="Image suivante"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Indicateurs */}
                {showIndicators && validIndices.length > 1 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {validIndices.map((_, displayIndex) => (
                            <button
                                key={displayIndex}
                                onClick={() => goToIndex(displayIndex)}
                                className={`
                                    h-2 rounded-full transition-all duration-300
                                    ${displayIndex === activeIndex 
                                        ? 'w-6 bg-accent' 
                                        : 'w-2 bg-white/40 hover:bg-white/60'}
                                `}
                                aria-label={`Aller à l'image ${displayIndex + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Compteur */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-md
                              border border-accent/30 flex items-center justify-center text-xs font-medium text-accent">
                    {activeIndex + 1}/{validIndices.length}
                </div>

                {/* Indicateur autoplay */}
                {autoPlay && (
                    <div 
                        className={`
                            absolute -top-2 -left-2 w-8 h-8 rounded-full backdrop-blur-md
                            border flex items-center justify-center text-xs
                            transition-all duration-300
                            ${isPaused 
                                ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' 
                                : 'bg-green-500/20 border-green-500/30 text-green-400'}
                        `}
                    >
                        {isPaused ? '⏸' : '▶'}
                    </div>
                )}
            </div>
        </div>
    )
}

export default WizardImage

































// "use client"
// // components/models/WizardImage.tsx
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'

// // Configuration des images disponibles
// const PROFILE_IMAGES = [
//     { src: "/IMG3.jpg", alt: "Profile 3", default: true },
//     { src: "/IMG1.jpg", alt: "Profile 1" },
//     { src: "/IMG2.jpg", alt: "Profile 2" },
//     { src: "/IMG4.jpg", alt: "Profile 4" },
//     { src: "/profile311.jpg", alt: "Profile 311" },
// ] as const

// const WizardImage = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0)
//     const [imageError, setImageError] = useState<Record<number, boolean>>({})
//     const [isLoaded, setIsLoaded] = useState(false)

//     // Trouver la première image valide
//     const getValidImageIndex = () => {
//         for (let i = 0; i < PROFILE_IMAGES.length; i++) {
//             if (!imageError[i]) return i
//         }
//         return -1 // Aucune image valide
//     }

//     const currentImage = PROFILE_IMAGES[currentImageIndex]
//     const hasError = imageError[currentImageIndex]

//     // Si l'image actuelle a une erreur, essayer la suivante
//     useEffect(() => {
//         if (hasError) {
//             const nextIndex = (currentImageIndex + 1) % PROFILE_IMAGES.length
//             if (nextIndex !== currentImageIndex) {
//                 setCurrentImageIndex(nextIndex)
//             }
//         }
//     }, [hasError, currentImageIndex])

//     const handleImageError = () => {
//         setImageError(prev => ({ ...prev, [currentImageIndex]: true }))
//     }

//     const handleImageLoad = () => {
//         setIsLoaded(true)
//     }

//     // Navigation manuelle entre les images
//     const nextImage = () => {
//         setIsLoaded(false)
//         setCurrentImageIndex((prev) => (prev + 1) % PROFILE_IMAGES.length)
//     }

//     const prevImage = () => {
//         setIsLoaded(false)
//         setCurrentImageIndex((prev) => (prev - 1 + PROFILE_IMAGES.length) % PROFILE_IMAGES.length)
//     }

//     // Calculer les positions pour le contrôle d'affichage sur le cercle
//     // Cela permet de centrer le visage dans le cercle
//     const getObjectPosition = () => {
//         // Vous pouvez ajuster ces valeurs selon chaque image
//         const positions: Record<string, string> = {
//             "/IMG3.jpg": "center 30%",    // Visage plus haut
//             "/IMG1.jpg": "center center",  // Centré
//             "/IMG2.jpg": "center 25%",     // Visage très haut
//             "/IMG4.jpg": "center 35%",     // Visage haut
//             "/profile311.jpg": "center center",
//         }
//         return positions[currentImage.src] || "center center"
//     }

//     return (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//             {/* Conteneur principal avec bordure et effet glass */}
//             <div className="relative group">
//                 {/* Cercle d'image principal */}
//                 <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
//                                 rounded-full overflow-hidden border-2 border-accent/30 shadow-glass-inset
//                                 bg-gray-900/50 backdrop-blur-sm">

//                     {/* Image avec gestion d'erreur et positionnement contrôlé */}
//                     <Image
//                         src={currentImage.src}
//                         alt={currentImage.alt}
//                         fill
//                         sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, (max-width: 1280px) 14rem, 16rem"
//                         className={`object-cover transition-all duration-500 ease-out
//                                    ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
//                         style={{ objectPosition: getObjectPosition() }}
//                         priority
//                         onError={handleImageError}
//                         onLoad={handleImageLoad}
//                     />

//                     {/* Overlay de chargement */}
//                     {!isLoaded && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
//                             <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
//                         </div>
//                     )}

//                     {/* Fallback si toutes les images échouent */}
//                     {getValidImageIndex() === -1 && (
//                         <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-purple-500/20">
//                             <span className="text-4xl font-bold text-accent/50">
//                                 {currentImage.alt.charAt(0)}
//                             </span>
//                         </div>
//                     )}
//                 </div>

//                 {/* Contrôles de navigation - apparaissent au hover */}
//                 <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                     <button
//                         onClick={prevImage}
//                         className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 
//                                  backdrop-blur-sm flex items-center justify-center text-white
//                                  transition-all duration-200 hover:scale-110 active:scale-95"
//                         aria-label="Image précédente"
//                     >
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </button>
//                     <button
//                         onClick={nextImage}
//                         className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 
//                                  backdrop-blur-sm flex items-center justify-center text-white
//                                  transition-all duration-200 hover:scale-110 active:scale-95"
//                         aria-label="Image suivante"
//                     >
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Indicateurs de position (dots) */}
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
//                     {PROFILE_IMAGES.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => {
//                                 setIsLoaded(false)
//                                 setCurrentImageIndex(index)
//                             }}
//                             className={`w-2 h-2 rounded-full transition-all duration-300
//                                       ${index === currentImageIndex 
//                                           ? 'w-6 bg-accent' 
//                                           : 'bg-white/30 hover:bg-white/50'}`}
//                             aria-label={`Aller à l'image ${index + 1}`}
//                         />
//                     ))}
//                 </div>

//                 {/* Badge compteur */}
//                 <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-md
//                               border border-accent/30 flex items-center justify-center text-xs font-medium text-accent">
//                     {currentImageIndex + 1}/{PROFILE_IMAGES.length}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default WizardImage














// "use client"
// // components/models/WizardImageAdvanced.tsx
// import React, { useState, useEffect, useCallback } from 'react'
// import Image from 'next/image'

// interface ImageConfig {
//     src: string
//     alt: string
//     objectPosition: string
//     objectFit: 'cover' | 'contain' | 'fill'
//     priority?: boolean
// }

// const IMAGE_CONFIGS: ImageConfig[] = [
//     { 
//         src: "/IMG3.jpg", 
//         alt: "Profile Principal",
//         objectPosition: "center 20%", // Ajustez selon votre photo
//         objectFit: "cover",
//         priority: true 
//     },
//     { 
//         src: "/IMG1.jpg", 
//         alt: "Profile 1",
//         objectPosition: "center center",
//         objectFit: "cover" 
//     },
//     { 
//         src: "/IMG2.jpg", 
//         alt: "Profile 2", 
//         objectPosition: "center 30%",
//         objectFit: "cover" 
//     },
//     { 
//         src: "/IMG4.jpg", 
//         alt: "Profile 4",
//         objectPosition: "center 25%",
//         objectFit: "cover" 
//     },
//     { 
//         src: "/profile311.jpg", 
//         alt: "Profile 311",
//         objectPosition: "center center",
//         objectFit: "cover" 
//     },
// ]

// const WizardImageAdvanced = () => {
//     const [activeIndex, setActiveIndex] = useState(0)
//     const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
//     const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
//     const [isTransitioning, setIsTransitioning] = useState(false)

//     // Précharger les images
//     useEffect(() => {
//         IMAGE_CONFIGS.forEach((config, index) => {
//             const img = new window.Image()
//             img.src = config.src
//             img.onload = () => {
//                 setLoadedImages(prev => new Set([...prev, index]))
//             }
//             img.onerror = () => {
//                 setFailedImages(prev => new Set([...prev, index]))
//             }
//         })
//     }, [])

//     // Filtrer les images valides
//     const validIndices = IMAGE_CONFIGS.map((_, i) => i).filter(i => !failedImages.has(i))
//     const currentConfig = IMAGE_CONFIGS[activeIndex]
//     const isLoaded = loadedImages.has(activeIndex)
//     const isFailed = failedImages.has(activeIndex)

//     const changeImage = useCallback((direction: 'next' | 'prev' | number) => {
//         if (isTransitioning || validIndices.length <= 1) return

//         setIsTransitioning(true)

//         setTimeout(() => {
//             if (typeof direction === 'number') {
//                 setActiveIndex(direction)
//             } else {
//                 const currentValidIndex = validIndices.indexOf(activeIndex)
//                 const newValidIndex = direction === 'next'
//                     ? (currentValidIndex + 1) % validIndices.length
//                     : (currentValidIndex - 1 + validIndices.length) % validIndices.length
//                 setActiveIndex(validIndices[newValidIndex])
//             }
//             setIsTransitioning(false)
//         }, 300)
//     }, [activeIndex, isTransitioning, validIndices])

//     // Aller à la première image valide si la courante a échoué
//     useEffect(() => {
//         if (isFailed && validIndices.length > 0) {
//             setActiveIndex(validIndices[0])
//         }
//     }, [isFailed, validIndices])

//     if (validIndices.length === 0) {
//         return (
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                 <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
//                               rounded-full bg-gradient-to-br from-gray-700 to-gray-900 
//                               flex items-center justify-center border-2 border-red-500/30">
//                     <span className="text-gray-400 text-sm">Aucune image</span>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//             <div className="relative group">
//                 {/* Conteneur image avec effet de transition */}
//                 <div className={`
//                     relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 
//                     rounded-full overflow-hidden border-2 border-accent/30 shadow-glass-inset
//                     transition-all duration-500 ease-out
//                     ${isTransitioning ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}
//                 `}>

//                     {/* Image avec positionnement contrôlé */}
//                     <Image
//                         src={currentConfig.src}
//                         alt={currentConfig.alt}
//                         fill
//                         sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, (max-width: 1280px) 14rem, 16rem"
//                         className={`
//                             transition-all duration-700 ease-out
//                             ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}
//                         `}
//                         style={{ 
//                             objectFit: currentConfig.objectFit,
//                             objectPosition: currentConfig.objectPosition 
//                         }}
//                         priority={currentConfig.priority}
//                         onLoad={() => setLoadedImages(prev => new Set([...prev, activeIndex]))}
//                         onError={() => setFailedImages(prev => new Set([...prev, activeIndex]))}
//                     />

//                     {/* Skeleton loader */}
//                     {!isLoaded && (
//                         <div className="absolute inset-0 bg-gray-800 animate-pulse">
//                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
//                                           animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
//                         </div>
//                     )}

//                     {/* Gradient overlay subtil */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
//                 </div>

//                 {/* Contrôles de navigation */}
//                 <div className="absolute inset-0 flex items-center justify-between px-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
//                     <button
//                         onClick={() => changeImage('prev')}
//                         disabled={validIndices.length <= 1}
//                         className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md
//                                  flex items-center justify-center text-white transition-all duration-200
//                                  hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </button>
//                     <button
//                         onClick={() => changeImage('next')}
//                         disabled={validIndices.length <= 1}
//                         className="w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md
//                                  flex items-center justify-center text-white transition-all duration-200
//                                  hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
//                     >
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Miniatures en bas */}
//                 <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 p-2 rounded-full bg-black/20 backdrop-blur-md">
//                     {IMAGE_CONFIGS.map((config, index) => {
//                         if (failedImages.has(index)) return null
//                         const isActive = index === activeIndex
//                         return (
//                             <button
//                                 key={index}
//                                 onClick={() => changeImage(index)}
//                                 className={`
//                                     relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300
//                                     ${isActive ? 'border-accent scale-110' : 'border-transparent opacity-60 hover:opacity-100'}
//                                 `}
//                                 title={config.alt}
//                             >
//                                 <Image
//                                     src={config.src}
//                                     alt={config.alt}
//                                     fill
//                                     sizes="40px"
//                                     className="object-cover"
//                                     style={{ objectPosition: config.objectPosition }}
//                                 />
//                             </button>
//                         )
//                     })}
//                 </div>

//                 {/* Info bulle au hover */}
//                 <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-sm whitespace-nowrap">
//                         {currentConfig.alt} • {activeIndex + 1}/{validIndices.length}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default WizardImageAdvanced












































import React from 'react'
import Image from 'next/image'
// import imge from "../../../public/profile311.jpg"
// import imge from "../../../public/IMG1.jpg"
// import imge from "../../../public/IMG2.jpg"
import imge from "../../../public/IMG3.jpg"
// import imge from "../../../public/IMG4.jpg"

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
                    // className="object-cover"
                    className="relative w-1/2 h-1/2"
                    priority
                />
            </div>
        </div>
    )
}
export default Wizard;











































import React from 'react'
import Image from 'next/image'
import imge from "../../../public/IMG3.jpg"

const Wizard = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {/* Cercle plus grand : w-48 à w-96 selon les breakpoints */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-42 md:h-42 lg:w-80 lg:h-80 xl:w-96 xl:h-96 
                            rounded-full overflow-hidden border-2 border-accent/30 shadow-glass-inset
                            flex items-center justify-center bg-black/20">
                {/* Image plus petite à l'intérieur avec scale et object-contain */}
                {/* <div className="relative w-3/4 h-3/4"> */}
                <div className="relative w-[85%] h-[85%]">
                    <Image
                        src={imge || "/placeholder.svg"}
                        alt="profile-image"
                        fill
                        sizes="(max-width: 640px) 9rem, (max-width: 768px) 10.5rem, (max-width: 1024px) 13.5rem, (max-width: 1280px) 15rem, 18rem"
                        className="object-contain rounded-full"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Wizard;





























import React from 'react'
import Image from 'next/image'
import imge from "../../../public/profile311.jpg"
// import imge from "../../../public/IMG1.jpg"
// import imge from "../../../public/IMG2.jpg"
// import imge from "../../../public/IMG3.jpg"
// import imge from "../../../public/IMG4.jpg"

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

export default Wizard;














