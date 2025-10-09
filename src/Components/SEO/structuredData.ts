// Structured Data (JSON-LD) helpers for rich snippets

export const organizationSchema = {
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
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Design Dynasty",
  url: "https://designdynasty.com",
  description:
    "Professional web development, mobile app development, and graphic design services.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://designdynasty.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (
  serviceName: string,
  description: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: serviceName,
  provider: {
    "@type": "Organization",
    name: "Design Dynasty",
    url: "https://designdynasty.com",
  },
  description: description,
  url: url,
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: url,
  },
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const reviewSchema = (
  rating: number,
  reviewCount: number,
  reviews: {
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }[]
) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Design Dynasty",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: rating,
    reviewCount: reviewCount,
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  })),
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Design Dynasty",
  image: "https://designdynasty.com/logo.png",
  "@id": "https://designdynasty.com",
  url: "https://designdynasty.com",
  telephone: "+1-XXX-XXX-XXXX", // Update with actual phone
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "", // Update with actual address
    addressLocality: "", // Update with city
    addressRegion: "", // Update with state
    postalCode: "", // Update with postal code
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0, // Update with actual coordinates
    longitude: 0,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/designdynasty",
    "https://www.twitter.com/designdynasty",
    "https://www.linkedin.com/company/designdynasty",
    "https://www.instagram.com/designdynasty",
  ],
};