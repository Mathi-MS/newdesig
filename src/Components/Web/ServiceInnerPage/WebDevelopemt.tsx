import { WebDevelopmentBanner } from "./WebDevelopmentBanner";
import { WebDevelopmentContent } from "./WebDevelopmentContent";
import { SEO } from "../../SEO";
import { seoConfig } from "../../SEO/seoConfig";
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

  const webDevData = seoConfig.pages.webDevelopment;

  return (
    <>
      <SEO
        title={webDevData.title}
        description={webDevData.description}
        keywords={webDevData.keywords}
        url={`${seoConfig.siteUrl}/#/web-development`}
        structuredData={webDevData.structuredData}
      />
      <WebDevelopmentBanner />
      <WebDevelopmentContent />
    </>
  );
};