import React, { useState, useEffect } from 'react';
import { Brain, Phone } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 0'
      }}>
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
          <img src="/logo/logo_icon.png" alt="Digital Pulse Agency" className="hq-logo logo-mobile" loading="eager" />
          <img src="/logo/logo_light_bg.png" alt="Digital Pulse Agency" className="hq-logo logo-desktop" loading="eager" />
        </a>

        {/* Nav Links - Desktop */}
        <nav style={{ display: 'none', gap: '2.5rem', fontWeight: 600, fontSize: '1.1rem' }} className="desktop-nav">
          <a 
            href="#hero" 
            style={{ color: 'var(--text-main)' }}
            onClick={(e) => {
              e.preventDefault();
              const heroSection = document.getElementById('hero');
              if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Accueil
          </a>
          <a href="#offres" style={{ color: 'var(--text-main)' }}>Offres</a>
          <a href="#sites" style={{ color: 'var(--text-main)' }}>Sites</a>
          <a href="#a-propos" style={{ color: 'var(--text-main)' }}>À propos</a>
          <a href="#faq" style={{ color: 'var(--text-main)' }}>FAQ</a>
        </nav>

        {/* CTA Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a href="tel:+33615940883" className="phone-pill">
              <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Phone size={20} strokeWidth={2.5} />
                <span style={{ position: 'absolute', top: '-2px', right: '-2px', display: 'flex', height: '8px', width: '8px' }}>
                  <span className="animate-ping" style={{ position: 'absolute', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: '#4ADE80', opacity: 0.75 }}></span>
                  <span style={{ position: 'relative', borderRadius: '50%', height: '8px', width: '8px', backgroundColor: '#22C55E' }}></span>
                </span>
              </span>
              <span className="phone-number-text">06 15 94 08 83</span>
            </a>
            <span className="hours-text">Lun-Sam, 9h-20h</span>
          </div>

          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
            Diagnostic gratuit
          </a>
        </div>
      </div>
      <style>{`
        .hq-logo { object-fit: contain; }
        .logo-mobile { display: block; height: 75px; width: auto; }
        .logo-desktop { display: none; height: 120px; width: auto; }
        
        @media(min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .logo-mobile { display: none; }
          .logo-desktop { display: block; }
        }
      `}</style>
    </header>
  );
}
