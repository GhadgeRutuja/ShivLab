import React, { useState } from 'react';
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

                    {/* Contact form */}
                    <div style={{ marginTop: 20 }}>
                      <h3 style={{ color: 'white', marginBottom: 12 }}>Contact Us</h3>
                      <ContactForm />
                    </div>
                  </div>

                  {/* Make the map full width below the contact info */}
                  <div className="map-container full-width">
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

                <div className="footer-bottom">
                  <p>© {new Date().getFullYear()} Shiv(Ghadge) Clinical Computerised Laboratory. All rights reserved.</p>
                  <div style={{ marginTop: '0.75rem' }}>
                    <a href="/privacy-policy.html">Privacy Policy</a> &nbsp;•&nbsp; <a href="/refund-policy.html">Refund Policy</a>
                  </div>
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
          height: 360px;
          border-radius: 16px;
          overflow: hidden;
          background: #e2e8f0;
        }

        /* Full width map below the grid */
        .map-container.full-width {
          width: 100%;
          margin-top: 2rem;
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
          /* Keep contact text and elements laid out nicely while map is shown full width below */
          .contact-grid {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }
      `}</style>
        </footer>
    );
};

export default Contact;

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ ok: true, text: 'Message sent. We will contact you shortly.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ ok: false, text: data.message || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ ok: false, text: 'Server error. Please try again later.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 10 }}>
      <input
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd' }}
      />
      <input
        required
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd' }}
      />
      <textarea
        required
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd', minHeight: 140 }}
      />
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          type="submit"
          disabled={sending}
          style={{ padding: '10px 16px', borderRadius: 10, border: 'none', background: 'var(--primary)', color: 'white', cursor: 'pointer' }}
        >
          {sending ? 'Sending...' : 'Send Message'}
        </button>
        {status && (
          <div style={{ color: status.ok ? '#9AE6B4' : '#FEB2B2' }}>{status.text}</div>
        )}
      </div>
    </form>
  );
}
