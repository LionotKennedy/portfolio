"use client"
// import { svgData } from "@/app/data/svgData";
// import SvgDisplay from "../SvgDisplay";
// import ItemLayout from "./ItemLayout";
// import Link from "next/link";

// const AboutDetails: React.FC = () => {
//   return (
//     <>
//       <section className="py-20 w-full">
//         <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">
//           <ItemLayout
//             className={
//               "col-span-full lg:col-span-8 row-span-2 flex-col items-start glass-effect custom-btn"
//             }
//           >
//             <h2 className="text-xl md:text-2xl text-left w-full capitalize">
//               {/* Architect of Enchantment */}
//               {/* L’architecte de l’Envoûtement */}
//               Architecte de l’Enchantement
//               {/* Le bâtisseur de merveilles 

//  L’artisan de l’enchantement 

//  Le créateur de féerie  */}
//             </h2>
//             <p className="font-light text-xs sm:text-sm md:text-base">
//               {/* My journey in web development is powered by an array of mystical
//               tools and languages, with JavaScript casting the core of my
//               enchantments. I wield frameworks like React.js and Next.js with
//               precision, crafting seamless portals (websites) that connect
//               realms (users) across the digital universe. The ancient arts of
//               the Jamstack empower me to create fast, secure, and dynamic
//               experiences, while my design skills ensure every creation is not
//               only functional but visually captivating. Join me as I continue to
//               explore new spells and technologies to shape the future of the
//               web. */}
//               Mon voyage dans le développement web est porté par une panoplie d’outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js  et Next.js  avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l’univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d’explorer de nouveaux sorts et technologies pour façonner l’avenir du web.
//             </p>
//           </ItemLayout>
//           <ItemLayout
//             className={
//               "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
//             }
//           >
//             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//               0+ <sub className="font-semibold text-base">clients</sub>
//             </p>
//           </ItemLayout>
//           <ItemLayout
//             className={
//               "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
//             }
//           >
//             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//               4+{" "}
//               <sub className="font-semibold text-base">years of experience</sub>
//             </p>
//           </ItemLayout>
//           <ItemLayout
//             className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}
//           >
//             <img
//               className="w-full h-auto"
//               src={"https://github-readme-stats.vercel.app/api/top-langs?username=LionotKennedy&theme=transparent&hide_border=true&title_color=0066cc&text_color=00000&icon_color=FEFE5B&text_bold=false&background=1E3A8A33"}
//               alt="CodeBucks1"
//               loading="lazy"
//             />
//           </ItemLayout>
//           <ItemLayout className={"col-span-full md:col-span-8 !p-0 glass-effect"}>
//             <img
//               className="w-full h-auto"
//               src={"https://github-readme-stats.vercel.app/api?username=LionotKennedy&theme=transparent&hide_border=true&title_color=0066cc&text_color=00000&icon_color=FEFE5B&text_bold=false"}
//               alt="Lionot2"
//               loading="lazy"
//             />
//           </ItemLayout>
//           <ItemLayout className={"col-span-full"}>
//             <div className="w-full">
//               <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
//                 Technologies & Tools
//               </h3>
//               <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
//                 {svgData.map((s) => (
//                   // <div
//                   //   key={s.id}
//                   //   className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg bg-background/10 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:bg-background/20 group"
//                   // >
//                   <div
//                     key={s.id}
//                     className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
//              bg-white/10 dark:bg-black/10 
//              border border-white/20 dark:border-accent/20 
//              backdrop-blur-md 
//              hover:border-accent/50 
//              hover:bg-white/20 dark:hover:bg-black/20 
//              transition-all duration-300 hover:scale-105 group"
//                   >
//                     {/* <div className="relative w-full h-0 pb-[100%]"> */}
//                     <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <SvgDisplay data={s} />
//                       </div>
//                     </div>
//                     <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
//                       {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ItemLayout>

//           <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
//             <img
//               className="w-full h-auto"
//               src={"https://github-readme-stats.vercel.app/api?username=LionotKennedy&theme=transparent&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"}
//               alt="Lionot4"
//               loading="lazy"
//             />
//           </ItemLayout>
//           <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
//             <Link
//               href="https://github.com/LionotKennedy/portfolio"
//               target="_blank"
//               className="w-full"
//             >
//               <img
//                 className="w-full h-auto"
//                 src={`https://github-readme-stats.vercel.app/api/pin/?username=LionotKennedy&repo=portfolio&theme=transparent&hide_border=true&title_color=0066cc&text_color=00000&icon_color=0066cc&text_bold=false&description_lines_count=2`}
//                 alt="Lionot5"
//                 loading="lazy"
//               />
//             </Link>
//           </ItemLayout>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutDetails;




























// // src/components/About/AboutDetails.tsx
// import { svgData } from "@/app/data/svgData";
// import SvgDisplay from "../SvgDisplay";
// import ItemLayout from "./ItemLayout";
// import Link from "next/link";
// import GitHubStats from "../GitHubStats/GitHubStats";

// const AboutDetails: React.FC = () => {
//   return (
//     <>
//       <section className="py-20 w-full">
//         <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">
//           <ItemLayout
//             className={
//               "col-span-full lg:col-span-8 row-span-2 flex-col items-start glass-effect custom-btn"
//             }
//           >
//             <h2 className="text-xl md:text-2xl text-left w-full capitalize">
//               Architecte de l'Enchantement
//             </h2>
//             <p className="font-light text-xs sm:text-sm md:text-base">
//               Mon voyage dans le développement web est porté par une panoplie d'outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js et Next.js avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l'univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d'explorer de nouveaux sorts et technologies pour façonner l'avenir du web.
//             </p>
//           </ItemLayout>

