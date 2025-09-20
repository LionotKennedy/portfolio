import { svgData } from "@/app/data/svgData";
import SvgDisplay from "../SvgDisplay";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails: React.FC = () => {
  return (
    <>
      <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">
          <ItemLayout
            className={
              "col-span-full lg:col-span-8 row-span-2 flex-col items-start glass-effect custom-btn"
            }
          >
            <h2 className="text-xl md:text-2xl text-left w-full capitalize">
              Architect of Enchantment
            </h2>
            <p className="font-light text-xs sm:text-sm md:text-base">
              My journey in web development is powered by an array of mystical
              tools and languages, with JavaScript casting the core of my
              enchantments. I wield frameworks like React.js and Next.js with
              precision, crafting seamless portals (websites) that connect
              realms (users) across the digital universe. The ancient arts of
              the Jamstack empower me to create fast, secure, and dynamic
              experiences, while my design skills ensure every creation is not
              only functional but visually captivating. Join me as I continue to
              explore new spells and technologies to shape the future of the
              web.
            </p>
          </ItemLayout>
          <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
            }
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              0+ <sub className="font-semibold text-base">clients</sub>
            </p>
          </ItemLayout>
          <ItemLayout
            className={
              "col-span-full xs:col-span-6 lg:col-span-4 text-accent glass-effect custom-btn"
            }
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              4+{" "}
              <sub className="font-semibold text-base">years of experience</sub>
            </p>
          </ItemLayout>
          <ItemLayout
            className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}
          >
            <img
              className="w-full h-auto"
              src={"https://github-readme-stats.vercel.app/api/top-langs?username=LionotKennedy&theme=transparent&hide_border=true&title_color=0066cc&text_color=00000&icon_color=FEFE5B&text_bold=false&background=1E3A8A33"}
              alt="CodeBucks1"
              loading="lazy"
            />
          </ItemLayout>
          <ItemLayout className={"col-span-full md:col-span-8 !p-0 glass-effect"}>
            <img
              className="w-full h-auto"
              src={"https://github-readme-stats.vercel.app/api?username=LionotKennedy&theme=transparent&hide_border=true&title_color=0066cc&text_color=00000&icon_color=FEFE5B&text_bold=false"}
              alt="CodeBucks2"
              loading="lazy"
            />
          </ItemLayout>
          <ItemLayout className={"col-span-full"}>
            <div className="w-full">
              <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
                {svgData.map((s) => (
                  <div
                    key={s.id}
                    className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg bg-background/10 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:bg-background/20 group"
                  >
                    <div className="relative w-full h-0 pb-[100%]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <SvgDisplay data={s} />
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-center opacity-70 group-hover:opacity-100 transition-opacity truncate w-full">
                      {s.alt.replace('Pinned repo', '').replace('Top languages', '').replace('GitHub stats', '').replace('GitHub streak', '').trim() || s.id}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ItemLayout>
          <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
            <img
              className="w-full h-auto"
              src={"https://github-readme-stats.vercel.app/api?username=LionotKennedy&theme=transparent&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"}
              alt="CodeBucks4"
              loading="lazy"
            />
          </ItemLayout>
          <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
            <Link
              href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
              target="_blank"
              className="w-full"
            >
              <img
                className="w-full h-auto"
                src={`https://github-readme-stats.vercel.app/api/pin/?username=LionotKennedy&repo=portfolio&theme=transparent&hide_border=true&title_color=0066cc&text_color=00000&icon_color=0066cc&text_bold=false&description_lines_count=2`}
                alt="CodeBucks5"
                loading="lazy"
              />
            </Link>
          </ItemLayout>
        </div>
      </section>
    </>
  );
};

export default AboutDetails;