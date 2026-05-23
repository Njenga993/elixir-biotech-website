import "./ProcessSection.css";
import { useRef, useEffect, useState } from "react";

const processSteps = [
  {
    number: "01",
    title: "Waste Sourcing",
    description:
      "Organic and high-cellulose waste materials are sourced through local waste collectors and community partnerships, diverting waste from landfills.",
  },
  {
    number: "02",
    title: "Fermentation",
    description:
      "Collected biomass undergoes controlled microbial fermentation to prepare ethanol extraction from the organic material.",
  },
  {
    number: "03",
    title: "Distillation & Purification",
    description:
      "The ethanol is distilled, sterilized, and refined to meet safety standards and ensure clean, efficient combustion.",
  },
  {
    number: "04",
    title: "Gel Formulation",
    description:
      "Refined bioethanol is transformed into a stable, non-spill gel fuel designed for safer household handling and extended burn time.",
  },
  {
    number: "05",
    title: "Refill & Distribution",
    description:
      "Fuel is packaged into refillable containers and distributed through local micro-entrepreneurs and smart refill stations.",
  },
  {
    number: "06",
    title: "Household Use & Return",
    description:
      "Customers cook on existing stoves using adaptive inserts, then return empty containers for affordable, accessible refills.",
  },
];

const ProcessSection = () => {
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
      className={`process-section ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      {/* Noise grain */}
      <div className="ps-noise" aria-hidden="true" />

      {/* Ghost background word */}
      <div className="ps-ghost" aria-hidden="true">
        CYCLE
      </div>

      <div className="container">
        <div className="ps-heading">
          {/* Rubber stamp tag */}
          <div className="ps-stamp">
            <span>Circular Energy Ecosystem</span>
            <svg
              className="stamp-border"
              viewBox="0 0 260 36"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="258"
                height="34"
                rx="0"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
            </svg>
          </div>

          <h2>
            From organic waste to{" "}
            <mark className="ps-mark">clean household</mark> energy
            <svg
              className="ps-heading-squiggle"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </h2>

          <p>
            Elixir Biotech operates a closed-loop production and distribution
            model—transforming discarded organic materials into affordable,
            low-emission cooking fuel, then cycling the packaging right back into
            the system.
          </p>
        </div>

        <div className="ps-grid">
          {processSteps.map((step, i) => (
            <div
              className="ps-card"
              key={step.number}
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="ps-card-num">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>

              {/* ── Schematic Flow Arrows ── */}
              {i === 0 || i === 1 ? (
                <svg
                  className="flow-arrow arrow-right"
                  viewBox="0 0 40 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 10 L30 10 M25 5 L30 10 L25 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : i === 2 ? (
                <svg
                  className="flow-arrow arrow-down"
                  viewBox="0 0 20 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 0 L10 30 M5 25 L10 30 L15 25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : i === 5 || i === 4 ? (
                <svg
                  className="flow-arrow arrow-left"
                  viewBox="0 0 40 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M40 10 L10 10 M15 5 L10 10 L15 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : i === 3 ? (
                <svg
                  className="flow-arrow arrow-down"
                  viewBox="0 0 20 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 0 L10 30 M5 25 L10 30 L15 25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </div>
          ))}
        </div>

        {/* ── Closing the Loop Element ── */}
        <div className="ps-loop">
          <div className="ps-loop-icon" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none">
              <path
                d="M50 15 A35 35 0 1 1 25 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5 3"
                fill="none"
              />
              <path
                d="M20 25 L25 30 L30 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="ps-loop-content">
            <span className="ps-loop-label">Closing the Loop</span>
            <p>
              Returned containers and residual waste are fed directly back into
              Step 1, creating a zero-waste, continuously regenerating energy
              cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;