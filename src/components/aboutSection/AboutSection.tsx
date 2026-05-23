import "./AboutSection.css";
import { useEffect, useRef, useState,  } from "react";
import type { CSSProperties } from "react";
import aboutImage from "../../assets/images/image.png";

type CSS = CSSProperties & { [key: `--${string}`]: string | number };

/* ── Scroll-reveal hook ──────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Counter hook ────────────────────────────────────────────────────── */
function useCounter(end: number, duration: number, active: boolean): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(end);
    };
    requestAnimationFrame(tick);
  }, [end, duration, active]);
  return val;
}

const FEATURES = [
  {
    n: "01",
    title: "Cleaner Indoor Air",
    body: "Reducing smoke and toxic fume exposure for healthier kitchens and homes.",
  },
  {
    n: "02",
    title: "Waste-to-Energy Innovation",
    body: "Organic waste diverted and converted into efficient bioethanol gel fuel.",
  },
  {
    n: "03",
    title: "Built For Existing Stoves",
    body: "Adaptive inserts eliminate the need to purchase expensive new equipment.",
  },
  {
    n: "04",
    title: "Community-Led Distribution",
    body: "Local refill agents and waste collectors create lasting economic opportunity.",
  },
];

const AboutSection = () => {
  const { ref: leftRef,  inView: leftIn  } = useInView(0.1);
  const { ref: rightRef, inView: rightIn } = useInView(0.1);
  const { ref: statRef,  inView: statIn  } = useInView(0.3);

  const count = useCounter(30, 1800, statIn);

  return (
    <section className="about-section">
      {/* Noise grain */}
      <div className="about-noise" aria-hidden="true" />

      {/* Ghost background word */}
      <div className="about-ghost" aria-hidden="true">CLEAN</div>

      <div className="container about-container">

        {/* ── LEFT: Photo + Stat ── */}
        <div
          ref={leftRef}
          className={`about-left ${leftIn ? "is-in" : ""}`}
        >
          {/* Polaroid-style photo */}
          <div className="polaroid">
            <div className="polaroid-frame">
              <img
                src={aboutImage}
                alt="Organic waste processing for clean cooking energy"
              />
            </div>
            {/* Hand-drawn bracket accent */}
            <svg className="polaroid-bracket" viewBox="0 0 24 120" fill="none" aria-hidden="true">
              <path d="M20 4 L4 4 L4 116 L20 116" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Stat sticky-note */}
          <div ref={statRef} className="stat-note">
            <span className="stat-note-num">
              {count}<span className="stat-note-suffix">M+</span>
            </span>
            <p>People in Kenya still rely on harmful cooking fuels daily.</p>
            {/* Hand-drawn underline */}
            <svg className="stat-underline" viewBox="0 0 180 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 4 Q22 0 44 4 Q66 8 88 4 Q110 0 132 4 Q154 8 180 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Decorative ruled lines — notebook feel */}
          <div className="notebook-lines" aria-hidden="true">
            <span /><span /><span />
          </div>
        </div>

        {/* ── RIGHT: Copy + Features ── */}
        <div
          ref={rightRef}
          className={`about-right ${rightIn ? "is-in" : ""}`}
        >
          {/* Rubber stamp tag */}
          <div className="section-stamp">
            <span>Rethinking Everyday Cooking</span>
            <svg className="stamp-border" viewBox="0 0 220 38" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="218" height="36" rx="0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3"/>
            </svg>
          </div>

          <h2 className="about-heading">
            <span className="ah-line" style={{ "--d": "0.05s" } as CSS}>Clean cooking should be</span>
            <span className="ah-line ah-marked" style={{ "--d": "0.2s" } as CSS}>
              <mark className="word-mark">affordable,</mark>{" "}
              <mark className="word-mark">safe,</mark>
            </span>
            <span className="ah-line" style={{ "--d": "0.35s" } as CSS}>
              and accessible to every household.
            </span>
          </h2>

          <div className="about-body">
            <p style={{ "--d": "0.45s" } as CSS}>
              Across many African communities, cooking still depends on charcoal, kerosene, and firewood — fuels that are expensive, harmful to health, and destructive to the environment.
            </p>
            <p style={{ "--d": "0.55s" } as CSS}>
              Elixir Biotech builds a cleaner alternative through waste-derived bioethanol gel fuel designed for modern African households — transforming organic waste into practical cooking energy that fits naturally into existing routines.
            </p>
          </div>

          {/* Journal-style feature list */}
          <ul className="feature-journal" role="list">
            {FEATURES.map((f, i) => (
              <li
                key={f.n}
                className="feature-entry"
                style={{ "--fi": i } as CSS}
              >
                <span className="feature-ghost-num" aria-hidden="true">{f.n}</span>
                <div className="feature-content">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;