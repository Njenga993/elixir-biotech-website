import "./ProductsPreview.css";

import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import fuelImage from "../../assets/images/hero-image.jpg";
import insertImage from "../../assets/images/hero-image.jpg";
import refillImage from "../../assets/images/hero-image.jpg";

const products = [
  {
    image: fuelImage,
    title: "Elixir Bioethanol Gel Fuel",
    description:
      "A clean-burning gel fuel produced from organic waste, designed for affordable everyday cooking with lower emissions and reduced indoor smoke.",
  },
  {
    image: insertImage,
    title: "Adaptive Stove Insert",
    description:
      "An efficient stove insert engineered to work with existing household setups, eliminating the need for expensive stove replacements.",
  },
  {
    image: refillImage,
    title: "Smart Refill Ecosystem",
    description:
      "Refillable packaging and community refill points designed to make clean fuel access affordable, practical, and environmentally responsible.",
  },
];

const ProductsPreview = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`products-preview ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      {/* Noise grain */}
      <div className="pp-noise" aria-hidden="true" />
      
      {/* Ghost background word */}
      <div className="pp-ghost" aria-hidden="true">FUEL</div>

      <div className="container">
        <div className="pp-heading">
          {/* Rubber stamp tag */}
          <div className="pp-stamp">
            <span>Product Ecosystem</span>
            <svg className="stamp-border" viewBox="0 0 200 36" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="198" height="34" rx="0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3"/>
            </svg>
          </div>

          <h2>
            Designed for practical, <mark className="pp-mark">everyday</mark> clean cooking
            <svg className="pp-heading-squiggle" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h2>

          <p>
            Elixir Biotech combines clean fuel innovation, refill systems, and
            adaptive cooking solutions into a scalable ecosystem tailored for
            households, food vendors, and growing urban communities.
          </p>
        </div>

        <div className="pp-grid">
          {products.map((product, index) => (
            <div 
              className="specimen-card" 
              key={index}
              style={{ "--i": index } as React.CSSProperties}
            >
              {/* Ghost Index */}
              <span className="specimen-ghost-num" aria-hidden="true">
                0{index + 1}
              </span>

              {/* Taped Image */}
              <div className="specimen-image-wrap">
                <div className="specimen-tape" aria-hidden="true" />
                <div className="specimen-photo">
                  <img src={product.image} alt={product.title} />
                </div>
              </div>

              {/* Content */}
              <div className="specimen-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <button className="specimen-btn">
                  Learn More <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Hand-drawn corner accent */}
              <svg className="specimen-corner" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M2 26 Q2 2 26 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;