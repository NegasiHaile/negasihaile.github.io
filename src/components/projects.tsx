import { projects } from "@/data/projects";
import Project from "@/utils/cards/Project";
import { ProjectType } from "@/types";
import Modal from "@/utils/Popups/Modal";

type ProjectsProps = {
  display: string;
};

const ProjectsList = ({ display }: ProjectsProps) => {
  const filteredProjects =
    display !== "all"
      ? projects.filter((project) => {
          return project[display as keyof ProjectType];
        })
      : projects;

  return (
    <>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {/* PROJECT */}
        {filteredProjects.map((project, index) => (
          <Project key={project.id} index={index} project={project} />
        ))}
      </div>

      <Modal />
    </>
  );
};

export default ProjectsList;
