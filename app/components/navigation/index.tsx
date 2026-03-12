// app/components/navigation/index.tsx
"use client"
import React from "react"
import { useTranslations } from 'next-intl';
import NavButton from "./NavButton";
import "./navbutton.css";
import ResponsiveComponent from "../ResponsiveComponent";
import useScreenSize from "../hooks/useScreenSize";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation: React.FC = () => {
  const t = useTranslations('Navigation');
  const size = useScreenSize();
  const angleIncrement = 360 / 8; // 8 boutons

  // Définition des boutons avec clés de traduction
  const navButtons = [
    { label: 'Navigation.home', link: '/', icon: 'home', newTab: false },
    { label: 'Navigation.about', link: '/about', icon: 'about', newTab: false },
    { label: 'Navigation.projects', link: '/projects', icon: 'projects', newTab: false },
    { label: 'Navigation.contact', link: '/contact', icon: 'contact', newTab: false },
    { label: 'Navigation.github', link: 'https://github.com/LionotKennedy', icon: 'github', newTab: true },
    { label: 'Navigation.linkedin', link: 'https://www.linkedin.com/in/lionot-razafimandimby-244073266/', icon: 'linkedin', newTab: true },
    { label: 'Navigation.twitter', link: 'https://x.com/RLionot', icon: 'twitter', newTab: true },
    { label: 'Navigation.resume', link: '/resume.pdf', icon: 'resume', newTab: true },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size.width >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {navButtons.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = size.width >= 1024
                  ? "calc(20vw - 1rem)"
                  : size.width >= 768
                    ? "calc(30vw - 1rem)"
                    : "calc(40vw - 1rem)";
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return (
                  <NavButton
                    key={btn.label}
                    x={x}
                    y={y}
                    {...btn}
                  />
                );
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                data-aos="slide-right"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 item-start xs:items-center justify-center relative group xs:hidden"
              >
                {navButtons.slice(0, 4).map((btn) => (
                  <NavButton key={btn.label} x={0} y={0} {...btn} />
                ))}
              </motion.div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                data-aos="slide-left"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
              >
                {navButtons.slice(4, 8).map((btn) => (
                  <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left" />
                ))}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
