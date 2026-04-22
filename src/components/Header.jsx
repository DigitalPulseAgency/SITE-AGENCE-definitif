import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
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
          <a href="#offres" style={{ color: 'var(--text-main)' }}>Offres</a>
          <a href="#sites" style={{ color: 'var(--text-main)' }}>Sites</a>
          <a href="#a-propos" style={{ color: 'var(--text-main)' }}>À propos</a>
          <a href="#faq" style={{ color: 'var(--text-main)' }}>FAQ</a>
        </nav>

        {/* CTA */}
        <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
          Diagnostic gratuit
        </a>
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
