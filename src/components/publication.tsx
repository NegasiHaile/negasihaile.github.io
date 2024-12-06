import { PublicationTypes } from "@/types";
import { IconGitHub, IconMicrophone } from "@/utils/icons";
import Link from "next/link";
import React from "react";

type PuclicationPropsTypes = {
  publication: PublicationTypes;
};

const Publication = ({ publication }: PuclicationPropsTypes) => {
  return (
    <div className="w-full p-5 rounded border tracking-wide">
      <div className="block space-y-2">
        <Link
          target="_blank"
          href={publication.paper_link}
          className="flex items-center space-x-2 text-lg text-blue-500 hover:underline"
        >
          {/* <IconMoniter className="size-6 text-gray-500" /> */}
          <span>{publication.title}</span>
        </Link>
        <div className="flex justify-between space-x-1 items-center">
          <div className="flex items-center space-x-1">
            <IconMicrophone className="size-5" />
            <p className="opacity-65 text-sm">{publication.conference}</p>
          </div>
          <p className="text-xs border px-1 rounded text-nowrap">
            {publication.status}
          </p>
        </div>
      </div>

      <p className="py-5 dark:font-thin text-justify line-clamp-2">
        {publication.abstract}
      </p>

      <div className="flex items-center my-3 space-x-4">
        {publication.other_links.map((item, i) => {
          return (
            <Link
              href={item.link}
              key={i}
              className="flex items-center space-x-1 bg-slate-200 hover:opacity-70 dark:bg-slate-800/70 opacity-95 text-sm px-2 py-[2px] rounded"
            >
              <IconGitHub className="size-4" />
              <span> {item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Publication;
