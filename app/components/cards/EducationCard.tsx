// // components/cards/EducationCard.tsx
// import React from 'react';
// import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';
// import ItemLayout from '../about/ItemLayout';

// interface Education {
//     degree: string;
//     field: string;
//     period: string;
//     institution: string;
//     location?: string;
//     status?: 'completed' | 'ongoing';
// }

// const educationData: Education[] = [
//     {
//         degree: "Master One",
//         field: "Informatique",
//         period: "Février 2025 - Septembre 2025",
//         institution: "Ecole National de l'Informatique",
//         location: "Tuléar",
//         status: 'ongoing'
//     },
//     {
//         degree: "Licence Professionnelle",
//         field: "Informatique - 3ème année",
//         period: "Janvier 2024 - Septembre 2025",
//         institution: "Ecole Nationale d'Informatique",
//         location: "Tuléar",
//         status: 'completed'
//     },
//     {
//         degree: "Licence Professionnelle",
//         field: "Informatique - 2ème année",
//         period: "Février 2023",
//         institution: "ENI",
//         location: "Tuléar",
//         status: 'completed'
//     },
//     {
//         degree: "Licence Professionnelle",
//         field: "Informatique - 1ère année",
//         period: "Février 2022",
//         institution: "Ecole Nationale d'Informatique",
//         location: "Tuléar",
//         status: 'completed'
//     },
//     {
//         degree: "Baccalauréat",
//         field: "Série D",
//         period: "Août 2018 - Septembre 2019",
//         institution: "Lycée Antaninarenina",
//         location: "Tuléar",
//         status: 'completed'
//     }
// ];

// const EducationCard: React.FC = () => {
//     return (
//         <ItemLayout
//             className="col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect overflow-hidden"
//         >
//             <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A33] to-[#0F172A66] backdrop-blur-md">
//                 {/* Header */}
//                 <div className="p-4 sm:p-5 border-b border-white/10 bg-gradient-to-r from-accent/20 to-transparent">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2 rounded-lg bg-accent/20 text-accent">
//                             <GraduationCap size={20} className="sm:w-6 sm:h-6" />
//                         </div>
//                         <div>
//                             <h3 className="text-sm sm:text-base font-semibold text-foreground">
//                                 Diplômes & Formations
//                             </h3>
//                             <p className="text-xs text-muted-foreground">Parcours académique</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Timeline Content */}
//                 <div className="flex-1 p-3 sm:p-4 overflow-y-auto max-h-[320px] scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent">
//                     <div className="relative">
//                         {/* Timeline Line */}
//                         <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

//                         <div className="space-y-3 sm:space-y-4">
//                             {educationData.map((edu, index) => (
//                                 <div
//                                     key={index}
//                                     className="relative pl-8 group cursor-pointer"
//                                 >
//                                     {/* Timeline Dot */}
//                                     <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${edu.status === 'ongoing'
//                                             ? 'border-accent bg-accent/20 animate-pulse'
//                                             : 'border-accent/50 bg-background'
//                                         }`}>
//                                         <div className={`w-2 h-2 rounded-full ${edu.status === 'ongoing' ? 'bg-accent' : 'bg-accent/50'
//                                             }`} />
//                                     </div>

//                                     {/* Content Card */}
//                                     <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-1">
//                                         <div className="flex items-start justify-between gap-2">
//                                             <h4 className="text-xs sm:text-sm font-medium text-foreground line-clamp-2 flex-1">
//                                                 {edu.degree}
//                                             </h4>
//                                             {edu.status === 'ongoing' && (
//                                                 <span className="px-1.5 py-0.5 text-[10px] sm:text-xs rounded-full bg-accent/20 text-accent border border-accent/30 whitespace-nowrap">
//                                                     En cours
//                                                 </span>
//                                             )}
//                                         </div>

//                                         <p className="text-[10px] sm:text-xs text-accent/80 mt-0.5 font-medium">
//                                             {edu.field}
//                                         </p>

