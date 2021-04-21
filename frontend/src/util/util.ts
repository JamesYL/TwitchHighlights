import { useState, useEffect } from "react";

const getInnerDims = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const useWindowDimensions = () => {
  const [winDim, setWinDim] = useState(getInnerDims());
  useEffect(() => {
    const handleResize = () => setWinDim(getInnerDims());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return winDim;
};
export const useWidth = () => {
  return useWindowDimensions().width;
};
export const useHeight = () => {
  return useWindowDimensions().height;
};
