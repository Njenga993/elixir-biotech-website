import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  path?: string;
  keywords?: string[];
  jsonLd?: object | object[];
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = "/assets/images/image2.png", 
  path = "",
  keywords,
  jsonLd,
  type = "website",
  publishedTime,
  modifiedTime
}) => {
  const siteUrl = "https://elixirbiotech.co.ke";
  const siteName = "Elixir Biotech";
  const url = `${siteUrl}${path}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  useEffect(() => {
    // ✅ Update page title
    document.title = `${title} | ${siteName}`;
    
    // ✅ Helper function to set or create meta tags
    const setMetaTag = (name: string, value: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', value);
    };

    // ✅ Helper to set or create link tags
    const setLinkTag = (rel: string, href: string, attributes: Record<string, string> = {}) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      
      element.setAttribute('href', href);
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    // ✅ Update all meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords ? keywords.join(', ') : '');
    
    // Open Graph
    setMetaTag('og:type', type, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:title', `${title} | ${siteName}`, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', fullImage, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:site_name', siteName, true);
    setMetaTag('og:locale', 'en_KE', true);
    
    // Article specific
    if (type === "article" && publishedTime) {
      setMetaTag('article:published_time', publishedTime, true);
    }
    if (type === "article" && modifiedTime) {
      setMetaTag('article:modified_time', modifiedTime, true);
    }
    
    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:site', '@elixirbiotech');
    setMetaTag('twitter:url', url);
    setMetaTag('twitter:title', `${title} | ${siteName}`);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', fullImage);
    setMetaTag('twitter:image:alt', title);
    
    // Canonical URL
    setLinkTag('canonical', url);
    
    // Alternate language links
    setLinkTag('alternate', url, { hrefLang: 'en-KE' });
    
    // ✅ Handle JSON-LD structured data
    if (jsonLd) {
      // Remove old JSON-LD scripts
      document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
      
      const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      
      jsonLdArray.forEach((schema) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
    
    // // console.log('✅ SEO Updated:', { 
    //   title: document.title, 
    //   description, 
    //   url,
    //   type,
    //   hasKeywords: !!keywords,
    //   hasJsonLd: !!jsonLd
    // });
    
  }, [title, description, image, path, keywords, jsonLd, type, publishedTime, modifiedTime, url, fullImage, siteName]);
  
  // This component doesn't render anything visible
  return null;
};

export default SEO;