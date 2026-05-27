import Hero from "../../components/hero/Hero";
import AboutSection from "../../components/aboutSection/AboutSection";
import ProcessSection from "../../components/processSection/ProcessSection";
import ProductsPreview from "../../components/productsPreview/ProductsPreview";
import ImpactSection from "../../components/impactSection/ImpactSection";
import ContactSection from "../../components/ContactSection/ContactSection";

// 👇 IMPORT SEO COMPONENT
import SEO from "../../components/SEO/SEO";

const Home = () => {
  return (
    <>
      {/* ⭐⭐⭐ ADVANCED SEO SECTION ⭐⭐⭐ */}
      <SEO
        title="Home | Elixir Biotech - Clean Bioethanol Fuel in Kenya"
        description="Elixir Biotech transforms organic waste into affordable bioethanol gel fuel in Nairobi. A safe, non-toxic, and sustainable alternative to charcoal and kerosene."
        path="/"
        
        keywords={[
          "Elixir Biotech",
          "bioethanol gel fuel Kenya",
          "clean cooking solutions",
          "renewable energy Kenya",
          "waste to energy",
          "organic waste recycling",
          "charcoal alternative",
          "kerosene substitute",
          "affordable cooking fuel",
          "green energy startup Africa"
        ]}
        
        // 👇 Structured Data (JSON-LD) - WebSite Schema
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Elixir Biotech",
          "url": "https://elixirbiotech.co.ke/",
          "description": "Transforming organic waste into affordable bioethanol gel fuel in Kenya.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://elixirbiotech.co.ke/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Elixir Biotech",
            "logo": "https://elixirbiotech.co.ke/assets/images/logo.png",
            "url": "https://elixirbiotech.co.ke",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            }
          }
        }}
      />

      {/* 👇 Hidden H1 for SEO (Primary Brand & Service Keywords) */}
      <h1 style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: '0'
      }}>
        Elixir Biotech: Transforming Organic Waste into Clean Cooking Fuel in Nairobi
      </h1>

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