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























// components/AboutDetails.tsx
import { svgData } from "@/app/data/svgData";
import SvgDisplay from "../SvgDisplay";
import ItemLayout from "./ItemLayout";
// import Link from "next/link";
import GitHubTopLangsCard from "../github-stats/GitHubTopLangsCard";
import GitHubStatsCard from "../github-stats/GitHubStatsCard";
import GitHubStreakCard from "../github-stats/GitHubStreakCard";
import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";

// Données statiques pour remplacer les API calls
const mockStatsData = {
  username: 'LionotKennedy',
  name: 'Lionot Kennedy',
  repos: 24,
  stars: 42,
  followers: 12,
  following: 8,
  totalCommits: 156,
  contributions: 1103,
};

const mockTopLangsData = [
  { language: 'TypeScript', percentage: 38, color: '#3178c6' },
  { language: 'JavaScript', percentage: 25, color: '#f1e05a' },
  { language: 'Python', percentage: 18, color: '#3572A5' },
  { language: 'CSS', percentage: 12, color: '#563d7c' },
  { language: 'HTML', percentage: 7, color: '#e34c26' },
  { language: 'Java', percentage: 5, color: '#b07219' },
];

const mockStreakData = {
  currentStreak: 15,
  longestStreak: 42,
  totalContributions: 1103,
  contributionsThisYear: 256,
  todayContributions: 12,
};

const mockPinnedRepoData = {
  username: 'LionotKennedy',
  repo: 'portfolio',
  description: 'Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS',
  language: 'TypeScript',
  stars: 12,
  forks: 3,
  url: 'https://github.com/LionotKennedy/portfolio',
};

const AboutDetails: React.FC = () => {
  return (
    <>
      <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">
          <ItemLayout
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
          
          {/* <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
            }
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              0+ <sub className="font-semibold text-base">clients</sub>
            </p>
          </ItemLayout>
          
          <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
            }
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              4+ <sub className="font-semibold text-base">years of experience</sub>
            </p>
          </ItemLayout> */}
          
          {/* Top Languages Card - Version Offline */}
          <ItemLayout
            className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}
          >
            <div className="w-full h-full">
              <GitHubTopLangsCard
                data={mockTopLangsData}
                theme={{
                  titleColor: '#0066cc',
                  textColor: '#000000',
                  iconColor: '#FEFE5B',
                  background: '#1E3A8A33',
                  hideBorder: true,
                }}
              />
            </div>
          </ItemLayout>
          
          {/* GitHub Stats Card - Version Offline */}
          <ItemLayout className={"col-span-full md:col-span-8 !p-0 glass-effect"}>
            <div className="w-full h-full">
              <GitHubStatsCard
                data={mockStatsData}
                theme={{
                  titleColor: '#0066cc',
                  textColor: '#000000',
                  iconColor: '#FEFE5B',
                  hideBorder: true,
                }}
              />
            </div>
          </ItemLayout>
          
          {/* Technologies & Tools Section */}
          <ItemLayout className={"col-span-full"}>
            <div className="w-full">
              <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
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

          {/* GitHub Streak Card - Version Offline */}
          <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
            <div className="w-full h-full">
              <GitHubStreakCard
                data={mockStreakData}
                theme={{
                  background: '#EB545400',
                  ringColor: '#FEFE5B',
                  labelColor: '#FEFE5B',
                  hideBorder: true,
                }}
              />
            </div>
          </ItemLayout>
          
          {/* GitHub Pinned Repo Card - Version Offline */}
          <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
            <div className="w-full h-full">
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
        </div>
      </section>
    </>
  );
};

export default AboutDetails;

