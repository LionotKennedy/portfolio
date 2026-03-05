// // components/cards/ExperienceCard.tsx
// import React from 'react';
// import { Briefcase, Calendar, MapPin, ExternalLink, Code2, Building2 } from 'lucide-react';
// import ItemLayout from '../about/ItemLayout';

// interface Experience {
//     title: string;
//     description: string;
//     period: string;
//     company: string;
//     location: string;
//     type: 'freelance' | 'stage' | 'project' | 'internship';
//     technologies?: string[];
// }

// const experienceData: Experience[] = [
//     {
//         title: "Refonte Application E-commerce",
//         description: "Refonte complète de l'application E-commerce pour améliorer les performances et l'expérience utilisateur",
//         period: "Mai 2025 - Juillet 2025",
//         company: "Freelancer",
//         location: "Madagascar",
//         type: 'freelance',
//         technologies: ['React', 'Node.js', 'Performance']
//     },
//     {
//         title: "Application Gestion Courriers & Archives",
//         description: "Conception et réalisation d'une application web pour le système de gestion des courriers et des archives",
//         period: "Octobre 2024 - Novembre 2024",
//         company: "Service régional de la solde et des pensions",
//         location: "Atsimo Andrefana (HOTEL FINANCE), Toliara",
//         type: 'project',
//         technologies: ['Web', 'Gestion', 'Archives']
//     },
//     {
//         title: "Gestion de Suivi de Facturation",
//         description: "Stage en gestion de suivi de facturation et processus administratifs",
//         period: "Août 2023 - Novembre 2023",
//         company: "Antsirabe OpenData-Madagascar",
//         location: "Antsirabe",
//         type: 'internship',
//         technologies: ['Facturation', 'Suivi', 'Data']
//     },
//     {
//         title: "Gestion de Employés",
//         description: "Développement d'un système de gestion des employés pour l'école",
//         period: "Mars 2022 - Juin 2022",
//         company: "Ecole National de l'Informatique",
//         location: "Toliara",
//         type: 'project',
//         technologies: ['RH', 'Management', 'Web']
//     },
//     {
//         title: "Gestion de Caisse d'Église",
//         description: "Application de gestion de caisse pour une organisation religieuse",
//         period: "Février 2022 - Avril 2022",
//         company: "Ecole National de l'Informatique",
//         location: "Toliara",
//         type: 'project',
//         technologies: ['Finance', 'Caisse', 'Web']
//     }
// ];

// const getTypeIcon = (type: Experience['type']) => {
//     switch (type) {
//         case 'freelance':
//             return <Code2 size={14} className="sm:w-4 sm:h-4" />;
//         case 'stage':
//         case 'internship':
//             return <Building2 size={14} className="sm:w-4 sm:h-4" />;
//         case 'project':
//             return <Briefcase size={14} className="sm:w-4 sm:h-4" />;
//         default:
//             return <Briefcase size={14} className="sm:w-4 sm:h-4" />;
//     }
// };

// const getTypeLabel = (type: Experience['type']) => {
//     switch (type) {
//         case 'freelance':
//             return 'Freelance';
//         case 'internship':
//             return 'Stage';
//         case 'project':
//             return 'Projet';
//         default:
//             return type;
//     }
// };

// const getTypeColor = (type: Experience['type']) => {
//     switch (type) {
//         case 'freelance':
//             return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
//         case 'internship':
//             return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
//         case 'project':
//             return 'bg-green-500/20 text-green-400 border-green-500/30';
//         default:
//             return 'bg-accent/20 text-accent border-accent/30';
//     }
// };

