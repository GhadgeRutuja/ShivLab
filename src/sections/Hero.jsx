import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-wrapper">
                <div className="hero-text-block">
                    <h1 className="hero-headline">Blood & Urine Testing, Done with Care.</h1>
                    <p className="hero-subtext">
                        Accurate diagnostics with same-day results.<br />
                        Serving the local community with consistency and care.
                    </p>

                    <div className="hero-mini-cards">
                        <div className="mini-card">
                            <div className="mini-number">10k+</div>
                            <div className="mini-label">Patients</div>
                        </div>
                        <div className="mini-card">
                            <div className="mini-number">25+</div>
                            <div className="mini-label">Years</div>
                        </div>
                        <div className="mini-card">
                            <div className="mini-number">⭐</div>
                            <div className="mini-label">Premium Services</div>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => document.getElementById('blood-tests')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Tests <ArrowRight size={18} />
                        </button>
                        <button className="btn-text" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            <MessageSquare size={18} />
                            Contact Lab
                        </button>
                    </div>
                </div>
                <div className="hero-image-block">
                    <img src="/2.png" alt="Pathology lab diagnostic testing" className="hero-image" />
                </div>
            </div>

            <style>{`
        .hero-section {
          padding: 120px 0 60px;
          background: #f8f6ff;
          position: relative;
        }
        
        .hero-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .hero-text-block {
          max-width: 500px;
        }

        .hero-headline {
          font-size: 2.2rem;
          line-height: 1.3;
          font-weight: 500;
          color: #2a2a2a;
          margin-bottom: 1.5rem;
          letter-spacing: -0.3px;
        }

        .hero-subtext {
          font-size: 1rem;
          line-height: 1.8;
          color: #5a5a5a;
          margin-bottom: 1.75rem;
          font-weight: 400;
        }

        .hero-mini-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .mini-card {
          background: white;
          padding: 1.25rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(138, 111, 213, 0.08);
          border: 1px solid rgba(138, 111, 213, 0.1);
          transition: all 0.3s ease;
        }

        .mini-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(138, 111, 213, 0.15);
          border-color: rgba(138, 111, 213, 0.2);
        }

        .mini-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }

        .mini-label {
          font-size: 0.75rem;
          color: var(--text-light);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 0.95rem 1.75rem;
          border: none;
          border-radius: 12px;
          font-weight: 500;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 8px rgba(138, 111, 213, 0.12);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .btn-primary:hover {
          background: var(--primary-dark);
          box-shadow: 0 4px 12px rgba(138, 111, 213, 0.2);
          transform: translateY(-1px);
        }

        .btn-text {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 500;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 0.5rem 0;
          transition: all 0.2s ease;
        }

        .btn-text:hover {
          color: var(--primary-dark);
        }

        .hero-image-block {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image {
          width: 100%;
          max-width: 280px;
          height: auto;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          display: block;
        }

        @media (min-width: 768px) {
          .hero-section {
            padding: 140px 0 80px;
          }
          
          .hero-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }

          .hero-headline {
            font-size: 2.6rem;
            line-height: 1.35;
            margin-bottom: 1.75rem;
          }

          .hero-subtext {
            font-size: 1.05rem;
            line-height: 1.85;
            margin-bottom: 2.5rem;
          }

          .hero-image {
            max-width: 100%;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
