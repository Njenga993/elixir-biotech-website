import "./ProcessSection.css";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Truck, FlaskConical, Recycle, ArrowRight, ChevronRight } from "lucide-react";

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

const STEPS = [
  {
    num: "01",
    title: "Waste Sourcing",
    description:
      "Organic and high-cellulose waste materials are sourced through local waste collectors and community partnerships, diverting waste from landfills.",
    icon: <Truck size={36} strokeWidth={1.4} />,
    detail: "10+ active collectors",
  },
  {
    num: "02",
    title: "Fuel Conversion",
    description:
      "Collected biomass undergoes controlled microbial fermentation and distillation to produce our clean-burning, non-spill bioethanol gel.",
    icon: <FlaskConical size={36} strokeWidth={1.4} />,
    detail: "Lab-grade fermentation",
  },
  {
    num: "03",
    title: "Community Refill",
    description:
      "Refillable packaging and local micro-entrepreneurs ensure that clean fuel access is affordable, practical, and continuously circular.",
    icon: <Recycle size={36} strokeWidth={1.4} />,
    detail: "Closed-loop distribution",
  },
];

const ProcessSection = () => {
  const { ref: headRef, inView: headIn } = useInView(0.15);
  const { ref: gridRef, inView: gridIn } = useInView(0.10);

  return (
    <section className="ps-section">
      {/* Background */}
      <div className="ps-bg-grid"  aria-hidden="true" />
      <div className="ps-bg-glow"  aria-hidden="true" />

      <div className="container">

        {/* ── HEADING ── */}
        <div
          className={`ps-heading ${headIn ? "is-in" : ""}`}
          ref={headRef}
        >
          <div className="ps-label">
            <span className="ps-dot" aria-hidden="true" />
            Our Process
          </div>

          <h2 className="ps-title">
            From Waste to{" "}
            <span className="ps-title-accent">
              Clean Household Energy
              <span className="ps-title-bar" aria-hidden="true" />
            </span>
          </h2>

          <p className="ps-desc">
            Elixir Biotech operates a closed-loop production and distribution
            model — transforming discarded organic materials into affordable,
            low-emission cooking fuel, then cycling it right back into the system.
          </p>
        </div>

        {/* ── FLOW GRID ── */}
        <div className="ps-flow" ref={gridRef}>

          {/* Horizontal connector track (desktop) */}
          <div
            className={`ps-flow-track ${gridIn ? "track-draw" : ""}`}
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <div key={i} className="ps-flow-item">

              {/* Step card */}
              <div
                className={`ps-card ${gridIn ? "is-in" : ""}`}
                style={{ "--pi": i } as React.CSSProperties}
              >
                {/* Number watermark */}
                <span className="ps-card-watermark" aria-hidden="true">
                  {step.num}
                </span>

                {/* Icon zone */}
                <div className="ps-card-icon-zone">
                  {/* Connecting node dot on track */}
                  <div className="ps-node" aria-hidden="true" />

                  <div className="ps-icon-box">{step.icon}</div>
                </div>

                {/* Body */}
                <div className="ps-card-body">
                  <div className="ps-card-top">
                    <span className="ps-step-badge">{step.num}</span>
                    <span className="ps-step-detail">{step.detail}</span>
                  </div>

                  <h3 className="ps-card-title">{step.title}</h3>
                  <p className="ps-card-desc">{step.description}</p>

                  <Link to="/products" className="ps-card-link">
                    Learn More
                    <ChevronRight size={14} className="ps-link-arrow" />
                  </Link>
                </div>

                {/* Bottom sweep line */}
                <span className="ps-card-line" aria-hidden="true" />
              </div>

              {/* Arrow connector between cards (not after last) */}
              {i < STEPS.length - 1 && (
                <div className={`ps-connector ${gridIn ? "is-in" : ""}`}
                  style={{ "--ci": i } as React.CSSProperties}
                  aria-hidden="true"
                >
                  <div className="ps-connector-line" />
                  <ArrowRight size={16} className="ps-connector-arrow" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── FOOTER NOTE ── */}
        <div className={`ps-footer ${headIn ? "is-in" : ""}`}>
          <span className="ps-footer-dot" aria-hidden="true" />
          <span>Every step is designed to be replicable, scalable, and community-powered.</span>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;