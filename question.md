bonjour bro en fait j'ai creer une portfolio bro en fait j'aimerais que faire quelque amelioration sur le contenu avec design intuitive, en fait j'aimerais que ramplace cet information par mes informations personnel bro avec des styles moderne et intuitive garder la autre style exemple responsive etc...
sur cette ligne de code "          {/* Top Languages Card - Version Offline */}
          <ItemLayout
            className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}
          >
            <div className="w-full h-full">
              <GitHubTopLangsCard
                data={mockTopLangsData}
                theme={{
                  titleColor: '#0066cc',
                  textColor: '#000000',
                  iconColor: '#FEFE5B',
                  background: '#1E3A8A33',
                  hideBorder: true,
                }}
              />
            </div>
          </ItemLayout> "

          voici mes information 
          "Diplômes et Formations
Master one au filière informatique
De février 2025 à septembre 2025 Ecole National de l'informatique Tuléar
Licence professionnelle en troisième année au filière informatique
De janvier 2024 à septembre 2025 Ecole Nationale d'Informatique Tuléar
Licence professionnel en deuxième année au filière informatique
Depuis février 2023 ENI Tuléar
Licence professionnel en premierième année au filière informatique
Février 2022 Ecole Nationale d'Informatique Tuléar
Bacc série D
D'août 2018 à septembre 2019 Lycee Antaninarenina Tuléar"
mettre dans une card styliser moderne au l'autre card parallele 
voici:
"Expériences professionnelles
Refonte complète de l'application E-commerce pour améliorer les performances
et l'expérience utilis
De mai 2025 à juillet 2025 freelancer Madagascar
Conception et Réalisation d’un application web pour la système de gestion des
courriers et des archi
D'octobre 2024 à
novembre 2024
Service régional de la solde et des pensions Atsimo
Andrefana(HOTEL FINANCE) Toliara, AF, Madagascar
Gestion de suivi de facturation (Stage)
D'août 2023 à novembre 2023 Antsirabe OpenData-Madagacar
Gestion de Employee
De mars 2022 à juin 2022 Ecole National de l'Informatique Toliara, AF, Madagascar
Gestion de Caisse d'eglise
De février 2022 à avril 2022 Ecole National de l'Informatique Toliara, AF, Madagascar
" avec responsive
voici tout mes informations 
"
// components/AboutDetails.tsx
import { svgData } from "@/app/data/svgData";
import SvgDisplay from "../SvgDisplay";
import ItemLayout from "./ItemLayout";
// // import Link from "next/link";
// import GitHubTopLangsCard from "../github-stats/GitHubTopLangsCard";
// import GitHubStatsCard from "../github-stats/GitHubStatsCard";
// import GitHubStreakCard from "../github-stats/GitHubStreakCard";
import GitHubPinnedRepoCard from "../github-stats/GitHubPinnedRepoCard";
import GitHubStreakCard from "../github-stats/GitHubStreakCard";
import GitHubTopLangsCard from "../github-stats/GitHubTopLangsCard";

// Données statiques pour remplacer les API calls
const mockStatsData = {
  username: 'LionotKennedy',
  name: 'Lionot Kennedy',
  repos: 24,
  stars: 42,
  followers: 12,
  following: 8,
  totalCommits: 156,
  contributions: 1103,
};

const mockTopLangsData = [
  { language: 'TypeScript', percentage: 38, color: '#3178c6' },
  { language: 'JavaScript', percentage: 25, color: '#f1e05a' },
  { language: 'Python', percentage: 18, color: '#3572A5' },
  { language: 'CSS', percentage: 12, color: '#563d7c' },
  { language: 'HTML', percentage: 7, color: '#e34c26' },
  { language: 'Java', percentage: 5, color: '#b07219' },
];

const mockStreakData = {
  currentStreak: 15,
  longestStreak: 42,
  totalContributions: 1103,
  contributionsThisYear: 256,
  todayContributions: 12,
};

const mockPinnedRepoData = {
  username: 'LionotKennedy',
  repo: 'portfolio',
  description: 'Mon portfolio personnel construit avec Next.js, TypeScript et Tailwind CSS',
  language: 'TypeScript',
  stars: 12,
  forks: 3,
  url: 'https://github.com/LionotKennedy/portfolio',
};