//                                         <div className="flex items-center gap-3 mt-2 text-[10px] sm:text-xs text-muted-foreground">
//                                             <span className="flex items-center gap-1">
//                                                 <Calendar size={10} className="sm:w-3 sm:h-3" />
//                                                 {edu.period}
//                                             </span>
//                                         </div>

//                                         <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-xs text-muted-foreground/80">
//                                             <School size={10} className="sm:w-3 sm:h-3" />
//                                             <span className="truncate">{edu.institution}</span>
//                                             {edu.location && (
//                                                 <>
//                                                     <span className="mx-1">•</span>
//                                                     <MapPin size={10} className="sm:w-3 sm:h-3" />
//                                                     <span>{edu.location}</span>
//                                                 </>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Footer Stats */}
//                 <div className="p-3 border-t border-white/10 bg-white/5">
//                     <div className="flex items-center justify-between text-xs text-muted-foreground">
//                         <span>{educationData.length} diplômes</span>
//                         <span className="flex items-center gap-1">
//                             <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
//                             Formation continue
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </ItemLayout>
//     );
// };

// export default EducationCard;










































// // components/cards/EducationCard.tsx
// import React from 'react';
// import { GraduationCap, Calendar, MapPin, School, Award, BookOpen } from 'lucide-react';
// import ItemLayout from '../about/ItemLayout';

// interface Education {
//   degree: string;
//   field: string;
//   period: string;
//   institution: string;
//   location?: string;
//   status?: 'completed' | 'ongoing';
//   icon?: React.ReactNode;
// }

// const educationData: Education[] = [
//   {
//     degree: "Master One",
//     field: "Filière Informatique",
//     period: "Février 2025 - Septembre 2025",
//     institution: "Ecole National de l'Informatique",
//     location: "Tuléar",
//     status: 'ongoing',
//     icon: <Award size={18} />
//   },
//   {
//     degree: "Licence Professionnelle",
//     field: "3ème année Informatique",
//     period: "Janvier 2024 - Septembre 2025",
//     institution: "Ecole Nationale d'Informatique",
//     location: "Tuléar",
//     status: 'completed',
//     icon: <BookOpen size={18} />
//   },
//   {
//     degree: "Licence Professionnelle",
//     field: "2ème année Informatique",
//     period: "Depuis Février 2023",
//     institution: "ENI",
//     location: "Tuléar",
//     status: 'completed',
//     icon: <BookOpen size={18} />
//   },
//   {
//     degree: "Licence Professionnelle",
//     field: "1ère année Informatique",
//     period: "Février 2022",
//     institution: "Ecole Nationale d'Informatique",
//     location: "Tuléar",
//     status: 'completed',
//     icon: <BookOpen size={18} />
//   },
//   {
//     degree: "Baccalauréat",
//     field: "Série D",
//     period: "Août 2018 - Septembre 2019",
//     institution: "Lycée Antaninarenina",
//     location: "Tuléar",
//     status: 'completed',
//     icon: <School size={18} />
//   }
// ];

// const EducationCard: React.FC = () => {
//   return (
//     <ItemLayout
//       className="col-span-full lg:col-span-6 !p-0 glass-effect overflow-hidden h-full min-h-[400px] lg:min-h-[450px]"
//     >
//       <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A33] via-[#1E3A8A22] to-[#0F172A66] backdrop-blur-md">
//         {/* Header Premium */}
//         <div className="p-5 sm:p-6 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
//           <div className="relative flex items-center gap-4">
//             <div className="p-3 rounded-xl bg-accent/20 text-accent shadow-lg shadow-accent/10 border border-accent/20">
//               <GraduationCap size={24} className="sm:w-7 sm:h-7" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-base sm:text-lg font-bold text-foreground">
//                 Diplômes & Formations
//               </h3>
//               <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
//                 Parcours académique complet
//               </p>
//             </div>
//             <div className="hidden sm:flex flex-col items-end text-right">
//               <span className="text-2xl font-bold text-accent">5</span>
//               <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Diplômes</span>
//             </div>
//           </div>
//         </div>

