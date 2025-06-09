import Image from "next/image"
import bg from "../../public/background/projects-background.png"
import type { JSX } from "react/jsx-runtime";
import { Metadata } from "next";
import ProjectList from "../components/projects/index"
import { projectsData } from "../data/data";

export const metadata: Metadata = {
  title: "Projects",
}

export default function Home(): JSX.Element {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg || "/placeholder.svg"}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

       <ProjectList projects={projectsData} />

      </main>
  );
}
