import { WebAboutus } from "./WebAboutus";
import { WebContact } from "./WebContact";
import { WebHero } from "./WebHero";
import { WebServices } from "../WebServices";
import { WebTesti } from "./WebTesti";
import { ContactPage } from "../ContactInnerPage/ContactPage";
import { SEO } from "../../SEO";
import { seoConfig } from "../../SEO/seoConfig";
import AOS from "aos";
import { useEffect } from "react";


export const HomePage = () => {

 useEffect(() => {
  AOS.init({
    duration: 1000,  // animation speed
    once: true,      // animate only once (on scroll down)
    offset: 100,     // trigger offset
  });
}, []);

  const homeData = seoConfig.pages.home;

  return (
    <>
      <SEO
        title={homeData.title}
        description={homeData.description}
        keywords={homeData.keywords}
        url={seoConfig.siteUrl}
        structuredData={homeData.structuredData}
      />
      <WebHero />
      <WebServices />
      <WebAboutus />
      {/* <WebScroll /> */}
      <WebTesti />
      {/* <WebContact /> */}
      <ContactPage />
    </>
  );
};
