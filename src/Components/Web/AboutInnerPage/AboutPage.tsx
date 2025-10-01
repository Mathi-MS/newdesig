import { useEffect } from "react";
import { InnerPageBanner } from "../InnerPageBanner";
import { AboutTop } from "./AboutTop";
import AOS from "aos";

export const AboutPage = () => {
  
   useEffect(() => {
    AOS.init({
      duration: 1000,  // animation speed
      once: true,      // animate only once (on scroll down)
      offset: 100,     // trigger offset
    });
  }, []);
  return (
    <>
      <InnerPageBanner />
      <AboutTop />
    </>
  );
};
