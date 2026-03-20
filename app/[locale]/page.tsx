import Navigation from "../../src/components/navigation";
import BackgroundHome from "../../src/components/BackgroundHome";
import "../../src/components/style/page.css"
import WizardImage from "../../src/components/models/WizardImage";


export default function Home() {

  return (
    <>
      <BackgroundHome />
      <div className="w-full fixed h-screen flex items-center justify-center">
        <Navigation />
        <WizardImage />
      </div>
    </>
  );
}

