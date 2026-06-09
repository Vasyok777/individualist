"use client";

import { useEffect } from "react";

const DESIGN_WIDTH = 1920;

export function ViewportScale() {
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw >= 758 && vw < DESIGN_WIDTH) {
        document.documentElement.style.zoom = String(
          (vw / DESIGN_WIDTH).toFixed(4),
        );
      } else {
        document.documentElement.style.zoom = "";
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return null;
}
