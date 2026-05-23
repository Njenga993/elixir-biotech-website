import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import "./Hero.css";
import heroImage from "../../assets/images/image2.png";

// Extends CSSProperties to allow CSS custom properties (--var)
type CSS = CSSProperties & { [key: `--${string}`]: string | number };

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

const LEAVES = Array.from({ length: 11 }, (_, i) => ({
  id: i,
  left: 3 + i * 8.5,
  delay: i * 1.3,
  dur: 13 + (i % 4) * 3,
  size: 5 + (i % 3) * 3,
  rotate: (i % 2 === 0 ? 1 : -1) * (20 + (i % 3) * 15),
}));

const PRINCIPLES = [
  {
    n: "01",
    title: "Clean Energy",
    body: "Burns without smoke, soot, or toxic fumes — safer air for every household.",
    tilt: "-2.2deg",
  },
  {
    n: "02",
    title: "Circular Economy",
    body: "Organic waste diverted from landfills, repurposed into fuel — nothing wasted.",
    tilt: "1.4deg",
  },
  {
    n: "03",
    title: "Climate Smart",
    body: "Replacing charcoal with waste-derived fuel. Measurable carbon reduction.",
    tilt: "-0.8deg",
  },
];

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 250);
    return () => clearTimeout(t);
  }, []);

  const c1 = useCounter(110, 2400, ready);
  const c2 = useCounter(83, 2000, ready);
  const c3 = useCounter(10, 1500, ready);

  return (
    <section className="hero">
      {/* ── BACKGROUND LAYER ── */}
      <div className="hero-noise" aria-hidden="true" />

      {/* Giant ghost word */}
      <div className="hero-ghost-word" aria-hidden="true">
        WASTE
      </div>

      {/* Rotating orbit rings */}
      <div className="hero-orbit" aria-hidden="true">
        <svg viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="260" stroke="currentColor" strokeDasharray="11 9" strokeWidth="1.2" />
          <circle cx="300" cy="300" r="185" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="108" stroke="currentColor" strokeDasharray="5 14" strokeWidth="1.2" />
          {/* Arrow markers on the outer ring */}
          <path d="M300 40 L307 55 L300 52 L293 55 Z" fill="currentColor" />
          <path d="M560 300 L545 307 L548 300 L545 293 Z" fill="currentColor" />
          <path d="M300 560 L293 545 L300 548 L307 545 Z" fill="currentColor" />
          <path d="M40 300 L55 293 L52 300 L55 307 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Floating leaves */}
      <div className="leaves-layer" aria-hidden="true">
        {LEAVES.map((l) => (
          <span
            key={l.id}
            className="leaf"
            style={{
              left: `${l.left}%`,
              width: `${l.size}px`,
              height: `${l.size * 1.6}px`,
              animationDelay: `${l.delay}s`,
              animationDuration: `${l.dur}s`,
              "--rot": `${l.rotate}deg`,
            } as CSS}
          />
        ))}
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="hero-grid">
        {/* LEFT PANEL */}
        <div className={`hero-left ${ready ? "is-in" : ""}`}>
          <p className="eyebrow">
            <span>Clean Energy</span>
            <em />
            <span>Circular Economy</span>
            <em />
            <span>Climate Smart</span>
          </p>

          <h1 className="headline">
            <span className="hl" style={{ "--d": "0.05s" } as CSS}>
              Turning
            </span>
            <span className="hl hl-accented" style={{ "--d": "0.2s" } as CSS}>
              Yesterday's{" "}
              <mark className="mark-sage">
                Waste
                <svg className="squiggle" viewBox="0 0 120 10" preserveAspectRatio="none">
                  <path d="M0 5 Q15 0 30 5 Q45 10 60 5 Q75 0 90 5 Q105 10 120 5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </mark>
            </span>
            <span className="hl" style={{ "--d": "0.35s" } as CSS}>
              Into Tomorrow's
            </span>
            <span className="hl hl-big" style={{ "--d": "0.5s" } as CSS}>
              <mark className="mark-box">Clean Fuel</mark>
            </span>
          </h1>

          <p className="body-text" style={{ "--d": "0.65s" } as CSS}>
            Elixir Biotech converts organic waste into affordable bioethanol
            gel fuel — replacing charcoal, kerosene, and firewood with a
            cleaner alternative that fits the way families already cook.
          </p>

          <div className="cta-row" style={{ "--d": "0.8s" } as CSS}>
            <button className="btn-fill">Explore Products</button>
            <button className="btn-outline">Our Approach</button>
          </div>

          <div className="stats-row" style={{ "--d": "0.95s" } as CSS}>
            <div className="stat">
              <strong>
                {c1}
                <sup>+</sup>
              </strong>
              <span>Households Served</span>
            </div>
            <div className="stat-rule" />
            <div className="stat">
              <strong>{c2}<sup>%</sup></strong>
              <span>Repeat Customers</span>
            </div>
            <div className="stat-rule" />
            <div className="stat">
              <strong>{c3}<sup>+</sup></strong>
              <span>Collectors Employed</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="hero-right">
          {/* Photo with organic clip */}
          <div className="photo-frame">
            <img src={heroImage} alt="Elixir Biotech — clean fuel for African homes" />
            <div className="photo-scrim" />
          </div>

          {/* Staggered principle cards */}
          <div className={`cards-pile ${ready ? "is-in" : ""}`}>
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                className="principle-card"
                style={{
                  "--tilt": p.tilt,
                  "--ci": i,
                } as CSS}
              >
                <span className="card-num">{p.n}</span>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
                {/* Hand-drawn corner accent */}
                <svg className="card-corner" viewBox="0 0 28 28" fill="none">
                  <path d="M2 26 Q2 2 26 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TICKER TAPE ── */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="ticker-item">
              Waste <span className="ticker-arrow">→</span> Fuel
              <span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}