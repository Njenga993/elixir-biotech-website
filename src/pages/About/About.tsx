import { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/image.png";
import {
  Wind, Trash2, Zap,
  Truck, FlaskConical, Recycle,
  ArrowRight, CheckCircle2, Target, Leaf,
} from "lucide-react";

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

const CHALLENGES = [
  {
    icon: <Wind size={26} strokeWidth={1.5} />,
    stat: "4M+",
    title: "Indoor Air Pollution",
    description: "Premature deaths annually across Africa linked to household air pollution from solid fuels.",
  },
  {
    icon: <Trash2 size={26} strokeWidth={1.5} />,
    stat: "60%+",
    title: "Untreated Organic Waste",
    description: "Of urban waste in Kenya is organic, largely diverted to overflowing landfills.",
  },
  {
    icon: <Zap size={26} strokeWidth={1.5} />,
    stat: "80%+",
    title: "Energy Insecurity",
    description: "Of Sub-Saharan Africans still rely on costly, hazardous fuels like charcoal and kerosene.",
  },
];

const ECOSYSTEM = [
  {
    step: "01",
    title: "Waste Sourcing",
    description: "Organic waste materials are sourced through local waste collectors and community partnerships.",
    icon: <Truck size={22} strokeWidth={1.5} />,
  },
  {
    step: "02",
    title: "Fuel Conversion",
    description: "Collected biomass undergoes controlled fermentation and distillation to produce clean-burning gel.",
    icon: <FlaskConical size={22} strokeWidth={1.5} />,
  },
  {
    step: "03",
    title: "Community Refill",
    description: "Refillable packaging and local micro-entrepreneurs ensure clean fuel access is affordable and circular.",
    icon: <Recycle size={22} strokeWidth={1.5} />,
  },
];

const MANDATE_CARDS = [
  {
    icon: <Target size={17} strokeWidth={1.8} />,
    title: "Our Vision",
    text: "A future where African biotech innovations lead globally in clean energy, waste valorization, and community-driven climate solutions.",
  },
  {
    icon: <Leaf size={17} strokeWidth={1.8} />,
    title: "Our Mission",
    text: "To harness biotechnology and circular design to convert everyday challenges into sustainable solutions that improve health, energy, and livelihoods across Africa.",
  },
];

const PROOF_POINTS = [
  "Closed-loop production & distribution model",
  "Packaging recycled back into the system",
  "Local waste collectors as supply partners",
];

const AboutPage = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  const { ref: imgRef,       inView: imgIn       } = useInView(0.12);
  const { ref: contentRef,   inView: contentIn   } = useInView(0.12);
  const { ref: challengeRef, inView: challengeIn } = useInView(0.10);
  const { ref: ecoRef,       inView: ecoIn       } = useInView(0.10);

  return (
    <main className="about-page">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="ap-hero">
        <div className="ap-hero-grid"   aria-hidden="true" />
        <div className="ap-hero-glow-l" aria-hidden="true" />
        <div className="ap-hero-glow-r" aria-hidden="true" />

        <div className="container">
          <div className={`ap-hero-content ${heroLoaded ? "is-loaded" : ""}`}>

            <div className="ap-hero-badge">
              <span className="ap-dot" aria-hidden="true" />
              About Elixir Biotech
            </div>

            <h1 className="ap-hero-title">
              <span className="ap-title-line line-1">Pioneering the Future</span>
              <span className="ap-title-line line-2">
                of{" "}
                <span className="ap-title-accent">
                  Clean Cooking
                  <span className="ap-title-bar" aria-hidden="true" />
                </span>
              </span>
            </h1>

            <p className="ap-hero-desc">
              Elixir Biotech operates a closed-loop production and distribution
              model — transforming discarded organic materials into affordable,
              low-emission cooking fuel, then cycling it right back into the system.
            </p>
          </div>
        </div>

        <div className="ap-hero-cut" aria-hidden="true" />
      </section>

      {/* ══ ABOUT MAIN ════════════════════════════════════════ */}
      <section className="ap-main">
        <div className="container">
          <div className="ap-main-grid">

            {/* LEFT: Image */}
            <div
              className={`ap-img-col ${imgIn ? "is-in" : ""}`}
              ref={imgRef}
            >
              <div className="ap-frame-accent" aria-hidden="true" />

              <div className="ap-image-wrapper">
                <div className="ap-image-container">
                  <img src={aboutImage} alt="Elixir Biotech clean cooking solutions" />
                  <div className="ap-img-overlay" aria-hidden="true" />
                </div>

                {/* Primary badge */}
                <div className="ap-badge ap-badge-primary">
                  <span className="ap-badge-number">
                    110<span className="ap-badge-plus">+</span>
                  </span>
                  <span className="ap-badge-text">Households<br />Served</span>
                </div>

                {/* Secondary chip */}
                <div className="ap-badge ap-badge-chip">
                  <span className="ap-chip-dot" aria-hidden="true" />
                  <span>Est. Nairobi, Kenya</span>
                </div>
              </div>

              <div className="ap-side-bar" aria-hidden="true" />
            </div>

            {/* RIGHT: Content */}
            <div
              className={`ap-content-col ${contentIn ? "is-in" : ""}`}
              ref={contentRef}
            >
              <div className="ap-section-label">
                <span className="ap-dot ap-dot-sm" aria-hidden="true" />
                Our Mandate
              </div>

              <h2 className="ap-section-title">
                Our Vision for<br />
                <span className="ap-accent-word">
                  Cleaner Cooking
                  <span className="ap-accent-bar" aria-hidden="true" />
                </span>
              </h2>

              <p className="ap-description">
                Elixir Biotech converts organic waste into affordable bioethanol
                gel fuel — replacing charcoal, kerosene, and firewood with a
                cleaner alternative that fits the way families already cook.
              </p>

              {/* Proof points */}
              <ul className="ap-proof-list">
                {PROOF_POINTS.map((pt, i) => (
                  <li key={i} className="ap-proof-item">
                    <CheckCircle2 size={14} className="ap-check" strokeWidth={2} />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Vision / Mission cards */}
              <div className="ap-cards">
                {MANDATE_CARDS.map((card, i) => (
                  <div
                    key={i}
                    className="ap-card"
                    style={{ "--ci": i } as React.CSSProperties}
                  >
                    <div className="ap-card-header">
                      <div className="ap-card-icon">{card.icon}</div>
                      <h3 className="ap-card-title">{card.title}</h3>
                    </div>
                    <p className="ap-card-text">{card.text}</p>
                    <span className="ap-card-line" aria-hidden="true" />
                  </div>
                ))}
              </div>

              <Link to="/contact" className="ap-cta">
                <span>Partner With Us</span>
                <ArrowRight size={15} className="ap-cta-arrow" />
                <span className="ap-cta-shimmer" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THE CHALLENGE ═════════════════════════════════════ */}
      <section className="ap-challenge">
        <div className="ap-challenge-grid-bg" aria-hidden="true" />
        <div className="ap-challenge-glow"    aria-hidden="true" />

        <div className="container">
          <div
            className={`ap-challenge-header ${challengeIn ? "is-in" : ""}`}
            ref={challengeRef}
          >
            <div className="ap-section-label ap-label-light">
              <span className="ap-dot" aria-hidden="true" />
              The Challenge
            </div>
            <h2 className="ap-challenge-title">
              Why We Must{" "}
              <span className="ap-title-accent-light">
                Act Now
                <span className="ap-title-bar" aria-hidden="true" />
              </span>
            </h2>
            <p className="ap-challenge-subtitle">
              Three converging crises create the urgency — and the opportunity.
            </p>
          </div>

          <div className="ap-challenge-cards">
            {CHALLENGES.map((item, i) => (
              <div
                key={i}
                className={`ap-challenge-card ${challengeIn ? "is-in" : ""}`}
                style={{ "--chi": i } as React.CSSProperties}
              >
                {/* Large watermark stat */}
                <span className="ap-challenge-watermark" aria-hidden="true">
                  {item.stat}
                </span>

                <div className="ap-challenge-icon">{item.icon}</div>

                <div className="ap-challenge-stat">{item.stat}</div>
                <h3 className="ap-challenge-card-title">{item.title}</h3>
                <p className="ap-challenge-card-desc">{item.description}</p>

                <span className="ap-challenge-line" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CIRCULAR ECOSYSTEM ════════════════════════════════ */}
      <section className="ap-ecosystem">
        <div className="ap-eco-dots" aria-hidden="true" />
        <div className="ap-eco-blob"  aria-hidden="true" />

        <div className="container">
          <div
            className={`ap-eco-header ${ecoIn ? "is-in" : ""}`}
            ref={ecoRef}
          >
            <div className="ap-section-label">
              <span className="ap-dot ap-dot-sm" aria-hidden="true" />
              Our Process
            </div>
            <h2 className="ap-eco-title">
              The Circular{" "}
              <span className="ap-accent-word">
                Ecosystem
                <span className="ap-accent-bar" aria-hidden="true" />
              </span>
            </h2>
            <p className="ap-eco-subtitle">
              From waste collection to clean cooking and back again — nothing is lost.
            </p>
          </div>

          <div className="ap-eco-steps">
            {/* Animated vertical track */}
            <div
              className={`ap-eco-track ${ecoIn ? "track-draw" : ""}`}
              aria-hidden="true"
            />

            {ECOSYSTEM.map((item, i) => (
              <div
                key={i}
                className={`ap-eco-step ${ecoIn ? "is-in" : ""}`}
                style={{ "--ei": i } as React.CSSProperties}
              >
                {/* Node on the track */}
                <div className="ap-eco-node">
                  <div className="ap-eco-icon-box">{item.icon}</div>
                </div>

                {/* Content card */}
                <div className="ap-eco-card">
                  <span className="ap-eco-step-num">{item.step}</span>
                  <h3 className="ap-eco-step-title">{item.title}</h3>
                  <p className="ap-eco-step-desc">{item.description}</p>
                  <span className="ap-eco-card-line" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;