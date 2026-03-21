import dynamic from 'next/dynamic'
import Navigation from "../../../src/components/navigation"
import BackgroundHome from "../../../src/components/BackgroundHome"
import "../../components/style/page.css"
import { getTranslations } from 'next-intl/server'

// Three.js chargé uniquement côté client
const WizardImage = dynamic(
    () => import("../../../src/components/models/WizardImage"),
    { ssr: false }
)

export default async function HomePage() {
    const t = await getTranslations('Home')

    return (
        <>
            <BackgroundHome />
            <Navigation />

            {/* WizardImage avec AOS - delays réduits */}
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                <WizardImage />
            </div>

            {/* Texte avec animations AOS */}
            <div className="absolute bottom-20 left-0 right-0 text-center z-30 px-4">
                <h1
                    className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-accent mb-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                >
                    {t('title')}
                </h1>
                <p
                    className="text-lg xs:text-xl sm:text-2xl text-foreground"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="700"
                >
                    {t('subtitle')}
                </p>
            </div>
        </>
    )
}