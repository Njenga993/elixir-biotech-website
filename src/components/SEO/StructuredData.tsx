import React from "react";

const StructuredData: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Elixir Biotech",
    "image": "https://elixirbiotech.co.ke/assets/images/image2.png",
    "description": "Elixir Biotech converts organic waste into affordable bioethanol gel fuel — replacing charcoal, kerosene, and firewood.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Nairobi"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;