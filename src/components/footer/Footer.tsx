import "./Footer.css";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail, Phone, MapPin,
  Home, TrendingUp, Recycle, Award,
  ChevronRight, ArrowUpRight,
} from "lucide-react";
import logo from "../../assets/images/logo_tech.jpeg";

/* ── COUNT-UP HOOK ── */
function useCountUp(target: number, duration = 1800, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

/* ── STAT ITEM ── */
type StatProps = {
  icon: React.ReactNode;
  rawValue: number;
  suffix: string;
  prefix?: string;
  label: string;
  active: boolean;
};

const StatItem = ({ icon, rawValue, suffix, prefix = "", label, active }: StatProps) => {
  const count = useCountUp(rawValue, 1600, active);
  return (
    <div className="footer-stat">
      <div className="stat-icon-wrap">{icon}</div>
      <div className="stat-info">
        <span className="stat-number">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
};

/* ── FOOTER ── */
const Footer = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const STATS = [
    { icon: <Home size={28} strokeWidth={1.5} />, rawValue: 110, suffix: "+", label: "Households Served" },
    { icon: <TrendingUp size={28} strokeWidth={1.5} />, rawValue: 83, suffix: "%", label: "Repeat Customers" },
    { icon: <Recycle size={28} strokeWidth={1.5} />, rawValue: 10, suffix: "+", label: "Waste Collectors" },
    { icon: <Award size={28} strokeWidth={1.5} />, rawValue: 10200, suffix: "", prefix: "$", label: "Grant Funding Secured" },
  ];

  const NAV_LINKS = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="footer">
      {/* Decorative top border */}
      <div className="footer-top-accent" aria-hidden="true" />

      {/* ── STATS BAR ── */}
      <div className="footer-stats-bar" ref={statsRef}>
        <div className="container footer-stats-container">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} active={statsVisible} />
          ))}
        </div>
      </div>

      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="footer-main">
        {/* Decorative background elements */}
        <div className="footer-bg-circle footer-bg-circle-1" aria-hidden="true" />
        <div className="footer-bg-circle footer-bg-circle-2" aria-hidden="true" />

        <div className="container footer-grid">
          {/* ── Column 1: Brand ── */}
          <div className="footer-column footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <div className="footer-logo">
                <div className="footer-logo-img-wrap">
                  <img src={logo} alt="Elixir Biotech" className="footer-logo-img" />
                </div>
                <div className="footer-logo-text-group">
                  <span className="footer-logo-name">Elixir Biotech</span>
                  <span className="footer-logo-tagline">Life Science Solutions</span>
                </div>
              </div>
            </Link>

            <div className="footer-mission-chip">
              <span className="mission-dot" aria-hidden="true" />
              Clean fuel. Circular economy.
            </div>

            <p className="footer-description">
              Converting organic waste into affordable bioethanol gel fuel —
              replacing charcoal, kerosene, and firewood with a cleaner
              alternative that fits the way families already cook.
            </p>

            <Link to="/contact" className="footer-cta-link">
              Partner With Us <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <span className="heading-accent" aria-hidden="true" />
              Quick Links
            </h4>
            <ul className="footer-links">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>
                    <ChevronRight size={14} className="link-arrow" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact ── */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <span className="heading-accent" aria-hidden="true" />
              Contact Us
            </h4>
            <ul className="footer-contact">
              <li>
                <div className="contact-icon-wrap"><Phone size={15} /></div>
                <a href="tel:+254700000000">+254 700 000 000</a>
              </li>
              <li>
                <div className="contact-icon-wrap"><Mail size={15} /></div>
                <a href="mailto:info@elixirbiotech.com">info@elixirbiotech.com</a>
              </li>
              <li>
                <div className="contact-icon-wrap"><MapPin size={15} /></div>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Social ── */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <span className="heading-accent" aria-hidden="true" />
              Follow Us
            </h4>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="#" aria-label="Twitter / X" className="social-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
                <span>Twitter</span>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-card">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="footer-hours">
              <p className="hours-label">Office Hours</p>
              <p className="hours-value">Mon – Fri &nbsp;·&nbsp; 8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-rule" aria-hidden="true" />
        <div className="container footer-bottom-container">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Elixir Biotech. All Rights Reserved.
          </p>
          <p className="footer-made">
            Built with purpose, powered by science.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;