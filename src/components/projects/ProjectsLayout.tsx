
// "use client";
// import Link from "next/link";
// import type React from "react";
// import { ExternalLink, Calendar, Folder, ArrowUpRight } from "lucide-react";

// interface ProjectLayoutProps {
//   name: string;
//   description: string;
//   date: string;
//   demoLink: string;
//   tags?: string[];
// }

// const ProjectLayout: React.FC<ProjectLayoutProps> = ({
//   name,
//   description,
//   date,
//   demoLink,
//   tags = ["React", "TypeScript", "Next.js"],
// }) => {
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
//   };

//   return (
//     <Link
//       href={demoLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="group relative w-full block [perspective:600px] h-full"
//     >
//       <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-700 ease-out origin-bottom group-hover:[transform:rotateX(22deg)_scale(0.95)] group-hover:shadow-2xl group-hover:shadow-accent/20 overflow-hidden h-full flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">

//         {/* Animated Background & Shine */}
//         <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//         <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

//         {/* Content Wrapper - C'est ici qu'on fixe la structure */}
//         <div className="relative">
//           {/* Top Row */}
//           <div className="flex items-start justify-between gap-3 mb-4">
//             <div className="flex items-center gap-3 flex-1 min-w-0">
//               <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-accent/20 to-white/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-accent/20">
//                 <Folder size={20} className="sm:w-6 sm:h-6" />
//               </div>
//               <div className="flex-1 min-w-0">
//                 {/* line-clamp-1 pour garder le nom sur une seule ligne */}
//                 <h2 className="text-sm sm:text-base md:text-lg font-bold text-black/70 group-hover:text-accent transition-colors truncate">
//                   {name}
//                 </h2>
//                 {/* line-clamp-3 pour que la description fasse toujours max 3 lignes */}
//                 <p className="text-xs sm:text-sm text-black line-clamp-3 mt-1 leading-relaxed">
//                   {description}
//                 </p>
//               </div>
//             </div>
//             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 dark:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-accent/20">
//               <ArrowUpRight size={16} className="text-accent" />
//             </div>
//           </div>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-1.5 mb-4">
//             {tags.slice(0, 3).map((tag, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-0.5 text-[10px] sm:text-xs rounded-md bg-accent/10 text-accent/80 border border-accent/20 font-medium group-hover:bg-accent/20 transition-colors"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Row - Toujours poussé en bas grâce au flex-col + justify-between */}
//         <div className="relative flex items-center justify-between pt-3 border-t border-white/10 dark:border-white/5 mt-auto">
//           <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-black">
//             <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
//             <span>{formatDate(date)}</span>
//           </div>
//           <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
//             <span>Voir le projet</span>
//             <ExternalLink size={12} />
//           </div>
//         </div>

//         {/* Progress Bar Animation */}
//         <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-blue-900 w-0 group-hover:w-full transition-all duration-700 ease-out" />
//       </div>
//     </Link>
//   );
// };

// export default ProjectLayout;

























"use client";
import Link from "next/link";
import type React from "react";
import { ExternalLink, Calendar, Folder, ArrowUpRight } from "lucide-react";

interface ProjectLayoutProps {
  name: string;
  description: string;
  date: string;
  demoLink: string;
  tags?: string[];
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  name,
  description,
  date,
  demoLink,
  tags = ["React", "TypeScript", "Next.js"],
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
  };

  return (
    <Link
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full block [perspective:600px] h-full"
    >
      {/* MODIFICATION ICI : glass-effect remplacé par classes Tailwind */}
      <div className="relative p-4 sm:p-5 rounded-2xl bg-[#1b1b1b]/20 border border-blue-500/30 backdrop-blur-[6px] shadow-[inset_0_17px_5px_-9px_rgba(59,130,246,0.05)] hover:shadow-[5px_5px_20px_0px_rgba(59,130,246,0.3)] transition-all duration-700 ease-out origin-bottom group-hover:[transform:rotateX(22deg)_scale(0.95)] overflow-hidden h-full flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">

        {/* Animated Background & Shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        {/* Content Wrapper */}
        <div className="relative">
          {/* Top Row */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-accent/20 to-white/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-accent/20">
                <Folder size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-sm sm:text-base md:text-lg font-bold text-black/70 group-hover:text-accent transition-colors truncate">
                  {name}
                </h2>
                <p className="text-xs sm:text-sm text-black line-clamp-3 mt-1 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 dark:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-accent/20">
              <ArrowUpRight size={16} className="text-accent" />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-[10px] sm:text-xs rounded-md bg-accent/10 text-accent/80 border border-accent/20 font-medium group-hover:bg-accent/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative flex items-center justify-between pt-3 border-t border-white/10 dark:border-white/5 mt-auto">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-black">
            <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <span>Voir le projet</span>
            <ExternalLink size={12} />
          </div>
        </div>

        {/* Progress Bar Animation */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-blue-900 w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </Link>
  );
};

export default ProjectLayout;