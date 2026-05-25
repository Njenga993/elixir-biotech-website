import { useEffect, useRef, useState } from "react";
import "./ContactPage.css";
import {
  Mail, Phone, MapPin, Clock,
  ArrowRight, Briefcase, FlaskConical, PenTool, Radio,
  ChevronRight,
} from "lucide-react";

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
    value: "+254 711 965228",
    href: "tel:+254711965228",
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

const DEPARTMENTS = [
  {
    title: "Partnerships & Distribution",
    email: "partnerships@elixirbiotech.co.ke",
    description: "For distributors, ecosystem collaborators, and regional scaling inquiries.",
    icon: <Briefcase size={20} strokeWidth={1.6} />,
  },
  {
    title: "Innovation & R&D",
    email: "innovation@elixirbiotech.co.ke",
    description: "For technical data, fuel formulation queries, and pilot program insights.",
    icon: <FlaskConical size={20} strokeWidth={1.6} />,
  },
  {
    title: "Press & Media",
    email: "press@elixirbiotech.co.ke",
    description: "For journalists, story pitches, and brand asset requests.",
    icon: <PenTool size={20} strokeWidth={1.6} />,
  },
  {
    title: "General Support",
    email: "info@elixirbiotech.co.ke",
    description: "For community questions, waste collector inquiries, and general help.",
    icon: <Radio size={20} strokeWidth={1.6} />,
  },
];

const ContactPage = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroLoaded(true), 80); return () => clearTimeout(t); }, []);

  const { ref: infoRef, inView: infoIn } = useInView(0.1);
  const { ref: deptRef, inView: deptIn } = useInView(0.1);

  return (
    <main className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="hero-bg-grid"   aria-hidden="true" />
        <div className="hero-bg-glow-l" aria-hidden="true" />
        <div className="hero-bg-glow-r" aria-hidden="true" />

        <div className="container">
          <div className={`contact-hero-content ${heroLoaded ? "is-loaded" : ""}`}>

            <div className="contact-hero-badge">
              <span className="badge-dot" aria-hidden="true" />
              Get In Touch
            </div>

            <h1 className="contact-hero-title">
              <span className="hero-title-line line-1">Let's Build</span>
              <span className="hero-title-line line-2">
                Something{" "}
                <span className="title-green">
                  Together
                  <span className="title-green-bar" aria-hidden="true" />
                </span>
              </span>
            </h1>

            <p className="contact-hero-description">
              Elixir Biotech operates as a distributed network of researchers,
              engineers, and community partners. Select the appropriate station
              below to direct your communication, or use our general dispatch line.
            </p>

            <div className="contact-hero-chips">
              <a href="tel:+254711965228" className="hero-chip">
                <Phone size={13} /> +254 711 965228
              
              </a>
              <a href="mailto:info@elixirbiotech.co.ke" className="hero-chip">
                <Mail size={13} /> info@elixirbiotech.co.ke
              </a>
            </div>
          </div>
        </div>

        <div className="hero-cut" aria-hidden="true" />
      </section>

      {/* ── MAIN GRID ── */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT: Info Panel */}
            <div
              className={`contact-info-col ${infoIn ? "is-in" : ""}`}
              ref={infoRef}
            >
              <div className="info-panel">
                <div className="info-panel-accent" aria-hidden="true" />

                <div className="info-panel-header">
                  <div className="info-panel-badge">
                    <span className="badge-dot badge-dot-sm" aria-hidden="true" />
                    Basecamp Directory
                  </div>
                  <h2 className="contact-info-title">Reach Us Directly</h2>
                  <p className="contact-info-description">
                    Reach out for partnerships, distributor inquiries,
                    or general support on our clean cooking solutions.
                  </p>
                </div>

                <div className="contact-details">
                  {CONTACT_DETAILS.map(({ icon, label, value, href }, i) => (
                    <div
                      key={i}
                      className="contact-detail-item"
                      style={{ "--di": i } as React.CSSProperties}
                    >
                      <div className="contact-icon-wrapper">{icon}</div>
                      <div className="contact-detail-body">
                        <span className="contact-detail-label">{label}</span>
                        {href ? (
                          <a href={href} className="contact-detail-value">{value}</a>
                        ) : (
                          <span className="contact-detail-value">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contact-map-wrapper">
                  <div className="map-header">
                    <MapPin size={14} />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="contact-map">
                    <iframe
                      title="Elixir Biotech Location"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=36.7%2C-1.35%2C36.85%2C-1.25&layer=mapnik"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="map-overlay" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Department Cards */}
            <div
              className={`contact-departments-col ${deptIn ? "is-in" : ""}`}
              ref={deptRef}
            >
              <div className="dept-header">
                <div className="info-panel-badge">
                  <span className="badge-dot badge-dot-sm" aria-hidden="true" />
                  Direct Stations
                </div>
                <h2 className="contact-departments-title">Choose a Department</h2>
                <p className="contact-departments-description">
                  Select the team best suited to handle your inquiry for a faster, more focused response.
                </p>
              </div>

              <div className="contact-stations-grid">
                {DEPARTMENTS.map((dept, i) => (
                  <a
                    key={i}
                    href={`mailto:${dept.email}`}
                    className="contact-station-card"
                    style={{ "--si": i } as React.CSSProperties}
                  >
                    <span className="station-watermark" aria-hidden="true">0{i + 1}</span>

                    <div className="station-top">
                      <div className="station-icon-wrapper">{dept.icon}</div>
                      <ChevronRight size={16} className="station-chevron" />
                    </div>

                    <h3 className="station-title">{dept.title}</h3>
                    <p className="station-description">{dept.description}</p>

                    <span className="station-email">
                      <Mail size={12} />
                      {dept.email}
                      <ArrowRight size={13} className="email-arrow" />
                    </span>

                    <span className="station-line" aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className="dept-footer-note">
                <span className="note-dot" aria-hidden="true" />
                We typically respond within 1 – 2 business days.
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;