// const ExperienceCard: React.FC = () => {
//     return (
//         <ItemLayout
//             className="col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect overflow-hidden"
//         >
//             <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0F172A66] to-[#1E3A8A33] backdrop-blur-md">
//                 {/* Header */}
//                 <div className="p-4 sm:p-5 border-b border-white/10 bg-gradient-to-r from-purple-500/20 to-transparent">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
//                             <Briefcase size={20} className="sm:w-6 sm:h-6" />
//                         </div>
//                         <div>
//                             <h3 className="text-sm sm:text-base font-semibold text-foreground">
//                                 Expériences Professionnelles
//                             </h3>
//                             <p className="text-xs text-muted-foreground">Projets & Missions</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Experience List */}
//                 <div className="flex-1 p-3 sm:p-4 overflow-y-auto max-h-[320px] scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
//                     <div className="space-y-3 sm:space-y-4">
//                         {experienceData.map((exp, index) => (
//                             <div
//                                 key={index}
//                                 className="group relative p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
//                             >
//                                 {/* Hover Effect */}
//                                 <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                                 <div className="relative">
//                                     {/* Header Row */}
//                                     <div className="flex items-start justify-between gap-2 mb-2">
//                                         <div className="flex-1">
//                                             <h4 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-purple-400 transition-colors line-clamp-1">
//                                                 {exp.title}
//                                             </h4>
//                                         </div>
//                                         <span className={`px-2 py-0.5 text-[10px] sm:text-xs rounded-full border flex items-center gap-1 whitespace-nowrap ${getTypeColor(exp.type)}`}>
//                                             {getTypeIcon(exp.type)}
//                                             {getTypeLabel(exp.type)}
//                                         </span>
//                                     </div>

//                                     {/* Description */}
//                                     <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
//                                         {exp.description}
//                                     </p>

//                                     {/* Meta Info */}
//                                     <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-muted-foreground/80">
//                                         <span className="flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded">
//                                             <Calendar size={10} className="sm:w-3 sm:h-3 text-purple-400" />
//                                             {exp.period}
//                                         </span>

//                                         <span className="flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded">
//                                             <Building2 size={10} className="sm:w-3 sm:h-3 text-purple-400" />
//                                             <span className="truncate max-w-[100px] sm:max-w-[140px]">{exp.company}</span>
//                                         </span>

//                                         <span className="flex items-center gap-1 bg-white/5 px-1.5 py-0.5 rounded">
//                                             <MapPin size={10} className="sm:w-3 sm:h-3 text-purple-400" />
//                                             <span className="truncate max-w-[80px] sm:max-w-[100px]">{exp.location}</span>
//                                         </span>
//                                     </div>

//                                     {/* Technologies */}
//                                     {exp.technologies && (
//                                         <div className="flex flex-wrap gap-1 mt-2">
//                                             {exp.technologies.map((tech, techIndex) => (
//                                                 <span
//                                                     key={techIndex}
//                                                     className="px-1.5 py-0.5 text-[10px] rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
//                                                 >
//                                                     {tech}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="p-3 border-t border-white/10 bg-white/5">
//                     <div className="flex items-center justify-between text-xs text-muted-foreground">
//                         <span>{experienceData.length} expériences</span>
//                         <span className="flex items-center gap-1 text-purple-400">
//                             <ExternalLink size={12} />
//                             <span className="hidden sm:inline">Disponible pour projets</span>
//                             <span className="sm:hidden">Freelance</span>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </ItemLayout>
//     );
// };

// export default ExperienceCard;






































// // components/cards/ExperienceCard.tsx
// import React from 'react';
// import { Briefcase, Calendar, MapPin, ExternalLink, Code2, Building2, Rocket, Users } from 'lucide-react';
// import ItemLayout from '../about/ItemLayout';

// interface Experience {
//   title: string;
//   description: string;
//   period: string;
//   company: string;
//   location: string;
//   type: 'freelance' | 'stage' | 'project' | 'internship';
//   technologies?: string[];
//   icon?: React.ReactNode;
// }

