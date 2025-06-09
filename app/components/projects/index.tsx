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

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
