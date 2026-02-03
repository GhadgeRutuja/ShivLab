import React from 'react';
import { Award, UserCheck, Activity } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>About Shiv(Ghadge) Clinical Computerised Laboratory</h2>
                        <p className="lead-text">
                            Serving Rahuri Factory, Ahilyanagar since 2001.
                        </p>
                        <p className="main-text">
                            Shiv(Ghadge) Clinical Computerised Laboratory has served the community for over 25 years with a focused
                            scope: blood and urine diagnostics only. Established in 2001, we've built trust with 10,000+ patients
                            through accurate reports, modern equipment, and a commitment to quality care.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <Activity className="stat-icon" size={32} />
                                <div>
                                    <strong>25+ Years</strong>
                                    <span>Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="technician-card">
                      <div className="tech-image">
                        <img src="/4 papapic.jpeg" alt="Mr. Nitin Ghadge - Lab Technician" />
                      </div>
                      <div className="tech-tagline">Accuracy with Care</div>
                        <div className="tech-info">
                            <h3>Mr. Nitin Ghadge</h3>
                            <p className="qualification">Lab Technician & Owner</p>
                            <div className="divider-sm"></div>
                            <p className="experience">Head Technician</p>
                            <p className="tech-desc">
                                With 25+ years of experience in clinical pathology, Mr. Ghadge ensures every sample is
                                handled with care and all reports are verified for accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }
        .lead-text {
          font-size: 1.25rem;
          color: var(--primary-dark);
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .main-text {
          color: var(--text-light);
          margin-bottom: 2rem;
          font-size: 1rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .stat-icon {
          color: var(--primary);
        }
        .stat-item strong {
          display: block;
          color: var(--text-main);
          font-size: 1.1rem;
        }
        .stat-item span {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .technician-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-hover);
          text-align: center;
        }
        .tech-image {
          height: 200px;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .tech-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #f1f5f9;
        }
        .tech-tagline {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary);
          padding: 0.75rem 1rem 0.5rem;
          letter-spacing: 0.3px;
        }
        .tech-info {
          padding: 2rem;
        }
        .tech-info h3 {
          color: var(--primary-dark);
          margin-bottom: 0.25rem;
        }
        .qualification {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .divider-sm {
          width: 40px;
          height: 3px;
          background: #edf2f7;
          margin: 1rem auto;
        }
        .experience {
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        .tech-desc {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1.5fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
