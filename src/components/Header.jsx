import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CAL_LINK } from '../config/links';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navTextColor = '#FFFFFF';
  const headerBg = scrolled ? 'rgba(10, 10, 15, 0.92)' : 'rgba(10, 10, 15, 0.6)';
  const headerBorder = scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent';
  const logoSrc = '/logo-transparent.png';
  const burgerBorder = '1px solid rgba(255,255,255,0.2)';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll vers une ancre (gère le cas où on est sur une autre route)
  const goToAnchor = (sectionId) => (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 250);
    } else {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // Navigation vers une vraie route
  const goToRoute = (path) => () => {
    setMobileMenuOpen(false);
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const navLinkStyle = {
    color: navTextColor,
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 600,
    padding: '0.5rem 0',
    transition: 'color 0.2s ease',
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: headerBg,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: headerBorder,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        height: '72px',
        position: 'relative'
      }}>
        {/* ZONE GAUCHE — LOGO */}
        <Link
          to="/"
          onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, position: 'relative', zIndex: 10 }}
        >
          <img
            src={logoSrc}
            alt="DigitalPulse Agency"
            className="logo-img"
            style={{ height: '52px', width: 'auto', display: 'block' }}
          />
        </Link>

        {/* ZONE CENTRE — NAVIGATION (position absolue pour centrage parfait sur la page) */}
        <nav className="desktop-only header-nav" style={{
          display: 'none',
          alignItems: 'center',
          gap: '2.5rem',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}>
          <a href="/" onClick={(e) => { e.preventDefault(); goToRoute('/')(); }} style={navLinkStyle}>Accueil</a>
          <a href="/#services" onClick={goToAnchor('services')} style={navLinkStyle}>Services</a>
          <a href="/#a-propos" onClick={goToAnchor('a-propos')} style={navLinkStyle}>À propos</a>
          <a href="/#faq" onClick={goToAnchor('faq')} style={navLinkStyle}>FAQ</a>
        </nav>

        {/* ZONE DROITE — CTAs */}
        <div className="desktop-only" style={{
          display: 'none',
          alignItems: 'center',
          gap: '0.75rem',
          flexShrink: 0,
          marginLeft: 'auto',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Pilule téléphone (outline vert + glow subtil) */}
          <a
            href="tel:+33615940883"
            className="transition-all duration-300 ease-out hover:!shadow-[0_0_22px_rgba(74,222,128,0.4)]"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(74, 222, 128, 0.35)',
              color: '#4ADE80',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 0 15px rgba(74, 222, 128, 0.2)',
              whiteSpace: 'nowrap'
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            06 15 94 08 83
          </a>

          {/* CTA Diagnostic gratuit */}
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem', whiteSpace: 'nowrap' }}
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
            border: burgerBorder,
            borderRadius: '8px',
            background: 'none',
            cursor: 'pointer',
            color: navTextColor,
            flexShrink: 0,
            marginLeft: 'auto'
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: '#0a0a0f', color: '#ffffff', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'sticky', top: 0, backgroundColor: '#0a0a0f', zIndex: 1 }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'none', cursor: 'pointer', color: '#ffffff' }}
              aria-label="Fermer"
            >
              <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '0.25rem' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); goToRoute('/')(); }} style={mobileLinkStyle}>Accueil</a>

            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '1rem 1rem 0.5rem' }}>Services</p>
            <a href="/sites-internet" onClick={(e) => { e.preventDefault(); goToRoute('/sites-internet')(); }} style={mobileLinkStyle}>Sites internet</a>
            <a href="/reseaux-sociaux" onClick={(e) => { e.preventDefault(); goToRoute('/reseaux-sociaux')(); }} style={mobileLinkStyle}>Réseaux sociaux</a>
            <a href="/fiche-google" onClick={(e) => { e.preventDefault(); goToRoute('/fiche-google')(); }} style={mobileLinkStyle}>Fiche Google</a>
            <a href="/automatisations" onClick={(e) => { e.preventDefault(); goToRoute('/automatisations')(); }} style={mobileLinkStyle}>Automatisations IA</a>
            <a href="/ecommerce" onClick={(e) => { e.preventDefault(); goToRoute('/ecommerce')(); }} style={mobileLinkStyle}>E-commerce</a>

            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '1rem 1rem 0.5rem' }}>L'agence</p>
            <a href="/#a-propos" onClick={goToAnchor('a-propos')} style={mobileLinkStyle}>À propos</a>
            <a href="/#faq" onClick={goToAnchor('faq')} style={mobileLinkStyle}>FAQ</a>

            <div style={{ marginTop: '1.5rem', padding: '0 1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  backgroundColor: '#6B3FE8',
                  color: 'white',
                  fontWeight: 700,
                  padding: '1rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 0 25px rgba(107, 63, 232, 0.45)',
                  transition: 'all 0.3s ease-out'
                }}
              >
                ⚡ Diagnostic gratuit
              </a>
              <a
                href="tel:+33615940883"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(74, 222, 128, 0.35)',
                  color: '#4ADE80',
                  fontWeight: 600,
                  padding: '0.875rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 0 15px rgba(74, 222, 128, 0.2)'
                }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 15 94 08 83
              </a>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        .mobile-burger { display: flex !important; }
        .desktop-only { display: none !important; }
        .header-nav a:hover { color: #B59FFF !important; }

        @media(min-width: 768px) {
          .mobile-burger { display: none !important; }
          .desktop-only { display: flex !important; }
          .logo-img { height: 56px !important; }
        }
        @media(min-width: 1024px) {
          .logo-img { height: 64px !important; }
        }
      `}</style>
    </header>
  );
}

const mobileLinkStyle = {
  padding: '1rem',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#FFFFFF',
  textDecoration: 'none',
  borderRadius: '8px',
  display: 'block'
};
