import "./ProductsPreview.css";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Wrench, RefreshCw } from "lucide-react";

import fuelImage   from "../../assets/images/hero-image.jpg";
import insertImage from "../../assets/images/hero-image.jpg";
import refillImage from "../../assets/images/hero-image.jpg";

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

const PRODUCTS = [
  {
    image: fuelImage,
    tag: "Clean Fuel",
    num: "01",
    icon: <Flame size={14} strokeWidth={2} />,
    title: "Elixir Bioethanol Gel Fuel",
    description:
      "A clean-burning gel fuel produced from organic waste, designed for affordable everyday cooking with lower emissions and reduced indoor smoke.",
    href: "/products",
  },
  {
    image: insertImage,
    tag: "Hardware",
    num: "02",
    icon: <Wrench size={14} strokeWidth={2} />,
    title: "Adaptive Stove Insert",
    description:
      "An efficient stove insert engineered to work with existing household setups, eliminating the need to purchase expensive new equipment.",
    href: "/products",
  },
  {
    image: refillImage,
    tag: "Ecosystem",
    num: "03",
    icon: <RefreshCw size={14} strokeWidth={2} />,
    title: "Smart Refill Ecosystem",
    description:
      "Refillable packaging and community refill points designed to make clean fuel access affordable, practical, and environmentally responsible.",
    href: "/products",
  },
];

const ProductsPreview = () => {
  const { ref: headRef, inView: headIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.10);

  return (
    <section className="pp-section">
      {/* Background textures */}
      <div className="pp-bg-dots"  aria-hidden="true" />
      <div className="pp-bg-glow"  aria-hidden="true" />

      <div className="container">

        {/* ── HEADING ── */}
        <div
          className={`pp-heading ${headIn ? "is-in" : ""}`}
          ref={headRef}
        >
          <div className="pp-label">
            <span className="pp-dot" aria-hidden="true" />
            Our Products
          </div>

          <h2 className="pp-title">
            Sustainable Solutions for{" "}
            <span className="pp-title-accent">
              Cleaner Cooking
              <span className="pp-title-bar" aria-hidden="true" />
            </span>
          </h2>

          <p className="pp-desc">
            Elixir Biotech combines clean fuel innovation, refill systems, and
            adaptive cooking solutions into a scalable ecosystem tailored for
            households and communities.
          </p>

          <Link to="/products" className="pp-all-link">
            View All Products <ArrowRight size={15} className="pp-all-arrow" />
          </Link>
        </div>

        {/* ── GRID ── */}
        <div
          className="pp-grid"
          ref={gridRef}
        >
          {PRODUCTS.map((p, i) => (
            <div
              key={i}
              className={`pp-card ${gridIn ? "is-in" : ""}`}
              style={{ "--pi": i } as React.CSSProperties}
            >
              {/* Image */}
              <div className="pp-card-img-wrap">
                <img src={p.image} alt={p.title} />

                {/* Dark gradient overlay */}
                <div className="pp-card-img-overlay" aria-hidden="true" />

                {/* Top row: tag + number */}
                <div className="pp-card-img-top">
                  <span className="pp-card-tag">
                    {p.icon}
                    {p.tag}
                  </span>
                  <span className="pp-card-num">{p.num}</span>
                </div>

                {/* Bottom reveal title on hover */}
                <div className="pp-card-img-reveal">
                  <span>{p.title}</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* Content */}
              <div className="pp-card-body">
                <h3 className="pp-card-title">{p.title}</h3>
                <p className="pp-card-desc">{p.description}</p>

                <Link to={p.href} className="pp-card-link">
                  <span>Learn More</span>
                  <ArrowRight size={15} className="pp-card-link-arrow" />
                  <span className="pp-card-link-shimmer" aria-hidden="true" />
                </Link>
              </div>

              {/* Bottom sweep line */}
              <span className="pp-card-line" aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsPreview;