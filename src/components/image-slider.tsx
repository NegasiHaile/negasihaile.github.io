"use client";

import Image from "next/image";
import { useEffect } from "react";

type TestmonialPropsTypes = {
  images: string[];
};

const ImagesSlider = ({ images }: TestmonialPropsTypes) => {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <div className="flex items-center w-full overflow-x-auto scrollbar-hide space-x-5">
      {[...images, ...images].map((img, index) => (
        <div key={index} className="w-[75%] flex-shrink-0">
          <Image
            src={img}
            alt={`testimonial-${index}`}
            width={800}
            height={170}
            className="w-full h-full rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesSlider;
