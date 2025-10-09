// SEO Configuration for all pages
export const seoConfig = {
  defaultTitle: "Design Dynasty | Web, Mobile, and Design Solutions",
  defaultDescription:
    "Design Dynasty offers professional web development, mobile app development, and graphic design services. Transform your digital presence with our expert team.",
  defaultKeywords:
    "web development, mobile app development, graphic design, UI/UX design, custom software, digital solutions, Design Dynasty",
  siteUrl: "https://designdynasty.com",
  siteName: "Design Dynasty",
  twitterHandle: "@DesignDynasty",
  defaultImage: "/og-image.jpg",
  
  pages: {
    home: {
      title: "Design Dynasty | Web, Mobile, and Design Solutions",
      description:
        "Transform your digital presence with Design Dynasty. We specialize in web development, mobile app development, and graphic design services tailored to your business needs.",
      keywords:
        "web development, mobile app development, graphic design, UI/UX design, custom software, digital solutions, Design Dynasty, professional web design",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Design Dynasty",
        url: "https://designdynasty.com",
        logo: "https://designdynasty.com/logo.png",
        description:
          "Professional web development, mobile app development, and graphic design services.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://www.facebook.com/designdynasty",
          "https://www.twitter.com/designdynasty",
          "https://www.linkedin.com/company/designdynasty",
          "https://www.instagram.com/designdynasty",
        ],
      },
    },
    
    about: {
      title: "About Us - Design Dynasty",
      description:
        "Learn about Design Dynasty's mission to deliver exceptional web development, mobile app development, and graphic design services. Meet our expert team and discover our values.",
      keywords:
        "about Design Dynasty, our team, company mission, web development company, design agency, software development team",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Design Dynasty",
        description:
          "Learn about Design Dynasty's mission and team of expert developers and designers.",
        mainEntity: {
          "@type": "Organization",
          name: "Design Dynasty",
          description:
            "A leading provider of web development, mobile app development, and graphic design services.",
        },
      },
    },
    
    contact: {
      title: "Contact Us - Design Dynasty",
      description:
        "Get in touch with Design Dynasty for your web development, mobile app development, or graphic design project. We're here to help bring your vision to life.",
      keywords:
        "contact Design Dynasty, get in touch, web development inquiry, mobile app quote, design consultation, project inquiry",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Design Dynasty",
        description: "Get in touch with Design Dynasty for your next project.",
      },
    },
    
    services: {
      title: "Our Services - Design Dynasty",
      description:
        "Explore Design Dynasty's comprehensive services including web development, mobile app development, and graphic design. Custom solutions for your business needs.",
      keywords:
        "web development services, mobile app development, graphic design services, UI/UX design, custom software development, digital services",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Digital Services",
        provider: {
          "@type": "Organization",
          name: "Design Dynasty",
        },
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description: "Custom web development solutions",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile App Development",
                description: "iOS and Android app development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Graphic Design",
                description: "Professional graphic design services",
              },
            },
          ],
        },
      },
    },
    
    webDevelopment: {
      title: "Web Development Services - Design Dynasty",
      description:
        "Professional web development services by Design Dynasty. We create responsive, fast, and SEO-optimized websites using the latest technologies. Get a custom web solution today.",
      keywords:
        "web development, custom website development, responsive web design, React development, frontend development, backend development, full-stack development",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Web Development",
        provider: {
          "@type": "Organization",
          name: "Design Dynasty",
        },
        description: "Professional web development services using modern technologies",
        areaServed: "Worldwide",
      },
    },
    
    mobileDevelopment: {
      title: "Mobile App Development Services - Design Dynasty",
      description:
        "Expert mobile app development services for iOS and Android. Design Dynasty creates high-performance, user-friendly mobile applications tailored to your business needs.",
      keywords:
        "mobile app development, iOS development, Android development, React Native, mobile application, app design, cross-platform development",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Mobile App Development",
        provider: {
          "@type": "Organization",
          name: "Design Dynasty",
        },
        description: "iOS and Android mobile app development services",
        areaServed: "Worldwide",
      },
    },
    
    graphicDesign: {
      title: "Graphic Design Services - Design Dynasty",
      description:
        "Creative graphic design services by Design Dynasty. From logos to complete brand identities, we deliver stunning visual designs that make your brand stand out.",
      keywords:
        "graphic design, logo design, brand identity, UI/UX design, visual design, creative design, branding services",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Graphic Design",
        provider: {
          "@type": "Organization",
          name: "Design Dynasty",
        },
        description: "Professional graphic design and branding services",
        areaServed: "Worldwide",
      },
    },
    
    pricing: {
      title: "Pricing - Design Dynasty",
      description:
        "Transparent pricing for web development, mobile app development, and graphic design services. Choose the perfect plan for your project with Design Dynasty.",
      keywords:
        "web development pricing, mobile app cost, graphic design rates, project pricing, service packages, affordable web development",
    },
  },
};

// Helper function to get SEO data for a specific page
export const getSEOData = (pageName: keyof typeof seoConfig.pages) => {
  const pageData = seoConfig.pages[pageName];
  return {
    ...pageData,
    url: `${seoConfig.siteUrl}${pageName === "home" ? "" : `/${pageName}`}`,
  };
};