import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  path?: string;
  keywords?: string[];
  jsonLd?: object | object[];  // Allow multiple schemas
  type?: "website" | "article" | "product";  // Dynamic OG type
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
  const keywordsString = keywords ? keywords.join(', ') : '';
  
  // Construct JSON-LD
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      
      {/* Canonical & Language - FIXED: hrefLang not hreflang */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-KE" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Keywords (less important but included) */}
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_KE" />
      
      {/* Article-specific OG tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@elixirbiotech" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Mobile & PWA */}
      <meta name="theme-color" content="#0f1a20" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      {jsonLdArray.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;