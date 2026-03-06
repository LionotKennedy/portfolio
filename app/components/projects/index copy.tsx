// "use client"
// import type React from "react"
// import ProjectLayout from "./ProjectsLayout";

// interface Project {
//   name: string;
//   description: string;
//   date: string;
//   demoLink: string;
// }
// interface ProjectListProps {
//   projects: Project[];
// }

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 1.5,
//     },
//   },
// }

// const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
//   return (
//     <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center">
//       {projects.map((project, index) => {
//         return <ProjectLayout key={index} {...project} />;
//       })}
//     </div>
//   );
// };

// export default ProjectList;




















// "use client"
// import type React from "react"
// import ProjectLayout from "./ProjectsLayout";
// import { Code2, FolderOpen } from "lucide-react";

// interface Project {
//   id: number;
//   name: string;
//   description: string;
//   date: string;
//   demoLink: string;
//   tags?: string[];
// }

// interface ProjectListProps {
//   projects: Project[];
// }

// // Tags par défaut pour les projets (tu peux les personnaliser dans data.ts)
// const defaultTags = [
//   ["React", "Next.js", "TypeScript"],
//   ["Vue.js", "Node.js", "MongoDB"],
//   ["React Native", "Firebase", "Redux"],
//   ["Angular", "Spring Boot", "PostgreSQL"],
//   ["Svelte", "Tailwind", "Vercel"],
//   ["Next.js", "Prisma", "PostgreSQL"],
//   ["React", "GraphQL", "Apollo"],
//   ["TypeScript", "Express", "Docker"],
//   ["Flutter", "Dart", "Firebase"],
//   ["React", "Three.js", "WebGL"],
// ];

// const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//       {/* Header Section */}
//       <div className="mb-8 sm:mb-12 text-center lg:text-left">
//         <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
//           <Code2 size={16} className="text-accent" />
//           <span className="text-xs sm:text-sm font-medium text-accent">Portfolio</span>
//         </div>
        
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
//           Mes Projets
//         </h1>
//         <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
//           Découvrez une sélection de mes réalisations. Chaque projet représente un défi technique unique et une opportunité d'apprentissage.
//         </p>
//       </div>

//       {/* Stats Bar */}
//       <div className="flex flex-wrap items-center gap-4 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
//         <div className="flex items-center gap-2">
//           <FolderOpen size={18} className="text-accent" />
//           <span className="text-sm font-medium text-foreground">
//             {projects.length} projets
//           </span>
//         </div>
//         <div className="hidden sm:block w-px h-4 bg-white/20" />
//         <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
//           <span className="w-2 h-2 rounded-full bg-green-500" />
//           {projects.filter((_, i) => i % 2 === 0).length} terminés
//         </div>
//         <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
//           <span className="w-2 h-2 rounded-full bg-amber-500" />
//           {projects.filter((_, i) => i % 2 !== 0).length} en cours
//         </div>
//       </div>

//       {/* Projects Grid - Responsive */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
//         {projects.map((project, index) => {
//           // Attribuer des tags par défaut basés sur l'index
//           const tags = project.tags || defaultTags[index % defaultTags.length];
          
//           return (
//             <ProjectLayout 
//               key={project.id} 
//               {...project} 
//               tags={tags}
//             />
//           );
//         })}
//       </div>

//       {/* Empty State */}
//       {projects.length === 0 && (
//         <div className="text-center py-12 sm:py-20">
//           <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center">
//             <FolderOpen size={32} className="text-muted-foreground" />
//           </div>
//           <h3 className="text-lg font-medium text-foreground mb-2">
//             Aucun projet pour le moment
//           </h3>
//           <p className="text-sm text-muted-foreground">
//             Les projets seront ajoutés prochainement.
//           </p>
//         </div>
//       )}

//       {/* Bottom CTA */}
//       <div className="mt-12 sm:mt-16 text-center">
//         <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20">
//           <p className="text-sm text-muted-foreground">
//             Intéressé par mon travail ?
//           </p>
//           <a 
//             href="https://github.com/LionotKennedy" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="px-4 py-2 rounded-lg bg-accent/20 text-accent text-sm font-medium hover:bg-accent/30 transition-colors"
//           >
//             Voir plus sur GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectList;





















