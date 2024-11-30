"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconLeftArrow, RightArrow } from "@/utils/icons";

type TestmonialPropsTypes = {
  images: string[];
};

const ImagesSlider = ({ images }: TestmonialPropsTypes) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // setTimeout(() => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // }, 3000);

  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <div className="relative w-full m-auto overflow-hidden">
      <button
        onClick={prevSlide}
        className="top-1/2 absolute bg-black/40 text-white/85 p-2 rounded-r-sm left-0 z-10"
      >
        <IconLeftArrow className="size-3 md:size-5" />
      </button>
      <div className="relative flex justify-center rounded overflow-hidden">
        {/* w-full flex justify-between items-center space-x-3 */}
        <Image
          src={images[currentIndex]}
          width="800"
          height="300"
          alt="image"
          className="w-full h-full rounded"
        />
      </div>
      <button
        onClick={nextSlide}
        className="top-1/2 absolute bg-black/40 text-white/85 p-2 rounded-l-sm right-0 z-10"
      >
        <RightArrow className="size-3 md:size-5" />
      </button>
    </div>
  );
};

export default ImagesSlider;
