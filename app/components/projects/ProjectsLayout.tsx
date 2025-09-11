"use client";
import Link from "next/link";
import type React from "react";
// import { motion } from "framer-motion";

interface ProjectLayoutProps {
  name: string;
  description: string;
  date: string;
  demoLink: string;
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
// const ProjectLink = motion(Link);
const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  name,
  description,
  date,
  demoLink,
}) => {
  return (
    <>
      <Link
        // variants={item}
        href={demoLink}
        target={"_blank"}
        className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6
        glass-effect custom-btn"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground text-content-change">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{description}</p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted sm:text-foreground text-content-change">
          {new Date(date).toDateString()}
        </p>
      </Link>
    </>
  );
};

export default ProjectLayout;
