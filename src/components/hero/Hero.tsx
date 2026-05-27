import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../../assets/images/image2.png";

// 👇 IMPORT YOUR 3 CARD IMAGES HERE
// Ensure these files exist in src/assets/images/
import cardImage1 from "../../assets/images/waste.jpeg";
import cardImage2 from "../../assets/images/image2.png";
import cardImage3 from "../../assets/images/gel.jpeg";

import { Truck, FlaskConical, ShieldCheck, ChevronDown, ArrowRight } from "lucide-react";

// ── Type Definition for Cards ────────────────────────
interface CardProps {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string; // New property for the image
}

const FLOATING_CARDS: CardProps[] = [
  {
    num: "01",
    title: "Waste Sourcing",
    description:
      "Organic waste materials are sourced through local collectors, diverting waste from landfills into productive use.",
    icon: <Truck size={22} strokeWidth={1.5} />,
    image: cardImage1,
  },
  {
    num: "02",
    title: "Bioethanol Production",
    description:
      "Collected biomass undergoes controlled microbial fermentation to produce clean, efficient combustion gel.",
    icon: <FlaskConical size={22} strokeWidth={1.5} />,
    image: cardImage2,
  },
  {
    num: "03",
    title: "Safe Household Use",
    description:
      "Non-spill gel fuel designed for safer household handling, replacing toxic charcoal and kerosene.",
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    image: cardImage3,
  },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollToCards = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero">
      {/* ── BACKGROUND ── */}
      <div className="hero-background" aria-hidden="true">
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="" />
        </div>
        {/* Layered overlays for depth */}
        <div className="hero-overlay hero-overlay-base" />
        <div className="hero-overlay hero-overlay-left" />
        <div className="hero-overlay hero-overlay-bottom" />
        {/* Ambient green tint at bottom-left to connect with cards */}
        <div className="hero-overlay hero-overlay-green" />
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="hero-content">
        <div className="container hero-container">
          <div className={`hero-text ${loaded ? "is-loaded" : ""}`}>
            
            {/* Badge */}
            <div className="hero-badge">
              <span className="badge-dot" aria-hidden="true" />
              Welcome to Elixir Biotech
            </div>

            {/* Title */}
            <h1 className="hero-title">
              <span className="title-line title-line-1">Innovative Solutions</span>
              <span className="title-line title-line-2">
                for{" "}
                <span className="title-accent">
                  Cleaner
                  <span className="title-accent-bar" aria-hidden="true" />
                </span>{" "}
                Cooking
              </span>
            </h1>

            <p className="hero-description">
              Elixir Biotech converts organic waste into affordable bioethanol
              gel fuel — replacing charcoal, kerosene, and firewood with a
              cleaner alternative that fits the way families already cook.
            </p>

            {/* Dual CTA */}
            <div className="hero-ctas">
              <Link to="/products" className="hero-cta hero-cta-primary">
                <span>Explore Products</span>
                <ArrowRight size={16} className="cta-arrow" />
                <span className="cta-shimmer" aria-hidden="true" />
              </Link>
              <Link to="/about" className="hero-cta hero-cta-ghost">
                Our Story
              </Link>
            </div>

            {/* Trust line */}
            <div className="hero-trust">
              <span className="trust-dot" aria-hidden="true" />
              <span>110+ households &nbsp;·&nbsp; Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Scroll nudge */}
        <button
          className={`hero-scroll-btn ${loaded ? "is-loaded" : ""}`}
          onClick={scrollToCards}
          aria-label="Scroll to learn more"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      {/* ── FLOATING CARDS ── */}
      <div className="hero-cards-section" ref={cardsRef}>
        <div className="container">
          <div className="hero-cards-grid">
            {FLOATING_CARDS.map((card, i) => (
              <div
                key={i}
                className={`hero-card ${cardsVisible ? "card-visible" : ""}`}
                style={{ "--card-i": i } as React.CSSProperties}
              >
                {/* Step number watermark */}
                <span className="card-watermark" aria-hidden="true">
                  {card.num}
                </span>

                {/* ── ADDED IMAGE CONTAINER ── */}
                <div className="hero-card-image-wrapper">
                  <img src={card.image} alt={card.title} className="hero-card-img" />
                </div>

                <div className="hero-card-icon">
                  <span className="icon-wrapper">{card.icon}</span>
                </div>

                <div className="card-num-badge">{card.num}</div>
                <h3 className="hero-card-title">{card.title}</h3>
                <p className="hero-card-desc">{card.description}</p>

                {/* Animated bottom accent line */}
                <span className="card-accent-line" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}