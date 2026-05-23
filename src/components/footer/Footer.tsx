import "./Footer.css";

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

import logo from "../../assets/images/logo_tech.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ── SVG LANDSCAPE HORIZON ── */}
      <div className="footer-horizon" aria-hidden="true">
        <svg viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
          {/* Back hill */}
          <path
            d="M0 180V120C120 95 240 80 360 70C480 60 600 65 720 75C840 85 960 95 1080 88C1200 81 1320 70 1440 60V180H0Z"
            fill="rgba(26, 58, 37, 0.4)"
          />
          {/* Front hill */}
          <path
            d="M0 180V140C180 110 360 95 540 100C720 105 900 120 1080 110C1260 100 1440 90 1440 90V180H0Z"
            fill="rgba(26, 58, 37, 0.7)"
          />
          {/* Tree silhouettes (hand-drawn pines) */}
          <g fill="#1a2e24" opacity="0.9">
            <polygon points="120,100 130,60 140,100" />
            <polygon points="150,105 162,55 174,105" />
            <polygon points="190,100 200,65 210,100" />
            
            <polygon points="800,110 812,60 824,110" />
            <polygon points="850,108 860,68 870,108" />
            
            <polygon points="1200,95 1212,45 1224,95" />
            <polygon points="1250,100 1260,55 1270,100" />
            <polygon points="1280,98 1290,60 1300,98" />
          </g>
          {/* Ground line */}
          <path d="M0 160 Q360 148 720 156 Q1080 164 1440 150" stroke="rgba(106, 170, 132, 0.15)" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="footer-content">
        {/* Compass Watermark */}
        <div className="footer-compass" aria-hidden="true">
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="4" fill="currentColor"/>
            {/* Points */}
            <path d="M100 10 L104 25 L100 22 L96 25 Z" fill="currentColor"/>
            <path d="M100 190 L104 175 L100 178 L96 175 Z" fill="currentColor"/>
            <path d="M10 100 L25 96 L22 100 L25 104 Z" fill="currentColor"/>
            <path d="M190 100 L175 96 L178 100 L175 104 Z" fill="currentColor"/>
            {/* Cross lines */}
            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4"/>
            <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4"/>
          </svg>
        </div>

        <div className="container footer-grid">
          {/* ── Brand Column (The Stamp) ── */}
          <div className="footer-brand">
            <div className="brand-stamp">
              {/* Hand-drawn border frame */}
              <svg className="stamp-frame" viewBox="0 0 240 110" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="238" height="108" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" rx="0"/>
              </svg>
              <div className="stamp-inner">
                <div className="footer-logo">
                  <img src={logo} alt="Elixir Biotech" />
                </div>
                <p className="footer-tagline">Transforming Waste into Wealth</p>
              </div>
            </div>
            <p className="footer-description">
              Pioneering clean cooking solutions and circular economy practices 
              to build climate-smart communities across Africa.
            </p>
            {/* Decorative squiggle */}
            <svg className="footer-squiggle" viewBox="0 0 120 8" aria-hidden="true">
              <path d="M0 4 Q15 0 30 4 Q45 8 60 4 Q75 0 90 4 Q105 8 120 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          {/* ── Navigation Column ── */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="field-list">
              <li><Link to="/about"><span className="fl-num" aria-hidden="true">01</span>Our Mission</Link></li>
              <li><Link to="/products"><span className="fl-num" aria-hidden="true">02</span>Clean Fuel</Link></li>
              <li><Link to="/about"><span className="fl-num" aria-hidden="true">03</span>Circular Economy</Link></li>
              <li><Link to="/contact"><span className="fl-num" aria-hidden="true">04</span>Partner With Us</Link></li>
            </ul>
          </div>

          {/* ── Resources Column ── */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="field-list">
              <li><Link to="/"><span className="fl-num" aria-hidden="true">05</span>Impact Report</Link></li>
              <li><Link to="/"><span className="fl-num" aria-hidden="true">06</span>Clean Cooking Standards</Link></li>
              <li><Link to="/"><span className="fl-num" aria-hidden="true">07</span>Waste Collection</Link></li>
              <li><Link to="/"><span className="fl-num" aria-hidden="true">08</span>FAQ</Link></li>
            </ul>
          </div>

          {/* ── Contact Column ── */}
          <div className="footer-column">
            <h4>Field Notes</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-icon">
                  <Mail size={14} strokeWidth={1.5} />
                </span>
                <a href="mailto:info@elixirbiotech.com">info@elixirbiotech.com</a>
              </li>
              <li>
                <span className="contact-icon">
                  <Phone size={14} strokeWidth={1.5} />
                </span>
                <a href="tel:+254700000000">+254 700 000 000</a>
              </li>
              <li>
                <span className="contact-icon">
                  <MapPin size={14} strokeWidth={1.5} />
                </span>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR (Archival Ticket) ── */}
      <div className="footer-bottom">
        {/* Torn paper edge effect */}
        <div className="torn-edge" aria-hidden="true">
          <svg viewBox="0 0 1200 20" fill="none" preserveAspectRatio="none">
            <path d="M0 20 V8 Q30 2 60 8 Q90 14 120 8 Q150 2 180 8 Q210 14 240 8 Q270 2 300 8 Q330 14 360 8 Q390 2 420 8 Q450 14 480 8 Q510 2 540 8 Q570 14 600 8 Q630 2 660 8 Q690 14 720 8 Q750 2 780 8 Q810 14 840 8 Q870 2 900 8 Q930 14 960 8 Q990 2 1020 8 Q1050 14 1080 8 Q1110 2 1140 8 Q1170 14 1200 8 V20 Z" fill="#1f3a2e"/>
          </svg>
        </div>

        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Elixir Biotech. All rights reserved.</p>
          
          <div className="footer-bottom-links">
            <Link to="/">Privacy Policy</Link>
            <span className="footer-divider-dot"></span>
            <Link to="/">Terms of Service</Link>
          </div>

          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social"
          >
            LinkedIn <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;