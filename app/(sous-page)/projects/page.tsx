import type { JSX } from "react/jsx-runtime";
import { Metadata } from "next";
import ProjectList from "../../components/projects/index";
import { projectsData } from "../../data/data";
import BackgroundHome from "@/app/components/BackgroundHome";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Home(): JSX.Element {
  return (
    <>
      <BackgroundHome />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">

      </div>
    </>
  );
}
