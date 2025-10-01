import { WebAboutus } from "./WebAboutus";
import { WebContact } from "./WebContact";
import { WebHero } from "./WebHero";
import { WebServices } from "../WebServices";
import { WebTesti } from "./WebTesti";
import { ContactPage } from "../ContactInnerPage/ContactPage";
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
  return (
    <>
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
