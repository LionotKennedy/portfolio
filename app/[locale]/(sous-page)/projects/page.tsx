// import type { JSX } from "react/jsx-runtime";
// import { Metadata } from "next";
// import ProjectList from "../../components/projects/index";
// import { projectsData } from "../../data/data";
// import BackgroundHome from "@/app/components/BackgroundHome";

// export const metadata: Metadata = {
//   title: "Projects",
// };

// export default function Home(): JSX.Element {
//   return (
//     <>
//       <BackgroundHome />
//       <ProjectList projects={projectsData} />
//       <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">

//       </div>
//     </>
//   );
// }




















// import type { JSX } from "react";
// import { Metadata } from "next";
// import ProjectList from "../../../components/projects/index";
// import { projectsData } from "../../../data/data";
// import BackgroundHome from "@/app/components/BackgroundHome";

// export const metadata: Metadata = {
//   title: "Projets | Lionot Kennedy",
//   description: "Portfolio de projets de Lionot RAZAFIMANIDIMBY - Développeur Web, Mobile et Desktop",
// };

// export default function ProjectsPage(): JSX.Element {
//   return (
//     <main className="relative min-h-screen">
//       <BackgroundHome />

//       <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
//         <ProjectList projects={projectsData} />
//       </div>
//     </main>
//   );
// }




























import type { JSX } from "react";
import { getTranslations } from 'next-intl/server';
import ProjectList from "../../../components/projects/index";
import { projectsData } from "../../../data/data";
import BackgroundHome from "@/app/components/BackgroundHome";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('title')} | ${locale === 'fr' ? 'Projets' : 'Projects'}`,
    description: t('description'),
  };
}

export default function ProjectsPage(): JSX.Element {
  return (
    <main className="relative min-h-screen">
      <BackgroundHome />
      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <ProjectList projects={projectsData} />
      </div>
    </main>
  );
}