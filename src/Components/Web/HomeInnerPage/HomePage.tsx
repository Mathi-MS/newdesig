import { WebAboutus } from "./WebAboutus";
import { WebContact } from "./WebContact";
import { WebHero } from "./WebHero";
import { WebServices } from "../WebServices";
import { WebTesti } from "./WebTesti";
import { ContactPage } from "../ContactInnerPage/ContactPage";

export const HomePage = () => {
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
