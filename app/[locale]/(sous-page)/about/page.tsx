'use client';

import type { JSX } from "react/jsx-runtime";
import AboutDetails from "@/app/components/about";
import BackgroundHome from "@/app/components/BackgroundHome";
import WizardImage from "@/app/components/models/WizardImage";
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home(): JSX.Element {
  const t = useTranslations('About');
  const tHome = useTranslations('Home');

  useEffect(() => {
    // Rafraîchir AOS après le rendu
    AOS.refresh();
  }, []);

  return (
    <>
      <BackgroundHome />

      {/* Image avec AOS */}
      <div
        className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
          <WizardImage />
        </div>
      </div>

      {/* Nom avec animation AOS */}
      <div
        className="text-center -mt-4 sm:-mt-6 md:-mt-8 z-20 px-4"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="800"
      // data-aos-delay="200"
      >
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mx-auto text-title bold-name">
          {tHome('name')}
        </h2>

        {/* Partie animée avec AOS */}
        <div
          className="animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mt-2 sm:mt-3 md:mt-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="800"
        // data-aos-delay="400"
        >
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role1')} </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">, </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role2')} </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">{tHome('roleConnector')} </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role3')} </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('developer')}</span>
        </div>
      </div>

      {/* Titre About avec AOS */}
      <div
        className="relative w-full h-[40vh] flex flex-col items-center justify-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="800"
      // data-aos-delay="300"
      >
        <div className="text-center">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            {t('aboutPage.title')}
          </h1>
          <p
            className="font-light text-foreground text-lg mt-2 text-content-change"
            data-aos="fade-up"
            data-aos-delay="800"
          // data-aos-delay="500"
          >
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </div>

      {/* AboutDetails avec AOS */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
        <AboutDetails />
      </div>
    </>
  );
}