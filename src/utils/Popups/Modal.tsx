import { ProjectType } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { IconCollapse } from "../icons";

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
      } justify-center bg-black/15 h-screen w-full left-0 top-0 z-50`}
    >
      <div className="w-[98%] md:w-[80%] lg:w-[75%] xl:w-[65%] h-full bg-gray-100 dark:bg-gray-900 p-5 rounded shadow-light">
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
      </div>
    </div>
  );
};

export default Modal;
