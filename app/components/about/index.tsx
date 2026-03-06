"use client"
// components/AboutDetails.tsx
import { svgData } from "@/app/data/svgData";
import SvgDisplay from "../SvgDisplay";
import ItemLayout from "./ItemLayout";
import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";
import EducationCard from "../cards/EducationCard";
import ExperienceCard from "../cards/ExperienceCard";
import { User, Target, Monitor, Wallet } from 'lucide-react';

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
  title: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  content: React.ReactNode;
}

const AboutDetails: React.FC = () => {
  const infoSections: InfoSection[] = [
    {
      icon: <User size={16} />,
      title: "À propos de moi",
      emoji: "👨‍💻",
      // color: "text-blue-600 dark:text-blue-400",
      color: "text-black-600 dark:text-gray-800",
      bgColor: "bg-blue-500/10 dark:bg-blue-400/10",
      borderColor: "border-blue-500/20 dark:border-blue-400/20",
      content: (
        <>
          Bonjour, je suis <strong className="text-foregrounds">Lionot RAZAFIMANIDIMBY</strong>, étudiant en <span className="text-accents font-medium">5ème année d'informatique</span>, actuellement en préparation de mon diplôme d'ingénieur. Je me considère comme un développeur junior avec une solide base théorique et pratique acquise à travers divers projets scolaires et personnels.
        </>
      )
    },
    {
      icon: <Target size={16} />,
      title: "Objectif professionnel",
      emoji: "🎯",
      // color: "text-green-600 dark:text-green-400",
      color: "text-black-100 dark:text-gray-800",
      bgColor: "bg-green-500/10 dark:bg-green-400/10",
      borderColor: "border-green-500/20 dark:border-green-400/20",
      content: (
        <>
          Je recherche une mission en <span className="text-accents font-medium">freelance ou hybride</span>, pour continuer à me former tout en mettant mes compétences au service de vos projets. Ouvert à d'autres collaborations.
        </>
      )
    },
    {
      icon: <Monitor size={16} />,
      title: "Mes ressources",
      emoji: "💻",
      // color: "text-purple-600 dark:text-purple-400",
      color: "text-black-600 dark:text-gray-800",
      bgColor: "bg-purple-500/10 dark:bg-purple-400/10",
      borderColor: "border-purple-500/20 dark:border-purple-400/20",
      content: (
        <>
          Équipement complet pour travail <span className="text-accents font-medium">distance ou hybride</span>. Opérationnel rapidement, intégration facile à vos outils et méthodes.
        </>
      )
    },
    {
      icon: <Wallet size={16} />,
      title: "Prétentions salariales",
      emoji: "💰",
      // color: "text-amber-600 dark:text-amber-400",
      color: "text-gray-900 dark:text-gray-800",
      bgColor: "bg-amber-500/10 dark:bg-amber-400/10",
      borderColor: "border-amber-500/20 dark:border-amber-400/20",
      content: (
        <div className="space-y-1">
          <div className="flex items-start gap-1.5">
            <span className="text-accents font-semibold text-[11px] sm:text-xs whitespace-nowrap">CDI:</span>
            <span className="text-[11px] sm:text-xs">À négocier selon responsabilités.</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-accents font-semibold text-[11px] sm:text-xs whitespace-nowrap">Free/CDD:</span>
            <span className="text-[11px] sm:text-xs">Tarif flexible selon complexité.</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">

        {/* Row 1: About Text - Scrollable + Pinned Repo */}
        <ItemLayout
          // className="col-span-full lg:col-span-8 !p-0 glass-effect overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
          className="col-span-full lg:col-span-8 !p-0 
          rounded-lg bg-white/10
           backdrop-blur-md 
          bg-white/20 
          overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
        >
          {/* <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#0F172A66] to-[#1E3A8A33] backdrop-blur-md"> */}
          <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#8791A666] to-[#1E3A8A33] backdrop-blur-md">
            {/* Header Compact */}
            <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent/10 border border-accent/20">
                  <User size={20} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm sm:text-base font-bold truncate">
                    Informations Personnelles
                  </h2>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    À propos de moi
                  </p>
                </div>
                <div className="flex flex-col items-end text-right flex-shrink-0">
                  <span className="text-xl font-bold text-accent">4</span>
                  <span className="text-[10px] text-muted-foreground uppercase">Sections</span>
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
                        <span className="truncate">{section.title}</span>
                      </h3>
                    </div>

                    {/* Section Content */}
                    <div className="pl-9 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                      {section.content}
                    </div>
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
                    Disponible
                  </span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="text-muted-foreground">
                    Freelance & CDI
                  </span>
                </div>
                <span className="text-accent font-medium">
                  5ème année
                </span>
              </div>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout
          // className="col-span-full lg:col-span-4 !p-0 glass-effect overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
          className="col-span-full lg:col-span-4 !p-0 
          rounded-lg bg-white/10
           backdrop-blur-md 
          bg-white/20 
           overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
        >
          {/* <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#8791A666] to-[#1E3A8A33] backdrop-blur-md"> */}
          <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#8791A666] to-[#1E3A8A33] backdrop-blur-md">
            {/* Header */}
            {/* <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent flex-shrink-0"> */}
            <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/20  to-transparent flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent-500/10 border border-accent-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  {/* <h3 className="text-sm sm:text-base font-bold text-foreground truncate"> */}
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                    Projet en Vedette
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    GitHub Repository
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
                    // titleColor: '#a855f7',
                    titleColor: '#22043D',
                    // textColor: '#ffffff',
                    textColor: '#1F1F1F',
                    // iconColor: '#a855f7',
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
                  TypeScript
                </span>
                <span>⭐ 12 stars</span>
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
              Technologies & Tools
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

export default AboutDetails;
