import "./Navbar.css";

import { useState, useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/logo_tech.jpeg";

// Allow CSS custom properties in inline styles
type CSS = CSSProperties & { [key: `--${string}`]: string | number };

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  // Scroll listener: navbar background + progress bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? Math.min((window.scrollY / totalHeight) * 100, 100) : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path: string) => (location.pathname === path ? "active" : "");

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Scroll progress bar */}
        <div className="scroll-progress" ref={progressRef} aria-hidden="true" />

        <div className="container navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Elixir Biotech — Home">
            <div className="logo-stamp">
              <img src={logo} alt="Elixir Biotech" />
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="navbar-links" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className={`nav-link ${isActive(to)}`}>
                {label}
                {/* Animated squiggle underline */}
                <svg
                  className="nav-squiggle"
                  viewBox="0 0 80 6"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 3 Q10 0 20 3 Q30 6 40 3 Q50 0 60 3 Q70 6 80 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/contact" className="navbar-cta">
            Partner With Us
          </Link>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* ── MOBILE SIDEBAR ── */}
      <aside
        className={`mobile-sidebar ${menuOpen ? "sidebar-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {/* Noise grain */}
        <div className="sidebar-noise" aria-hidden="true" />

        {/* Decorative orbit ring */}
        <div className="sidebar-orbit" aria-hidden="true">
          <svg viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="130" stroke="currentColor" strokeDasharray="8 6" strokeWidth="1"/>
            <circle cx="150" cy="150" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10"/>
            {/* Arrow markers */}
            <path d="M150 20 L155 30 L150 28 L145 30 Z" fill="currentColor" />
            <path d="M280 150 L270 155 L272 150 L270 145 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Sidebar top */}
        <div className="sidebar-top">
          <div className="logo-stamp sidebar-stamp">
            <img src={logo} alt="Elixir Biotech" />
          </div>
          <button
            className="sidebar-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Sidebar links — staggered entrance */}
        <nav className="sidebar-links">
          {NAV_LINKS.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className={`sidebar-link ${isActive(to)}`}
              style={{ "--li": i } as CSS}
            >
              {/* Hand-drawn pip for active */}
              <span className="sidebar-pip" aria-hidden="true">
                <svg viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
              {label}
            </Link>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="sidebar-footer">
          <p>Clean cooking solutions built for African households and businesses.</p>
          <Link to="/contact" className="sidebar-cta">
            Partner With Us
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