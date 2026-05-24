import "./ProductsPage.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ProductsPreview from "../../components/productsPreview/ProductsPreview";
import ProcessSection from "../../components/processSection/ProcessSection";
import ImpactSection from "../../components/impactSection/ImpactSection";

const ProductsPage = () => {
  return (
    <main className="products-page">
      {/* ── HERO ── */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <span className="products-hero-subtitle">Our Products</span>
            <h1 className="products-hero-title">
              Efficient Solutions for a <br />
              Greener Tomorrow
            </h1>
            <p className="products-hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ── */}
      <ProductsPreview />

      {/* ── PROCESS SECTION ── */}
      <ProcessSection />

      {/* ── IMPACT SECTION ── */}
      <ImpactSection />

      {/* ── OUTRO CTA ── */}
      <section className="products-outro">
        <div className="container">
          <div className="products-outro-content">
            <h2 className="products-outro-title">
              Ready to make a difference?
            </h2>
            <p className="products-outro-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link to="/contact" className="products-outro-btn">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;