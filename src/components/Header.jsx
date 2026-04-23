import React, { useState, useEffect } from 'react';
import { CAL_LINK } from '../config/links';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

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
        padding: '0.75rem 0'
      }}>
        {/* LOGO */}
        <a 
          href="#hero" 
          onClick={handleNavClick('hero')}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <img 
            src="/logo/logo_light_bg.png" 
            alt="DigitalPulse Agency" 
            style={{ height: '60px', width: 'auto' }}
            className="logo-img"
          />
        </a>

        {/* NAVIGATION DESKTOP — CACHÉE SUR MOBILE */}
        <nav className="desktop-only" style={{ display: 'none', gap: '2.5rem', fontWeight: 600 }}>
          <a href="#hero" onClick={handleNavClick('hero')} style={{ color: '#1F1B2E', textDecoration: 'none' }}>Accueil</a>
          <a href="#offres" onClick={handleNavClick('offres')} style={{ color: '#1F1B2E', textDecoration: 'none' }}>Offres</a>
          <a href="#sites" onClick={handleNavClick('sites')} style={{ color: '#1F1B2E', textDecoration: 'none' }}>Sites</a>
          <a href="#a-propos" onClick={handleNavClick('a-propos')} style={{ color: '#1F1B2E', textDecoration: 'none' }}>À propos</a>
          <a href="#faq" onClick={handleNavClick('faq')} style={{ color: '#1F1B2E', textDecoration: 'none' }}>FAQ</a>
        </nav>

        {/* BOUTONS DESKTOP — CACHÉS SUR MOBILE */}
        <div className="desktop-only" style={{ display: 'none', alignItems: 'center', gap: '1rem' }}>
          {/* Pilule téléphone */}
          <a 
            href="tel:+33615940883" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#F0FDF4',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: '1px solid #DCFCE7',
              color: '#15803D',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            06 15 94 08 83
          </a>

          {/* CTA Diagnostic gratuit */}
          <a 
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
          >
            Diagnostic gratuit
          </a>
        </div>

        {/* BURGER BUTTON — MOBILE UNIQUEMENT */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="mobile-burger"
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            background: 'none',
            cursor: 'pointer'
          }}
          aria-label="Menu"
        >
          <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      {/* MENU MOBILE PLEIN ÉCRAN */}
      {mobileMenuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', borderBottom: '1px solid #E5E7EB' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'none', cursor: 'pointer' }}
              aria-label="Fermer"
            >
              <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '0.5rem' }}>
            <a href="#hero" onClick={handleNavClick('hero')} style={{ padding: '1rem', fontSize: '1.25rem', fontWeight: 700, color: '#1F1B2E', textDecoration: 'none', borderRadius: '8px' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#F3F4F6'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>Accueil</a>
            <a href="#offres" onClick={handleNavClick('offres')} style={{ padding: '1rem', fontSize: '1.25rem', fontWeight: 700, color: '#1F1B2E', textDecoration: 'none', borderRadius: '8px' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#F3F4F6'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>Offres</a>
            <a href="#sites" onClick={handleNavClick('sites')} style={{ padding: '1rem', fontSize: '1.25rem', fontWeight: 700, color: '#1F1B2E', textDecoration: 'none', borderRadius: '8px' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#F3F4F6'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>Sites</a>
            <a href="#a-propos" onClick={handleNavClick('a-propos')} style={{ padding: '1rem', fontSize: '1.25rem', fontWeight: 700, color: '#1F1B2E', textDecoration: 'none', borderRadius: '8px' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#F3F4F6'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>À propos</a>
            <a href="#faq" onClick={handleNavClick('faq')} style={{ padding: '1rem', fontSize: '1.25rem', fontWeight: 700, color: '#1F1B2E', textDecoration: 'none', borderRadius: '8px' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#F3F4F6'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>FAQ</a>
          </nav>
        </div>
      )}

      <style>{`
        .mobile-burger { display: flex !important; }
        .desktop-only { display: none !important; }

        @media(min-width: 768px) {
          .mobile-burger { display: none !important; }
          .desktop-only { display: flex !important; }
          .logo-img { height: 100px !important; }
        }
        @media(min-width: 1024px) {
          .logo-img { height: 120px !important; }
        }
      `}</style>
    </header>
  );
}
