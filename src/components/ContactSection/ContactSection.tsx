import "./ContactSection.css";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          
          {/* ── LEFT: Contact Information ── */}
          <div className="contact-info-col">
            <span className="contact-subtitle">Get In Touch</span>
            <h2 className="contact-title">
              Let's Partner For A <br />
              Cleaner Future
            </h2>
            <p className="contact-description">
              Elixir Biotech operates a closed-loop production and distribution 
              model. Reach out to us for partnerships, distributor inquiries, 
              or general support regarding our clean cooking solutions.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-detail-label">Phone</span>
                  <a href="tel:+254700000000" className="contact-detail-value">+254 700 000 000</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <a href="mailto:info@elixirbiotech.com" className="contact-detail-value">info@elixirbiotech.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-detail-label">Address</span>
                  <span className="contact-detail-value">Nairobi, Kenya</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="contact-detail-label">Working Hours</span>
                  <span className="contact-detail-value">Mon - Fri: 8:00AM - 5:00PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Map ── */}
          <div className="contact-map-col">
            <div className="map-wrapper">
              <iframe
                title="Elixir Biotech Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.7%2C-1.35%2C36.85%2C-1.25&layer=mapnik"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;