"use client";
// import { motion } from "framer-motion";
import clsx from "clsx";
import type React from "react";

interface ItemLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ItemLayout: React.FC<ItemLayoutProps> = ({ children, className }) => {
  return (
 
    <div
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ItemLayout;
