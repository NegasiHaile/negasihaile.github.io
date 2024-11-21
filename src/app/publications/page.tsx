import React from "react";
import { publications } from "@/data/publications";
import Publication from "@/components/publication";

const Publications = () => {
  return (
    <div className="block space-y-5">
      {publications.map((item, i) => {
        return <Publication key={i} publication={item} />;
      })}
    </div>
  );
};

export default Publications;
