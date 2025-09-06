// import Image from "next/image";
// import bg from "../../../public/background/about-background.png";
// import type { JSX } from "react/jsx-runtime";
// import AboutDetails from "@/app/components/about";
// import BackgroundHome from "@/app/components/BackgroundHome";
// import WizardImage from "@/app/components/models/WizardImage";
// // import HatModel from "@/app/components/models/HatModel";
// // import RenderModel from "@/app/components/RenderModel";
// export default function Home(): JSX.Element {
//   return (
//     <>
//       {/* <Image
//         src={bg || "/placeholder.svg"}
//         priority
//         sizes="100vw"
//         alt="Next.js Portfolio website's about page background image"
//         className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
//       /> */}
//       <BackgroundHome />

//        <WizardImage />
//       {/* <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10"> */}
//          {/* <RenderModel> */}
//           {/* <HatModel /> */}
//         {/* </RenderModel>  */}
//       {/* </div> */}

//       <div className="relative w-full h-screen flex flex-col items-center justify-center">
//         <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
//           <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
//             CodeBucks
//           </h1>
//           <p className="font-light text-foreground text-lg">
//             Meet the wizard behind this portfolio
//           </p>
//         </div>
//       </div>

//       <AboutDetails />
//     </>
//   );
// }











































// import Image from "next/image";
// import bg from "../../../public/background/about-background.png";
// import type { JSX } from "react/jsx-runtime";
// import AboutDetails from "@/app/components/about";
// import BackgroundHome from "@/app/components/BackgroundHome";
// import WizardImage from "@/app/components/models/WizardImage";

// export default function Home(): JSX.Element {
//   return (
//     <>
//       <BackgroundHome />

//       {/* Conteneur pour WizardImage positionné plus haut */}
//       <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full">
//           <WizardImage />
//           {/* <WizardImage 
//   className="w-full h-full object-contain"
//   style={{ transform: 'scale(1.2)' }} // Ajuster l'échelle si nécessaire
// /> */}
//         </div>
//       </div>

//       {/* <div className="absolute top-[30%] sm:top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] sm:w-[60vw] sm:h-[50vh] md:w-[40vw] md:h-[60vh] z-10">
//   <WizardImage />
// </div> */}

// {/* <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] sm:w-[60vw] sm:h-[50vh] md:w-[40vw] md:h-[60vh] z-10">
//   <WizardImage />
// </div> */}

//       <div className="relative w-full h-screen flex flex-col items-center justify-center">
//         <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
//           <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
//             CodeBucks
//           </h1>
//           <p className="font-light text-foreground text-lg">
//             Meet the wizard behind this portfolio
//           </p>
//         </div>
//       </div>

//       <AboutDetails />
//     </>
//   );
// }

































// import Image from "next/image";
// import bg from "../../../public/background/about-background.png";
// import type { JSX } from "react/jsx-runtime";
// import AboutDetails from "@/app/components/about";
// import BackgroundHome from "@/app/components/BackgroundHome";
// import WizardImage from "@/app/components/models/WizardImage";

// export default function Home(): JSX.Element {
//   return (
//     // <>
//     //   <BackgroundHome />

//     //   {/* Bloc visuel : modèle + nom + CodeBucks */}
//     //   <div className="relative w-full h-auto pt-16 sm:pt-20 md:pt-24 flex flex-col items-center gap-y-4">
        
//     //     {/* Modèle 3D */}
//     //     <div className="w-[70vw] h-[30vh] sm:w-[55vw] sm:h-[35vh] md:w-[45vw] md:h-[40vh] lg:w-[40vw] lg:h-[45vh]">
//     //       <WizardImage />
//     //     </div>

//     //     {/* Nom */}
//     //     <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-foreground">
//     //       RAZAFIMANDIMBY Lionot
//     //     </h2>

//     //     {/* Titre principal */}
//     //     <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
//     //       CodeBucks
//     //     </h1>

//     //     {/* Sous-titre */}
//     //     <p className="font-light text-foreground text-lg">
//     //       Meet the wizard behind this portfolio
//     //     </p>
//     //   </div>

//     //   {/* Contenu suivant */}
//     //   <AboutDetails />
//     // </>


//     <>
//   <BackgroundHome />

//   {/* Image plus proche du texte */}
//   {/* <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh]"> */}
//   <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]">
//     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
//       <WizardImage />
//     </div>
//   </div>

//   {/* Votre nom */}
//   <div className="text-center -mt-4 sm:-mt-6 md:-mt-8 z-20">
//     <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground">
//       I'm RAZAFIMANDIMBY Lionot
//     </h2>
//   </div>

//   {/* Texte CodeBucks */}
//   <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
//     <div className="text-center">
//       <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
//         CodeBucks
//       </h1>
//       <p className="font-light text-foreground text-lg mt-2">
//         Meet the wizard behind this portfolio
//       </p>
//     </div>
//   </div>

//   {/* <AboutDetails /> */}
// </>
//   );
// }













































// import BackgroundHome from "@/app/components/BackgroundHome";
// import WizardImage from "@/app/components/models/WizardImage";
// import type { JSX } from "react";

