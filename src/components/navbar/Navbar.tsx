import "./Navbar.css";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

import logo from "../../assets/images/logo_tech.jpeg";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path: string) => (location.pathname === path ? "active" : "");

  return (
    <>
      {/* ── TOP NOTIFICATION BAR ── */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+254105939692" className="top-item top-item-link">
              <Phone size={13} />
              <span>+254 105939692</span>
            </a>
            <a href="mailto:info@elixirbiotech.co.ke" className="top-item top-item-link">
              <Mail size={13} />
              <span>info@elixirbiotech.co.ke</span>
            </a>
            <span className="top-item">
              <MapPin size={13} />
              <span>Nairobi, Kenya</span>
            </span>
          </div>
          <div className="top-bar-right">
            <span className="top-item">
              <Clock size={13} />
              <span>Mon – Fri &nbsp;8:00 AM – 5:00 PM</span>
            </span>
            <div className="top-divider" aria-hidden="true" />
            <div className="top-social">
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Scroll progress bar */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Elixir Biotech — Home">
            <div className="logo-wrapper">
              <div className="logo-img-wrap">
                <img src={logo} alt="Elixir Biotech Logo" className="logo-img" />
              </div>
              <div className="logo-text-group">
                <span className="logo-name">Elixir Biotech</span>
                
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="navbar-links" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className={`nav-link ${isActive(to)}`}>
                <span className="nav-link-inner">{label}</span>
                {location.pathname === to && <span className="nav-active-dot" aria-hidden="true" />}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="navbar-actions">
            <Link to="/contact" className="navbar-cta">
              <span className="cta-label">Partner With Us</span>
              <ChevronRight size={15} className="cta-icon" />
              <span className="cta-shimmer" aria-hidden="true" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              className={`mobile-menu-btn ${menuOpen ? "btn-open" : ""}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="burger-bar" />
              <span className="burger-bar" />
              <span className="burger-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE SIDEBAR ── */}
      <aside
        className={`mobile-sidebar ${menuOpen ? "sidebar-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="sidebar-header">
          <div className="logo-wrapper">
            <div className="logo-img-wrap">
              <img src={logo} alt="Elixir Biotech Logo" className="logo-img" />
            </div>
            <div className="logo-text-group">
              <span className="logo-name">Elixir Biotech</span>
              <span className="logo-tagline">Life Science Solutions</span>
            </div>
          </div>
          <button
            className="sidebar-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Decorative rule */}
        <div className="sidebar-rule" aria-hidden="true" />

        <nav className="sidebar-links">
          {NAV_LINKS.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className={`sidebar-link ${isActive(to)}`}
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="sidebar-link-label">{label}</span>
              <ChevronRight size={16} className="sidebar-link-arrow" />
            </Link>
          ))}
        </nav>

        {/* Contact strip */}
        <div className="sidebar-contact">
          <a href="tel:+254105939692" className="sidebar-contact-item">
            <Phone size={14} /> +254 105939692
          </a>
          <a href="mailto:info@elixirbiotech.co.ke" className="sidebar-contact-item">
            <Mail size={14} /> info@elixirbiotech.co.ke
          </a>
        </div>

        <div className="sidebar-footer">
          <Link to="/contact" className="sidebar-cta">
            Partner With Us
            <ChevronRight size={16} />
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "overlay-active" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
};

export default Navbar;