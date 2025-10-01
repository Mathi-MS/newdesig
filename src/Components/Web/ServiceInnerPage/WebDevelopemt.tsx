import { WebDevelopmentBanner } from "./WebDevelopmentBanner";
import { WebDevelopmentContent } from "./WebDevelopmentContent";
import AOS from "aos";
import { useEffect } from "react";

export const WebDevelopemt = () => {
   useEffect(() => {
  AOS.init({
    duration: 1000,  // animation speed
    once: true,      // animate only once (on scroll down)
    offset: 100,     // trigger offset
  });
}, []);
  return (
    <>
      <WebDevelopmentBanner />
      <WebDevelopmentContent />
    </>
  );
};