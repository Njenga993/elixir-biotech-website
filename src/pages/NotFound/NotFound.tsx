import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { ArrowRight, Search, Home } from "lucide-react";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    // Set HTTP status code for crawlers
    // This won't change the actual HTTP response, but helps with client-side understanding
    document.title = "404 - Page Not Found | Elixir Biotech";
  }, []);

  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore Elixir Biotech's clean bioethanol fuel solutions in Kenya."
        path="/404"
        keywords={[
          "Elixir Biotech 404",
          "page not found"
        ]}
        // Don't index 404 pages
        jsonLd={[]}
      />

      <main className="not-found-page">
        <div className="not-found-container">
          {/* Background decoration */}
          <div className="not-found-bg-grid" aria-hidden="true" />
          <div className="not-found-glow" aria-hidden="true" />
          
          <div className="not-found-content">
            {/* 404 Number */}
            <div className="not-found-number-wrapper">
              <span className="not-found-number">4</span>
              <div className="not-found-icon-circle">
                <Search size={40} strokeWidth={1.5} />
              </div>
              <span className="not-found-number">4</span>
            </div>

            {/* Error Message */}
            <h1 className="not-found-title">Page Not Found</h1>
            
            <p className="not-found-description">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              It might be under development or the URL might be incorrect.
            </p>

            {/* Suggested Links */}
            <div className="not-found-suggestions">
              <h2 className="not-found-subtitle">You might be looking for:</h2>
              <div className="not-found-links">
                <Link to="/" className="not-found-link-card">
                  <Home size={20} strokeWidth={1.5} />
                  <span className="not-found-link-text">
                    <strong>Home</strong>
                    <small>Return to homepage</small>
                  </span>
                  <ArrowRight size={16} className="not-found-link-arrow" />
                </Link>

                <Link to="/products" className="not-found-link-card">
                  <Search size={20} strokeWidth={1.5} />
                  <span className="not-found-link-text">
                    <strong>Our Products</strong>
                    <small>Bioethanol gel fuel solutions</small>
                  </span>
                  <ArrowRight size={16} className="not-found-link-arrow" />
                </Link>

                <Link to="/about" className="not-found-link-card">
                  <Search size={20} strokeWidth={1.5} />
                  <span className="not-found-link-text">
                    <strong>About Us</strong>
                    <small>Learn about our mission</small>
                  </span>
                  <ArrowRight size={16} className="not-found-link-arrow" />
                </Link>

                <Link to="/contact" className="not-found-link-card">
                  <Search size={20} strokeWidth={1.5} />
                  <span className="not-found-link-text">
                    <strong>Contact</strong>
                    <small>Get in touch</small>
                  </span>
                  <ArrowRight size={16} className="not-found-link-arrow" />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="not-found-cta">
              <Link to="/" className="not-found-btn-primary">
                <span>Back to Homepage</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="not-found-btn-ghost">
                Report Broken Link
              </Link>
            </div>

            {/* Help Text */}
            <p className="not-found-help">
              If you believe this is an error, please contact us at{" "}
              <a href="mailto:info@elixirbiotech.co.ke">info@elixirbiotech.co.ke</a>
              {" "}or call{" "}
              <a href="tel:+254105939692">+254 105939692</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;