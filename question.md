la ce bon maintenant j'aimerais que tu peux ajouté meme fonctionnalite (style hover comme tiroire) sur le cards contient tools technologie et tools voici tout mes informations
"
// app/[locale]/about/page.tsx  (ou le fichier page qui contient ce composant)
'use client';

import type { JSX } from "react/jsx-runtime";
import AboutDetails from "@/app/components/about";
import BackgroundHome from "@/app/components/BackgroundHome";
import WizardImage from "@/app/components/models/WizardImage";
import { useTranslations } from 'next-intl';

export default function Home(): JSX.Element {
  const t = useTranslations('About');
  const tHome = useTranslations('Home');

  return (
    <>
      <BackgroundHome />

      {/* Image */}
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
          <WizardImage />
        </div>
      </div>

      {/* Nom avec animation */}
      <div className="text-center -mt-4 sm:-mt-6 md:-mt-8 z-20 px-4">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mx-auto text-title bold-name">
          {tHome('name')}
        </h2>

        {/* Partie animée */}
        <div className="animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mt-2 sm:mt-3 md:mt-4">
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role1')} </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">, </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role2')} </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">{tHome('roleConnector')} </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('role3')} </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">{tHome('developer')}</span>
        </div>
      </div>

      {/* Titre About */}
      <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-fadeIn">
            {t('aboutPage.title')}
          </h1>
          <p className="font-light text-foreground text-lg mt-2 text-content-change">
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}"

et
"

// app/components/about/AboutDetails.tsx
"use client";

import { svgData } from "@/app/data/svgData";
import SvgDisplay from "../SvgDisplay";
import ItemLayout from "./ItemLayout";
import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";
import EducationCard from "../cards/EducationCard";
import ExperienceCard from "../cards/ExperienceCard";
import { User, Target, Monitor, Wallet } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

const mockPinnedRepoData = {
  username: 'LionotKennedy',
  repo: 'portfolio',
  description: 'Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS',
  language: 'TypeScript',
  stars: 12,
  forks: 3,
  url: 'https://github.com/LionotKennedy/portfolio',
};

interface InfoSection {
  icon: React.ReactNode;
  titleKey: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const AboutDetails: React.FC = () => {
  const t = useTranslations('About');
  
  // Remplace uniquement cette fonction dans ton fichier existant
const parseContent = (content: string) => {
  return content.replace(/\[([^\]]+)\]/g, '<strong class="text-accent font-semibold">$1</strong>');
};

  const infoSections: InfoSection[] = [
    {
      icon: <User size={16} />,
      titleKey: "personalInfo.sections.aboutMe",
      emoji: "👨‍💻",
      color: "text-black-600 dark:text-gray-800",
      bgColor: "bg-blue-500/10 dark:bg-blue-400/10",
      borderColor: "border-blue-500/20 dark:border-blue-400/20",
    },
    {
      icon: <Target size={16} />,
      titleKey: "personalInfo.sections.objective",
      emoji: "🎯",
      color: "text-black-100 dark:text-gray-800",
      bgColor: "bg-green-500/10 dark:bg-green-400/10",
      borderColor: "border-green-500/20 dark:border-green-400/20",
    },
    {
      icon: <Monitor size={16} />,
      titleKey: "personalInfo.sections.resources",
      emoji: "💻",
      color: "text-black-600 dark:text-gray-800",
      bgColor: "bg-purple-500/10 dark:bg-purple-400/10",
      borderColor: "border-purple-500/20 dark:border-purple-400/20",
    },
    {
      icon: <Wallet size={16} />,
      titleKey: "personalInfo.sections.salary",
      emoji: "💰",
      color: "text-gray-900 dark:text-gray-800",
      bgColor: "bg-amber-500/10 dark:bg-amber-400/10",
      borderColor: "border-amber-500/20 dark:border-amber-400/20",
    }
  ];

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">

        {/* Row 1: About Text - Scrollable + Pinned Repo */}
        <ItemLayout
          className="col-span-full lg:col-span-8 !p-0 
          rounded-lg bg-white/10
           backdrop-blur-md 
          bg-white/20 
          overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
        >
          <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#8791A666] to-[#1E3A8A33] backdrop-blur-md">
            {/* Header Compact */}
            <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent/10 border border-accent/20">
                  <User size={20} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm sm:text-base font-bold truncate">
                    {t('personalInfo.title')}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {t('personalInfo.subtitle')}
                  </p>
                </div>
                <div className="flex flex-col items-end text-right flex-shrink-0">
                  <span className="text-xl font-bold text-accent">4</span>
                  <span className="text-[10px] text-muted-foreground uppercase">{t('personalInfo.sectionsCount')}</span>
                </div>
              </div>
            </div>

            {/* Content Scrollable */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent p-3 sm:p-4">
              <div className="space-y-2.5 sm:space-y-3">
                {infoSections.map((section, index) => (
                  <div
                    key={index}
                    className={`group p-2.5 sm:p-3 rounded-lg bg-white/5 border ${section.borderColor} hover:bg-white/10 transition-all duration-300`}
                  >
                    {/* Section Header */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`flex-shrink-0 w-7 h-7 rounded-md ${section.bgColor} ${section.color} flex items-center justify-center text-xs`}>
                        {section.icon}
                      </div>
                      <h3 className={`text-xs sm:text-sm font-bold ${section.color} flex items-center gap-1.5`}>
                        <span>{section.emoji}</span>
                        <span className="truncate">{t(`${section.titleKey}.title`)}</span>
                      </h3>
                    </div>

                    {/* Section Content */}
                    <div 
                      className="pl-9 text-[11px] sm:text-xs text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: parseContent(t(`${section.titleKey}.content`))
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Compact */}
            <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0">
              <div className="flex items-center justify-between text-[10px] sm:text-xs">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {t('personalInfo.footer.available')}
                  </span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="text-muted-foreground">
                    {t('personalInfo.footer.types')}
                  </span>
                </div>
                <span className="text-accent font-medium">
                  {t('personalInfo.footer.year')}
                </span>
              </div>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout
          className="col-span-full lg:col-span-4 !p-0 
          rounded-lg bg-white/10
           backdrop-blur-md 
          bg-white/20 
           overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
        >
          <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#8791A666] to-[#1E3A8A33] backdrop-blur-md">
            {/* Header */}
            <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/20  to-transparent flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent-500/10 border border-accent-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                    {t('featuredProject.title')}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {t('featuredProject.subtitle')}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
              <div className="h-full flex flex-col">
                <GitHubPinnedRepoCard
                  data={mockPinnedRepoData}
                  theme={{
                    titleColor: '#22043D',
                    textColor: '#1F1F1F',
                    iconColor: '#22043D',
                    hideBorder: true,
                  }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0">
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {t('featuredProject.tech')}
                </span>
                <span>⭐ {t('featuredProject.stars')}</span>
              </div>
            </div>
          </div>
        </ItemLayout>

        {/* Row 2: Education & Experience */}
        <EducationCard />
        <ExperienceCard />

        {/* Row 3: Technologies */}
        <ItemLayout className="col-span-full">
          <div className="w-full">
            <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent font-bold">
              {t('technologies.title')}
            </h3>
            <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
              {svgData.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
                  bg-white/10 dark:bg-black/10 
                  border border-white/20 dark:border-accent/20 
                  backdrop-blur-md 
                  hover:border-accent/50 
                  hover:bg-white/20 dark:hover:bg-black/20 
                  transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <SvgDisplay data={s} />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
                    {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;"
garder le style precedente ajouter juste cette style bro