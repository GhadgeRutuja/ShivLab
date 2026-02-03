import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import BloodTests from './sections/BloodTests';
import UrineTests from './sections/UrineTests';
import About from './sections/About';
import Info from './sections/Info';
import Contact from './sections/Contact';
import { MessageCircle } from 'lucide-react';

function App() {
  // Smooth scroll handler
  React.useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <BloodTests />
        <UrineTests />
        <About />
        <Info />
      </main>
      <Contact />

      <a
        href="https://wa.me/919226139378"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <MessageCircle size={32} fill="white" />
      </a>

      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 1000;
          transition: transform 0.3s;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default App;
