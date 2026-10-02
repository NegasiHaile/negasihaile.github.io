import React from "react";
import { publications } from "@/data/publications";
import Publication from "@/components/publication";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Publications | Negasi Haile Abadi - Research & Health AI",
  description:
    "Research publications by Negasi Haile Abadi on machine translation for healthcare, Afro Chest X-ray medical imaging datasets, and NLP for low-resource languages.",
  path: "/publications/",
  keywords: [
    "Negasi Haile publications",
    "EMNLP",
    "Afro Chest X-ray",
    "machine translation healthcare",
    "medical imaging research",
  ],
});

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
