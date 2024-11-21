import { ProjectType } from "@/types";
import Link from "next/link";
import React from "react";
import { IconArrowRipple, IconExpand, IconStart } from "../icons";

interface ProjectProps {
  index: number;
  project: ProjectType;
}

const Project = ({ index, project }: ProjectProps) => {
  return (
    <div
      key={index}
      className="w-full border rounded-md p-3 space-y-4 min-h-24"
    >
      {/* Card Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex items-center space-x-3">
          <Link
            target="_blank"
            href={project.demo || project.git}
            className="flex items-center text-blue-500 hover:text-blue-800"
          >
            <IconArrowRipple className="w-5 h-5 mr-1" />
            {project.title}
          </Link>

          <p className=" border rounded-md px-2 opacity-85 text-xs">
            {project.sub_category}
          </p>
        </div>

        <div className="cursor-pointer hover:opacity-65">
          <IconExpand className="size-5" />
        </div>
      </div>

      {/* CARD BODY */}
      <div className="text-sm line-clamp-4 dark:font-thin tracking-wider">
        <p>{project.description}</p>
      </div>

      {/* CARD FOOTER */}
      <div className="flex w-full items-center space-x-5">
        {project.tech_stack.map((item, i) => {
          if (i > 2) return null;
          return (
            <div
              key={i}
              className="flex w-fit items-center space-x-1 text-xs opacity-65 border rounded-md px-2 py-1 md:py-0"
            >
              <IconStart className="w-4 h-4" />
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
