import "./ContactPage.css";
import { 
  Mail, MapPin, Clock, 
  Briefcase, Beaker, PenTool, Radio,
  ArrowUpRight, CalendarCheck
} from "lucide-react";

const stations = [
  {
    icon: <Briefcase size={20} strokeWidth={1.5} />,
    title: "Partnerships & Distribution",
    callSign: "Station 01",
    description: "For distributors, ecosystem collaborators, and regional scaling inquiries.",
    email: "partnerships@elixirbiotech.com",
  },
  {
    icon: <Beaker size={20} strokeWidth={1.5} />,
    title: "Innovation & R&D",
    callSign: "Station 02",
    description: "For technical data, fuel formulation queries, and pilot program insights.",
    email: "innovation@elixirbiotech.com",
  },
  {
    icon: <PenTool size={20} strokeWidth={1.5} />,
    title: "Press & Media",
    callSign: "Station 03",
    description: "For journalists, story pitches, and brand asset requests.",
    email: "press@elixirbiotech.com",
  },
  {
    icon: <Radio size={20} strokeWidth={1.5} />,
    title: "General Comms",
    callSign: "Station 04",
    description: "For community questions, waste collector inquiries, and general support.",
    email: "info@elixirbiotech.com",
  },
];

const ContactPage = () => {
  return (
    <main className="cp-page">
      {/* Noise grain */}
      <div className="cp-noise" aria-hidden="true" />

      {/* ── HERO ── */}
      <section className="cp-hero">
        <div className="container">
          <div className="cp-hero-content">
            {/* Rubber stamp tag */}
            <div className="cp-stamp">
              <span>Expedition HQ</span>
              <svg className="stamp-border" viewBox="0 0 180 36" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="178" height="34" rx="0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3"/>
              </svg>
            </div>

            <h1>
              Establish <mark className="cp-mark">Contact</mark>
              <svg className="cp-heading-squiggle" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </h1>

            <p>
              Elixir Biotech operates as a distributed network of researchers, 
              engineers, and community partners. Select the appropriate station 
              below to direct your communication, or use our general dispatch line.
            </p>
          </div>
        </div>
        {/* Ghost background word */}
        <div className="cp-ghost" aria-hidden="true">HELLO</div>
      </section>

      {/* ── DISPATCH STATIONS ── */}
      <section className="cp-stations">
        <div className="container">
          <div className="cp-section-header">
            <h2>Dispatch Directory</h2>
            <div className="cp-header-rule"></div>
          </div>

          <div className="cp-stations-grid">
            {stations.map((station, index) => (
              <div 
                className="cp-station-card" 
                key={index}
                style={{ "--i": index } as React.CSSProperties}
              >
                <div className="station-tape" aria-hidden="true" />
                
                <span className="station-callsign">{station.callSign}</span>
                
                <div className="station-icon-wrap">
                  {station.icon}
                </div>

                <h3>{station.title}</h3>
                <p>{station.description}</p>

                <a href={`mailto:${station.email}`} className="station-email-btn">
                  <Mail size={14} strokeWidth={1.5} />
                  {station.email}
                </a>

                {/* Hand-drawn corner accent */}
                <svg className="station-corner" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M2 26 Q2 2 26 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BASECAMP & MAP ── */}
      <section className="cp-basecamp">
        <div className="container">
          <div className="cp-section-header">
            <h2>Basecamp Location</h2>
            <div className="cp-header-rule"></div>
          </div>

          <div className="cp-basecamp-grid">
            {/* Left: Tactical Map */}
            <div className="cp-map-wrapper">
              <div className="cp-map-frame">
                <div className="cp-map-tape" aria-hidden="true" />
                <iframe
                  title="Elixir Biotech Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.7%2C-1.35%2C36.85%2C-1.25&layer=mapnik"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="cp-map-pin" aria-hidden="true">
                  <svg viewBox="0 0 24 36" fill="none">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12z" fill="#c07840" stroke="#0c1e12" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="5" fill="#f2ede0" />
                  </svg>
                  <span className="cp-pin-label">Nairobi Outpost</span>
                </div>
                <svg className="cp-map-corner" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M2 26 Q2 2 26 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </div>

            {/* Right: Location Details & Field Notes */}
            <div className="cp-location-details">
              <div className="cp-detail-block">
                <div className="cp-detail-icon">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4>Physical Address</h4>
                  <p>Elixir Biotech HQ<br />Kilimani District<br />Nairobi, Kenya</p>
                </div>
              </div>

              <div className="cp-detail-block">
                <div className="cp-detail-icon">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4>Field Hours</h4>
                  <p>Mon – Fri: 0800h – 1730h EAT<br />Sat: 0900h – 1300h EAT<br />Sun: Basecamp Closed</p>
                </div>
              </div>

              {/* Field Notes (Directions) */}
              <div className="cp-field-notes">
                <h4>Navigation Notes</h4>
                <div className="cp-notebook-paper">
                  <p>
                    Located off Lenana Road, adjacent to the Yaya Centre. 
                    Look for the green gate marked with the Elixir Biotech emblem. 
                    Visitor parking is available behind the main facility. 
                    Ring the intercom at Gate 2 for dispatch pickup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT LINES & RENDEZVOUS ── */}
      <section className="cp-comms">
        <div className="container">
          <div className="cp-comms-grid">
            {/* Direct Comms */}
            <div className="cp-comms-card">
              <h3>Direct Comms</h3>
              <ul className="cp-comms-list">
                <li>
                  <span className="comms-label">General Dispatch</span>
                  <a href="mailto:info@elixirbiotech.com">info@elixirbiotech.com</a>
                </li>
                <li>
                  <span className="comms-label">Field Telephone</span>
                  <a href="tel:+254700000000">+254 700 000 000</a>
                </li>
                <li>
                  <span className="comms-label">Urgent WhatsApp</span>
                  <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                    +254 700 000 000 <ArrowUpRight size={12} strokeWidth={1.5} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Schedule Rendezvous */}
            <div className="cp-rendezvous-card">
              <div className="rendezvous-stamp" aria-hidden="true">
                <span>Schedule</span>
                <svg className="stamp-border" viewBox="0 0 140 36" fill="none">
                  <rect x="1" y="1" width="138" height="34" rx="0" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
                </svg>
              </div>
              <h3>Schedule a Rendezvous</h3>
              <p>
                Prefer a live conversation? Book a 30-minute synchronous 
                briefing with our field team to discuss partnerships, 
                pilot programs, or technical integrations.
              </p>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cp-booking-btn"
              >
                <CalendarCheck size={18} strokeWidth={1.5} />
                Book a Briefing
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;