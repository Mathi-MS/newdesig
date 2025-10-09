import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to track page views for analytics
 * Use this in your main layout or App component
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view with Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "GA_MEASUREMENT_ID", {
        page_path: location.pathname + location.search,
      });
    }

    // Track with other analytics services if needed
    // Example: Facebook Pixel, Hotjar, etc.
  }, [location]);
};

/**
 * Helper function to generate breadcrumb structured data
 */
export const generateBreadcrumbData = (
  items: { name: string; url: string }[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Helper function to update page title dynamically
 */
export const updatePageTitle = (title: string) => {
  if (typeof document !== "undefined") {
    document.title = title;
  }
};

/**
 * Helper function to get current page URL
 */
export const getCurrentUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.href;
  }
  return "";
};

/**
 * Helper function to share on social media
 */
export const shareOnSocialMedia = (
  platform: "facebook" | "twitter" | "linkedin",
  url: string,
  title?: string
) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = title ? encodeURIComponent(title) : "";

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  if (typeof window !== "undefined") {
    window.open(
      shareUrls[platform],
      "_blank",
      "width=600,height=400,scrollbars=yes"
    );
  }
};

/**
 * Helper to check if page is indexed
 */
export const isPageIndexable = () => {
  if (typeof document !== "undefined") {
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      const content = robotsMeta.getAttribute("content") || "";
      return !content.includes("noindex");
    }
  }
  return true;
};