import "./ImpactSection.css";
import { useRef, useEffect, useState } from "react";
import { Home, TrendingUp, Recycle, Award } from "lucide-react";

const impactStats = [
  {
    value: "110+",
    label: "Households Served",
    icon: <Home size={28} strokeWidth={1.5} />
  },
  {
    value: "83%",
    label: "Repeat Customers",
    icon: <TrendingUp size={28} strokeWidth={1.5} />
  },
  {
    value: "10+",
    label: "Waste Collectors",
    icon: <Recycle size={28} strokeWidth={1.5} />
  },
  {
    value: "$10.2k",
    label: "Grant Funding Secured",
    icon: <Award size={28} strokeWidth={1.5} />
  }
];

const ImpactSection = () => {
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
      className={`impact-section ${isVisible ? "is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="impact-grid">
          {impactStats.map((item, index) => (
            <div
              className="impact-stat"
              key={index}
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className="impact-icon-wrapper">
                <span className="impact-icon">{item.icon}</span>
              </div>
              <div className="impact-content">
                <span className="impact-number">{item.value}</span>
                <span className="impact-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;