//           <ItemLayout
//             className={
//               "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
//             }
//           >
//             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//               0+ <sub className="font-semibold text-base">clients</sub>
//             </p>
//           </ItemLayout>

//           <ItemLayout
//             className={
//               "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
//             }
//           >
//             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//               4+{" "}
//               <sub className="font-semibold text-base">years of experience</sub>
//             </p>
//           </ItemLayout>

//           {/* REMPLACEMENT : Top Languages avec GitHubStats */}
//           <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//               background="rgba(30, 58, 138, 0.2)" // #1E3A8A33
//             />
//           </ItemLayout>

//           {/* REMPLACEMENT : GitHub Stats avec GitHubStats */}
//           <ItemLayout className={"col-span-full md:col-span-8 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//             />
//           </ItemLayout>

//           <ItemLayout className={"col-span-full"}>
//             <div className="w-full">
//               <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
//                 Technologies & Tools
//               </h3>
//               <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
//                 {svgData.map((s) => (
//                   <div
//                     key={s.id}
//                     className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
//              bg-white/10 dark:bg-black/10 
//              border border-white/20 dark:border-accent/20 
//              backdrop-blur-md 
//              hover:border-accent/50 
//              hover:bg-white/20 dark:hover:bg-black/20 
//              transition-all duration-300 hover:scale-105 group"
//                   >
//                     <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <SvgDisplay data={s} />
//                       </div>
//                     </div>
//                     <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
//                       {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ItemLayout>

//           {/* REMPLACEMENT : Streak Stats avec GitHubStats */}
//           <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//               background="rgba(235, 84, 84, 0)" // #EB545400
//             />
//           </ItemLayout>

//           {/* REMPLACEMENT : Pinned Repo avec GitHubStats */}
//           <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
//             <Link
//               href="https://github.com/LionotKennedy/portfolio"
//               target="_blank"
//               className="w-full"
//             >
//               <GitHubStats 
//                 username="LionotKennedy"
//                 theme="transparent"
//                 showBorder={false}
//                 titleColor="#0066cc"
//                 textColor="#00000"
//                 iconColor="#0066cc"
//                 textBold={false}
//               />
//             </Link>
//           </ItemLayout>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutDetails;





















// // src/components/About/AboutDetails.tsx
// import { svgData } from "@/app/data/svgData";
// import SvgDisplay from "../SvgDisplay";
// import ItemLayout from "./ItemLayout";
// import Link from "next/link";
// import GitHubStats from "../GitHubStats/GitHubStats";

// const AboutDetails: React.FC = () => {
//   return (
//     <>
//       <section className="py-20 w-full">
//         <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">
//           <ItemLayout
//             className={
//               "col-span-full lg:col-span-8 row-span-2 flex-col items-start glass-effect custom-btn"
//             }
//           >
//             <h2 className="text-xl md:text-2xl text-left w-full capitalize">
//               Architecte de l'Enchantement
//             </h2>
//             <p className="font-light text-xs sm:text-sm md:text-base">
//               Mon voyage dans le développement web est porté par une panoplie d'outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js et Next.js avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l'univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d'explorer de nouveaux sorts et technologies pour façonner l'avenir du web.
//             </p>
//           </ItemLayout>

//           <ItemLayout
//             className={
//               "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
//             }
//           >
//             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//               0+ <sub className="font-semibold text-base">clients</sub>
//             </p>
//           </ItemLayout>

//           <ItemLayout
//             className={
//               "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
//             }
//           >
//             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//               4+{" "}
//               <sub className="font-semibold text-base">years of experience</sub>
//             </p>
//           </ItemLayout>

//           {/* Top Languages Card */}
//           <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//               background="rgba(30, 58, 138, 0.2)"
//             />
//           </ItemLayout>

//           {/* GitHub Stats Card */}
//           <ItemLayout className={"col-span-full md:col-span-8 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//             />
//           </ItemLayout>

//           <ItemLayout className={"col-span-full"}>
//             <div className="w-full">
//               <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
//                 Technologies & Tools
//               </h3>
//               <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
//                 {svgData.map((s) => (
//                   <div
//                     key={s.id}
//                     className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
//              bg-white/10 dark:bg-black/10 
//              border border-white/20 dark:border-accent/20 
//              backdrop-blur-md 
//              hover:border-accent/50 
//              hover:bg-white/20 dark:hover:bg-black/20 
//              transition-all duration-300 hover:scale-105 group"
//                   >
//                     <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <SvgDisplay data={s} />
//                       </div>
//                     </div>
//                     <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
//                       {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ItemLayout>

//           {/* Streak Stats Card */}
//           <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//               background="rgba(235, 84, 84, 0)"
//             />
//           </ItemLayout>

//           {/* Pinned Repository Card */}
//           <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
//             <Link
//               href="https://github.com/LionotKennedy/portfolio"
//               target="_blank"
//               className="w-full"
//             >
//               <GitHubStats 
//                 username="LionotKennedy"
//                 theme="transparent"
//                 showBorder={false}
//                 titleColor="#0066cc"
//                 textColor="#000000"
//                 iconColor="#0066cc"
//                 textBold={false}
//               />
//             </Link>
//           </ItemLayout>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutDetails;

























// // src/components/About/AboutDetails.tsx
// import { svgData } from "@/app/data/svgData";
// import SvgDisplay from "../SvgDisplay";
// import ItemLayout from "./ItemLayout";
// import Link from "next/link";
// import GitHubStats from "../GitHubStats/GitHubStats";

