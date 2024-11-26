"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Testmonial_0,
  Testmonial_1,
  Testmonial_2,
  Testmonial_3,
  Testmonial_4,
} from "@/utils/images";
import { IconLeftArrow, RightArrow } from "@/utils/icons";

const Testmonial = () => {
  const images = [
    Testmonial_0,
    Testmonial_4,
    Testmonial_2,
    Testmonial_3,
    Testmonial_1,
  ];

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

  return (
    <div className="relative w-full m-auto overflow-hidden">
      <button
        onClick={prevSlide}
        className="top-1/2 absolute bg-black/10 text-black/60 p-2 rounded-r-sm left-0 z-10"
      >
        <IconLeftArrow className="size-3 md:size-5" />
      </button>
      <div className="relative flex justify-center rounded overflow-hidden">
        {/* w-full flex justify-between items-center space-x-3 */}
        <Image
          src={images[currentIndex]}
          alt="image"
          className="w-full h-full rounded"
        />
        {/* <img src={images[currentIndex]} alt="Slide" className="slider-image" /> */}
      </div>
      <button
        onClick={nextSlide}
        className="top-1/2 absolute bg-black/10 text-black/60 p-2 rounded-l-sm right-0 z-10"
      >
        <RightArrow className="size-3 md:size-5" />
      </button>
    </div>
  );
};

export default Testmonial;
