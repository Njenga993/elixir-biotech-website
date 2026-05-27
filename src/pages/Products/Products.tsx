import { useEffect, useRef, useState } from "react";
import "./ProductsPage.css";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, Phone, Mail,
  Leaf, ShieldCheck, TrendingUp, Users,
} from "lucide-react";

import SEO from "../../components/SEO/SEO";
import ProductsPreview from "../../components/productsPreview/ProductsPreview";
import ProcessSection  from "../../components/processSection/ProcessSection";
import ImpactSection   from "../../components/impactSection/ImpactSection";

/* ── Scroll-reveal hook ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const TRUST_CHIPS = [
  { icon: <Leaf        size={13} strokeWidth={2} />, label: "Carbon-negative fuel" },
  { icon: <ShieldCheck size={13} strokeWidth={2} />, label: "Non-toxic & non-spill" },
  { icon: <TrendingUp  size={13} strokeWidth={2} />, label: "83% repeat customers"  },
  { icon: <Users       size={13} strokeWidth={2} />, label: "110+ households served" },
];

const WHY_POINTS = [
  "Drop-in replacement for charcoal, kerosene & firewood — no new equipment needed",
  "Up to 60% lower indoor air pollution than traditional solid fuels",
  "Closed-loop packaging: refill, return, repeat",
  "Locally sourced from organic waste — supports community waste collectors",
  "Competitively priced and available through neighbourhood refill points",
];

const ProductsPage = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const { ref: whyRef,   inView: whyIn   } = useInView(0.10);
  const { ref: outroRef, inView: outroIn } = useInView(0.10);

  return (
    <main className="pp-page">

      {/* ⭐⭐⭐ ADVANCED SEO SECTION ⭐⭐⭐ */}
      <SEO
        title="Buy Bioethanol Gel Fuel in Kenya | Clean Cooking Products"
        description="Shop safe, affordable bioethanol gel fuel in Nairobi. A non-spill, non-toxic alternative to charcoal and kerosene designed for Kenyan households."
        path="/products"
        image="/assets/images/products-hero.jpg" 
        type="product"
        keywords={[
          "bioethanol gel fuel Kenya",
          "buy clean cooking fuel",
          "charcoal alternative Kenya",
          "kerosene substitute",
          "gel fuel price",
          "non-toxic cooking fuel",
          "affordable energy solutions",
          "eco-friendly stove fuel",
          "household cooking fuel Nairobi",
          "renewable biofuel"
        ]}
        
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemPage",
            "name": "Elixir Biotech Products - Bioethanol Gel Fuel",
            "description": "Overview of bioethanol gel fuel products offered by Elixir Biotech in Kenya.",
            "url": "https://elixirbiotech.co.ke/products"
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bioethanol Gel Fuel",
            "description": "Clean-burning, non-toxic gel fuel made from organic waste. A safe alternative to charcoal and kerosene for Kenyan households.",
            "image": "https://elixirbiotech.co.ke/assets/images/products-hero.jpg",
            "brand": {
              "@type": "Brand",
              "name": "Elixir Biotech"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "KES",
              "url": "https://elixirbiotech.co.ke/products",
              "seller": {
                "@type": "Organization",
                "name": "Elixir Biotech"
              }
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://elixirbiotech.co.ke"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://elixirbiotech.co.ke/products"
              }
            ]
          }
        ]}
      />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="pp-hero">
        <div className="pp-hero-grid"   aria-hidden="true" />
        <div className="pp-hero-glow-l" aria-hidden="true" />
        <div className="pp-hero-glow-r" aria-hidden="true" />

        <div className="container">
          <div className={`pp-hero-content ${heroLoaded ? "is-loaded" : ""}`}>

            <div className="pp-badge">
              <span className="pp-dot" aria-hidden="true" />
              Our Products
            </div>

            {/* ✅ FIXED: Changed to H1 with proper SEO content */}
            <h1 className="pp-hero-title">
              <span className="pp-title-line line-1">Efficient Solutions</span>
              <span className="pp-title-line line-2">
                for a{" "}
                <span className="pp-title-accent">
                  Greener Tomorrow
                  <span className="pp-title-bar" aria-hidden="true" />
                </span>
              </span>
            </h1>

            <p className="pp-hero-desc">
              Every product in the Elixir Biotech ecosystem is designed around one
              principle: clean energy should be <em>easier</em> to access than the
              polluting alternatives it replaces — not harder.
            </p>

            {/* Trust chips */}
            <div className="pp-trust-chips">
              {TRUST_CHIPS.map(({ icon, label }, i) => (
                <span key={i} className="pp-trust-chip">
                  {icon}
                  {label}
                </span>
              ))}
            </div>

            {/* Dual CTA */}
            <div className="pp-hero-ctas">
              <a href="#products-grid" className="pp-cta-primary">
                <span>Explore Products</span>
                <ArrowRight size={16} className="pp-cta-arrow" />
                <span className="pp-cta-shimmer" aria-hidden="true" />
              </a>
              <Link to="/contact" className="pp-cta-ghost">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>

        <div className="pp-hero-cut" aria-hidden="true" />
      </section>

      {/* ══ PRODUCTS PREVIEW ══════════════════════════════════ */}
      <div id="products-grid">
        <ProductsPreview />
      </div>

      {/* ══ WHY CHOOSE US ═════════════════════════════════════ */}
      <section className="pp-why">
        <div className="pp-why-blob" aria-hidden="true" />

        <div className="container">
          <div
            className={`pp-why-inner ${whyIn ? "is-in" : ""}`}
            ref={whyRef}
          >
            {/* Left: text */}
            <div className="pp-why-left">
              <div className="pp-section-label">
                <span className="pp-dot pp-dot-sm" aria-hidden="true" />
                Why Elixir Biotech
              </div>

              {/* ✅ FIXED: Proper H2 after H1 */}
              <h2 className="pp-why-title">
                The smarter switch to{" "}
                <span className="pp-why-accent">
                  clean cooking
                  <span className="pp-why-bar" aria-hidden="true" />
                </span>
              </h2>

              <p className="pp-why-desc">
                Switching to cleaner fuel shouldn't mean spending more or changing
                how you cook. Our products slot directly into your existing routine —
                same pots, same stoves, zero compromise.
              </p>

              <ul className="pp-why-list">
                {WHY_POINTS.map((pt, i) => (
                  <li
                    key={i}
                    className="pp-why-item"
                    style={{ "--wi": i } as React.CSSProperties}
                  >
                    <CheckCircle2 size={15} className="pp-check" strokeWidth={2} />
                    {pt}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="pp-why-cta">
                <span>Become a Distribution Partner</span>
                <ArrowRight size={15} className="pp-cta-arrow" />
                <span className="pp-cta-shimmer" aria-hidden="true" />
              </Link>
            </div>

            {/* Right: stat cards */}
            <div className="pp-why-right">
              {[
                { val: "110+",   sub: "Households Served",         note: "and growing every month" },
                { val: "83%",    sub: "Repeat Customer Rate",      note: "families keep coming back" },
                { val: "60%+",   sub: "Emissions Reduction",       note: "vs. charcoal & kerosene"  },
                { val: "100%+",  sub: "Locally Sourced Materials", note: "supporting Kenyan waste collectors" },
              ].map(({ val, sub, note }, i) => (
                <div
                  key={i}
                  className="pp-stat-card"
                  style={{ "--si": i } as React.CSSProperties}
                >
                  <span className="pp-stat-val">{val}</span>
                  <span className="pp-stat-sub">{sub}</span>
                  <span className="pp-stat-note">{note}</span>
                  <span className="pp-stat-line" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════════ */}
      <ProcessSection />

      {/* ══ IMPACT ════════════════════════════════════════════ */}
      <ImpactSection />

      {/* ══ CONVERSION OUTRO ══════════════════════════════════ */}
      <section className="pp-outro">
        <div className="pp-outro-grid-bg" aria-hidden="true" />
        <div className="pp-outro-glow"    aria-hidden="true" />

        <div className="container">
          <div
            className={`pp-outro-content ${outroIn ? "is-in" : ""}`}
            ref={outroRef}
          >
            {/* Eyebrow */}
            <div className="pp-badge pp-badge-light">
              <span className="pp-dot" aria-hidden="true" />
              Ready to make a difference?
            </div>

            <h2 className="pp-outro-title">
              Join the movement toward<br />
              <span className="pp-outro-accent">
                cleaner kitchens
                <span className="pp-outro-bar" aria-hidden="true" />
              </span>
            </h2>

            <p className="pp-outro-desc">
              Whether you're a household looking to switch, a distributor exploring
              new markets, or an investor backing impact — there's a place for you
              in the Elixir Biotech ecosystem.
            </p>

            {/* CTA buttons */}
            <div className="pp-outro-ctas">
              <Link to="/contact" className="pp-outro-btn-primary">
                <span>Partner With Us</span>
                <ArrowRight size={16} className="pp-cta-arrow" />
                <span className="pp-cta-shimmer" aria-hidden="true" />
              </Link>
              <Link to="/about" className="pp-outro-btn-ghost">
                Learn Our Story
              </Link>
            </div>

            {/* Quick contact strip */}
            <div className="pp-outro-contact">
              <a href="tel:+254105939692" className="pp-outro-contact-item">
                <Phone size={13} /> +254 105939692
              </a>
              <span className="pp-outro-sep" aria-hidden="true" />
              <a href="mailto:info@elixirbiotech.co.ke" className="pp-outro-contact-item">
                <Mail size={13} /> info@elixirbiotech.co.ke
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ProductsPage;