// const AboutDetails: React.FC = () => {
//   return (
//     <>
//       <section className="py-20 w-full">
//         <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">
//           <ItemLayout
//             className={
//               "col-span-full lg:col-span-8 row-span-2 flex-col items-start glass-effect custom-btn"
//             }
//           >
//             <h2 className="text-xl md:text-2xl text-left w-full capitalize">
//               Architecte de l'Enchantement
//             </h2>
//             <p className="font-light text-xs sm:text-sm md:text-base">
//               Mon voyage dans le développement web est porté par une panoplie d'outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js et Next.js avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l'univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d'explorer de nouveaux sorts et technologies pour façonner l'avenir du web.
//             </p>
//           </ItemLayout>

//           <ItemLayout
//             className={
//               "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
//             }
//           >
//             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//               0+ <sub className="font-semibold text-base">clients</sub>
//             </p>
//           </ItemLayout>

//           <ItemLayout
//             className={
//               "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
//             }
//           >
//             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
//               4+{" "}
//               <sub className="font-semibold text-base">years of experience</sub>
//             </p>
//           </ItemLayout>

//           {/* Top Languages Card */}
//           <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//               background="rgba(30, 58, 138, 0.2)"
//             />
//           </ItemLayout>

//           {/* GitHub Stats Card */}
//           <ItemLayout className={"col-span-full md:col-span-8 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//             />
//           </ItemLayout>

//           <ItemLayout className={"col-span-full"}>
//             <div className="w-full">
//               <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
//                 Technologies & Tools
//               </h3>
//               <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
//                 {svgData.map((s) => (
//                   <div
//                     key={s.id}
//                     className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
//              bg-white/10 dark:bg-black/10 
//              border border-white/20 dark:border-accent/20 
//              backdrop-blur-md 
//              hover:border-accent/50 
//              hover:bg-white/20 dark:hover:bg-black/20 
//              transition-all duration-300 hover:scale-105 group"
//                   >
//                     <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <SvgDisplay data={s} />
//                       </div>
//                     </div>
//                     <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
//                       {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ItemLayout>

//           {/* Streak Stats Card */}
//           <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
//             <GitHubStats 
//               username="LionotKennedy"
//               theme="transparent"
//               showBorder={false}
//               titleColor="#0066cc"
//               textColor="#000000"
//               iconColor="#FEFE5B"
//               textBold={false}
//               background="rgba(235, 84, 84, 0)"
//             />
//           </ItemLayout>

//           {/* Pinned Repository Card */}
//           <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
//             <Link
//               href="https://github.com/LionotKennedy/portfolio "
//               target="_blank"
//               className="w-full"
//             >
//               <GitHubStats 
//                 username="LionotKennedy"
//                 theme="transparent"
//                 showBorder={false}
//                 titleColor="#0066cc"
//                 textColor="#000000"
//                 iconColor="#0066cc"
//                 textBold={false}
//               />
//             </Link>
//           </ItemLayout>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutDetails;




























{/* <ItemLayout
            className={
              "col-span-full lg:col-span-8 row-span-2 flex-col items-start glass-effect custom-btn"
            }
          >
            <h2 className="text-xl md:text-2xl text-left w-full capitalize">
              Architecte de l'Enchantement
            </h2>
            <p className="font-light text-xs sm:text-sm md:text-base">
              Mon voyage dans le développement web est porté par une panoplie d'outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js et Next.js avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l'univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d'explorer de nouveaux sorts et technologies pour façonner l'avenir du web.
            </p>
          </ItemLayout>
          
         
          <ItemLayout className={"col-span-full col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"}>
            <div className="">
              <GitHubPinnedRepoCard
                data={mockPinnedRepoData}
                theme={{
                  titleColor: '#0066cc',
                  textColor: '#000000',
                  iconColor: '#0066cc',
                  hideBorder: true,
                }}
                />
            </div>
          </ItemLayout>
           */}





























// // components/AboutDetails.tsx
// // import { svgData } from "@/app/data/svgData";
// // import SvgDisplay from "../SvgDisplay";
// // import ItemLayout from "./ItemLayout";
// // // // import Link from "next/link";
// // // import GitHubTopLangsCard from "../github-stats/GitHubTopLangsCard";
// // // import GitHubStatsCard from "../github-stats/GitHubStatsCard";
// // // import GitHubStreakCard from "../github-stats/GitHubStreakCard";
// // import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";
// // import GitHubStreakCard from "../github-stats/GitHubStreakCard";
// // import GitHubTopLangsCard from "../github-stats/GitHubTopLangsCard";


// // components/AboutDetails.tsx
// import { svgData } from "@/app/data/svgData";
// import SvgDisplay from "../SvgDisplay";
// import ItemLayout from "./ItemLayout";
// import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";
// import GitHubStreakCard from "../github-stats/GitHubStreakCard";
// import EducationCard from "../cards/EducationCard";
// import ExperienceCard from "../cards/ExperienceCard";


// // Données statiques pour remplacer les API calls
// const mockStatsData = {
//   username: 'LionotKennedy',
//   name: 'Lionot Kennedy',
//   repos: 24,
//   stars: 42,
//   followers: 12,
//   following: 8,
//   totalCommits: 156,
//   contributions: 1103,
// };

// const mockTopLangsData = [
//   { language: 'TypeScript', percentage: 38, color: '#3178c6' },
//   { language: 'JavaScript', percentage: 25, color: '#f1e05a' },
//   { language: 'Python', percentage: 18, color: '#3572A5' },
//   { language: 'CSS', percentage: 12, color: '#563d7c' },
//   { language: 'HTML', percentage: 7, color: '#e34c26' },
//   { language: 'Java', percentage: 5, color: '#b07219' },
// ];

