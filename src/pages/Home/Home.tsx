import Hero from "../../components/hero/Hero";
import AboutSection from "../../components/aboutSection/AboutSection";
import ProcessSection from "../../components/processSection/ProcessSection";
import ProductsPreview from "../../components/productsPreview/ProductsPreview";
import ImpactSection from "../../components/impactSection/ImpactSection";
import ContactSection from "../../components/ContactSection/ContactSection";

import SEO from "../../components/SEO/SEO";

const Home = () => {
  return (
    <>
      {/* ⭐⭐⭐ ADVANCED SEO SECTION ⭐⭐⭐ */}
      <SEO
        title="Clean Bioethanol Fuel in Kenya | Sustainable Cooking Solutions"
        description="Elixir Biotech transforms organic waste into affordable bioethanol gel fuel. A safe, non-toxic, and sustainable alternative to charcoal and kerosene for households in Nairobi."
        path="/"
        type="website"
        keywords={[
          "bioethanol fuel Kenya",
          "clean cooking solutions Nairobi",
          "renewable energy Kenya",
          "waste to energy Africa",
          "organic waste recycling",
          "charcoal alternative Kenya",
          "kerosene substitute",
          "affordable cooking fuel",
          "green energy startup Kenya",
          "sustainable fuel Nairobi"
        ]}
        
        jsonLd={[
          // 1. Organization Schema (Main)
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://elixirbiotech.co.ke/#organization",
            "name": "Elixir Biotech",
            "url": "https://elixirbiotech.co.ke",
            "logo": "https://elixirbiotech.co.ke/assets/images/logo.png",
            "image": "https://elixirbiotech.co.ke/assets/images/image2.png",
            "description": "Elixir Biotech converts organic waste into affordable bioethanol gel fuel — replacing charcoal, kerosene, and firewood in Kenyan households.",
            "foundingDate": "2024", // Update with actual year
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254105939692",
              "contactType": "customer service",
              "email": "info@elixirbiotech.co.ke",
              "availableLanguage": ["English", "Swahili"]
            },
            "areaServed": {
              "@type": "City",
              "name": "Nairobi"
            },
            "sameAs": [
              // Add your social media URLs
              // "https://twitter.com/elixirbiotech",
              // "https://facebook.com/elixirbiotech",
              // "https://linkedin.com/company/elixirbiotech"
            ]
          },
          // 2. LocalBusiness Schema (For local SEO in Nairobi)
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://elixirbiotech.co.ke/#localbusiness",
            "name": "Elixir Biotech",
            "image": "https://elixirbiotech.co.ke/assets/images/image2.png",
            "url": "https://elixirbiotech.co.ke",
            "telephone": "+254105939692",
            "email": "info@elixirbiotech.co.ke",
            "priceRange": "KES 200 - KES 2000",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            },
            "areaServed": {
              "@type": "City",
              "name": "Nairobi"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "17:00"
            }
          },
          // 3. WebSite Schema (For search functionality)
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://elixirbiotech.co.ke/#website",
            "name": "Elixir Biotech",
            "url": "https://elixirbiotech.co.ke",
            "description": "Transforming organic waste into affordable bioethanol gel fuel in Kenya.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://elixirbiotech.co.ke/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          },
          // 4. BreadcrumbList Schema
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://elixirbiotech.co.ke"
              }
            ]
          }
        ]}
      />

      {/* ✅ REMOVED hidden H1 - Hero component should have the H1 */}

      <main>
        <Hero />
        <AboutSection />
        <ProcessSection />
        <ProductsPreview />
        <ImpactSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;