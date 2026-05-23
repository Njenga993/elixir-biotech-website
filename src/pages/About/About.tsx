import "./AboutPage.css";
import { Wind, Recycle, Users, Leaf, FlaskConical } from "lucide-react";

const observations = [
  {
    icon: <Wind size={22} strokeWidth={1.5} />,
    title: "Indoor Air Pollution",
    stat: "4M+",
    desc: "Premature deaths annually across Africa linked to household air pollution from solid fuels.",
  },
  {
    icon: <Recycle size={22} strokeWidth={1.5} />,
    title: "Untreated Organic Waste",
    stat: "60%+",
    desc: "Of urban waste in Kenya is organic, largely diverted to overflowing landfills instead of productive use.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Energy Insecurity",
    stat: "80%+",
    desc: "Of Sub-Saharan Africans still rely on costly, hazardous fuels like charcoal and kerosene for cooking.",
  },
];

const tenets = [
  {
    title: "Ecological Integrity",
    body: "Every solution must close the loop. Waste becomes resource, leaving nothing to harm the environment.",
  },
  {
    title: "Community Autonomy",
    body: "We build systems that empower local micro-entrepreneurs, not create dependency.",
  },
  {
    title: "Radical Accessibility",
    body: "Clean energy is a right, not a luxury. Our inserts adapt to existing stoves; no expensive replacements needed.",
  },
];

const milestones = [
  { year: "2021", event: "Conceptualization of waste-to-bioethanol gel model in university lab." },
  { year: "2022", event: "First successful gel formulation and prototype insert testing." },
  { year: "2023", event: "Secured $10k+ grant funding; launched first 100-household pilot in Nairobi." },
  { year: "2024", event: "Onboarded 10+ waste collectors; achieved 83% repeat customer rate." },
];

