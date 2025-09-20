"use client";
// import Link from "next/link";
import Image from "next/image";
// import TestSVG from "../../public/icons/Laravel-Light.svg"

type Props = { data: import("../data/svgData").SvgPack };


// export default function SvgDisplay() {
const SvgDisplay: React.FC<Props> = ({ data }) => {
  /* -------- multi-icons (skillicons) -------- */


  /* -------- single SVG -------- */
  const content = (
    // <Image
    // src={data.src as string }
    //   alt={data.alt}
    //   width={800}
    //   height={400}
    //   className="w-full h-auto"
    //   loading="lazy"
    // />
    <Image
      src={data.src as string}
      alt={data.alt}
      width={64}
      height={64}
      className="w-full h-auto object-contain"
      loading="lazy"
      sizes="(max-width: 640px) 40px, (max-width: 768px) 50px, 64px"
    />
  );

  return (
    <>
      {/* <Link href={data.link} target={data.target} className="block w-full"> */}
      <div className="inline w-full">
        {content}
      </div>
      {/* </Link> */}
    </>
  )
};

export default SvgDisplay;







// "use client";
// import Image from "next/image";

// type Props = { data: import("../data/svgData").SvgPack };

// const SvgDisplay: React.FC<Props> = ({ data }) => {
//   return (
//     <div className="inline-block w-full h-full flex items-center justify-center">
//       <Image
//         src={data.src as string}
//         alt={data.alt}
//         width={40} // Taille de base réduite
//         height={40}
//         className="w-3/4 h-3/4 object-contain max-w-[50px] max-h-[50px]"
//         loading="lazy"
//       />
//     </div>
//   );
// };

// export default SvgDisplay;













// "use client";
// import Image from "next/image";
// import Link from "next/link";

// type Props = {
//   data: import("../data/svgData").SvgPack;
// };

// const SvgDisplay: React.FC<Props> = ({ data }) => {
//   const content = (
//     <Image
//       src={data.src as string}
//       alt={data.alt}
//       width={100}
//       height={100}
//       className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 hover:scale-110"
//       loading="lazy"
//     />
//   );

//   return (
//     <div className={`flex justify-center items-center p-2 sm:p-4 ${data.cols}`}>
//       {data.link ? (
//         <Link
//           href={data.link}
//           target={data.target}
//           className="block w-full h-full flex justify-center items-center"
//         >
//           {content}
//         </Link>
//       ) : (
//         content
//       )}
//     </div>
//   );
// };

// export default SvgDisplay;






































// "use client";
// import Image from "next/image";
// import { SvgPack } from "@/app/data/svgData";
// import { FC } from "react";

// type Props = { data: SvgPack };

// const SvgDisplay: FC<Props> = ({ data }) => {
//   return (
//     <div className="group relative aspect-square flex items-center justify-center
//                     rounded-2xl bg-white/5 dark:bg-white/10
//                     border border-white/10 dark:border-white/20
//                     backdrop-blur-sm
//                     transition-all duration-300
//                     hover:scale-105 hover:bg-white/10 dark:hover:bg-white/15
//                     hover:shadow-[0_0_20px] hover:shadow-accent/40">
//       <Image
//         src={data.src as string}
//         alt={data.alt}
//         width={80}          // taille « virtuelle » (important pour Next)
//         height={80}
//         className="w-2/3 h-auto object-contain
//                    transition-transform duration-300
//                    group-hover:scale-110"
//         loading="lazy"
//       />
//     </div>
//   );
// };

// export default SvgDisplay;