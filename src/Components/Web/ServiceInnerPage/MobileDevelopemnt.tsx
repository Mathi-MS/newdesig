import { MobileDevelopmentBanner } from "./MobileDevelopmentBanner";
import { MobileDevelopmentContent } from "./MobileDevelopmentContent";
import { SEO } from "../../SEO";
import { seoConfig } from "../../SEO/seoConfig";
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

  const mobileDevData = seoConfig.pages.mobileDevelopment;

  return (
    <>
      <SEO
        title={mobileDevData.title}
        description={mobileDevData.description}
        keywords={mobileDevData.keywords}
        url={`${seoConfig.siteUrl}/#/mobile-developement`}
        structuredData={mobileDevData.structuredData}
      />
      <MobileDevelopmentBanner />
      <MobileDevelopmentContent />
    </>
  );
};