// const mockStreakData = {
//   currentStreak: 15,
//   longestStreak: 42,
//   totalContributions: 1103,
//   contributionsThisYear: 256,
//   todayContributions: 12,
// };

// const mockPinnedRepoData = {
//   username: 'LionotKennedy',
//   repo: 'portfolio',
//   description: 'Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS',
//   language: 'TypeScript',
//   stars: 12,
//   forks: 3,
//   url: 'https://github.com/LionotKennedy/portfolio',
// };

// // const AboutDetails: React.FC = () => {
// //   return (
// //     <>
// //       <section className="py-20 w-full">
// //         <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">

// //           <ItemLayout
// //             className={
// //               "col-span-full lg:col-span-8 flex flex-col items-start glass-effect custom-btn h-full"
// //             }
// //           >
// //             <h2 className="text-xl md:text-2xl text-left w-full capitalize">
// //               Architecte de l'Enchantement
// //             </h2>
// //             <p className="font-light text-xs sm:text-sm md:text-base flex-grow">
// //               Mon voyage dans le développement web est porté par une panoplie d'outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js et Next.js avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l'univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d'explorer de nouveaux sorts et technologies pour façonner l'avenir du web.
// //             </p>
// //           </ItemLayout>

// //           <ItemLayout
// //             className={"col-span-full lg:col-span-4 flex flex-col glass-effect custom-btn h-full"}
// //           >
// //             <div className="w-full h-full flex flex-col">
// //               <GitHubPinnedRepoCard
// //                 data={mockPinnedRepoData}
// //                 theme={{
// //                   titleColor: '#0066cc',
// //                   textColor: '#000000',
// //                   iconColor: '#0066cc',
// //                   hideBorder: true,
// //                 }}
// //               />
// //             </div>
// //           </ItemLayout>

// //           {/* Top Languages Card - Version Offline */}
// //           {/* <ItemLayout
// //             className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}
// //           >
// //             <div className="w-full h-full">
// //               <GitHubTopLangsCard
// //                 data={mockTopLangsData}
// //                 theme={{
// //                   titleColor: '#0066cc',
// //                   textColor: '#000000',
// //                   iconColor: '#FEFE5B',
// //                   background: '#1E3A8A33',
// //                   hideBorder: true,
// //                 }}
// //               />
// //             </div>
// //           </ItemLayout>  */}

// //           {/* GitHub Stats Card - Version Offline */}
// //           {/* <ItemLayout className={"col-span-full md:col-span-8 !p-0 glass-effect"}>
// //             <div className="w-full h-full">
// //               <GitHubStatsCard
// //                 data={mockStatsData}
// //                 theme={{
// //                   titleColor: '#0066cc',
// //                   textColor: '#000000',
// //                   iconColor: '#FEFE5B',
// //                   hideBorder: true,
// //                 }}
// //               />
// //             </div>
// //           </ItemLayout>

// //           {/* Technologies & Tools Section */}
// //           <ItemLayout className={"col-span-full"}>
// //             <div className="w-full">
// //               <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
// //                 Technologies & Tools
// //               </h3>
// //               <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
// //                 {svgData.map((s) => (
// //                   <div
// //                     key={s.id}
// //                     className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
// //                     bg-white/10 dark:bg-black/10 
// //                     border border-white/20 dark:border-accent/20 
// //                     backdrop-blur-md 
// //                     hover:border-accent/50 
// //                     hover:bg-white/20 dark:hover:bg-black/20 
// //                     transition-all duration-300 hover:scale-105 group"
// //                   >
// //                     <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
// //                       <div className="absolute inset-0 flex items-center justify-center">
// //                         <SvgDisplay data={s} />
// //                       </div>
// //                     </div>
// //                     <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
// //                       {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </ItemLayout>

// //           {/* GitHub Streak Card - Version Offline */}
// //           {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
// //             <div className="w-full h-full">
// //               <GitHubStreakCard
// //                 data={mockStreakData}
// //                 theme={{
// //                   background: '#EB545400',
// //                   ringColor: '#FEFE5B',
// //                   labelColor: '#FEFE5B',
// //                   hideBorder: true,
// //                 }}
// //               />
// //             </div>
// //           </ItemLayout> */}

// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default AboutDetails;


































// const AboutDetails: React.FC = () => {
//   return (
//     <>
//       <section className="py-20 w-full">
//         <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">

//           <ItemLayout
//             className={
//               "col-span-full lg:col-span-8 flex flex-col items-start glass-effect custom-btn h-full"
//             }
//           >
//             <h2 className="text-xl md:text-2xl text-left w-full capitalize">
//               Architecte de l'Enchantement
//             </h2>
//             <p className="font-light text-xs sm:text-sm md:text-base flex-grow">
//               Mon voyage dans le développement web est porté par une panoplie d'outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js et Next.js avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l'univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d'explorer de nouveaux sorts et technologies pour façonner l'avenir du web.
//             </p>
//           </ItemLayout>

//           <ItemLayout
//             className={"col-span-full lg:col-span-4 flex flex-col glass-effect custom-btn h-full"}
//           >
//             <div className="w-full h-full flex flex-col">
//               <GitHubPinnedRepoCard
//                 data={mockPinnedRepoData}
//                 theme={{
//                   titleColor: '#0066cc',
//                   textColor: '#000000',
//                   iconColor: '#0066cc',
//                   hideBorder: true,
//                 }}
//               />
//             </div>
//           </ItemLayout>