//         {/* Timeline Content - Layout Horizontal sur Desktop */}
//         <div className="flex-1 p-4 sm:p-5 overflow-y-auto lg:overflow-visible scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent">
          
//           {/* Version Mobile: Timeline Verticale */}
//           <div className="lg:hidden relative">
//             <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />
            
//             <div className="space-y-4">
//               {educationData.map((edu, index) => (
//                 <div 
//                   key={index} 
//                   className="relative pl-10 group"
//                 >
//                   {/* Timeline Dot */}
//                   <div className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg ${
//                     edu.status === 'ongoing' 
//                       ? 'border-accent bg-accent/20 shadow-accent/20' 
//                       : 'border-accent/50 bg-background/80'
//                   }`}>
//                     <div className={`w-2.5 h-2.5 rounded-full ${
//                       edu.status === 'ongoing' ? 'bg-accent animate-pulse' : 'bg-accent/60'
//                     }`} />
//                   </div>

//                   {/* Content Card */}
//                   <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-1 shadow-sm">
//                     <div className="flex items-start justify-between gap-2 mb-1">
//                       <h4 className="text-sm font-semibold text-foreground">
//                         {edu.degree}
//                       </h4>
//                       {edu.status === 'ongoing' && (
//                         <span className="px-2 py-0.5 text-[10px] rounded-full bg-accent/20 text-accent border border-accent/30 whitespace-nowrap font-medium">
//                           En cours
//                         </span>
//                       )}
//                     </div>
                    
//                     <p className="text-xs sm:text-sm text-accent/90 font-medium mb-2">
//                       {edu.field}
//                     </p>

//                     <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-muted-foreground">
//                       <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
//                         <Calendar size={11} />
//                         {edu.period}
//                       </span>
//                       <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
//                         <School size={11} />
//                         {edu.institution}
//                       </span>
//                       {edu.location && (
//                         <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
//                           <MapPin size={11} />
//                           {edu.location}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Version Desktop: Grid Layout */}
//           <div className="hidden lg:grid grid-cols-1 gap-3 h-full">
//             {educationData.map((edu, index) => (
//               <div 
//                 key={index} 
//                 className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center gap-4"
//               >
//                 {/* Icon Container */}
//                 <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
//                   edu.status === 'ongoing' 
//                     ? 'bg-accent/20 text-accent shadow-lg shadow-accent/10' 
//                     : 'bg-white/10 text-muted-foreground group-hover:text-accent'
//                 }`}>
//                   {edu.icon}
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-1">
//                     <h4 className="text-sm font-semibold text-foreground truncate">
//                       {edu.degree}
//                     </h4>
//                     {edu.status === 'ongoing' && (
//                       <span className="flex-shrink-0 px-2 py-0.5 text-[10px] rounded-full bg-accent/20 text-accent border border-accent/30 font-medium">
//                         En cours
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-xs text-accent/80 font-medium mb-1.5">
//                     {edu.field}
//                   </p>
//                   <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
//                     <span className="flex items-center gap-1">
//                       <Calendar size={11} />
//                       {edu.period}
//                     </span>
//                     <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
//                     <span className="truncate">{edu.institution}</span>
//                     {edu.location && (
//                       <>
//                         <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
//                         <span className="flex items-center gap-1 flex-shrink-0">
//                           <MapPin size={11} />
//                           {edu.location}
//                         </span>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 {/* Hover Indicator */}
//                 <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <div className="w-2 h-2 rounded-full bg-accent" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer Stats */}
//         <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-sm">
//           <div className="flex items-center justify-between text-xs sm:text-sm">
//             <div className="flex items-center gap-4">
//               <span className="flex items-center gap-2 text-muted-foreground">
//                 <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
//                 Formation continue
//               </span>
//               <span className="hidden sm:inline text-muted-foreground/60">•</span>
//               <span className="hidden sm:inline text-muted-foreground">
//                 {educationData.filter(e => e.status === 'completed').length} complétés
//               </span>
//             </div>
//             <span className="text-accent font-medium">
//               {educationData.length} diplômes
//             </span>
//           </div>
//         </div>
//       </div>
//     </ItemLayout>
//   );
// };

