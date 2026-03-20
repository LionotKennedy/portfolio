import Navigation from "../components/navigation";
import BackgroundHome from "../components/BackgroundHome";
import "../components/style/page.css"
import WizardImage from "../components/models/WizardImage";


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

