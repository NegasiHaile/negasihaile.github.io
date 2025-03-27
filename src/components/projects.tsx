import { projects } from "@/data/projects";
import Project from "@/utils/cards/Project";
import { ProjectType } from "@/types";

type ProjectsProps = {
  display: string;
};

const ProjectsList = ({ display }: ProjectsProps) => {
  const filteredProjects =
    display !== "all"
      ? projects.filter((project: ProjectType) => {
          return project[display as keyof ProjectType];
        })
      : projects;

  return (
    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
      {/* PROJECT */}
      {filteredProjects.map((project, index) => (
        <Project key={project.id} index={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