// const experienceData: Experience[] = [
//   {
//     title: "Refonte Application E-commerce",
//     description: "Refonte complète de l'application E-commerce pour améliorer les performances et l'expérience utilisateur",
//     period: "Mai 2025 - Juillet 2025",
//     company: "Freelancer",
//     location: "Madagascar",
//     type: 'freelance',
//     technologies: ['React', 'Node.js', 'Performance', 'UX/UI'],
//     icon: <Rocket size={18} />
//   },
//   {
//     title: "Gestion Courriers & Archives",
//     description: "Conception et réalisation d'une application web pour le système de gestion des courriers et des archives",
//     period: "Octobre 2024 - Novembre 2024",
//     company: "Service régional solde et pensions",
//     location: "Atsimo Andrefana, Toliara",
//     type: 'project',
//     technologies: ['Web', 'Gestion Documentaire', 'Archives'],
//     icon: <Building2 size={18} />
//   },
//   {
//     title: "Gestion de Suivi de Facturation",
//     description: "Stage en gestion de suivi de facturation et processus administratifs",
//     period: "Août 2023 - Novembre 2023",
//     company: "Antsirabe OpenData",
//     location: "Antsirabe, Madagascar",
//     type: 'internship',
//     technologies: ['Facturation', 'Suivi', 'Data Analysis'],
//     icon: <Users size={18} />
//   },
//   {
//     title: "Gestion des Employés",
//     description: "Développement d'un système de gestion des employés pour l'école",
//     period: "Mars 2022 - Juin 2022",
//     company: "Ecole National de l'Informatique",
//     location: "Toliara",
//     type: 'project',
//     technologies: ['RH', 'Management', 'Web App'],
//     icon: <Users size={18} />
//   },
//   {
//     title: "Gestion de Caisse d'Église",
//     description: "Application de gestion de caisse pour organisation religieuse",
//     period: "Février 2022 - Avril 2022",
//     company: "Ecole National de l'Informatique",
//     location: "Toliara",
//     type: 'project',
//     technologies: ['Finance', 'Caisse', 'Web'],
//     icon: <Code2 size={18} />
//   }
// ];

// const getTypeConfig = (type: Experience['type']) => {
//   switch (type) {
//     case 'freelance':
//       return {
//         icon: <Rocket size={14} />,
//         label: 'Freelance',
//         color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
//         bgGradient: 'from-purple-500/10'
//       };
//     case 'internship':
//       return {
//         icon: <Users size={14} />,
//         label: 'Stage',
//         color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
//         bgGradient: 'from-blue-500/10'
//       };
//     case 'project':
//       return {
//         icon: <Code2 size={14} />,
//         label: 'Projet',
//         color: 'bg-green-500/20 text-green-400 border-green-500/30',
//         bgGradient: 'from-green-500/10'
//       };
//     default:
//       return {
//         icon: <Briefcase size={14} />,
//         label: type,
//         color: 'bg-accent/20 text-accent border-accent/30',
//         bgGradient: 'from-accent/10'
//       };
//   }
// };

// const ExperienceCard: React.FC = () => {
//   return (
//     <ItemLayout
//       className="col-span-full lg:col-span-6 !p-0 glass-effect overflow-hidden h-full min-h-[400px] lg:min-h-[450px]"
//     >
//       <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0F172A66] via-[#1E3A8A22] to-[#1E3A8A33] backdrop-blur-md">
//         {/* Header Premium */}
//         <div className="p-5 sm:p-6 border-b border-white/10 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
//           <div className="relative flex items-center gap-4">
//             <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/10 border border-purple-500/20">
//               <Briefcase size={24} className="sm:w-7 sm:h-7" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-base sm:text-lg font-bold text-foreground">
//                 Expériences Professionnelles
//               </h3>
//               <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
//                 Projets réalisés & missions
//               </p>
//             </div>
//             <div className="hidden sm:flex flex-col items-end text-right">
//               <span className="text-2xl font-bold text-purple-400">5</span>
//               <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Projets</span>
//             </div>
//           </div>
//         </div>

//         {/* Experience List */}
//         <div className="flex-1 p-4 sm:p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
//           <div className="space-y-3 sm:space-y-4">
//             {experienceData.map((exp, index) => {
//               const typeConfig = getTypeConfig(exp.type);
              
