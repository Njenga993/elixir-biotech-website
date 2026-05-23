import "./ContactSection.css";

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Noise grain */}
      <div className="cs-noise" aria-hidden="true" />

      {/* Ghost background word */}
      <div className="cs-ghost" aria-hidden="true">
        REACH
      </div>

      <div className="container">
        <div className="cs-grid">
          {/* ── LEFT: Copy & Details ── */}
          <div className="cs-left">
            {/* Rubber stamp tag */}
            <div className="cs-stamp">
              <span>Build The Future Of Clean Cooking</span>
              <svg
                className="stamp-border"
                viewBox="0 0 320 36"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="1"
                  y="1"
                  width="318"
                  height="34"
                  rx="0"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                />
              </svg>
            </div>

            <h2>
              Expanding access to{" "}
              <mark className="cs-mark">affordable, cleaner</mark> household
              energy.
              <svg
                className="cs-heading-squiggle"
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
              Elixir Biotech is building scalable clean cooking systems rooted
              in circular economy innovation, community partnerships, and
              accessible household energy solutions. We are actively seeking
              distributors, ecosystem collaborators, pilot partners, and
              strategic supporters.
            </p>

            {/* ── Field Correspondence Details ── */}
            <div className="cs-details">
              <h3>Field Correspondence</h3>
              <ul className="cs-details-list">
                <li>
                  <span className="cs-detail-icon">
                    <Mail size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="cs-detail-label">Dispatch Email</span>
                    <a href="mailto:info@elixirbiotech.com">
                      info@elixirbiotech.com
                    </a>
                  </div>
                </li>
                <li>
                  <span className="cs-detail-icon">
                    <Phone size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="cs-detail-label">Comms Line</span>
                    <a href="tel:+254700000000">+254 700 000 000</a>
                  </div>
                </li>
                <li>
                  <span className="cs-detail-icon">
                    <MapPin size={16} strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="cs-detail-label">Basecamp</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="cs-buttons">
              <Link to="/contact" className="cs-btn-fill">
                Contact Us
              </Link>
              <Link to="/about" className="cs-btn-outline">
                Our Mission
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Pinned Map ── */}
          <div className="cs-right">
            <div className="cs-map-frame">
              {/* Tape effect */}
              <div className="cs-map-tape" aria-hidden="true" />

              {/* Map Embed - Dark themed OpenStreetMap */}
              <iframe
                title="Elixir Biotech Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.7%2C-1.35%2C36.85%2C-1.25&layer=mapnik"
                allowFullScreen
                loading="lazy"
              ></iframe>

              {/* Map Pin Overlay */}
              <div className="cs-map-pin" aria-hidden="true">
                <svg viewBox="0 0 24 36" fill="none">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12z"
                    fill="#c07840"
                    stroke="#0c1e12"
                    strokeWidth="1"
                  />
                  <circle cx="12" cy="12" r="5" fill="#f2ede0" />
                </svg>
                <span className="cs-pin-label">Nairobi Outpost</span>
              </div>

              {/* Hand-drawn corner accent */}
              <svg
                className="cs-map-corner"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;