//           {/* Education Card - Parallèle à Experience */}
//           <EducationCard />

//           {/* Experience Card - Parallèle à Education */}
//           <ExperienceCard />

//           {/* Technologies & Tools Section */}
//           <ItemLayout className={"col-span-full"}>
//             <div className="w-full">
//               <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
//                 Technologies & Tools
//               </h3>
//               <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
//                 {svgData.map((s) => (
//                   <div
//                     key={s.id}
//                     className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
//                     bg-white/10 dark:bg-black/10 
//                     border border-white/20 dark:border-accent/20 
//                     backdrop-blur-md 
//                     hover:border-accent/50 
//                     hover:bg-white/20 dark:hover:bg-black/20 
//                     transition-all duration-300 hover:scale-105 group"
//                   >
//                     <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <SvgDisplay data={s} />
//                       </div>
//                     </div>
//                     <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
//                       {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ItemLayout>

//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutDetails;







{/* Architecte de l'Enchantement */}

{/* Mon voyage dans le développement web est porté par une panoplie d'outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js et Next.js avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l'univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d'explorer de nouveaux sorts et technologies pour façonner l'avenir du web. */}
























// // components/AboutDetails.tsx
// import { svgData } from "@/app/data/svgData";
// import SvgDisplay from "../SvgDisplay";
// import ItemLayout from "./ItemLayout";
// import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";
// import EducationCard from "../cards/EducationCard";
// import ExperienceCard from "../cards/ExperienceCard";

// const mockPinnedRepoData = {
//   username: 'LionotKennedy',
//   repo: 'portfolio',
//   description: 'Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS',
//   language: 'TypeScript',
//   stars: 12,
//   forks: 3,
//   url: 'https://github.com/LionotKennedy/portfolio',
// };

// const AboutDetails: React.FC = () => {
//   return (
//     <section className="py-20 w-full">
//       <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">

//         {/* Row 1: About Text + Pinned Repo */}
//         <ItemLayout
//           className="col-span-full lg:col-span-8 flex flex-col items-start glass-effect custom-btn h-full min-h-[200px]"
//         >
//           <h2 className="text-xl md:text-2xl text-left w-full capitalize mb-4">
//             information personnelle
//           </h2>
//           <p className="font-light text-xs sm:text-sm md:text-base flex-grow leading-relaxed">
//             👨‍💻 À propos de moi:
//             Bonjour, je suis Lionot RAZAFIMANIDIMBY, étudiant en 5ème année d'informatique,
//             actuellement en préparation de mon diplôme d'ingénieur. Je me considère comme un développeur
//             junior avec une solide base théorique et pratique acquise à travers divers projets scolaires et personnels.
//             Passionné par les défis techniques, j'aime apprendre et m'adapter rapidement aux nouvelles technologies selon
//             les besoins de votre entreprise.
//             <br />
//             🎯 Objectif professionnel:
//             Je suis actuellement à la recherche d'une mission en freelance ou en hybride, afin de continuer à me former tout en mettant
//             mes compétences au service de vos projets. Je reste néanmoins ouvert à d'autres formes de collaboration selon vos besoins.
//             <br />
//             💻 Mes ressources:
//             Je dispose de tout l'équipement nécessaire pour travailler efficacement, que ce soit à distance ou en hybride.
//             Je suis ainsi opérationnel rapidement et capable de m'intégrer facilement à vos outils et méthodes de travail.
//             <br />
//             💰 Prétentions salariales:
//             En CDI : salaire mensuel à négocier selon les responsabilités et la charge de travail.
//             En freelance ou CDD : flexible, nous pourrons discuter d'un tarif adapté à la complexité et à la durée du projet.
//           </p>
//         </ItemLayout>

//         <ItemLayout
//           className="col-span-full lg:col-span-4 flex flex-col glass-effect custom-btn h-full min-h-[200px]"
//         >
//           <div className="w-full h-full flex flex-col">
//             <GitHubPinnedRepoCard
//               data={mockPinnedRepoData}
//               theme={{
//                 titleColor: '#0066cc',
//                 textColor: '#000000',
//                 iconColor: '#0066cc',
//                 hideBorder: true,
//               }}
//             />
//           </div>
//         </ItemLayout>

//         {/* Row 2: Education & Experience - Same Width Large Cards */}
//         <EducationCard />
//         <ExperienceCard />

//         {/* Row 3: Technologies - Full Width */}
//         <ItemLayout className="col-span-full">
//           <div className="w-full">
//             <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
//               Technologies & Tools
//             </h3>
//             <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
//               {svgData.map((s) => (
//                 <div
//                   key={s.id}
//                   className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
//                   bg-white/10 dark:bg-black/10 
//                   border border-white/20 dark:border-accent/20 
//                   backdrop-blur-md 
//                   hover:border-accent/50 
//                   hover:bg-white/20 dark:hover:bg-black/20 
//                   transition-all duration-300 hover:scale-105 group"
//                 >
//                   <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <SvgDisplay data={s} />
//                     </div>
//                   </div>
//                   <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
//                     {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </ItemLayout>

//       </div>
//     </section>
//   );
// };

// export default AboutDetails;




















































// // components/AboutDetails.tsx
// import { svgData } from "@/app/data/svgData";
// import SvgDisplay from "../SvgDisplay";
// import ItemLayout from "./ItemLayout";
// import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";
// import EducationCard from "../cards/EducationCard";
// import ExperienceCard from "../cards/ExperienceCard";
// import { User, Target, Monitor, Wallet } from 'lucide-react';