//               return (
//                 <div 
//                   key={index}
//                   className="group relative p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
//                 >
//                   {/* Hover Gradient Effect */}
//                   <div className={`absolute inset-0 bg-gradient-to-r ${typeConfig.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
//                   <div className="relative">
//                     {/* Header Row */}
//                     <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-2">
//                       <div className="flex items-start gap-3 flex-1">
//                         <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${typeConfig.color.split(' ')[0]}`}>
//                           {exp.icon}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-sm font-semibold text-foreground group-hover:text-purple-400 transition-colors line-clamp-1 sm:line-clamp-none">
//                             {exp.title}
//                           </h4>
//                           <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
//                             {exp.company}
//                           </p>
//                         </div>
//                       </div>
                      
//                       <span className={`flex-shrink-0 self-start px-2.5 py-1 text-[10px] sm:text-xs rounded-full border flex items-center gap-1.5 font-medium ${typeConfig.color}`}>
//                         {typeConfig.icon}
//                         {typeConfig.label}
//                       </span>
//                     </div>

//                     {/* Description - Hidden on mobile, visible on hover or expand */}
//                     <p className="text-xs sm:text-sm text-muted-foreground/80 line-clamp-2 sm:line-clamp-2 mb-3 leading-relaxed">
//                       {exp.description}
//                     </p>

//                     {/* Meta Info Grid */}
//                     <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-muted-foreground/70 mb-3">
//                       <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-md">
//                         <Calendar size={11} className="text-purple-400" />
//                         {exp.period}
//                       </span>
                      
//                       <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-md">
//                         <MapPin size={11} className="text-purple-400" />
//                         <span className="truncate max-w-[120px] sm:max-w-none">{exp.location}</span>
//                       </span>
//                     </div>

//                     {/* Technologies */}
//                     {exp.technologies && (
//                       <div className="flex flex-wrap gap-1.5">
//                         {exp.technologies.map((tech, techIndex) => (
//                           <span 
//                             key={techIndex}
//                             className="px-2 py-0.5 text-[10px] sm:text-[11px] rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-sm">
//           <div className="flex items-center justify-between text-xs sm:text-sm">
//             <div className="flex items-center gap-4">
//               <span className="flex items-center gap-2 text-muted-foreground">
//                 <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
//                 Disponible pour projets
//               </span>
//               <span className="hidden sm:inline text-muted-foreground/60">•</span>
//               <span className="hidden sm:inline text-muted-foreground">
//                 {experienceData.filter(e => e.type === 'freelance').length} freelance
//               </span>
//             </div>
//             <span className="text-purple-400 font-medium flex items-center gap-1">
//               <ExternalLink size={12} />
//               <span className="hidden sm:inline">Voir plus</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </ItemLayout>
//   );
// };

// export default ExperienceCard;



































// components/cards/ExperienceCard.tsx
import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Code2, Building2, Rocket, Users } from 'lucide-react';
import ItemLayout from '../about/ItemLayout';

interface Experience {
  title: string;
  description: string;
  period: string;
  company: string;
  location: string;
  type: 'freelance' | 'stage' | 'project' | 'internship';
  technologies?: string[];
  icon?: React.ReactNode;
}

