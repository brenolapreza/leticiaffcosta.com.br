"use client";

import { useEffect, useState } from "react";

export const useDimensions = () => {
  const [dimensionState, setDimensionState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const isMobile = dimensionState.width <= 600;
  const isTablet = dimensionState.width > 600 && dimensionState.width <= 900;

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleResize = () => {
        setDimensionState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return {
    width: dimensionState.width,
    height: dimensionState.height,
    isMobile,
    isTablet,
  };
};
