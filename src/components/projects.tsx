import Link from "next/link";
import { projects } from "@/data/projects";
import Project from "@/utils/cards/Project";
import { ProjectType } from "@/types/project";

type ProjectsProps = {
  display: string;
};

const Projects = ({ display }: ProjectsProps) => {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <p>Pinned Projects</p>
        <Link
          href={"/"}
          className="text-blue-500 capitalize"
          title="See all projects"
        >
          See all projects
        </Link>
      </div>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {/* PROJECT */}
        {projects
          .filter((project) => project[display as keyof ProjectType])
          .map((project, index) => (
            <Project key={project.id} index={index} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