// export default function Home(): JSX.Element {
//   return (
//     <>
//       <BackgroundHome />

//       {/* Modèle 3D remonté */}
//       <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
//           <WizardImage />
//         </div>
//       </div>

//       {/* Texte animé */}
//       <div className="text-center px-4 -mt-4 sm:-mt-6 md:-mt-8 z-20 animate-fade-in-up">
//         <h2 className="font-semibold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground">
//           I'm RAZAFIMANDIMBY Lionot{" "}
//           <span className="text-blue-500">
//             Développeur Web<span className="text-foreground">, </span>
//             Mobile<span className="text-foreground"> and </span>
//             Desktop
//           </span>
//         </h2>
//       </div>

//       {/* CodeBucks */}
//       <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
//         <div className="text-center">
//           <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
//             CodeBucks
//           </h1>
//           <p className="font-light text-foreground text-lg mt-2">
//             Meet the wizard behind this portfolio
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }








// import Image from "next/image";
// import bg from "../../../public/background/about-background.png";
// import type { JSX } from "react/jsx-runtime";
// import AboutDetails from "@/app/components/about";
// import BackgroundHome from "@/app/components/BackgroundHome";
// import WizardImage from "@/app/components/models/WizardImage";

// export default function Home(): JSX.Element {
//   return (
//     <>
//       <BackgroundHome />

//       {/* Image plus proche du texte */}
//       <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
//           <WizardImage />
//         </div>
//       </div>

//       {/* Votre nom avec animation */}
//       <div className="text-center -mt-4 sm:-mt-6 md:-mt-8 z-20">
//         <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit">
//           I'm RAZAFIMANDIMBY Lionot <br />
//           <span className="text-blue-500"> Développeur </span>
//           <span className="text-blue-400">Web</span>
//           <span className="text-foreground">, </span>
//           <span className="text-blue-400">Mobile</span>
//           <span className="text-foreground"> and </span>
//           <span className="text-blue-400">Desktop</span>
//         </h2>
//       </div>


//       {/* Texte CodeBucks */}
//       <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
//         <div className="text-center">
//           <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-fadeIn">
//             CodeBucks
//           </h1>
//           <p className="font-light text-foreground text-lg mt-2">
//             Meet the wizard behind this portfolio
//           </p>
//         </div>
//       </div>

//       <AboutDetails />
//     </>
//   );
// }










































// import Image from "next/image";
// import bg from "../../../public/background/about-background.png";
// import type { JSX } from "react/jsx-runtime";
// import AboutDetails from "@/app/components/about";
// import BackgroundHome from "@/app/components/BackgroundHome";
// import WizardImage from "@/app/components/models/WizardImage";

// export default function Home(): JSX.Element {
//   return (
//     <>
//       <BackgroundHome />

//       {/* Image plus proche du texte */}
//       <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
//           <WizardImage />
//         </div>
//       </div>

//       {/* Votre nom avec animation */}
//       <div className="text-center -mt-4 sm:-mt-6 md:-mt-8 z-20 px-4">
//         <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mx-auto">
//           I'm RAZAFIMANDIMBY Lionot
//         </h2>
        
//         {/* Partie animée seulement */}
//         <div className="animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mt-2 sm:mt-3 md:mt-4">
//           <span className="text-blue-500 text-lg sm:text-xl md:text-2xl lg:text-3xl">Développeur </span>
//           <span className="text-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">Web</span>
//           <span className="text-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl">, </span>
//           <span className="text-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">Mobile</span>
//           <span className="text-foreground text-lg sm:text-xl md:text-2xl lg:text-3xl"> and </span>
//           <span className="text-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">Desktop</span>
//         </div>
//       </div>

//       {/* Texte CodeBucks */}
//       <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
//         <div className="text-center">
//           <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-fadeIn">
//             CodeBucks
//           </h1>
//           <p className="font-light text-foreground text-lg mt-2">
//             Meet the wizard behind this portfolio
//           </p>
//         </div>
//       </div>

//       <AboutDetails />
//     </>
//   );
// }


































// import Image from "next/image";
// import bg from "../../../public/background/about-background.png";
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
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mx-auto">
          I'm RAZAFIMANDIMBY Lionot
        </h2>
        
        {/* Partie animée seulement - Taille de texte responsive optimisée */}
        <div className="animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mt-2 sm:mt-3 md:mt-4">
          <span className="text-blue-500 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Web </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">, </span>
          <span className="text-blue-400 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Mobile </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">and  </span>
          <span className="text-blue-400 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Desktop </span>
          <span className="text-blue-400 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Developer</span>
        </div>
        {/* <div className="animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mt-2 sm:mt-3 md:mt-4">
          <span className="text-blue-500 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Développeur </span>
          <span className="text-blue-400 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Web</span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">, </span>
          <span className="text-blue-400 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Mobile</span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl"> and </span>
          <span className="text-blue-400 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Desktop</span>
        </div> */}
      </div>

      {/* Texte CodeBucks */}
      <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-fadeIn">
            CodeBucks
          </h1>
          <p className="font-light text-foreground text-lg mt-2">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}