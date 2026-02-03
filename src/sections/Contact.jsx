import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    <div>
                        <h2 className="footer-title">Shiv Diagnosis Lab</h2>
                        <p className="footer-desc">
                            Shiv(Ghadge) Clinical Computerised Laboratory - Your trusted partner since 2001 for accurate
                            blood and urine diagnostics. Committed to hygiene, precision, and care.
                        </p>
                        <div className="contact-info">
                            <div className="info-row">
                                <MapPin className="icon" size={20} />
                                <span>
                                    Shiv(Ghadge) Clinical Computerised Laboratory<br />
                                    Rahuri Factory, Ahilyanagar, <br />
                                    Maharashtra
                                </span>
                            </div>
                            <div className="info-row">
                                <Phone className="icon" size={20} />
                                <span>+91 92261 39378</span>
                            </div>
                            <div className="info-row">
                                <Clock className="icon" size={20} />
                                <span>Open Daily: 8:00 AM - 8:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        {/* Google Map Mock - Using an iframe for a real feel or just a placeholder image if strictly no external calls allowed, but embed is fine for "website" */}
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4!2d73.85!3d18.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEyLjAiTiA3M8KwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Shiv(Ghadge) Clinical Computerised Laboratory. All rights reserved.</p>
                    <div className="disclaimer">
                        <p><strong>Est. 2001</strong> • This lab performs only Blood & Urine tests. No Radiology/Imaging services available.</p>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-section {
          background-color: var(--primary-dark);
          color: white;
          padding: 80px 0 20px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .footer-desc {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          max-width: 400px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.9);
        }
        .icon {
          color: var(--primary-light);
          min-width: 20px;
        }

        .map-container {
          height: 300px;
          border-radius: 16px;
          overflow: hidden;
          background: #e2e8f0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .disclaimer {
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </footer>
    );
};

export default Contact;
