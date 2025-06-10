import React from "react";
import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import Link from "next/link";
import clsx from "clsx";
// import { motion } from "framer-motion";

type IconType =
  | "home"
  | "about"
  | "projects"
  | "contact"
  | "github"
  | "linkedin"
  | "twitter"
  | "resume";

interface NavButtonProps {
  x: string | number;
  y: string | number;
  label: string;
  link: string;
  icon: IconType;
  newTab?: boolean;
  labelDirection?: "left" | "right";
}

const getIcon = (icon: IconType): JSX.Element => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};
// const NavLink = motion(Link);

const NavButton: React.FC<NavButtonProps> = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full flex items-center justify-center custom-bg
       bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] custom-btn"
        aria-label={label}
        // name={label}
      >
        <span className="relative peer w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
          {getIcon(icon)}
          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span
            className={clsx(
              "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
              labelDirection === "left" ? "right-full left-auto" : ""
            )}
          >
            {label}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
