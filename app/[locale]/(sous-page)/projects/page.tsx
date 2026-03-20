import type { JSX } from "react";
import { getTranslations } from 'next-intl/server';
import ProjectList from "../../../../src/components/projects/index";
import { projectsData } from "../../../data/data";
import BackgroundHome from "@/src/components/BackgroundHome";

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