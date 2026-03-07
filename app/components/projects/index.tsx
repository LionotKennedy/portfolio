"use client"
import type React from "react"
import { useEffect } from 'react';
import ProjectLayout from "./ProjectsLayout";
import { Code2, FolderOpen } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  date: string;
  demoLink: string;
  tags?: string[];
}

interface ProjectListProps {
  projects: Project[];
}

const defaultTags = [
  ["React", "Next.js", "TypeScript"],
  ["Vue.js", "Node.js", "MongoDB"],
  ["React Native", "Firebase", "Redux"],
  ["Angular", "Spring Boot", "PostgreSQL"],
  ["Svelte", "Tailwind", "Vercel"],
  ["Next.js", "Prisma", "PostgreSQL"],
  ["React", "GraphQL", "Apollo"],
  ["TypeScript", "Express", "Docker"],
  ["Flutter", "Dart", "Firebase"],
  ["React", "Three.js", "WebGL"],
];

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
      });
    };
    initAOS();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div
        className="mb-8 sm:mb-12 text-center lg:text-left"
        data-aos="fade-down"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
          <Code2 size={16} className="text-accent" />
          <span className="text-xs sm:text-sm font-medium text-accent">Portfolio</span>
        </div>
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3" data-aos="fade-right" data-aos-delay="100"> */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-3" data-aos="fade-right" data-aos-delay="100">
          Mes Projets
        </h1>
        {/* <p className="text-sm sm:text-base text-muted-foreground max-w-2xl" data-aos="fade-right" data-aos-delay="200"> */}
        <p className="text-sm sm:text-base text-black max-w-2xl" data-aos="fade-right" data-aos-delay="200">
          Découvrez une sélection de mes réalisations. Chaque projet représente un défi technique unique et une opportunité d'apprentissage.
        </p>
      </div>

      {/* Stats Bar */}
      <div
        className="flex flex-wrap items-center gap-4 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex items-center gap-2">
          <FolderOpen size={18} className="text-accent" />
          <span className="text-sm font-medium text-accent">{projects.length} projets</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-white/20" />
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-accent">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          {/* {projects.filter((_, i) => i % 2 === 0).length} terminés */}
          {projects.length} terminés
        </div>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-accent">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          {/* {projects.filter((_, i) => i % 2 !== 0).length} en cours */}
          0 en cours
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => {
          const tags = project.tags || defaultTags[index % defaultTags.length];
          return (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={400 + (index * 100)}
            >
              <ProjectLayout {...project} tags={tags} />
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-12 sm:py-20" data-aos="zoom-in">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center">
            <FolderOpen size={32} className="text-muted-foreground" />
            {/* <FolderOpen size={32} className="text-muted-foreground" /> */}
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">Aucun projet pour le moment</h3>
          <p className="text-sm text-muted-foreground">Les projets seront ajoutés prochainement.</p>
        </div>
      )}

      {/* Bottom CTA */}
      <div
        className="mt-12 sm:mt-16 text-center"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-blue-500/10 border border-accent/20">
          <p className="text-sm text-black">Intéressé par mon travail ?</p>
          <a
            href="https://github.com/LionotKennedy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-accent/20 text-accent text-sm font-medium hover:bg-accent/30 transition-colors"
          >
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;