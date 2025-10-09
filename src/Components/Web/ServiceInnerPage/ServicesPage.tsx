import { WebContact } from "../HomeInnerPage/WebContact"
import { InnerPageBanner } from "../InnerPageBanner"
import { WebServices } from "../WebServices"
import { SEO } from "../../SEO";
import { seoConfig } from "../../SEO/seoConfig";

export const ServicesPage = () =>{
    const servicesData = seoConfig.pages.services;
    
    return(
        <>
            <SEO
                title={servicesData.title}
                description={servicesData.description}
                keywords={servicesData.keywords}
                url={`${seoConfig.siteUrl}/#/services`}
                structuredData={servicesData.structuredData}
            />
            <InnerPageBanner />
            <WebServices />
            <WebContact />
        </>
    )
}