// export default EducationCard;























// // components/cards/EducationCard.tsx
// import React from 'react';
// import { GraduationCap, Calendar, MapPin, School, Award, BookOpen } from 'lucide-react';
// import ItemLayout from '../about/ItemLayout';

// interface Education {
//   degree: string;
//   field: string;
//   period: string;
//   institution: string;
//   location?: string;
//   status?: 'completed' | 'ongoing';
//   icon?: React.ReactNode;
// }

// const educationData: Education[] = [
//   {
//     degree: "Master One",
//     field: "Filière Informatique",
//     period: "Fév. 2025 - Sept. 2025",
//     institution: "Ecole National de l'Informatique",
//     location: "Tuléar",
//     status: 'ongoing',
//     icon: <Award size={16} />
//   },
//   {
//     degree: "Licence Pro",
//     field: "3ème année Info",
//     period: "Janv. 2024 - Sept. 2025",
//     institution: "Ecole Nationale d'Informatique",
//     location: "Tuléar",
//     status: 'completed',
//     icon: <BookOpen size={16} />
//   },
//   {
//     degree: "Licence Pro",
//     field: "2ème année Info",
//     period: "Fév. 2023",
//     institution: "ENI",
//     location: "Tuléar",
//     status: 'completed',
//     icon: <BookOpen size={16} />
//   },
//   {
//     degree: "Licence Pro",
//     field: "1ère année Info",
//     period: "Fév. 2022",
//     institution: "Ecole Nationale d'Informatique",
//     location: "Tuléar",
//     status: 'completed',
//     icon: <BookOpen size={16} />
//   },
//   {
//     degree: "Baccalauréat",
//     field: "Série D",
//     period: "Août 2018 - Sept. 2019",
//     institution: "Lycée Antaninarenina",
//     location: "Tuléar",
//     status: 'completed',
//     icon: <School size={16} />
//   }
// ];

// const EducationCard: React.FC = () => {
//   return (
//     <ItemLayout
//       className="col-span-full lg:col-span-6 !p-0 glass-effect overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
//     >
//       <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A33] via-[#1E3A8A22] to-[#0F172A66] backdrop-blur-md">
//         {/* Header Compact */}
//         <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent flex-shrink-0">
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent/10 border border-accent/20">
//               <GraduationCap size={20} className="sm:w-5 sm:h-5" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <h3 className="text-sm sm:text-base font-bold text-foreground truncate">
//                 Diplômes & Formations
//               </h3>
//               <p className="text-[10px] sm:text-xs text-muted-foreground">
//                 Parcours académique
//               </p>
//             </div>
//             <div className="flex flex-col items-end text-right flex-shrink-0">
//               <span className="text-xl font-bold text-accent">5</span>
//               <span className="text-[10px] text-muted-foreground uppercase">Diplômes</span>
//             </div>
//           </div>
//         </div>

//         {/* Content Scrollable */}
//         <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent p-3 sm:p-4">
          
//           {/* Mobile: Timeline Verticale Compact */}
//           <div className="lg:hidden space-y-3">
//             {educationData.map((edu, index) => (
//               <div 
//                 key={index} 
//                 className="relative pl-8 group"
//               >
//                 {/* Timeline Line */}
//                 {index !== educationData.length - 1 && (
//                   <div className="absolute left-3 top-6 bottom-[-12px] w-0.5 bg-gradient-to-b from-accent to-accent/20" />
//                 )}
                
//                 {/* Timeline Dot */}
//                 <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
//                   edu.status === 'ongoing' 
//                     ? 'border-accent bg-accent/20' 
//                     : 'border-accent/40 bg-background/80'
//                 }`}>
//                   <div className={`w-2 h-2 rounded-full ${
//                     edu.status === 'ongoing' ? 'bg-accent' : 'bg-accent/60'
//                   }`} />
//                 </div>

