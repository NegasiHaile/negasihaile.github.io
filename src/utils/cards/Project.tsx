import { ProjectType } from "@/types/project";
import Link from "next/link";
import React from "react";
import IconMoniter from "../icons/IconMoniter";

interface ProjectProps {
  index: number;
  project: ProjectType;
}

const Project = ({ index, project }: ProjectProps) => {
  return (
    <div key={index} className="w-full border rounded-md p-3 min-h-24">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-blue-500">
            {project.title}
          </Link>
          <p className=" border rounded-md px-2 opacity-70 text-sm">Health</p>
        </div>

        <div className="cursor-pointer">
          <IconMoniter />
        </div>
      </div>
    </div>
  );
};

export default Project;
