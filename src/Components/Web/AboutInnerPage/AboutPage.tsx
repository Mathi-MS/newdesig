import { useEffect } from "react";
import { InnerPageBanner } from "../InnerPageBanner";
import { AboutTop } from "./AboutTop";
import { SEO } from "../../SEO";
import { seoConfig } from "../../SEO/seoConfig";
import AOS from "aos";

export const AboutPage = () => {
  
   useEffect(() => {
    AOS.init({
      duration: 1000,  // animation speed
      once: true,      // animate only once (on scroll down)
      offset: 100,     // trigger offset
    });
  }, []);

  const aboutData = seoConfig.pages.about;

  return (
    <>
      <SEO
        title={aboutData.title}
        description={aboutData.description}
        keywords={aboutData.keywords}
        url={`${seoConfig.siteUrl}/#/about`}
        structuredData={aboutData.structuredData}
      />
      <InnerPageBanner />
      <AboutTop />
    </>
  );
};
