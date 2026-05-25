import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";
import aboutImage from "../../assets/images/image.png";
import { ArrowRight, Leaf, Target, CheckCircle2 } from "lucide-react";

/* ── Scroll-reveal hook ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const CARDS = [
  {
    icon: <Target size={18} strokeWidth={1.8} />,
    title: "Our Vision",
    text: "A future where African biotech innovations lead globally in clean energy, waste valorization, and community-driven climate solutions.",
  },
  {
    icon: <Leaf size={18} strokeWidth={1.8} />,
    title: "Our Mission",
    text: "To harness biotechnology and circular design to convert everyday challenges into sustainable solutions that improve health, energy, and livelihoods across Africa.",
  },
];

const PROOF_POINTS = [
  "Closed-loop production & distribution model",
  "Packaging recycled back into the system",
  "Local waste collectors as supply partners",
];

const AboutSection = () => {
  const { ref: leftRef, inView: leftIn } = useInView(0.12);
  const { ref: rightRef, inView: rightIn } = useInView(0.12);

  return (
    <section className="about-section">
      <div className="about-bg-blob" aria-hidden="true" />
      <div className="about-bg-dots"  aria-hidden="true" />

      <div className="container about-container">

        {/* ── LEFT: Image stack ── */}
        <div
          className={`about-left ${leftIn ? "is-in" : ""}`}
          ref={leftRef}
        >
          <div className="about-frame-accent" aria-hidden="true" />

          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img src={aboutImage} alt="Elixir Biotech clean cooking solutions" />
              <div className="about-img-overlay" aria-hidden="true" />
            </div>

            <div className="about-badge about-badge-primary">
              <div className="badge-accent-bar" aria-hidden="true" />
              <span className="badge-number">110<span className="badge-plus">+</span></span>
              <span className="badge-text">Households<br />Served</span>
            </div>

            <div className="about-badge about-badge-secondary">
              <span className="badge-chip-dot" aria-hidden="true" />
              <span className="badge-chip-label">Est. Nairobi, Kenya</span>
            </div>
          </div>

          <div className="about-side-bar" aria-hidden="true" />
        </div>

        {/* ── RIGHT: Content ── */}
        <div
          className={`about-right ${rightIn ? "is-in" : ""}`}
          ref={rightRef}
        >
          <div className="about-content">

            <div className="about-label">
              <span className="label-dot" aria-hidden="true" />
              About Elixir Biotech
            </div>

            <h2 className="about-title">
              Pioneering The Future Of<br />
              <span className="about-title-accent">
                Cleaner Cooking
                <span className="title-underline" aria-hidden="true" />
              </span>
            </h2>

            <p className="about-description">
              Elixir Biotech operates a closed-loop production and distribution
              model — transforming discarded organic materials into affordable,
              low-emission cooking fuel, then cycling the packaging right back
              into the system.
            </p>

            {/* Proof points */}
            <div className="about-proof-block">
              <ul className="about-proof-list">
                {PROOF_POINTS.map((pt, i) => (
                  <li key={i} className="about-proof-item">
                    <CheckCircle2 size={15} className="proof-check" strokeWidth={2} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision / Mission cards — side by side */}
            <div className="about-cards">
              {CARDS.map((card, i) => (
                <div
                  key={i}
                  className="about-card"
                  style={{ "--card-delay": `${rightIn ? 0.3 + i * 0.12 : 0}s` } as React.CSSProperties}
                >
                  <div className="about-card-header">
                    <div className="about-card-icon">{card.icon}</div>
                    <h3 className="about-card-title">{card.title}</h3>
                  </div>
                  <p className="about-card-text">{card.text}</p>
                  <span className="card-line" aria-hidden="true" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link to="/about" className="about-cta">
              <span>Discover More</span>
              <ArrowRight size={16} className="cta-arrow" />
              <span className="cta-shimmer" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;