// import styles from "./page.module.css";
// import Image from "next/image";
// import bg from "../public/background/home-background.png";
// import bg from "../public/profile311.jpg";
import Navigation from "./components/navigation";
import BackgroundHome from "./components/BackgroundHome";
import "./components/style/page.css"
import WizardImage from "./components/models/WizardImage";
// import RenderModel from "./components/RenderModel";


export default function Home() {

  return (
    // <>
    //   <main className="flex min-h-screen flex-col items-center justify-between relative">
    //     <Image
    //       priority
    //       sizes="100vw"
    //       src={bg || "/placeholder.svg"}
    //       alt="background-image"
    //       fill
    //       className="-z-50 w-full h-full object-cover object-center opacity-50"
    //     />
    //     {/* <BackgroundHome /> */}

    //     <div className="w-full h-screen">
    //       <Navigation />
    //       {/* <RenderModel>
    //       <Wizard /> 
    //       </RenderModel> */}
    //     </div>
    //   </main>
    // </>

    <>
    {/* <div className="backgroundWrapper"> */}
      <BackgroundHome />
      <Navigation />
            <WizardImage />
      {/* <RenderModel><Wizard /></RenderModel> */}
            {/* ====== IMAGE CENTRÉE ====== */}
      {/* <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="center-image">
         <Image
          src={bg || "/placeholder.svg"} // ← ton image
          alt="Personne"
          width={400} // ajuste selon besoin
          height={600}
          className="object-contain drop-shadow-2xl"
          priority
          />
          </div>
      </div> */}
    {/* </div> */}
    {/* <div className="relative z-10 flex items-center justify-center min-h-screen">

    <Image
          src={bg || "/placeholder.svg"} // ← ton image
          alt="Personne"
          width={200} // ajuste selon besoin
          height={400}
          className="object-contain drop-shadow-2xl"
          priority
          />
          </div> */}
    </>
  );
}
