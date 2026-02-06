import React from 'react';
import { Syringe, Shield, Clock, FileText, Droplet } from 'lucide-react';

const Info = () => {
    return (
        <section className="section-padding bg-soft" id="safety">
            <div className="container">

                {/* Safety & Hygiene */}
                <div className="info-block mb-large">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Safety First</h2>
                        <p className="section-subtitle">We adhere to strict bio-safety protocols to ensure zero contamination.</p>
                    </div>
                    <div className="grid-3">
                        <div className="feature-card">
                            <div className="icon-circle"><Syringe size={24} /></div>
                            <h3>Single-Use Consumables</h3>
                            <p>Every needle, syringe, and collection tube is single-use and vacuum-sealed.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-circle"><Shield size={24} /></div>
                            <h3>Sterilized Environment</h3>
                            <p>Our collection area is sanitized every hour. UV sterilization used for equipment.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-circle"><Droplet size={24} /></div>
                            <h3>Bio-Medical Waste</h3>
                            <p>Compliant waste disposal systems to prevent any environmental hazards.</p>
                        </div>
                    </div>
                </div>

                {/* Collection & Handling */}
                <div className="info-block mb-large">
                    <div className="row-reverse">
                        <div className="info-text">
                            <h3>Sample Collection & Handling</h3>
                            <ul className="check-list">
                                <li><span>Correct Labeling</span>: Barcoded vials to prevent mixing of samples.</li>
                                <li><span>Double Verification</span>: Manual check of patient details before collection.</li>
                                <li><span>Safe Transport</span>: Samples stored at optimal temperatures.</li>
                            </ul>
                        </div>
                        <div className="info-visual collection-visual">
                            <img src="/3.png" alt="Sample collection station" className="collection-image" />
                            <div className="visual-overlay">
                                Samples handled with care
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reports */}
                <div className="info-block">
                    <div className="row">
                        <div className="info-text">
                            <h3>Smart Reporting</h3>
                            <p className="mb-4">Get your reports delivered via WhatsApp or Email.</p>

                            <div className="report-time">
                                <Clock className="text-primary" size={20} />
                                <div>
                                    <strong>Same Day Delivery</strong>
                                    <p className="text-sm text-light">For Routine Blood & Urine Tests</p>
                                </div>
                            </div>
                            <div className="report-time mt-3">
                                <Clock className="text-primary" size={20} />
                                <div>
                                    <strong>Upto 72 Hours</strong>
                                    <p className="text-sm text-light">For Culture & Sensitivity Tests</p>
                                </div>
                            </div>
                        </div>

                        <div className="report-preview">
                            {/* Patient Result Sheet PDF */}
                            <a href="/Patient Result Sheet.pdf" target="_blank" rel="noopener noreferrer" className="report-paper report-link">
                                <div className="report-header">
                                    <div className="logo-stub"></div>
                                    <div className="line-stub w-50"></div>
                                </div>
                                <div className="report-body">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className="line-row">
                                            <div className="line-stub w-30"></div>
                                            <div className="line-stub w-20"></div>
                                            <div className="line-stub w-10"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="pdf-overlay">
                                    <FileText size={48} className="text-primary" />
                                    <span>Patient Result Sheet</span>
                                    <p className="pdf-hint">Click to view PDF</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
        .mb-large { margin-bottom: 6rem; }
        .mb-5 { margin-bottom: 3rem; }
        .mt-3 { margin-top: 1rem; }
        .mb-4 { margin-bottom: 1.5rem; }
        .text-center { text-align: center; }
        .text-sm { font-size: 0.85rem; }
        .w-50 { width: 50%; }
        .w-30 { width: 30%; }
        .w-20 { width: 20%; }
        .w-10 { width: 10%; }

        .bg-soft { background-color: var(--bg-body); }

        .grid-3 {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .feature-card {
            background: white;
            padding: 2rem;
            border-radius: var(--radius);
            text-align: center;
            box-shadow: var(--shadow);
            transition: transform 0.3s;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }

        .icon-circle {
            width: 60px;
            height: 60px;
            background: var(--primary-light);
            color: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
        }
        
        .feature-card h3 {
            margin-bottom: 1rem;
            color: var(--text-main);
        }
        .feature-card p {
            color: var(--text-light);
            font-size: 0.95rem;
        }

        /* Rows */
        .row, .row-reverse {
            display: grid;
            gap: 4rem;
            align-items: center;
        }
        
        .info-text h3 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: var(--primary-dark);
        }

        .check-list {
            list-style: none;
        }
        .check-list li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-light);
        }
        .check-list li::before {
            content: '•';
            color: var(--primary);
            font-weight: bold;
            font-size: 1.5rem;
            position: absolute;
            left: 0;
            top: -5px;
        }
        .check-list span {
            font-weight: 600;
            color: var(--text-main);
        }

        .info-visual {
            height: 300px;
            background-color: #e2e8f0;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
        }
        .collection-visual {
            background: #eef2ff;
        }
        .collection-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        .visual-overlay {
            position: absolute;
            bottom: 20px;
            left: 20px;
            background: white;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.9rem;
            box-shadow: var(--shadow);
        }

        .report-time {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: white;
            padding: 1rem;
            border-radius: 12px;
            box-shadow: var(--shadow);
        }

        .report-preview {
            display: flex;
            justify-content: center;
        }
        .report-paper {
            width: 100%;
            max-width: 350px;
            height: 400px;
            background: white;
            border-radius: 1px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            padding: 2rem;
            position: relative;
            border: 1px solid #e2e8f0;
        }
        .report-link {
            display: block;
            text-decoration: none;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }
        .report-link:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        .logo-stub { height: 20px; width: 40px; background: #cbd5e0; margin-bottom: 2rem; }
        .line-stub { height: 8px; background: #edf2f7; margin-bottom: 1rem; border-radius: 4px; }
        .line-row { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
        .pdf-overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(255,255,255,0.85);
            backdrop-filter: blur(2px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            color: var(--primary);
            font-weight: 600;
            transition: background 0.3s ease;
        }
        .report-link:hover .pdf-overlay {
            background: rgba(255,255,255,0.95);
        }
        .pdf-hint {
            font-size: 0.8rem;
            font-weight: 400;
            color: var(--text-light);
            margin-top: 0.5rem;
        }

        @media (min-width: 768px) {
            .grid-3 { grid-template-columns: repeat(3, 1fr); }
            .row { grid-template-columns: 1fr 1fr; }
            .row-reverse { grid-template-columns: 1fr 1fr; direction: rtl; }
            .row-reverse .info-text { direction: ltr; }
        }
      `}</style>
        </section>
    );
};

export default Info;
