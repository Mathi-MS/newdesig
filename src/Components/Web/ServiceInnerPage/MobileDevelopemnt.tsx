import { MobileDevelopmentBanner } from "./MobileDevelopmentBanner";
import { MobileDevelopmentContent } from "./MobileDevelopmentContent";
import AOS from "aos";
import { useEffect } from "react";

export const MobileDevelopemnt = () => {
     useEffect(() => {
  AOS.init({
    duration: 1000,  // animation speed
    once: true,      // animate only once (on scroll down)
    offset: 100,     // trigger offset
  });
}, []);
  return (
    <>
      <MobileDevelopmentBanner />
      <MobileDevelopmentContent />
    </>
  );
};
