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

import imageSVG31 from "../../public/icons/Notion-Light.svg";
import imageSVG32 from "../../public/icons/Npm-Light.svg";
import imageSVG33 from "../../public/icons/PHP-Light.svg";
import imageSVG34 from "../../public/icons/PostgreSQL-Light.svg";
import imageSVG35 from "../../public/icons/Python-Light.svg";
import imageSVG36 from "../../public/icons/React-Dark.svg";
import imageSVG37 from "../../public/icons/Sass.svg";
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
    id: "top-langs",
    type: "single",
    src: imageSVG,
    alt: "Top languages",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "github-stats",
    type: "single",
    src: imageSVG2,
    alt: "GitHub stats",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "streak",
    type: "single",
    src: imageSVG3,
    alt: "GitHub streak",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG4,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG5,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG6,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG7,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG8,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG9,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG10,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "top-langs",
    type: "single",
    src: imageSVG11,
    alt: "Top languages",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "github-stats",
    type: "single",
    src: imageSVG12,
    alt: "GitHub stats",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "streak",
    type: "single",
    src: imageSVG13,
    alt: "GitHub streak",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG14,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG15,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG16,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG17,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG18,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG19,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG20,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "top-langs",
    type: "single",
    src: imageSVG21,
    alt: "Top languages",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "github-stats",
    type: "single",
    src: imageSVG22,
    alt: "GitHub stats",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "streak",
    type: "single",
    src: imageSVG23,
    alt: "GitHub streak",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG24,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG25,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG26,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG27,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG28,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG29,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG30,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "top-langs",
    type: "single",
    src: imageSVG31,
    alt: "Top languages",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "github-stats",
    type: "single",
    src: imageSVG32,
    alt: "GitHub stats",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "streak",
    type: "single",
    src: imageSVG33,
    alt: "GitHub streak",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG34,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG35,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG36,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG37,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG38,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG39,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },
  {
    id: "pinned-repo",
    type: "single",
    src: imageSVG40,
    alt: "Pinned repo",
    cols: "col-span-full sm:col-span-6 md:col-span-1 !p-0",
  },

  
//   {
//     id: "pinned-repo",
//     type: "single",
//     src: imageSVG2,
//     alt: "Pinned repo",
//     cols: "col-span-full md:col-span-6 !p-0",
//   },
];
