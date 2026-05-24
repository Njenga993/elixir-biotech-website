import "./ContactPage.css";
import { Mail, Phone, MapPin, Clock, ArrowRight, Briefcase, Beaker, PenTool, Radio } from "lucide-react";

const DEPARTMENTS = [
  {
    title: "Partnerships & Distribution",
    email: "partnerships@elixirbiotech.com",
    description: "For distributors, ecosystem collaborators, and regional scaling inquiries.",
    icon: <Briefcase size={24} strokeWidth={1.5} />
  },
  {
    title: "Innovation & R&D",
    email: "innovation@elixirbiotech.com",
    description: "For technical data, fuel formulation queries, and pilot program insights.",
    icon: <Beaker size={24} strokeWidth={1.5} />
  },
  {
    title: "Press & Media",
    email: "press@elixirbiotech.com",
    description: "For journalists, story pitches, and brand asset requests.",
    icon: <PenTool size={24} strokeWidth={1.5} />
  },
  {
    title: "General Support",
    email: "info@elixirbiotech.com",
    description: "For community questions, waste collector inquiries, and general help.",
    icon: <Radio size={24} strokeWidth={1.5} />
  }
];

const ContactPage = () => {
  return (
    <main className="contact-page">
      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="contact-hero-subtitle">Contact Us</span>
            <h1 className="contact-hero-title">
              Establish Contact
            </h1>
            <p className="contact-hero-description">
              Elixir Biotech operates as a distributed network of researchers, 
              engineers, and community partners. Select the appropriate station 
              below to direct your communication, or use our general dispatch line.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* ── LEFT: Contact Information ── */}
            <div className="contact-info-col">
              <h2 className="contact-info-title">Basecamp Directory</h2>
              <p className="contact-info-description">
                Reach out to us for partnerships, distributor inquiries, 
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
                    <span className="contact-detail-label">General Email</span>
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

              {/* ── Map ── */}
              <div className="contact-map-wrapper">
                <div className="contact-map">
                  <iframe
                    title="Elixir Biotech Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=36.7%2C-1.35%2C36.85%2C-1.25&layer=mapnik"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Dispatch Directory ── */}
            <div className="contact-departments-col">
              <h2 className="contact-departments-title">Direct Stations</h2>
              <p className="contact-departments-description">
                Select the department best suited to handle your inquiry for a faster response.
              </p>

              <div className="contact-stations-grid">
                {DEPARTMENTS.map((dept, index) => (
                  <a 
                    key={index} 
                    href={`mailto:${dept.email}`} 
                    className="contact-station-card"
                  >
                    <div className="station-icon-wrapper">
                      {dept.icon}
                    </div>
                    <div className="station-content">
                      <h3 className="station-title">{dept.title}</h3>
                      <p className="station-description">{dept.description}</p>
                      <span className="station-email">
                        {dept.email} <ArrowRight size={14} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;