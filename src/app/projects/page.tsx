import React from "react";
import ProjectsList from "@/components/projects";

const Projects = () => {
  return (
    <div className="w-full space-y-5">
      <p className="opacity-80">
        This list includes a catalog of all the projects I have completed and
        some inprogress. It covers a broad spectrum, from professional
        freelancing work to personal projects that reflect my individual problem
        solving skills, career-building, and passion. These projects can include
        tasks from various domains like Web development, data processing and
        visalizatiom and other specialized services like building
        <b> business automation AI solutions</b>.
      </p>
      <ProjectsList display="all" />
    </div>
  );
};

export default Projects;