//                 {/* Content Card Compact */}
//                 <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all">
//                   <div className="flex items-start justify-between gap-2 mb-1">
//                     <h4 className="text-xs font-semibold text-foreground">
//                       {edu.degree}
//                     </h4>
//                     {edu.status === 'ongoing' && (
//                       <span className="px-1.5 py-0.5 text-[9px] rounded bg-accent/20 text-accent border border-accent/30">
//                         En cours
//                       </span>
//                     )}
//                   </div>
                  
//                   <p className="text-[10px] text-accent/80 font-medium mb-1.5">
//                     {edu.field}
//                   </p>

//                   <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-muted-foreground">
//                     <span className="flex items-center gap-1">
//                       <Calendar size={10} />
//                       {edu.period}
//                     </span>
//                     <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
//                     <span className="truncate">{edu.institution}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Desktop: Grid Compact */}
//           <div className="hidden lg:grid grid-cols-1 gap-2.5">
//             {educationData.map((edu, index) => (
//               <div 
//                 key={index} 
//                 className="group p-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all flex items-center gap-3"
//               >
//                 {/* Icon */}
//                 <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
//                   edu.status === 'ongoing' 
//                     ? 'bg-accent/20 text-accent' 
//                     : 'bg-white/10 text-muted-foreground group-hover:text-accent'
//                 }`}>
//                   {edu.icon}
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-0.5">
//                     <h4 className="text-xs font-semibold text-foreground truncate">
//                       {edu.degree}
//                     </h4>
//                     {edu.status === 'ongoing' && (
//                       <span className="flex-shrink-0 px-1.5 py-0.5 text-[9px] rounded bg-accent/20 text-accent border border-accent/30">
//                         En cours
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-[10px] text-accent/80 mb-1">
//                     {edu.field}
//                   </p>
//                   <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
//                     <Calendar size={10} />
//                     <span>{edu.period}</span>
//                     <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
//                     <span className="truncate">{edu.institution}</span>
//                     {edu.location && (
//                       <>
//                         <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
//                         <MapPin size={10} />
//                         <span>{edu.location}</span>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer Compact */}
//         <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0">
//           <div className="flex items-center justify-between text-[10px] sm:text-xs">
//             <div className="flex items-center gap-3">
//               <span className="flex items-center gap-1.5 text-muted-foreground">
//                 <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
//                 Formation continue
//               </span>
//               <span className="text-muted-foreground/60">•</span>
//               <span className="text-muted-foreground">
//                 {educationData.filter(e => e.status === 'completed').length} complétés
//               </span>
//             </div>
//             <span className="text-accent font-medium">
//               Master en cours
//             </span>
//           </div>
//         </div>
//       </div>
//     </ItemLayout>
//   );
// };

// export default EducationCard;
































// components/cards/EducationCard.tsx
import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, School, Award, BookOpen } from 'lucide-react';
import ItemLayout from '../about/ItemLayout';

interface Education {
  degree: string;
  field: string;
  period: string;
  institution: string;
  location?: string;
  status?: 'completed' | 'ongoing';
  icon?: React.ReactNode;
}

const educationData: Education[] = [
  {
    degree: "Master One",
    field: "Filière Informatique",
    period: "Fév. 2025 - Sept. 2025",
    institution: "Ecole National de l'Informatique",
    location: "Tuléar",
    status: 'ongoing',
    icon: <Award size={16} />
  },
  {
    degree: "Licence Pro",
    field: "3ème année Info",
    period: "Janv. 2024 - Sept. 2025",
    institution: "Ecole Nationale d'Informatique",
    location: "Tuléar",
    status: 'completed',
    icon: <BookOpen size={16} />
  },
  {
    degree: "Licence Pro",
    field: "2ème année Info",
    period: "Fév. 2023",
    institution: "ENI",
    location: "Tuléar",
    status: 'completed',
    icon: <BookOpen size={16} />
  },
  {
    degree: "Licence Pro",
    field: "1ère année Info",
    period: "Fév. 2022",
    institution: "Ecole Nationale d'Informatique",
    location: "Tuléar",
    status: 'completed',
    icon: <BookOpen size={16} />
  },
  {
    degree: "Baccalauréat",
    field: "Série D",
    period: "Août 2018 - Sept. 2019",
    institution: "Lycée Antaninarenina",
    location: "Tuléar",
    status: 'completed',
    icon: <School size={16} />
  }
];