export default function AboutPage() {
  return (
    <main className="ap-page">
      {/* Noise grain */}
      <div className="ap-noise" aria-hidden="true" />

      {/* ── HERO ── */}
      <section className="ap-hero">
        <div className="container ap-hero-content">
          <div className="ap-stamp">
            <span>The Expedition Manifesto</span>
            <svg className="stamp-border" viewBox="0 0 260 36" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="258" height="34" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3"/>
            </svg>
          </div>
          <h1>
            Charting the course to <mark className="ap-mark">clean cooking</mark>.
            <svg className="ap-heading-squiggle" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </h1>
          <p>
            Elixir Biotech isn't just a company; it's a response to an ecological and health crisis. 
            We operate at the intersection of biotechnology and community empowerment, redesigning the 
            way households interact with energy.
          </p>
        </div>
        <div className="ap-ghost" aria-hidden="true">ORIGIN</div>
      </section>

      {/* ── FIELD OBSERVATIONS (The Problem) ── */}
      <section className="ap-observations">
        <div className="container">
          <div className="ap-section-header">
            <h2>Field Observations</h2>
            <div className="ap-header-rule"></div>
          </div>

          <div className="ap-obs-grid">
            {observations.map((obs, i) => (
              <div className="ap-obs-card" key={i}>
                <div className="obs-icon-wrap">{obs.icon}</div>
                <span className="obs-stat">{obs.stat}</span>
                <h3>{obs.title}</h3>
                <p>{obs.desc}</p>
                <svg className="obs-corner" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M2 26 Q2 2 26 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENESIS LOG (The Solution) ── */}
      <section className="ap-genesis">
        <div className="container ap-genesis-grid">
          <div className="ap-genesis-content">
            <div className="ap-section-header alt">
              <h2>The Genesis Log</h2>
              <div className="ap-header-rule"></div>
            </div>
            <p>
              The hypothesis was simple: What if the waste overflowing in landfills 
              could be engineered into a clean, safe, and affordable alternative to charcoal?
            </p>
            <p>
              Through controlled microbial fermentation and advanced distillation, we convert 
              high-cellulose organic waste into a stable, non-spill bioethanol gel. Paired with 
              our adaptive stove inserts, this system transforms existing household setups into 
              modern, clean cooking stations—without the exorbitant cost of purchasing new equipment.
            </p>
          </div>

          <div className="ap-genesis-schematic">
            <div className="schematic-card">
              <div className="schematic-tape" aria-hidden="true" />
              <h4>System Schematic</h4>
              <div className="schematic-flow">
                <div className="flow-node">
                  <Recycle size={20} strokeWidth={1.5} />
                  <span>Waste</span>
                </div>
                <svg className="flow-line" viewBox="0 0 40 20" fill="none" aria-hidden="true">
                  <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flow-node">
                  <FlaskConical size={20} strokeWidth={1.5} />
                  <span>Ferment</span>
                </div>
                <svg className="flow-line" viewBox="0 0 40 20" fill="none" aria-hidden="true">
                  <path d="M0 10 L30 10 M25 5 L30 10 L25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flow-node highlight">
                  <Leaf size={20} strokeWidth={1.5} />
                  <span>Clean Fuel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MANDATE & HORIZON (Mission & Vision) ── */}
      <section className="ap-mandate">
        <div className="container">
          <div className="ap-section-header center">
            <h2>Expedition Directives</h2>
            <div className="ap-header-rule"></div>
          </div>

          <div className="ap-mandate-grid">
            <div className="ap-mandate-card">
              <div className="mandate-tape" aria-hidden="true" />
              <h3>The Mandate</h3>
              <span className="mandate-sub">Our Mission</span>
              <div className="mandate-squiggle">
                <svg viewBox="0 0 60 6" aria-hidden="true">
                  <path d="M0 3 Q7 0 15 3 Q22 6 30 3 Q37 0 45 3 Q52 6 60 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <p>
                To harness biotechnology and circular design to convert everyday 
                challenges into sustainable solutions that improve health, energy, 
                and livelihoods across Africa.
              </p>
              <svg className="mandate-bracket" viewBox="0 0 24 120" fill="none" aria-hidden="true">
                <path d="M20 4 L4 4 L4 116 L20 116" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="ap-mandate-card vision">
              <div className="mandate-tape" aria-hidden="true" />
              <h3>The Horizon</h3>
              <span className="mandate-sub">Our Vision</span>
              <div className="mandate-squiggle">
                <svg viewBox="0 0 60 6" aria-hidden="true">
                  <path d="M0 3 Q7 0 15 3 Q22 6 30 3 Q37 0 45 3 Q52 6 60 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <p>
                A future where African biotech innovations lead globally in clean 
                energy, waste valorization, and community-driven climate solutions.
              </p>
              <svg className="mandate-bracket" viewBox="0 0 24 120" fill="none" aria-hidden="true">
                <path d="M4 4 L20 4 L20 116 L4 116" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPEDITION TENETS (Values) ── */}
      <section className="ap-tenets">
        <div className="container">
          <div className="ap-section-header center alt">
            <h2>Expedition Tenets</h2>
            <div className="ap-header-rule"></div>
          </div>

          <div className="ap-tenets-grid">
            {tenets.map((tenet, i) => (
              <div className="ap-tenet-card" key={i}>
                <div className="tenet-tape" aria-hidden="true" />
                <h3>{tenet.title}</h3>
                <div className="tenet-squiggle">
                  <svg viewBox="0 0 60 6" aria-hidden="true">
                    <path d="M0 3 Q7 0 15 3 Q22 6 30 3 Q37 0 45 3 Q52 6 60 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <p>{tenet.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIELD LOG (Timeline) ── */}
      <section className="ap-log">
        <div className="container">
          <div className="ap-section-header">
            <h2>Field Log</h2>
            <div className="ap-header-rule"></div>
          </div>

          <div className="ap-timeline">
            {milestones.map((m, i) => (
              <div className="ap-timeline-entry" key={i}>
                <div className="timeline-dot"></div>
                <span className="timeline-year">{m.year}</span>
                <p>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}