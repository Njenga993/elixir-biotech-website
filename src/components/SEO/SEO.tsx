import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  path?: string;
  keywords?: string[]; // 👈 ADDED
  jsonLd?: object;     // 👈 ADDED
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = "/assets/images/image2.png", 
  path = "",
  keywords, // 👈 ADDED
  jsonLd    // 👈 ADDED
}) => {
  const siteUrl = "https://elixirbiotech.co.ke"; 
  const url = `${siteUrl}${path}`;
  
  // Join keywords into a comma-separated string for the meta tag
  const keywordsString = keywords ? keywords.join(', ') : '';

  return (
    <Helmet>
      <title>{title} | Elixir Biotech</title>
      <meta name="description" content={description} />
      
      {/* 👇 ADDED: Meta Keywords */}
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      
      <link rel="canonical" href={url} />

      {/* 👇 ADDED: JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;