
// "use client";
// import React from "react";
// import { BtnList } from "@/app/data/data";
// import NavButton from "./NavButton";
// import "./navbutton.css";
// import ResponsiveComponent from "../ResponsiveComponent";
// import useScreenSize from "../hooks/useScreenSize";
// import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const Navigation: React.FC = () => {
//   const angleIncrement = 360 / BtnList.length;
//   const size = useScreenSize();
//   const isLarge = 1024;
//   const isMedium = 768;

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Durée des animations en millisecondes
//       //   once: true,    // Pour que l'animation se joue une seule fois
//     });
//   }, []);

//   return (
//     <div className="w-full fixed h-screen flex items-center justify-center">
//       <ResponsiveComponent>
//         {({ size }) => {
//           return size.width >= 480 ? (
//             <motion.div
//               // <div
//               variants={container}
//               initial="hidden"
//               animate="show"
//               className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"

//             >
//               {BtnList.map((btn, index) => {
//                 const angleRad = (index * angleIncrement * Math.PI) / 180;
//                 const radius = isLarge
//                   ? "calc(20vw - 1rem)"
//                   : isMedium
//                     ? "calc(30vw - 1rem)"
//                     : "calc(40vw - 1rem)";
//                 const x = `calc(${radius}*${Math.cos(angleRad)})`;
//                 const y = `calc(${radius}*${Math.sin(angleRad)})`;
//                 return <NavButton key={btn.label} x={x} y={y} {...btn} />;
//               })}
//             </motion.div>
//           ) : (
//             <>
//               <motion.div
//                 // <div
//                 variants={container}
//                 initial="hidden"
//                 animate="show"
//                 //  data-aos="slide-down"
//                 data-aos="slide-right"
//                 className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative  group xs:hidden"
//               >
//                 {BtnList.slice(0, BtnList.length / 2).map((btn) => {
//                   return <NavButton key={btn.label} x={0} y={0} {...btn} />;
//                 })}
//               </motion.div>
//               <motion.div
//                 variants={container}
//                 initial="hidden"
//                 animate="show"
//                 data-aos="slide-left"
//                 //  data-aos="slide-down"
//                 className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
//               >
//                 {BtnList.slice(BtnList.length / 2, BtnList.length).map(
//                   (btn) => {
//                     return (
//                       <NavButton
//                         key={btn.label}
//                         x={0}
//                         y={0}
//                         {...btn}
//                         labelDirection="left"
//                       />
//                     );
//                   }
//                 )}
//               </motion.div>
//             </>
//           );
//         }}
//       </ResponsiveComponent>
//     </div>
//   );
// };

// export default Navigation;



































































// // app/components/navigation/index.tsx
// "use client"
// import React from "react"
// import { useTranslations } from 'next-intl';
// import NavButton from "./NavButton";
// import "./navbutton.css";
// import ResponsiveComponent from "../ResponsiveComponent";
// import useScreenSize from "../hooks/useScreenSize";
// import { motion } from "framer-motion";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const Navigation: React.FC = () => {
//   const t = useTranslations('Navigation');
//   const size = useScreenSize();
//   const angleIncrement = 360 / 8;

//   // Définition des boutons - MODIFIÉ pour resume
//   const navButtons = [
//     { label: 'Navigation.home', link: '/', icon: 'home', newTab: false },
//     { label: 'Navigation.about', link: '/about', icon: 'about', newTab: false },
//     { label: 'Navigation.projects', link: '/projects', icon: 'projects', newTab: false },
//     { label: 'Navigation.contact', link: '/contact', icon: 'contact', newTab: false },
//     { label: 'Navigation.github', link: 'https://github.com/LionotKennedy', icon: 'github', newTab: true },
//     { label: 'Navigation.linkedin', link: 'https://www.linkedin.com/in/lionot-razafimandimby-244073266/', icon: 'linkedin', newTab: true },
//     { label: 'Navigation.twitter', link: 'https://x.com/RLionot', icon: 'twitter', newTab: true },
//     // ← MODIFIÉ: link vide car géré par handleDownload, mais gardé pour accessibility
//     { label: 'Navigation.resume', link: '#', icon: 'resume', newTab: false, isDownload: true },
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="w-full fixed h-screen flex items-center justify-center">
//       <ResponsiveComponent>
//         {({ size }) => {
//           return size.width >= 480 ? (
//             <motion.div
//               variants={container}
//               initial="hidden"
//               animate="show"
//               className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
//             >
//               {navButtons.map((btn, index) => {
//                 const angleRad = (index * angleIncrement * Math.PI) / 180;
//                 const radius = size.width >= 1024
//                   ? "calc(20vw - 1rem)"
//                   : size.width >= 768
//                     ? "calc(30vw - 1rem)"
//                     : "calc(40vw - 1rem)";
//                 const x = `calc(${radius}*${Math.cos(angleRad)})`;
//                 const y = `calc(${radius}*${Math.sin(angleRad)})`;
                
//                 return (
//                   <NavButton 
//                     key={btn.label} 
//                     x={x} 
//                     y={y} 
//                     {...btn} 
//                   />
//                 );
//               })}
//             </motion.div>
//           ) : (
//             <>
//               <motion.div
//                 variants={container}
//                 initial="hidden"
//                 animate="show"
//                 data-aos="slide-right"
//                 className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative group xs:hidden"
//               >
//                 {navButtons.slice(0, 4).map((btn) => (
//                   <NavButton key={btn.label} x={0} y={0} {...btn} />
//                 ))}
//               </motion.div>
//               <motion.div
//                 variants={container}
//                 initial="hidden"
//                 animate="show"
//                 data-aos="slide-left"
//                 className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
//               >
//                 {navButtons.slice(4, 8).map((btn) => (
//                   <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left" />
//                 ))}
//               </motion.div>
//             </>
//           );
//         }}
//       </ResponsiveComponent>
//     </div>
//   );
// };

// export default Navigation;