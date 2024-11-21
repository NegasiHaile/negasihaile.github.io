import React from "react";
import ProjectsList from "@/components/projects";

const Projects = () => {
  return (
    <div>
      <p className="my-5 opacity-65 font-thin">
        This list includes a comprehensive catalog of all the projects I have
        worked and completed and some inprogress. It covers a broad spectrum,
        from professional freelancing work to personal projects that reflect my
        individual creativity, skill-building, and passion. These projects can
        include tasks from various domains like Web, Desktop, and Mobile
        development and other specialized services like building{" "}
        <b>business automation AI solutions</b>.
      </p>
      <ProjectsList display="all" />
    </div>
  );
};

export default Projects;
