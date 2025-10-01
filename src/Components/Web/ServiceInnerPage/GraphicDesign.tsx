import { GraphicDesignBanner } from "./GraphicDesignBanner";
import { GraphicDesignContent } from "./GraphicDesignContent";
import AOS from "aos";
import { useEffect } from "react";

export const GraphicDesign = () => {
     useEffect(() => {
    AOS.init({
      duration: 1000,  // animation speed
      once: true,      // animate only once (on scroll down)
      offset: 100,     // trigger offset
    });
  }, []);
  return (
    <>
      <GraphicDesignBanner />
      <GraphicDesignContent />
    </>
  );
};