// const mockPinnedRepoData = {
//   username: 'LionotKennedy',
//   repo: 'portfolio',
//   description: 'Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS',
//   language: 'TypeScript',
//   stars: 12,
//   forks: 3,
//   url: 'https://github.com/LionotKennedy/portfolio',
// };

// interface InfoSection {
//   icon: React.ReactNode;
//   title: string;
//   emoji: string;
//   color: string;
//   bgColor: string;
//   content: React.ReactNode;
// }

// const AboutDetails: React.FC = () => {
//   const infoSections: InfoSection[] = [
//     {
//       icon: <User size={18} />,
//       title: "À propos de moi",
//       emoji: "👨‍💻",
//       color: "text-blue-600 dark:text-blue-400",
//       bgColor: "bg-blue-500/10 dark:bg-blue-400/10",
//       content: (
//         <>
//           Bonjour, je suis <strong className="text-foreground">Lionot RAZAFIMANIDIMBY</strong>, étudiant en <span className="text-accent font-medium">5ème année d'informatique</span>, actuellement en préparation de mon diplôme d'ingénieur. Je me considère comme un développeur junior avec une solide base théorique et pratique acquise à travers divers projets scolaires et personnels. Passionné par les défis techniques, j'aime apprendre et m'adapter rapidement aux nouvelles technologies selon les besoins de votre entreprise.
//         </>
//       )
//     },
//     {
//       icon: <Target size={18} />,
//       title: "Objectif professionnel",
//       emoji: "🎯",
//       color: "text-green-600 dark:text-green-400",
//       bgColor: "bg-green-500/10 dark:bg-green-400/10",
//       content: (
//         <>
//           Je suis actuellement à la recherche d'une mission en <span className="text-accent font-medium">freelance ou en hybride</span>, afin de continuer à me former tout en mettant mes compétences au service de vos projets. Je reste néanmoins ouvert à d'autres formes de collaboration selon vos besoins.
//         </>
//       )
//     },
//     {
//       icon: <Monitor size={18} />,
//       title: "Mes ressources",
//       emoji: "💻",
//       color: "text-purple-600 dark:text-purple-400",
//       bgColor: "bg-purple-500/10 dark:bg-purple-400/10",
//       content: (
//         <>
//           Je dispose de tout l'équipement nécessaire pour travailler efficacement, que ce soit à <span className="text-accent font-medium">distance ou en hybride</span>. Je suis ainsi opérationnel rapidement et capable de m'intégrer facilement à vos outils et méthodes de travail.
//         </>
//       )
//     },
//     {
//       icon: <Wallet size={18} />,
//       title: "Prétentions salariales",
//       emoji: "💰",
//       color: "text-amber-600 dark:text-amber-400",
//       bgColor: "bg-amber-500/10 dark:bg-amber-400/10",
//       content: (
//         <div className="space-y-1.5">
//           <div className="flex items-start gap-2">
//             <span className="text-accent font-semibold text-xs sm:text-sm whitespace-nowrap">En CDI :</span>
//             <span className="text-xs sm:text-sm">salaire mensuel à négocier selon les responsabilités et la charge de travail.</span>
//           </div>
//           <div className="flex items-start gap-2">
//             <span className="text-accent font-semibold text-xs sm:text-sm whitespace-nowrap">Freelance/CDD :</span>
//             <span className="text-xs sm:text-sm">flexible, tarif adapté à la complexité et à la durée du projet.</span>
//           </div>
//         </div>
//       )
//     }
//   ];

//   return (
//     <section className="py-20 w-full">
//       <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">

//         {/* Row 1: About Text + Pinned Repo */}
//         <ItemLayout
//           className="col-span-full lg:col-span-8 flex flex-col items-start glass-effect custom-btn h-full"
//         >
//           <h2 className="text-xl md:text-2xl text-left w-full capitalize mb-5 font-bold text-foreground">
//             Informations Personnelles
//           </h2>
          
//           <div className="w-full space-y-4 flex-grow">
//             {infoSections.map((section, index) => (
//               <div 
//                 key={index}
//                 className="group relative p-3 sm:p-4 rounded-xl bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 hover:border-white/20 transition-all duration-300"
//               >
//                 {/* Section Header */}
//                 <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
//                   <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${section.bgColor} ${section.color} flex items-center justify-center border border-current/20`}>
//                     {section.icon}
//                   </div>
//                   <h3 className={`text-sm sm:text-base font-bold ${section.color} flex items-center gap-2`}>
//                     <span className="text-lg sm:text-xl">{section.emoji}</span>
//                     <span>{section.title}</span>
//                   </h3>
//                 </div>
                
//                 {/* Section Content */}
//                 <div className="pl-10 sm:pl-12 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
//                   {section.content}
//                 </div>

//                 {/* Decorative Line */}
//                 <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-full ${section.bgColor.replace('/10', '/30')} opacity-0 group-hover:opacity-100 transition-opacity`} />
//               </div>
//             ))}
//           </div>
//         </ItemLayout>

//         <ItemLayout
//           className="col-span-full lg:col-span-4 flex flex-col glass-effect custom-btn h-full min-h-[200px]"
//         >
//           <div className="w-full h-full flex flex-col">
//             <GitHubPinnedRepoCard
//               data={mockPinnedRepoData}
//               theme={{
//                 titleColor: '#0066cc',
//                 textColor: '#000000',
//                 iconColor: '#0066cc',
//                 hideBorder: true,
//               }}
//             />
//           </div>
//         </ItemLayout>

//         {/* Row 2: Education & Experience */}
//         <EducationCard />
//         <ExperienceCard />

