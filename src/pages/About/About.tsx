import "./AboutPage.css";
import { Link } from "react-router-dom";
import aboutImage from "../../assets/images/image.png";
import { Wind, Trash2, Zap, Truck, FlaskConical, Recycle, ArrowRight } from "lucide-react";

const CHALLENGES = [
  {
    icon: <Wind size={28} strokeWidth={1.5} />,
    stat: "4M+",
    title: "Indoor Air Pollution",
    description: "Premature deaths annually across Africa linked to household air pollution from solid fuels."
  },
  {
    icon: <Trash2 size={28} strokeWidth={1.5} />,
    stat: "60%+",
    title: "Untreated Organic Waste",
    description: "Of urban waste in Kenya is organic, largely diverted to overflowing landfills."
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    stat: "80%+",
    title: "Energy Insecurity",
    description: "Of Sub-Saharan Africans still rely on costly, hazardous fuels like charcoal and kerosene."
  }
];

const ECOSYSTEM = [
  {
    step: "01",
    title: "Waste Sourcing",
    description: "Organic waste materials are sourced through local waste collectors and community partnerships.",
    icon: <Truck size={24} strokeWidth={1.5} />
  },
  {
    step: "02",
    title: "Fuel Conversion",
    description: "Collected biomass undergoes controlled fermentation and distillation to produce clean-burning gel.",
    icon: <FlaskConical size={24} strokeWidth={1.5} />
  },
  {
    step: "03",
    title: "Community Refill",
    description: "Refillable packaging and local micro-entrepreneurs ensure clean fuel access is affordable and circular.",
    icon: <Recycle size={24} strokeWidth={1.5} />
  }
];

const AboutPage = () => {
  return (
    <main className="about-page">
      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="about-hero-subtitle">About Elixir Biotech</span>
            <h1 className="about-hero-title">
              Pioneering the Future <br />
              of Clean Cooking
            </h1>
            <p className="about-hero-description">
              Elixir Biotech operates a closed-loop production and distribution 
              model—transforming discarded organic materials into affordable, 
              low-emission cooking fuel, then cycling it right back into the system.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT MAIN ── */}
      <section className="about-main">
        <div className="container">
          <div className="about-grid">
            
            {/* ── LEFT: Image with Badge ── */}
            <div className="about-image-col">
              <div className="about-image-wrapper">
                <div className="about-image-container">
                  <img src={aboutImage} alt="Elixir Biotech clean cooking solutions" />
                  <div className="about-green-strip"></div>
                </div>
                
                {/* Badge overlay */}
                <div className="about-badge">
                  <span className="badge-number">110</span>
                  <span className="badge-plus">+</span>
                  <span className="badge-text">Households Served</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Content ── */}
            <div className="about-content-col">
              <span className="about-label">Our Mandate</span>
              
              <h2 className="about-title">
                Our Vision for <br />
                Cleaner Cooking
              </h2>
              
              <p className="about-description">
                Elixir Biotech converts organic waste into affordable bioethanol 
                gel fuel—replacing charcoal, kerosene, and firewood with a cleaner 
                alternative that fits the way families already cook.
              </p>

              {/* Vision Card */}
              <div className="about-card">
                <h3 className="about-card-title">Our Vision</h3>
                <p className="about-card-text">
                  A future where African biotech innovations lead globally in clean 
                  energy, waste valorization, and community-driven climate solutions.
                </p>
              </div>

              {/* Mission Card */}
              <div className="about-card">
                <h3 className="about-card-title">Our Mission</h3>
                <p className="about-card-text">
                  To harness biotechnology and circular design to convert everyday 
                  challenges into sustainable solutions that improve health, energy, 
                  and livelihoods across Africa.
                </p>
              </div>

              {/* CTA Button */}
              <Link to="/contact" className="about-cta">
                Partner With Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CHALLENGE ── */}
      <section className="about-challenge-section">
        <div className="container">
          <div className="challenge-header">
            <span className="challenge-subtitle">The Challenge</span>
            <h2 className="challenge-title">
              Why We Must <br />
              Act Now
            </h2>
          </div>

          <div className="challenge-grid">
            {CHALLENGES.map((item, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-icon-wrapper">
                  {item.icon}
                </div>
                <span className="challenge-stat">{item.stat}</span>
                <h3 className="challenge-card-title">{item.title}</h3>
                <p className="challenge-card-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIRCULAR ECOSYSTEM ── */}
      <section className="about-ecosystem-section">
        <div className="container">
          <div className="ecosystem-header">
            <span className="ecosystem-subtitle">Our Process</span>
            <h2 className="ecosystem-title">
              The Circular <br />
              Ecosystem
            </h2>
            <p className="ecosystem-description">
              From waste collection to clean cooking and back again—nothing is lost.
            </p>
          </div>

          <div className="ecosystem-steps">
            {ECOSYSTEM.map((item, index) => (
              <div key={index} className="ecosystem-step">
                <div className="step-icon-box">
                  {item.icon}
                </div>
                <div className="step-content">
                  <span className="step-number">{item.step}</span>
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-desc">{item.description}</p>
                </div>
                {index < ECOSYSTEM.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;