const EducationCard: React.FC = () => {
  useEffect(() => {
    // Refresh AOS when component mounts
    const refreshAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.refresh();
    };
    refreshAOS();
  }, []);

  return (
    // <ItemLayout className="!p-0 glass-effect overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]">
      <ItemLayout
      className="col-span-full lg:col-span-6 !p-0 glass-effect overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
    >
      <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A33] via-[#1E3A8A22] to-[#0F172A66] backdrop-blur-md">
        {/* Header */}
        <div 
          className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent flex-shrink-0"
          data-aos="fade-down"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent/10 border border-accent/20">
              <GraduationCap size={20} className="sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-foreground truncate">
                Diplômes & Formations
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Parcours académique
              </p>
            </div>
            <div className="flex flex-col items-end text-right flex-shrink-0">
              <span className="text-xl font-bold text-accent">5</span>
              <span className="text-[10px] text-muted-foreground uppercase">Diplômes</span>
            </div>
          </div>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent p-3 sm:p-4">
          
          {/* Mobile: Timeline */}
          <div className="lg:hidden space-y-3">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="relative pl-8 group"
                data-aos="slide-right"
                data-aos-delay={index * 100}
              >
                {index !== educationData.length - 1 && (
                  <div className="absolute left-3 top-6 bottom-[-12px] w-0.5 bg-gradient-to-b from-accent to-accent/20" />
                )}
                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  edu.status === 'ongoing' ? 'border-accent bg-accent/20' : 'border-accent/40 bg-background/80'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${edu.status === 'ongoing' ? 'bg-accent' : 'bg-accent/60'}`} />
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-xs font-semibold text-foreground">{edu.degree}</h4>
                    {edu.status === 'ongoing' && (
                      <span className="px-1.5 py-0.5 text-[9px] rounded bg-accent/20 text-accent border border-accent/30">En cours</span>
                    )}
                  </div>
                  <p className="text-[10px] text-accent/80 font-medium mb-1.5">{edu.field}</p>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={10} />{edu.period}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="truncate">{edu.institution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid grid-cols-1 gap-2.5">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="group p-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all flex items-center gap-3"
                data-aos="fade-left"
                data-aos-delay={index * 80}
              >
                <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                  edu.status === 'ongoing' ? 'bg-accent/20 text-accent' : 'bg-white/10 text-muted-foreground group-hover:text-accent'
                }`}>
                  {edu.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-xs font-semibold text-foreground truncate">{edu.degree}</h4>
                    {edu.status === 'ongoing' && (
                      <span className="flex-shrink-0 px-1.5 py-0.5 text-[9px] rounded bg-accent/20 text-accent border border-accent/30">En cours</span>
                    )}
                  </div>
                  <p className="text-[10px] text-accent/80 mb-1">{edu.field}</p>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                    <Calendar size={10} /><span>{edu.period}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="truncate">{edu.institution}</span>
                    {edu.location && (
                      <><span className="w-1 h-1 rounded-full bg-muted-foreground/40" /><MapPin size={10} /><span>{edu.location}</span></>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0" data-aos="fade-up">
          <div className="flex items-center justify-between text-[10px] sm:text-xs">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Formation continue
              </span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground">{educationData.filter(e => e.status === 'completed').length} complétés</span>
            </div>
            <span className="text-accent font-medium">Master en cours</span>
          </div>
        </div>
      </div>
    </ItemLayout>
  );
};

export default EducationCard;

