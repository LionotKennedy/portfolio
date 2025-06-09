"use client"
import React from "react";
import { BtnList } from "@/app/data/data";
import NavButton from "./NavButton";
import "./navbutton.css"

const Navigation: React.FC = () => {
  const angleIncrement = 360 / BtnList.length;
  //   const size = useScreenSize();
  //   const size = 80;
  //   const isLarge = size >= 1024;
  //   const isMedium = size >= 768;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group">
        {BtnList.map((btn, index) => {
          //   const angleRad = (index * angleIncrement * Math.PI) / 180;
          //   const radius = isLarge
          //     ? "calc(20vw - 1rem)"
          //     : isMedium
          //     ? "calc(30vw - 1rem)"
          //     : "calc(40vw - 1rem)";
          //   const x = `calc(${radius}*${Math.cos(angleRad)})`;
          //   const y = `calc(${radius}*${Math.sin(angleRad)})`;
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;

           return <NavButton key={btn.label} x={x} y={y} {...btn} />
        })}
      </div>
    </div>
  );
};

export default Navigation;