const experienceData: Experience[] = [
  {
    title: "Refonte E-commerce",
    description: "Refonte complète pour améliorer performances et UX",
    period: "Mai - Juil. 2025",
    company: "Freelancer",
    location: "Madagascar",
    type: 'freelance',
    technologies: ['React', 'Node.js', 'Perf'],
    icon: <Rocket size={16} />
  },
  {
    title: "Gestion Courriers & Archives",
    description: "App web de gestion documentaire et archives",
    period: "Oct. - Nov. 2024",
    company: "Service régional solde",
    location: "Toliara",
    type: 'project',
    technologies: ['Web', 'Archives'],
    icon: <Building2 size={16} />
  },
  {
    title: "Suivi Facturation",
    description: "Stage en gestion et suivi de facturation",
    period: "Août - Nov. 2023",
    company: "OpenData Madagascar",
    location: "Antsirabe",
    type: 'internship',
    technologies: ['Data', 'Suivi'],
    icon: <Users size={16} />
  },
  {
    title: "Gestion Employés",
    description: "Système de gestion RH pour l'école",
    period: "Mars - Juin 2022",
    company: "ENI",
    location: "Toliara",
    type: 'project',
    technologies: ['RH', 'Web'],
    icon: <Users size={16} />
  },
  {
    title: "Gestion Caisse Église",
    description: "App de gestion financière pour organisation",
    period: "Fév. - Avr. 2022",
    company: "ENI",
    location: "Toliara",
    type: 'project',
    technologies: ['Finance', 'Web'],
    icon: <Code2 size={16} />
  }
];

const getTypeConfig = (type: Experience['type']) => {
  switch (type) {
    case 'freelance':
      return {
        color: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        bgHover: 'hover:bg-purple-500/5'
      };
    case 'internship':
      return {
        color: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        bgHover: 'hover:bg-blue-500/5'
      };
    case 'project':
      return {
        color: 'bg-green-500/20 text-green-400 border-green-500/30',
        bgHover: 'hover:bg-green-500/5'
      };
    default:
      return {
        color: 'bg-accent/20 text-accent border-accent/30',
        bgHover: 'hover:bg-accent/5'
      };
  }
};

const ExperienceCard: React.FC = () => {
  return (
    <ItemLayout
      className="col-span-full lg:col-span-6 !p-0 glass-effect overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
    >
      <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0F172A66] via-[#1E3A8A22] to-[#1E3A8A33] backdrop-blur-md">
        {/* Header Compact */}
        <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/10 border border-purple-500/20">
              <Briefcase size={20} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-foreground truncate">
                Expériences Professionnelles
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Projets & Missions
              </p>
            </div>
            <div className="flex flex-col items-end text-right flex-shrink-0">
              <span className="text-xl font-bold text-purple-400">5</span>
              <span className="text-[10px] text-muted-foreground uppercase">Projets</span>
            </div>
          </div>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent p-3 sm:p-4">
          <div className="space-y-2.5 sm:space-y-3">
            {experienceData.map((exp, index) => {
              const typeConfig = getTypeConfig(exp.type);
              
              return (
                <div 
                  key={index}
                  className={`group p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 ${typeConfig.bgHover} transition-all cursor-pointer`}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${typeConfig.color.split(' ')[0]}`}>
                      {exp.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-xs font-semibold text-foreground group-hover:text-purple-400 transition-colors truncate flex-1">
                          {exp.title}
                        </h4>
                        <span className={`flex-shrink-0 px-1.5 py-0.5 text-[9px] rounded border ${typeConfig.color}`}>
                          {exp.type === 'freelance' ? 'Free' : exp.type === 'internship' ? 'Stage' : 'Projet'}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[10px] text-muted-foreground/80 line-clamp-1 mb-1.5">
                        {exp.description}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground/70">
                        <span className="flex items-center gap-1">
                          <Calendar size={10} className="text-purple-400" />
                          {exp.period}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                        <span className="truncate max-w-[80px] sm:max-w-[120px]">{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/40 hidden sm:inline" />
                        <span className="hidden sm:flex items-center gap-1">
                          <MapPin size={10} className="text-purple-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-1.5 py-0.5 text-[9px] rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Compact */}
        <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0">
          <div className="flex items-center justify-between text-[10px] sm:text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                Disponible
              </span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">
                {experienceData.filter(e => e.type === 'freelance').length} freelance
              </span>
            </div>
            <span className="text-purple-400 font-medium flex items-center gap-1">
              <ExternalLink size={10} />
              Voir plus
            </span>
          </div>
        </div>
      </div>
    </ItemLayout>
  );
};

export default ExperienceCard;