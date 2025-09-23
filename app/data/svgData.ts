import imageSVG from "../../public/icons/HTML.svg";
import imageSVG2 from "../../public/icons/CSS.svg";
import imageSVG3 from "../../public/icons/TailwindCSS-Light.svg";
import imageSVG4 from "../../public/icons/JavaScript.svg";
import imageSVG5 from "../../public/icons/Sass.svg";
import imageSVG6 from "../../public/icons/C.svg";
import imageSVG7 from "../../public/icons/CPP.svg";
import imageSVG8 from "../../public/icons/CS.svg";
import imageSVG9 from "../../public/icons/Java-Light.svg";
import imageSVG10 from "../../public/icons/Python-Light.svg";
// Fisrt
import imageSVG11 from "../../public/icons/Anaconda-Light.svg";
import imageSVG12 from "../../public/icons/AndroidStudio-Light.svg";
import imageSVG13 from "../../public/icons/Bash-Light.svg";
import imageSVG14 from "../../public/icons/Bootstrap.svg";
import imageSVG15 from "../../public/icons/Dart-Light.svg";
import imageSVG16 from "../../public/icons/Django.svg";
import imageSVG17 from "../../public/icons/Eclipse-Light.svg";
import imageSVG18 from "../../public/icons/Electron.svg";
import imageSVG19 from "../../public/icons/ExpressJS-Light.svg";
import imageSVG20 from "../../public/icons/FastAPI.svg";
// Second
import imageSVG21 from "../../public/icons/Flutter-Light.svg";
import imageSVG22 from "../../public/icons/Git.svg";
import imageSVG23 from "../../public/icons/Github-Light.svg";
import imageSVG24 from "../../public/icons/GraphQL-Light.svg";
import imageSVG25 from "../../public/icons/Hibernate-Light.svg";
import imageSVG26 from "../../public/icons/Laravel-Light.svg";
import imageSVG27 from "../../public/icons/MongoDB.svg";
import imageSVG28 from "../../public/icons/MySQL-Light.svg";
import imageSVG29 from "../../public/icons/NextJS-Light.svg";
import imageSVG30 from "../../public/icons/NodeJS-Light.svg";

// import imageSVG31 from "../../public/icons/Notion-Light.svg";
import imageSVG32 from "../../public/icons/Npm-Light.svg";
import imageSVG33 from "../../public/icons/PHP-Light.svg";
import imageSVG34 from "../../public/icons/PostgreSQL-Light.svg";
// import imageSVG35 from "../../public/icons/Python-Light.svg";
import imageSVG36 from "../../public/icons/React-Dark.svg";
import imageSVG37 from "../../public/icons/VSCode-Light.svg";
import imageSVG38 from "../../public/icons/Vite-Light.svg";
import imageSVG39 from "../../public/icons/TypeScript.svg";
import imageSVG40 from "../../public/icons/Wordpress.svg";

export type SvgPack = {
  id: string;
  type: "single" | "multi"; // 1 SVG ou grille d’icônes
  src: string | string[]; // URL locale (public/) ou distante
  alt: string;
  cols: string; // classes Tailwind grid
  link?: string; // optionnel : wrapper NextLink
  target?: "_blank";
};

export const svgData: SvgPack[] = [
  {
    id: "HTML",
    type: "single",
    src: imageSVG,
    alt: "HTML",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "CSS",
    type: "single",
    src: imageSVG2,
    alt: "CSS",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Javascipt",
    type: "single",
    src: imageSVG4,
    alt: "Javascipt",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Bootstrap",
    type: "single",
    src: imageSVG14,
    alt: "Bootstrap",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Tailwind",
    type: "single",
    src: imageSVG3,
    alt: "Tailwind",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "SASS",
    type: "single",
    src: imageSVG5,
    alt: "SASS",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "C",
    type: "single",
    src: imageSVG6,
    alt: "C",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "C++",
    type: "single",
    src: imageSVG7,
    alt: "C++",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "C#",
    type: "single",
    src: imageSVG8,
    alt: "C#",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "JAVA",
    type: "single",
    src: imageSVG9,
    alt: "JAVA",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Python",
    type: "single",
    src: imageSVG10,
    alt: "Python",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "PHP",
    type: "single",
    src: imageSVG33,
    alt: "PHP",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Dart",
    type: "single",
    src: imageSVG15,
    alt: "Dart",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "NodeJS",
    type: "single",
    src: imageSVG30,
    alt: "NodeJS",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "ExpressJS",
    type: "single",
    src: imageSVG19,
    alt: "ExpressJS",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "ReactJS",
    type: "single",
    src: imageSVG36,
    alt: "ReactJS",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Typescript",
    type: "single",
    src: imageSVG39,
    alt: "Typescript",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "NextJS",
    type: "single",
    src: imageSVG29,
    alt: "NextJS",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "ElectronJS",
    type: "single",
    src: imageSVG18,
    alt: "ElectronJS",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Flutter",
    type: "single",
    src: imageSVG21,
    alt: "Flutter",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Laravel",
    type: "single",
    src: imageSVG26,
    alt: "Laravel",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "FastAPI",
    type: "single",
    src: imageSVG20,
    alt: "FastAPI",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Django",
    type: "single",
    src: imageSVG16,
    alt: "Django",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Hibernate",
    type: "single",
    src: imageSVG25,
    alt: "Hibernate",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Wordpress",
    type: "single",
    src: imageSVG40,
    alt: "Wordpress",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Vite",
    type: "single",
    src: imageSVG38,
    alt: "Vite",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "GraphQL",
    type: "single",
    src: imageSVG24,
    alt: "GraphQL",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "MongoDB",
    type: "single",
    src: imageSVG27,
    alt: "MongoDB",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "PostgreSQL",
    type: "single",
    src: imageSVG34,
    alt: "PostgreSQL",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "MySQL",
    type: "single",
    src: imageSVG28,
    alt: "MySQL",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "VSCode",
    type: "single",
    src: imageSVG37,
    alt: "VSCode",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Anaconda",
    type: "single",
    src: imageSVG11,
    alt: "Anaconda",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Android",
    type: "single",
    src: imageSVG12,
    alt: "Android",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Eclipse",
    type: "single",
    src: imageSVG17,
    alt: "Eclipse",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "GIT",
    type: "single",
    src: imageSVG22,
    alt: "GIT",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Github",
    type: "single",
    src: imageSVG23,
    alt: "Github",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "npm",
    type: "single",
    src: imageSVG32,
    alt: "npm",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "Bash",
    type: "single",
    src: imageSVG13,
    alt: "Bash",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
];
