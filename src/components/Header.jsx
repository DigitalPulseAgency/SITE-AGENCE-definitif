import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

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
        height: '4.5rem'
      }}>
        <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1F1B2E', borderRadius: '12px', padding: '0.5rem 1rem', transition: 'opacity 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
          <img src="/logo.png" alt="DigitalPulse Agency" className="hq-logo" />
        </a>

        {/* Nav Links - Desktop */}
        <nav style={{ display: 'none', gap: '2rem', fontWeight: 500 }} className="desktop-nav">
          <a href="#offres" style={{ color: 'var(--text-main)' }}>Offres</a>
          <a href="#sites" style={{ color: 'var(--text-main)' }}>Sites</a>
          <a href="#a-propos" style={{ color: 'var(--text-main)' }}>À propos</a>
          <a href="#faq" style={{ color: 'var(--text-main)' }}>FAQ</a>
        </nav>

        {/* CTA */}
        <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
          Diagnostic gratuit
        </a>
      </div>
      <style>{`
        .hq-logo { height: 36px; object-fit: contain; }
        @media(min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hq-logo { height: 48px; }
        }
      `}</style>
    </header>
  );
}
