import { ProjectType } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { IconCollapse } from "../icons";
import ImagesSlider from "@/components/image-slider";
// import {
//   Testmonial_0,
//   Testmonial_1,
//   Testmonial_2,
//   Testmonial_3,
//   Testmonial_4,
// } from "@/utils/images";
import Link from "next/link";

type ModalPropsType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  project: ProjectType;
};

const Modal = ({ showModal, setShowModal, project }: ModalPropsType) => {
  return (
    <div
      className={`fixed ${
        showModal ? `flex` : `hidden`
      } justify-center px-5 bg-black/15 w-full top-0 h-screen left-0 right-0 z-50`}
    >
      <div className=" sm:w-[90%] md:w-[85%] lg:w-[60%] h-fit my-auto max-h-screen overflow-y-auto bg-gray-100 dark:bg-gray-900 p-5 rounded space-y-5 shadow-light">
        {/* HEADER */}
        <div className="flex justify-between items-center border-b w-full pb-2">
          <p className="text-lg md:text-2xl font-bold">{project.title}</p>
          <button
            className="w-fit p-1 hover:opacity-35"
            onClick={() => setShowModal(false)}
          >
            <IconCollapse />
          </button>
        </div>

        <div className="py-2 mt-5 text-justify">
          <p>{project.description}</p>
        </div>

        {project.images.length > 0 && (
          <div className="space-y-1">
            <p className="font-bold"> Sample screenshots </p>
            <ImagesSlider images={project.images} />
          </div>
        )}

        <div className="">
          <p>
            Visit the website{" "}
            <Link href={project.demo} target="blank" className="text-blue-500">
              HERE
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
