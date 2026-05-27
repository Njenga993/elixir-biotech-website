import { useEffect, useRef, useState } from "react";
import "./ContactSection.css";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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

const CONTACT_DETAILS = [
  {
    icon: <Phone size={18} strokeWidth={1.8} />,
    label: "Phone",
    value: "+254 105939692",
    href: "tel:+254105939692",
  },
  {
    icon: <Mail size={18} strokeWidth={1.8} />,
    label: "General Email",
    value: "info@elixirbiotech.co.ke",
    href: "mailto:info@elixirbiotech.co.ke",
  },
  {
    icon: <MapPin size={18} strokeWidth={1.8} />,
    label: "Address",
    value: "Nairobi, Kenya",
    href: null,
  },
  {
    icon: <Clock size={18} strokeWidth={1.8} />,
    label: "Working Hours",
    value: "Mon – Fri · 8:00 AM – 5:00 PM",
    href: null,
  },
];

const ContactSection = () => {
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  return (
    <section className="cs-section">
      <div className="cs-container">
        <div
          className={`cs-grid ${gridIn ? "is-in" : ""}`}
          ref={gridRef}
        >
          {/* ── LEFT: Info Panel ── */}
          <div className="cs-info-panel">
            <div className="cs-panel-accent" aria-hidden="true" />

            <div className="cs-panel-badge">
              <span className="cs-badge-dot" aria-hidden="true" />
              Basecamp Directory
            </div>

            <h2 className="cs-title">
              Let's Partner For A{" "}
              <span className="cs-title-green">
                Cleaner Future
                <span className="cs-title-green-bar" aria-hidden="true" />
              </span>
            </h2>

            <p className="cs-description">
              Elixir Biotech operates a closed-loop production and distribution
              model. Reach out to us for partnerships, distributor inquiries,
              or general support regarding our clean cooking solutions.
            </p>

            <div className="cs-details">
              {CONTACT_DETAILS.map(({ icon, label, value, href }, i) => (
                <div
                  key={i}
                  className="cs-detail-item"
                  style={{ "--cs-di": i } as React.CSSProperties}
                >
                  <div className="cs-icon-wrapper">{icon}</div>
                  <div className="cs-detail-body">
                    <span className="cs-detail-label">{label}</span>
                    {href ? (
                      <a href={href} className="cs-detail-value">{value}</a>
                    ) : (
                      <span className="cs-detail-value">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Map ── */}
          <div className="cs-map-col">
            <div className="cs-map-header">
              <MapPin size={14} />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="cs-map-wrapper">
              <iframe
                title="Elixir Biotech Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.7%2C-1.35%2C36.85%2C-1.25&layer=mapnik"
                allowFullScreen
                loading="lazy"
              />
              <div className="cs-map-overlay" aria-hidden="true" />
            </div>

            <div className="cs-footer-note">
              <span className="cs-note-dot" aria-hidden="true" />
              We typically respond within 1 – 2 business days.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;