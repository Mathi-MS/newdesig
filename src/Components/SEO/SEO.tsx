import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
}

export const SEO = ({
  title = "Design Dynasty | Web, Mobile, and Design Solutions",
  description = "Design Dynasty offers professional web development, mobile app development, and graphic design services. Transform your digital presence with our expert team.",
  keywords = "web development, mobile app development, graphic design, UI/UX design, custom software, digital solutions, Design Dynasty",
  image = "/og-image.jpg",
  url = "https://designdynasty.com",
  type = "website",
  author = "Design Dynasty",
  publishedTime,
  modifiedTime,
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes("Design Dynasty") ? title : `${title} | Design Dynasty`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith("http") ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots Meta Tags */}
      {(noindex || nofollow) && (
        <meta
          name="robots"
          content={`${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`}
        />
      )}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Design Dynasty" />
      <meta property="og:locale" content="en_US" />

      {/* Article Meta Tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@DesignDynasty" />
      <meta name="twitter:creator" content="@DesignDynasty" />

      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};