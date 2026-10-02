"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type TestmonialPropsTypes = {
  images: string[];
};

const ImagesSlider = ({ images }: TestmonialPropsTypes) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (event: WheelEvent) => {
      if (container.scrollWidth <= container.clientWidth) return;

      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (delta === 0) return;

      event.preventDefault();
      container.scrollLeft += delta;
    };

    const onMouseDown = (event: MouseEvent) => {
      if (event.button !== 0) return;
      isDragging.current = true;
      dragStartX.current = event.pageX;
      dragScrollLeft.current = container.scrollLeft;
      container.style.cursor = "grabbing";
      container.style.userSelect = "none";
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging.current) return;
      event.preventDefault();
      const walk = event.pageX - dragStartX.current;
      container.scrollLeft = dragScrollLeft.current - walk;
    };

    const endDrag = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      container.style.cursor = "grab";
      container.style.userSelect = "";
    };

    const onContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", endDrag);
    container.addEventListener("mouseleave", endDrag);
    container.addEventListener("contextmenu", onContextMenu);

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", endDrag);
      container.removeEventListener("mouseleave", endDrag);
      container.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex w-full max-w-full cursor-grab touch-pan-x flex-nowrap items-center gap-5 overflow-x-auto overscroll-x-contain scroll-smooth py-2 scrollbar-hide"
    >
      {images.map((img, index) => (
        <div key={index} className="shrink-0 basis-[75%]">
          <Image
            src={img}
            alt={`Upwork testimonial ${index + 1}`}
            width={1396}
            height={336}
            className="pointer-events-none h-auto w-full select-none rounded"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesSlider;
