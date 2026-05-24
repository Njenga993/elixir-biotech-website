import "./ProcessSection.css";

import { useRef, useEffect, useState } from "react";
import { Truck, FlaskConical, Recycle } from "lucide-react";

const processSteps = [
  {
    title: "Waste Sourcing",
    description: "Organic and high-cellulose waste materials are sourced through local waste collectors and community partnerships, diverting waste from landfills.",
    icon: <Truck size={48} strokeWidth={1.5} />
  },
  {
    title: "Fuel Conversion",
    description: "Collected biomass undergoes controlled microbial fermentation and distillation to produce our clean-burning, non-spill bioethanol gel.",
    icon: <FlaskConical size={48} strokeWidth={1.5} />
  },
  {
    title: "Community Refill",
    description: "Refillable packaging and local micro-entrepreneurs ensure that clean fuel access is affordable, practical, and continuously circular.",
    icon: <Recycle size={48} strokeWidth={1.5} />
  }
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      <div className="container">
        <div className="process-heading">
          <span className="process-subtitle">Our Process</span>
          <h2 className="process-title">
            From Waste to Clean <br />
            Household Energy
          </h2>
          <p className="process-description">
            Elixir Biotech operates a closed-loop production and distribution 
            model—transforming discarded organic materials into affordable, 
            low-emission cooking fuel, then cycling it right back into the system.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div
              className="process-card"
              key={index}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className="process-card-image">
                <div className="process-card-image-placeholder">
                  <span className="process-card-icon">{step.icon}</span>
                </div>
              </div>
              <div className="process-card-content">
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-description">{step.description}</p>
                <a href="/products" className="process-card-link">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;