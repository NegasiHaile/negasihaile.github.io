"use client";

import { useEffect, useRef } from "react";

/** Your MapMyVisitors globe widget id */
const WIDGET_ID = "8z7ABSh6qgspb27swXFsm1qygCRwI64qopO1Cr4LbOI";
const SCRIPT_ID = "mmvst_globe";

/** Survive React Strict Mode remounts so the tracking request is not aborted. */
let scriptInjected = false;

const VisitorMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (document.getElementById(SCRIPT_ID) || scriptInjected) return;
    scriptInjected = true;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "text/javascript";
    script.src = `https://mapmyvisitors.com/globe.js?d=${WIDGET_ID}`;
    container.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="block w-[120px] min-h-[140px]"
      aria-label="Visitor map"
    />
  );
};

export default VisitorMap;
