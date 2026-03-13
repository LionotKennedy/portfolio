"use client";
import Image from "next/image";
// import TestSVG from "../../public/icons/Laravel-Light.svg"

type Props = { data: import("../data/svgData").SvgPack };


// export default function SvgDisplay() {
const SvgDisplay: React.FC<Props> = ({ data }) => {
  /* -------- multi-icons (skillicons) -------- */


  /* -------- single SVG -------- */
  const content = (

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
