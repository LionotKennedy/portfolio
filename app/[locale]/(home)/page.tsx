// app/[locale]/(home)/page.tsx
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
}