import React, { useState, useEffect } from 'react';
import { Microscope, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container nav-content">
                    <div className="logo" onClick={() => scrollToSection('hero')}> 
                        <img src="/logo.png" alt="ShivGhadge Lab logo" style={{ width: 56, height: 56, objectFit: 'contain', background: 'transparent' }} />
                      <div className="logo-text-group">
                        <span className="logo-text">Shiv(Ghadge)</span>
                        <span className="logo-subtext">Diagnosis Lab</span>
                      </div>
                    </div>

                    <div className="desktop-links">
                        <button onClick={() => scrollToSection('hero')}>Home</button>
                        <button onClick={() => scrollToSection('blood-tests')}>Blood Tests</button>
                        <button onClick={() => scrollToSection('urine-tests')}>Urine Tests</button>
                        <button onClick={() => scrollToSection('about')}>About</button>
                        <button onClick={() => scrollToSection('contact')} className="contact-btn">Contact Us</button>
                    </div>

                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="menu-header">
                    <div className="logo">
                        <img src="/logo.png" alt="ShivGhadge Lab logo" style={{ width: 48, height: 48, objectFit: 'contain', background: 'transparent' }} />
                      <div className="logo-text-group">
                        <span className="logo-text">Shiv(Ghadge)</span>
                        <span className="logo-subtext">Diagnosis Lab</span>
                      </div>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(false)}>
                        <X size={24} />
                    </button>
                </div>
                <div className="menu-links">
                    <button onClick={() => scrollToSection('hero')}>Home</button>
                    <button onClick={() => scrollToSection('blood-tests')}>Blood Tests</button>
                    <button onClick={() => scrollToSection('urine-tests')}>Urine Tests</button>
                    <button onClick={() => scrollToSection('about')}>About Lab</button>
                    <button onClick={() => scrollToSection('safety')}>Safety Standards</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </div>
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: var(--shadow);
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }
        .logo-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .logo-text {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-main);
        }
        .logo-subtext {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .icon-box {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dot { color: var(--primary); }
        
        .desktop-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }
        .desktop-links button {
          background: none;
          border: none;
          font-size: 1rem;
          color: var(--text-light);
          font-weight: 500;
          transition: color 0.2s;
        }
        .desktop-links button:hover {
          color: var(--primary);
        }
        .desktop-links .contact-btn {
          background: var(--primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          transition: background 0.2s;
        }
        .desktop-links .contact-btn:hover {
          background: var(--primary-dark);
          color: white;
        }

        .mobile-toggle {
          background: none;
          border: none;
          color: var(--text-main);
          display: block;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: white;
          z-index: 1001;
          transition: right 0.3s ease;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        .mobile-menu.open {
          right: 0;
        }
        .menu-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3rem;
        }
        .menu-links {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .menu-links button {
          background: none;
          border: none;
          font-size: 1.25rem;
          text-align: left;
          color: var(--text-main);
          font-weight: 600;
        }

        @media (min-width: 768px) {
          .desktop-links {
            display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>
        </>
    );
};

export default Navbar;