//         {/* Row 3: Technologies */}
//         <ItemLayout className="col-span-full">
//           <div className="w-full">
//             <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent font-bold">
//               Technologies & Tools
//             </h3>
//             <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
//               {svgData.map((s) => (
//                 <div
//                   key={s.id}
//                   className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
//                   bg-white/10 dark:bg-black/10 
//                   border border-white/20 dark:border-accent/20 
//                   backdrop-blur-md 
//                   hover:border-accent/50 
//                   hover:bg-white/20 dark:hover:bg-black/20 
//                   transition-all duration-300 hover:scale-105 group"
//                 >
//                   <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <SvgDisplay data={s} />
//                     </div>
//                   </div>
//                   <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
//                     {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </ItemLayout>

//       </div>
//     </section>
//   );
// };

// export default AboutDetails;





























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
          className="col-span-full lg:col-span-8 !p-0 glass-effects overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
        >
          <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#0F172A66] to-[#1E3A8A33] backdrop-blur-md">
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
          className="col-span-full lg:col-span-4 !p-0 glass-effects overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]"
        >
          <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0F172A66] to-[#1E3A8A33] backdrop-blur-md">
          {/* <div className="flex flex-col p-2 xs:p-3 rounded-lg 
                  bg-white/10 dark:bg-black/10 
                  border border-white/20 dark:border-accent/20 
                  backdrop-blur-md 
                  transition-all duration-300 hover:scale-105 group"> */}
            {/* Header */}
            <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/10 border border-purple-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
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













// // components/AboutDetails.tsx
// import { svgData } from "@/app/data/svgData";
// import SvgDisplay from "../SvgDisplay";
// import ItemLayout from "./ItemLayout";
// import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";
// import EducationCard from "../cards/EducationCard";
// import ExperienceCard from "../cards/ExperienceCard";
// import { User, Target, Monitor, Wallet } from 'lucide-react';
// import { useEffect } from 'react';

// interface InfoSection {
//   icon: React.ReactNode;
//   title: string;
//   emoji: string;
//   color: string;
//   bgColor: string;
//   borderColor: string;
//   content: React.ReactNode;
// }

// const AboutDetails: React.FC = () => {
//   useEffect(() => {
//     // Dynamically import AOS only on client side
//     const initAOS = async () => {
//       const AOS = (await import('aos')).default;
//       AOS.init({
//         duration: 800,
//         easing: 'ease-out-cubic',
//         once: true,
//         offset: 50,
//       });
//     };
//     initAOS();
//   }, []);

//   const infoSections: InfoSection[] = [
//     {
//       icon: <User size={16} />,
//       title: "À propos de moi",
//       emoji: "👨‍💻",
//       color: "text-blue-600 dark:text-blue-400",
//       bgColor: "bg-blue-500/10 dark:bg-blue-400/10",
//       borderColor: "border-blue-500/20 dark:border-blue-400/20",
//       content: (
//         <>
//           Bonjour, je suis <strong className="text-foreground">Lionot RAZAFIMANIDIMBY</strong>, étudiant en <span className="text-accent font-medium">5ème année d'informatique</span>, actuellement en préparation de mon diplôme d'ingénieur. Je me considère comme un développeur junior avec une solide base théorique et pratique acquise à travers divers projets scolaires et personnels.
//         </>
//       )
//     },
//     {
//       icon: <Target size={16} />,
//       title: "Objectif professionnel",
//       emoji: "🎯",
//       color: "text-green-600 dark:text-green-400",
//       bgColor: "bg-green-500/10 dark:bg-green-400/10",
//       borderColor: "border-green-500/20 dark:border-green-400/20",
//       content: (
//         <>
//           Je recherche une mission en <span className="text-accent font-medium">freelance ou hybride</span>, pour continuer à me former tout en mettant mes compétences au service de vos projets. Ouvert à d'autres collaborations.
//         </>
//       )
//     },
//     {
//       icon: <Monitor size={16} />,
//       title: "Mes ressources",
//       emoji: "💻",
//       color: "text-purple-600 dark:text-purple-400",
//       bgColor: "bg-purple-500/10 dark:bg-purple-400/10",
//       borderColor: "border-purple-500/20 dark:border-purple-400/20",
//       content: (
//         <>
//           Équipement complet pour travail <span className="text-accent font-medium">distance ou hybride</span>. Opérationnel rapidement, intégration facile à vos outils et méthodes.
//         </>
//       )
//     },
//     {
//       icon: <Wallet size={16} />,
//       title: "Prétentions salariales",
//       emoji: "💰",
//       color: "text-amber-600 dark:text-amber-400",
//       bgColor: "bg-amber-500/10 dark:bg-amber-400/10",
//       borderColor: "border-amber-500/20 dark:border-amber-400/20",
//       content: (
//         <div className="space-y-1">
//           <div className="flex items-start gap-1.5">
//             <span className="text-accent font-semibold text-[11px] sm:text-xs whitespace-nowrap">CDI:</span>
//             <span className="text-[11px] sm:text-xs">À négocier selon responsabilités.</span>
//           </div>
//           <div className="flex items-start gap-1.5">
//             <span className="text-accent font-semibold text-[11px] sm:text-xs whitespace-nowrap">Free/CDD:</span>
//             <span className="text-[11px] sm:text-xs">Tarif flexible selon complexité.</span>
//           </div>
//         </div>
//       )
//     }
//   ];

//   return (
//     <section className="py-20 w-full">
//       <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">

//         {/* Row 1: About Text - Scrollable */}
//         <div 
//           className="col-span-full lg:col-span-8"
//           data-aos="fade-right"
//           data-aos-delay="100"
//         >
//           <ItemLayout className="!p-0 glass-effect overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]">
//             <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#1E3A8A22] via-[#0F172A66] to-[#1E3A8A33] backdrop-blur-md">
//               {/* Header */}
//               <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent flex-shrink-0">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-accent/20 text-accent shadow-lg shadow-accent/10 border border-accent/20">
//                     <User size={20} className="sm:w-5 sm:h-5" />
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h2 className="text-sm sm:text-base font-bold text-foreground truncate">
//                       Informations Personnelles
//                     </h2>
//                     <p className="text-[10px] sm:text-xs text-muted-foreground">
//                       À propos de moi
//                     </p>
//                   </div>
//                   <div className="flex flex-col items-end text-right flex-shrink-0">
//                     <span className="text-xl font-bold text-accent">4</span>
//                     <span className="text-[10px] text-muted-foreground uppercase">Sections</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Scrollable */}
//               <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent p-3 sm:p-4">
//                 <div className="space-y-2.5 sm:space-y-3">
//                   {infoSections.map((section, index) => (
//                     <div 
//                       key={index}
//                       className={`group p-2.5 sm:p-3 rounded-lg bg-white/5 border ${section.borderColor} hover:bg-white/10 transition-all duration-300`}
//                       data-aos="fade-up"
//                       data-aos-delay={200 + (index * 100)}
//                     >
//                       <div className="flex items-center gap-2 mb-2">
//                         <div className={`flex-shrink-0 w-7 h-7 rounded-md ${section.bgColor} ${section.color} flex items-center justify-center text-xs`}>
//                           {section.icon}
//                         </div>
//                         <h3 className={`text-xs sm:text-sm font-bold ${section.color} flex items-center gap-1.5`}>
//                           <span>{section.emoji}</span>
//                           <span className="truncate">{section.title}</span>
//                         </h3>
//                       </div>
//                       <div className="pl-9 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
//                         {section.content}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Footer */}
//               <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0">
//                 <div className="flex items-center justify-between text-[10px] sm:text-xs">
//                   <div className="flex items-center gap-3">
//                     <span className="flex items-center gap-1.5 text-muted-foreground">
//                       <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
//                       Disponible
//                     </span>
//                     <span className="text-muted-foreground/60">•</span>
//                     <span className="text-muted-foreground">Freelance & CDI</span>
//                   </div>
//                   <span className="text-accent font-medium">5ème année</span>
//                 </div>
//               </div>
//             </div>
//           </ItemLayout>
//         </div>

//         {/* Pinned Repo Card */}
//         <div 
//           className="col-span-full lg:col-span-8 lg:col-start-9 lg:row-start-1"
//           data-aos="fade-left"
//           data-aos-delay="200"
//         >
//           <ItemLayout className="!p-0 glass-effect overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]">
//             <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#0F172A66] to-[#1E3A8A33] backdrop-blur-md">
//               <div className="p-3 sm:p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/20 via-purple-500/10 to-transparent flex-shrink-0">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/10 border border-purple-500/20">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
//                       <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
//                     </svg>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-sm sm:text-base font-bold text-foreground truncate">Projet en Vedette</h3>
//                     <p className="text-[10px] sm:text-xs text-muted-foreground">GitHub Repository</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-1 p-3 sm:p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
//                 <div className="h-full flex flex-col" data-aos="zoom-in" data-aos-delay="400">
//                   <GitHubPinnedRepoCard
//                     data={{
//                       username: 'LionotKennedy',
//                       repo: 'portfolio',
//                       description: 'Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS',
//                       language: 'TypeScript',
//                       stars: 12,
//                       forks: 3,
//                       url: 'https://github.com/LionotKennedy/portfolio',
//                     }}
//                     theme={{
//                       titleColor: '#a855f7',
//                       textColor: '#ffffff',
//                       iconColor: '#a855f7',
//                       hideBorder: true,
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="p-3 border-t border-white/10 bg-white/5 flex-shrink-0">
//                 <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
//                   <span className="flex items-center gap-1.5">
//                     <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
//                     TypeScript
//                   </span>
//                   <span>⭐ 12 stars</span>
//                 </div>
//               </div>
//             </div>
//           </ItemLayout>
//         </div>

//         {/* Row 2: Education & Experience */}
//         <div 
//           className="col-span-full lg:col-span-6"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           <EducationCard />
//         </div>
//         <div 
//           className="col-span-full lg:col-span-6"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <ExperienceCard />
//         </div>

//         {/* Row 3: Technologies */}
//         <div 
//           className="col-span-full"
//           data-aos="fade-up"
//           data-aos-delay="500"
//         >
//           <ItemLayout className="glass-effect">
//             <div className="w-full p-4 sm:p-6">
//               <h3 
//                 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent font-bold"
//                 data-aos="fade-right"
//                 data-aos-delay="600"
//               >
//                 Technologies & Tools
//               </h3>
//               <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
//                 {svgData.map((s, index) => (
//                   <div
//                     key={s.id}
//                     className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
//                     bg-white/10 dark:bg-black/10 
//                     border border-white/20 dark:border-accent/20 
//                     backdrop-blur-md 
//                     hover:border-accent/50 
//                     hover:bg-white/20 dark:hover:bg-black/20 
//                     transition-all duration-300 hover:scale-105 group"
//                     data-aos="zoom-in"
//                     data-aos-delay={700 + (index * 50)}
//                   >
//                     <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <SvgDisplay data={s} />
//                       </div>
//                     </div>
//                     <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
//                       {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ItemLayout>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutDetails;