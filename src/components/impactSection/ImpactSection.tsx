import "./ImpactSection.css";

import { useRef, useEffect, useState } from "react";

const impactStats = [
  {
    value: "110+",
    label: "Customers Reached",
    description:
      "Households actively using Elixir Gel Fuel in their daily cooking routines.",
  },
  {
    value: "83%",
    label: "Repeat Customers",
    description:
      "Strong product retention indicating real, everyday household adoption.",
  },
  {
    value: "$10.2k",
    label: "Grant Funding Secured",
    description:
      "Backed by innovation and circular economy programs validating our model.",
  },
  {
    value: "10+",
    label: "Waste Collectors",
    description:
      "Local partners formally integrated into the circular supply chain.",
  },
  {
    value: "90%",
    label: "Purchase Intent",
    description:
      "Pilot users expressed high willingness to transition to our fuel permanently.",
  },
  {
    value: "Top 3",
    label: "Incubator Recognition",
    description:
      "Ranked among leading clean innovation startups in the region.",
  },
];

const ImpactSection = () => {
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
      className={`impact-section ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      {/* Noise grain */}
      <div className="im-noise" aria-hidden="true" />

      {/* Ghost background word */}
      <div className="im-ghost" aria-hidden="true">
        DATA
      </div>

      <div className="container">
        <div className="im-heading">
          {/* Rubber stamp tag */}
          <div className="im-stamp">
            <span>Impact & Traction</span>
            <svg
              className="stamp-border"
              viewBox="0 0 200 36"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="1"
                y="1"
                width="198"
                height="34"
                rx="0"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 3"
              />
            </svg>
          </div>

          <h2>
            Measurable progress toward a{" "}
            <mark className="im-mark">cleaner cooking</mark> future
            <svg
              className="im-heading-squiggle"
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
            Elixir Biotech is transitioning from prototype development to
            real-world adoption, validated through customer engagement, pilot
            testing, funding support, and ecosystem partnerships.
          </p>
        </div>

        <div className="im-grid">
          {impactStats.map((item, index) => (
            <div
              className="impact-ticket"
              key={index}
              style={{ "--i": index } as React.CSSProperties}
            >
              {/* Pin/Tape element */}
              <div className="ticket-tape" aria-hidden="true" />

              <h3>{item.value}</h3>
              <h4>{item.label}</h4>

              {/* Hand-drawn squiggle divider */}
              <svg
                className="ticket-squiggle"
                viewBox="0 0 60 6"
                aria-hidden="true"
              >
                <path
                  d="M0 3 Q7 0 15 3 Q22 6 30 3 Q37 0 45 3 Q52 6 60 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              <p>{item.description}</p>

              {/* Hand-drawn corner accent */}
              <svg
                className="ticket-corner"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 26 Q2 2 26 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;