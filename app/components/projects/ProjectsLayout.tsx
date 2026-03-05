// "use client";
// import Link from "next/link";
// import type React from "react";
// // import { motion } from "framer-motion";

// interface ProjectLayoutProps {
//   name: string;
//   description: string;
//   date: string;
//   demoLink: string;
// }

// const item = {
//   hidden: { opacity: 0, y: 100 },
//   show: { opacity: 1, y: 0 },
// };
// // const ProjectLink = motion(Link);
// const ProjectLayout: React.FC<ProjectLayoutProps> = ({
//   name,
//   description,
//   date,
//   demoLink,
// }) => {
//   return (
//     <>
//       <Link
//         // variants={item}
//         href={demoLink}
//         target={"_blank"}
//         className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6
//         glass-effect custom-btn"
//       >
//         <div className="flex items-center justify-center space-x-2">
//           <h2 className="text-foreground text-content-change">{name}</h2>
//           <p className="text-muted hidden sm:inline-block">{description}</p>
//         </div>
//         <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
//         <p className="text-muted sm:text-foreground text-content-change">
//           {new Date(date).toDateString()}
//         </p>
//       </Link>
//     </>
//   );
// };

// export default ProjectLayout;



























// "use client";
// import Link from "next/link";
// import type React from "react";
// import { ExternalLink, Calendar, Folder, ArrowUpRight, Code2 } from "lucide-react";

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
//   // Formater la date de manière plus lisible
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('fr-FR', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     }).format(date);
//   };

//   return (
//     <Link
//       href={demoLink}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="group relative w-full block"
//     >
//       {/* Card Container */}
//       <div className="relative p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 overflow-hidden">
        
//         {/* Background Gradient Effect */}
//         <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
//         {/* Top Row: Icon + Title + Arrow */}
//         <div className="relative flex items-start justify-between gap-3 mb-3">
//           <div className="flex items-center gap-3 flex-1 min-w-0">
//             {/* Project Icon */}
//             <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 border border-accent/20">
//               <Folder size={20} className="sm:w-6 sm:h-6" />
//             </div>
            
//             {/* Title & Description */}
//             <div className="flex-1 min-w-0">
//               <h2 className="text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors truncate">
//                 {name}
//               </h2>
//               <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mt-0.5">
//                 {description}
//               </p>
//             </div>
//           </div>

//           {/* External Link Arrow */}
//           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 dark:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-accent/20">
//             <ArrowUpRight size={16} className="text-accent" />
//           </div>
//         </div>

//         {/* Tags Row */}
//         <div className="relative flex flex-wrap gap-1.5 mb-3">
//           {tags.slice(0, 3).map((tag, index) => (
//             <span 
//               key={index}
//               className="px-2 py-0.5 text-[10px] sm:text-xs rounded-md bg-accent/10 text-accent/80 border border-accent/20 font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//           {tags.length > 3 && (
//             <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-md bg-white/10 text-muted-foreground">
//               +{tags.length - 3}
//             </span>
//           )}
//         </div>

//         {/* Bottom Row: Date + Link */}
//         <div className="relative flex items-center justify-between pt-3 border-t border-white/10 dark:border-white/5">
//           <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
//             <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
//             <span>{formatDate(date)}</span>
//           </div>
          
//           <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
//             <span>Voir le projet</span>
//             <ExternalLink size={12} />
//           </div>
//         </div>

//         {/* Hover Indicator Line */}
//         <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-500 group-hover:w-full transition-all duration-500" />
//       </div>
//     </Link>
//   );
// };

// export default ProjectLayout;



































"use client";
import Link from "next/link";
import type React from "react";
import { ExternalLink, Calendar, Folder, ArrowUpRight, Code2 } from "lucide-react";

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
    <Link href={demoLink} target="_blank" rel="noopener noreferrer" className="group relative w-full block">
      <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-black/20 dark:to-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2 overflow-hidden h-full">
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        {/* Top Row */}
        <div className="relative flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-accent/20">
              <Folder size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors truncate">
                {name}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mt-0.5">
                {description}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 dark:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-accent/20">
            <ArrowUpRight size={16} className="text-accent" />
          </div>
        </div>

        {/* Tags */}
        <div className="relative flex flex-wrap gap-1.5 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-0.5 text-[10px] sm:text-xs rounded-md bg-accent/10 text-accent/80 border border-accent/20 font-medium group-hover:bg-accent/20 transition-colors"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-md bg-white/10 text-muted-foreground">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Bottom Row */}
        <div className="relative flex items-center justify-between pt-3 border-t border-white/10 dark:border-white/5">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
            <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <span>Voir le projet</span>
            <ExternalLink size={12} />
          </div>
        </div>

        {/* Progress Bar Animation */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-purple-500 w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </Link>
  );
};

export default ProjectLayout;