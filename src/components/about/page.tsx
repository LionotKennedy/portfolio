// app/[locale]/about/page.tsx
// import type { Metadata } from "next";
import type { JSX } from "react/jsx-runtime";
import { getTranslations } from 'next-intl/server';
import BackgroundHome from "@/src/components/BackgroundHome";
import AboutDetails from "@/src/components/about/AboutDetails";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('title')} | ${locale === 'fr' ? 'À propos' : 'About'}`,
  };
}

const About = (): JSX.Element => {
  return (
    <>
      <BackgroundHome />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <AboutDetails />
      </article>
    </>
  );
};

export default About;