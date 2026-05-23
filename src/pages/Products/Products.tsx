import "./ProductsPage.css";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Flame, Recycle } from "lucide-react";

// Importing the requested components
import ProcessSection from "../../components/processSection/ProcessSection";
import ProductsPreview from "../../components/productsPreview/ProductsPreview";
import ImpactSection from "../../components/impactSection/ImpactSection";

const ecosystemParts = [
  {
    icon: <Flame size={22} strokeWidth={1.5} />,
    title: "The Fuel",
    body: "Clean-burning, non-spill bioethanol gel derived from organic waste. Zero soot, zero toxic fumes.",
  },
  {
    icon: <Layers size={22} strokeWidth={1.5} />,
    title: "The Insert",
    body: "Engineered to drop directly into existing charcoal stoves, eliminating the need for expensive new equipment.",
  },
  {
    icon: <Recycle size={22} strokeWidth={1.5} />,
    title: "The Loop",
    body: "A decentralized refill network powered by local micro-entrepreneurs, ensuring constant, affordable access.",
  },
];

export default function ProductsPage() {
  return (
    <main className="prp-page">
      {/* Noise grain */}
      <div className="prp-noise" aria-hidden="true" />

      {/* ── HERO ── */}
      <section className="prp-hero">
        <div className="container prp-hero-content">
          <div className="prp-stamp">
            <span>Product Catalog</span>
            <svg className="stamp-border" viewBox="0 0 200 36" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="198" height="34" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3"/>
            </svg>
          </div>
          <h1>
            Engineered for the <mark className="prp-mark">modern African kitchen</mark>.
            <svg className="prp-heading-squiggle" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h1>
          <p>
            No expensive replacements. No disruptive overhauls. Elixir Biotech has designed a 
            closed-loop ecosystem that integrates directly into how families already cook, 
            transforming hazardous routines into safe, affordable, and climate-smart practices.
          </p>
        </div>
        <div className="prp-ghost" aria-hidden="true">ECO</div>
      </section>

      {/* ── ECOSYSTEM BLUEPRINT ── */}
      <section className="prp-blueprint">
        <div className="container prp-blueprint-grid">
          <div className="prp-blueprint-content">
            <div className="prp-section-header alt">
              <h2>The Integrated Ecosystem</h2>
              <div className="prp-header-rule"></div>
            </div>
            <p>
              Our solution isn't just a fuel; it's a cohesive triad. Each component 
              enhances the others, creating a seamless transition from toxic fuels to 
              clean cooking that operates naturally within existing community infrastructures.
            </p>
            <ul className="prp-blueprint-list">
              {ecosystemParts.map((part, i) => (
                <li key={i}>
                  <span className="prp-list-icon">{part.icon}</span>
                  <div>
                    <h4>{part.title}</h4>
                    <p>{part.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="prp-blueprint-schematic">
            <div className="prp-schematic-card">
              <div className="prp-schematic-tape" aria-hidden="true" />
              <h4>System Integration</h4>
              <div className="prp-schematic-flow">
                <div className="prp-flow-node">
                  <Flame size={20} strokeWidth={1.5} />
                  <span>Fuel</span>
                </div>
                <svg className="prp-flow-line" viewBox="0 0 40 20" fill="none" aria-hidden="true">
                  <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="prp-flow-node">
                  <Layers size={20} strokeWidth={1.5} />
                  <span>Insert</span>
                </div>
                <svg className="prp-flow-line" viewBox="0 0 40 20" fill="none" aria-hidden="true">
                  <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="prp-flow-node highlight">
                  <Recycle size={20} strokeWidth={1.5} />
                  <span>Loop</span>
                </div>
              </div>
              <div className="prp-schematic-caption">
                A self-sustaining cycle of waste-to-energy-to-community.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPORTED SECTIONS ── */}
      <ProductsPreview />
      <ProcessSection />
      <ImpactSection />

      {/* ── OUTRO CTA ── */}
      <section className="prp-outro">
        <div className="container prp-outro-content">
          <div className="prp-stamp">
            <span>Distribution Inquiry</span>
            <svg className="stamp-border" viewBox="0 0 220 36" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="218" height="34" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3"/>
            </svg>
          </div>
          <h2>
            Ready to deploy <mark className="prp-mark">clean energy</mark> in your community?
            <svg className="prp-heading-squiggle" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h2>
          <p>
            Whether you are a distributor, a community leader, or an impact investor, 
            we have structured partnership models to help you bring Elixir Biotech 
            solutions to your region.
          </p>
          <Link to="/contact" className="prp-outro-btn">
            Partner With Us <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="prp-outro-ghost" aria-hidden="true">ACT</div>
      </section>

    </main>
  );
}