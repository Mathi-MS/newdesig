import { GraphicDesignBanner } from "./GraphicDesignBanner";
import { GraphicDesignContent } from "./GraphicDesignContent";
import { SEO } from "../../SEO";
import { seoConfig } from "../../SEO/seoConfig";
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

  const graphicDesignData = seoConfig.pages.graphicDesign;

  return (
    <>
      <SEO
        title={graphicDesignData.title}
        description={graphicDesignData.description}
        keywords={graphicDesignData.keywords}
        url={`${seoConfig.siteUrl}/#/graphic-design`}
        structuredData={graphicDesignData.structuredData}
      />
      <GraphicDesignBanner />
      <GraphicDesignContent />
    </>
  );
};
