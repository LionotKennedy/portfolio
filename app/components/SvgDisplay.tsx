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
    <Image
    //   src={TestSVG}
    //   alt='Coucou'
    src={data.src as string }
      alt={data.alt}
      width={800}
      height={400}
      className="w-full h-auto"
      loading="lazy"
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