import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CAL_LINK } from '../config/links';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isDarkPage = location.pathname !== '/';
  const navTextColor = isDarkPage ? '#FFFFFF' : '#1F1B2E';
  const headerBg = isDarkPage
    ? (scrolled ? 'rgba(10, 10, 15, 0.92)' : 'rgba(10, 10, 15, 0.6)')
    : (scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent');
  const headerBorder = isDarkPage
    ? (scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent')
    : (scrolled ? '1px solid #E5E7EB' : '1px solid transparent');
  const logoSrc = isDarkPage ? '/logo/logo_dark_bg.png' : '/logo/logo_light_bg.png';
  const burgerBorder = isDarkPage ? '1px solid rgba(255,255,255,0.2)' : '1px solid #E5E7EB';

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

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: headerBg,
      backdropFilter: (scrolled || isDarkPage) ? 'blur(10px)' : 'none',
      WebkitBackdropFilter: (scrolled || isDarkPage) ? 'blur(10px)' : 'none',
      borderBottom: headerBorder,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 0'
      }}>
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ display: 'inline-flex', alignItems: 'center' }}
        >
          <img
            src={logoSrc}
            alt="DigitalPulse Agency"
            style={{ height: '60px', width: 'auto' }}
            className="logo-img"
          />
        </Link>

        {/* NAVIGATION DESKTOP — CACHÉE SUR MOBILE */}
        <nav className="desktop-only" style={{ display: 'none', gap: '2.5rem', fontWeight: 600 }}>
          <a href="/" onClick={(e) => { e.preventDefault(); goToRoute('/')(); }} style={{ color: navTextColor, textDecoration: 'none' }}>Accueil</a>
          <a href="/#services" onClick={goToAnchor('services')} style={{ color: navTextColor, textDecoration: 'none' }}>Services</a>
          <a href="/#a-propos" onClick={goToAnchor('a-propos')} style={{ color: navTextColor, textDecoration: 'none' }}>À propos</a>
          <a href="/#faq" onClick={goToAnchor('faq')} style={{ color: navTextColor, textDecoration: 'none' }}>FAQ</a>
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
            className="btn btn-primary transition-all duration-300 ease-out shadow-[0_0_25px_rgba(74,222,128,0.4)] hover:!shadow-[0_0_35px_rgba(74,222,128,0.65)] hover:scale-[1.02] hover:-translate-y-0.5"
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
            border: burgerBorder,
            borderRadius: '8px',
            background: 'none',
            cursor: 'pointer',
            color: navTextColor
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'white', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', borderBottom: '1px solid #E5E7EB', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
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

          <nav style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '0.25rem' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); goToRoute('/')(); }} style={mobileLinkStyle}>Accueil</a>

            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '1rem 1rem 0.5rem' }}>Services</p>
            <a href="/sites-internet" onClick={(e) => { e.preventDefault(); goToRoute('/sites-internet')(); }} style={mobileLinkStyle}>Sites internet</a>
            <a href="/reseaux-sociaux" onClick={(e) => { e.preventDefault(); goToRoute('/reseaux-sociaux')(); }} style={mobileLinkStyle}>Réseaux sociaux</a>
            <a href="/fiche-google" onClick={(e) => { e.preventDefault(); goToRoute('/fiche-google')(); }} style={mobileLinkStyle}>Fiche Google</a>
            <a href="/automatisations" onClick={(e) => { e.preventDefault(); goToRoute('/automatisations')(); }} style={mobileLinkStyle}>Automatisations IA</a>
            <a href="/ecommerce" onClick={(e) => { e.preventDefault(); goToRoute('/ecommerce')(); }} style={mobileLinkStyle}>E-commerce</a>

            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '1rem 1rem 0.5rem' }}>L'agence</p>
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
                  backgroundColor: '#F0FDF4',
                  border: '1px solid #DCFCE7',
                  color: '#15803D',
                  fontWeight: 600,
                  padding: '0.875rem',
                  borderRadius: '12px',
                  textDecoration: 'none'
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

const mobileLinkStyle = {
  padding: '1rem',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#1F1B2E',
  textDecoration: 'none',
  borderRadius: '8px',
  display: 'block'
};