const AboutDetails: React.FC = () => {
  return (
    <>
      <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full text-content-change">

          <ItemLayout
            className={
              "col-span-full lg:col-span-8 flex flex-col items-start glass-effect custom-btn h-full"
            }
          >
            <h2 className="text-xl md:text-2xl text-left w-full capitalize">
              Architecte de l'Enchantement
            </h2>
            <p className="font-light text-xs sm:text-sm md:text-base flex-grow">
              Mon voyage dans le développement web est porté par une panoplie d'outils et de langages mystiques, avec JavaScript jetant le sort central de mes enchantements. Je manie des frameworks tels que React.js et Next.js avec précision, façonnant des portails (sites web) fluides qui relient des royaumes (utilisateurs) à travers l'univers numérique. Les arts anciens du Jamstack me confèrent le pouvoir de créer des expériences rapides, sécurisées et dynamiques, tandis que mes compétences en design garantissent que chaque création soit non seulement fonctionnelle mais aussi visuellement captivante. Rejoins-moi alors que je continue d'explorer de nouveaux sorts et technologies pour façonner l'avenir du web.
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full lg:col-span-4 flex flex-col glass-effect custom-btn h-full"}
          >
            <div className="w-full h-full flex flex-col">
              <GitHubPinnedRepoCard
                data={mockPinnedRepoData}
                theme={{
                  titleColor: '#0066cc',
                  textColor: '#000000',
                  iconColor: '#0066cc',
                  hideBorder: true,
                }}
              />
            </div>
          </ItemLayout>

          {/* Top Languages Card - Version Offline */}
          <ItemLayout
            className={"col-span-full sm:col-span-6 md:col-span-4 !p-0 glass-effect"}
          >
            <div className="w-full h-full">
              <GitHubTopLangsCard
                data={mockTopLangsData}
                theme={{
                  titleColor: '#0066cc',
                  textColor: '#000000',
                  iconColor: '#FEFE5B',
                  background: '#1E3A8A33',
                  hideBorder: true,
                }}
              />
            </div>
          </ItemLayout> 

          {/* GitHub Stats Card - Version Offline */}
          {/* <ItemLayout className={"col-span-full md:col-span-8 !p-0 glass-effect"}>
            <div className="w-full h-full">
              <GitHubStatsCard
                data={mockStatsData}
                theme={{
                  titleColor: '#0066cc',
                  textColor: '#000000',
                  iconColor: '#FEFE5B',
                  hideBorder: true,
                }}
              />
            </div>
          </ItemLayout>

          {/* Technologies & Tools Section */}
          <ItemLayout className={"col-span-full"}>
            <div className="w-full">
              <h3 className="text-xl md:text-2xl mb-6 text-left w-full capitalize text-accent">
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 xs:gap-4 md:gap-5 w-full">
                {svgData.map((s) => (
                  <div
                    key={s.id}
                    className="flex flex-col items-center justify-center p-2 xs:p-3 rounded-lg 
                    bg-white/10 dark:bg-black/10 
                    border border-white/20 dark:border-accent/20 
                    backdrop-blur-md 
                    hover:border-accent/50 
                    hover:bg-white/20 dark:hover:bg-black/20 
                    transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="relative w-full max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[70px] h-0 pb-[100%] mx-auto">
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

          {/* GitHub Streak Card - Version Offline */}
          {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0 glass-effect"}>
            <div className="w-full h-full">
              <GitHubStreakCard
                data={mockStreakData}
                theme={{
                  background: '#EB545400',
                  ringColor: '#FEFE5B',
                  labelColor: '#FEFE5B',
                  hideBorder: true,
                }}
              />
            </div>
          </ItemLayout> */}
          
        </div>
      </section>
    </>
  );
};

export default AboutDetails;

"
et 
"import type { JSX } from "react/jsx-runtime";
import AboutDetails from "@/app/components/about";
import BackgroundHome from "@/app/components/BackgroundHome";
import WizardImage from "@/app/components/models/WizardImage";

export default function Home(): JSX.Element {
  return (
    <>
      <BackgroundHome />

      {/* Image plus proche du texte */}
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[55vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full">
          <WizardImage />
        </div>
      </div>

      {/* Votre nom avec animation */}
      <div className="text-center -mt-4 sm:-mt-6 md:-mt-8 z-20 px-4">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mx-auto text-title bold-name">
          I'm RAZAFIMANDIMBY Lionot
        </h2>

        {/* Partie animée seulement - Taille de texte responsive optimisée */}
        <div className="animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-accent pr-1 mx-auto w-fit max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] mt-2 sm:mt-3 md:mt-4">
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Web </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">, </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Mobile </span>
          <span className="text-foreground text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-content-change">and  </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Desktop </span>
          <span className="text-accent text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">Developer</span>
        </div>
      </div>

      {/* Texte CodeBucks */}
      <div className="relative w-full h-[40vh] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent animate-fadeIn">
            {/* About me */}
            À propos de moi 
          </h1>
          <p className="font-light text-foreground text-lg mt-2 text-content-change">
            {/* Meet the wizard behind this portfolio */}
            {/* À la rencontre du créateur de ce portfolio  */}
            {/* Faites connaissance avec l’esprit créatif derrière ce portfolio */}
            Découvrez l’artisan de ce portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}"




























Là ce bon maintenant j'aimerais que tu resume la ce texte garder le point important a savoir car j'aimerais mettre dans mon portfolio donc oriente le pour une portfolio et mettre politesse on garder tout l'information important bro ""





Madame/Monsieur,

Tout d'abord, je vous remercie d'avoir consiliter mon portfolio. Je suis très enthousiaste à l'idée de pouvoir échanger avec vous.
Concernant mon parcours :
Je suis actuellement en 5ème année d'informatique, je suis au cour de prepration de mon diplome ingenieuraut et je me considère comme un développeur junior avec une solide base théorique et pratique. J'ai déjà eu l'occasion de travailler sur plusieurs projets (scolaires, personnels ou professionnels) qui m'ont permis de développer mes compétences en [précise ici quelques langages ou technologies que tu maîtrises, ex : Java, Python, php, JavaScript, etc.]. Je suis passionné par [précise un domaine qui t'intéresse, ex : le développement web, la mobile, desktop,etc.] et j'aime relever des défis techniques.
Je suis capable de m'adapter rapidement à de nouvelles technologies ou à d'autres technologies selon les besoins de votre entreprise.
Ma disponibilité :
Actuellement, je suis à la recherche d'une mission en freelance à temps partiel si possible, car je souhaite continuer à me former tout en mettant mes compétences au service de votre entreprise. Je reste cependant ouvert à d'autres types de collaborations selon les besoins.
Mes ressources :
Je suis parfaitement équipé pour travailler à distance ou en hybride : je dispose d'une connexion internet stable et d'un ordinateur performant, ce qui me permet d'être opérationnel rapidement et de m'adapter à vos outils et méthodes de travail.
Prétentions salariales :
En ce qui concerne la rémunération, si le poste proposé est en CDI, je vise un salaire mensuel (à négocier selon les responsabilités et la charge de travail). Pour une mission en freelance ou en CDD, je suis flexible et nous pourrons discuter d'un tarif adapté à la complexité et à la durée du projet.





















👨‍💻 À propos de moi
Bonjour, je suis [Ton Nom], étudiant en 5ème année d'informatique, actuellement en préparation de mon diplôme d'ingénieur. Je me considère comme un développeur junior avec une solide base théorique et pratique acquise à travers divers projets scolaires et personnels.

Passionné par les défis techniques, j'aime apprendre et m'adapter rapidement aux nouvelles technologies selon les besoins de votre entreprise.

🎯 Objectif professionnel
Je suis actuellement à la recherche d'une mission en freelance à temps partiel, afin de continuer à me former tout en mettant mes compétences au service de vos projets. Je reste néanmoins ouvert à d'autres formes de collaboration selon vos besoins.

💻 Mes ressources
Je dispose de tout l'équipement nécessaire pour travailler efficacement, que ce soit à distance ou en hybride :

Connexion internet stable

Ordinateur performant

Je suis ainsi opérationnel rapidement et capable de m'intégrer facilement à vos outils et méthodes de travail.

💰 Prétentions salariales
En CDI : salaire mensuel à négocier selon les responsabilités et la charge de travail.

En freelance ou CDD : flexible, nous pourrons discuter d'un tarif adapté à la complexité et à la durée du projet.











👨‍💻 À propos de moi
Bonjour, je suis Lionot RAZAFIMANIDIMBY, étudiant en 5ème année d'informatique, actuellement en préparation de mon diplôme d'ingénieur. Je me considère comme un développeur junior avec une solide base théorique et pratique acquise à travers divers projets scolaires et personnels.

Passionné par les défis techniques, j'aime apprendre et m'adapter rapidement aux nouvelles technologies selon les besoins de votre entreprise.

🎯 Objectif professionnel
Je suis actuellement à la recherche d'une mission en freelance à temps partiel, afin de continuer à me former tout en mettant mes compétences au service de vos projets. Je reste néanmoins ouvert à d'autres formes de collaboration selon vos besoins.

💻 Mes ressources
Je dispose de tout l'équipement nécessaire pour travailler efficacement, que ce soit à distance ou en hybride.
Je suis ainsi opérationnel rapidement et capable de m'intégrer facilement à vos outils et méthodes de travail.

💰 Prétentions salariales
En CDI : salaire mensuel à négocier selon les responsabilités et la charge de travail.
En freelance ou CDD : flexible, nous pourrons discuter d'un tarif adapté à la complexité et à la durée du projet.













la c'est bon maintenant j'aimerais que tu personalise aussi le style de mes composant contient lien projet en responsive car il n'est pas responsive et mettre designe moderne et intuitive voici tout me code source 
"import type { JSX } from "react/jsx-runtime";
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
"
et 
""use client"
import type React from "react"
import ProjectLayout from "./ProjectsLayout";

interface Project {
  name: string;
  description: string;
  date: string;
  demoLink: string;
}
interface ProjectListProps {
  projects: Project[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center">
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
"
et
""use client";
import Link from "next/link";
import type React from "react";
// import { motion } from "framer-motion";

interface ProjectLayoutProps {
  name: string;
  description: string;
  date: string;
  demoLink: string;
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
// const ProjectLink = motion(Link);
const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  name,
  description,
  date,
  demoLink,
}) => {
  return (
    <>
      <Link
        // variants={item}
        href={demoLink}
        target={"_blank"}
        className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6
        glass-effect custom-btn"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground text-content-change">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{description}</p>
        </div>
        <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
        <p className="text-muted sm:text-foreground text-content-change">
          {new Date(date).toDateString()}
        </p>
      </Link>
    </>
  );
};

export default ProjectLayout;
"

"export const projectsData = [
  {
    id: 1,
    name: "EcoTracker",
    description: "Track your carbon footprint",
    date: "2022-08-15",
    demoLink: "https://ecotracker.example.com",
  },
  {
    id: 2,
    name: "ArtGallery Online",
    description: "Digital art showcase platform",
    date: "2022-06-20",
    demoLink: "https://artgalleryonline.example.com",
  },
  {
    id: 3,
    name: "BudgetPlanner",
    description: "Plan and track expenses",
    date: "2022-09-10",
    demoLink: "https://budgetplanner.example.com",
  },
  {
    id: 4,
    name: "HealthBeat",
    description: "Monitor heart rate zones",
    date: "2022-05-30",
    demoLink: "https://healthbeat.example.com",
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
  },
  {
    id: 6,
    name: "JourneyLogger",
    description: "Log your travels",
    date: "2022-10-01",
    demoLink: "https://journeylogger.example.com",
  },
  {
    id: 7,
    name: "StudyBuddy",
    description: "Collaborative learning platform",
    date: "2022-04-18",
    demoLink: "https://studybuddy.example.com",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "Tech news aggregator",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "FitTrack",
    description: "Fitness and workout tracker",
    date: "2022-03-22",
    demoLink: "https://fittrack.example.com",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
  },
  {
    id: 11,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/LionotKennedy",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/lionot-razafimandimby-244073266/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/RLionot",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
"