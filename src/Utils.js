import React, { useEffect } from "react";

export function useWindowSize() {
  //const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }
  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

export const useEvent = (event, handler, passive = false) => {
  useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener(event, handler);
    };
  });
};
export function getColor(num) {
  switch (num) {
    case 0:
      return "#466E83";
    case 2:
      return "#466E83";
    case 4:
      return "#596F84";
    case 8:
      return "#6B7086";
    case 16:
      return "#7E7287";
    case 32:
      return "#907388";
    case 64:
      return "#A3748A";
    case 128:
      return "#B5758B";
    case 256:
      return "#C8768C";
    case 512:
      return "#DA788D";
    case 1024:
      return "#ED798F";
    case 2048:
      return "#FF7A90";
    case 4096:
      return "#E24C65";

    default:
      return "#FF3D5D";
  }
}
