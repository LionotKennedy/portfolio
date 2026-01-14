import type { JSX } from "react/jsx-runtime";
import AboutDetails from "@/app/components/about";
import BackgroundHome from "@/app/components/BackgroundHome";
import WizardImage from "@/app/components/models/WizardImage";

export default function Home(): JSX.Element {
  return (
    <>
      <BackgroundHome />

      {/* Image plus proche du texte */}
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
          <WizardImage />
        </div>
      </div>

      {/* Votre nom avec animation */}
      <div className="text-center -mt-4 sm:-mt-6 md:-mt-8 z-20 px-4">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mx-auto text-title bold-name">
          I'm RAZAFIMANDIMBY Lionot
        </h2>

        {/* Partie animée seulement - Taille de texte responsive optimisée */}
        <div className="animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mt-2 sm:mt-3 md:mt-4">
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Web </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">, </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Mobile </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">and  </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Desktop </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Developer</span>
        </div>
      </div>

      {/* Texte CodeBucks */}
      <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-fadeIn">
            {/* About me */}
            À propos de moi 
          </h1>
          <p className="font-light text-foreground text-lg mt-2 text-content-change">
            {/* Meet the wizard behind this portfolio */}
            {/* À la rencontre du créateur de ce portfolio  */}
            {/* Faites connaissance avec l’esprit créatif derrière ce portfolio */}
            Découvrez l’artisan de ce portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}