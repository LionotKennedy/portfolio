import dynamic from 'next/dynamic'
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
}