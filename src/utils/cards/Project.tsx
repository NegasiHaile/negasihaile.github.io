"use client";
import { ProjectType } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { IconExpand, IconGitHub, IconStart, IconYoutube } from "../icons";
import Modal from "../Popups/Modal";
import IconMoniter from "../icons/IconMoniter";

interface ProjectProps {
  index: number;
  project: ProjectType;
}

const Project = ({ index, project }: ProjectProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
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
              className="flex items-center text-blue-500 dark:text-blue-400 hover:underline"
            >
              <IconMoniter className=" size-5 mt-1" />
              {project.title}
            </Link>

            <p className=" border rounded-md px-2 opacity-85 text-xs">
              {project.sub_category}
            </p>
          </div>

          <button
            type="button"
            className="cursor-pointer hover:opacity-65 flex items-center text-blue-500"
            onClick={() => setShowModal(true)}
          >
            <IconExpand className="size-6" />
          </button>
        </div>

        {/* CARD BODY */}
        <div className="line-clamp-4 dark:font-thin tracking-wider">
          {project.description}
        </div>

        {/* CARD FOOTER */}
        <div className="flex justify-between items-center">
          <div className="flex w-full items-center space-x-2">
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
            {project.tech_stack.length > 3 && (
              <p className="text-sm opacity-60">
                +{project.tech_stack.length - 3}
              </p>
            )}
          </div>
          <div className="flex items-center min-h-0 space-x-0">
            {project?.youtube && (
              <Link
                target="_blank"
                href={project.youtube}
                className="flex items-center space-x-1 border-transparent border hover:border-red-500 p-1 rounded-full hover:opacity-65"
              >
                <IconYoutube className="size-4 md:size-5" />
              </Link>
            )}
            {project?.git && (
              <Link
                target="_blank"
                href={project.git}
                className="flex items-center space-x-1 border-transparent border hover:border-gray-700 p-1 rounded-full hover:opacity-65"
              >
                <IconGitHub className="size-4 md:size-5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <Modal
        key={`${index}_${project.title}`}
        showModal={showModal}
        setShowModal={setShowModal}
        project={project}
      />
    </>
  );
};

export default Project;
