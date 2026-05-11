import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { CAL_LINK } from '../config/links';
import MobileMenu from './MobileMenu';

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

        {/* ZONE CENTRE — NAVIGATION DESKTOP */}
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

        {/* ZONE DROITE — CTAs DESKTOP */}
        <div className="desktop-only" style={{
          display: 'none',
          alignItems: 'center',
          gap: '0.75rem',
          flexShrink: 0,
          marginLeft: 'auto',
          position: 'relative',
          zIndex: 10
        }}>
          <a
            href="tel:+33615940883"
            className="transition-all duration-300 ease-out hover:!shadow-[0_0_22px_rgba(74,222,128,0.4)]"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              padding: '0.5rem 1rem', borderRadius: '9999px',
              border: '1px solid rgba(74, 222, 128, 0.35)',
              color: '#4ADE80', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 0 15px rgba(74, 222, 128, 0.2)',
              whiteSpace: 'nowrap'
            }}
          >
            <Phone size={16} strokeWidth={2.5} />
            06 15 94 08 83
          </a>

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
          aria-label="Ouvrir le menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu size={24} strokeWidth={2.5} />
        </button>
      </div>

      {/* MENU MOBILE — composant dédié */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

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
