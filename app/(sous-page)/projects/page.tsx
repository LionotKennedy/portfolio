import Image from "next/image";
import bg from "../../../public/background/projects-background.png";
import type { JSX } from "react/jsx-runtime";
import { Metadata } from "next";
import ProjectList from "../../components/projects/index";
import { projectsData } from "../../data/data";
// import RenderModel from "@/app/components/RenderModel";
// import Staff from "@/app/components/models/Staff";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Home(): JSX.Element {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg || "/placeholder.svg"}
        alt="background-image"
        // className="-z-50 w-full h-full fixed object-cover object-center opacity-50"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        {/* <RenderModel>
          <Staff />
        </RenderModel> */}
      </div>
    </>
  );
}
