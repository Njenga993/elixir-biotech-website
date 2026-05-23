import Hero from "../../components/hero/Hero";
import AboutSection from "../../components/aboutSection/AboutSection";
import ProcessSection from "../../components/processSection/ProcessSection";
import ProductsPreview from "../../components/productsPreview/ProductsPreview";
import ImpactSection from "../../components/impactSection/ImpactSection";
import ContactSection from "../../components/ContactSection/ContactSection";

const Home = () => {
  return (
    <>
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