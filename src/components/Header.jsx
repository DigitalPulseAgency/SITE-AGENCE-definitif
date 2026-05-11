import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  X, Menu, ChevronDown, Home, Briefcase, User, HelpCircle,
  Globe, Instagram, MapPin, Sparkles, Linkedin, Phone, Zap
} from 'lucide-react';
import { CAL_LINK, INSTAGRAM_LINK, TIKTOK_LINK, LINKEDIN_LINK } from '../config/links';
import TikTokIcon from './icons/TikTokIcon';

const SERVICES = [
  { label: 'Sites internet', path: '/sites-internet', Icon: Globe },
  { label: 'Réseaux sociaux', path: '/reseaux-sociaux', Icon: Instagram },
  { label: 'Fiche Google', path: '/fiche-google', Icon: MapPin },
  { label: 'Automatisations IA', path: '/automatisations', Icon: Sparkles },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  // Scroll lock + ESC key quand le menu mobile est ouvert
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  // Scroll vers une ancre (gère le cas où on est sur une autre route)
  const goToAnchor = (sectionId) => (e) => {
    e.preventDefault();
    closeMenu();
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
    closeMenu();
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
          onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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

      {/* MENU MOBILE — OVERLAY PLEIN ÉCRAN */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'linear-gradient(180deg, #0a0a0f 0%, #1a0d2e 50%, #0a0a0f 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            color: '#fff',
            animation: 'fadeInMenu 0.25s ease-out'
          }}
          role="dialog"
          aria-label="Menu de navigation"
        >
          {/* HEADER DU MENU */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            position: 'sticky',
            top: 0,
            background: 'rgba(10, 10, 15, 0.85)',
            backdropFilter: 'blur(20px)',
            zIndex: 1
          }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>Menu</span>
            <button
              onClick={closeMenu}
              aria-label="Fermer le menu"
              style={{
                width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: 'none', background: 'rgba(255,255,255,0.05)',
                borderRadius: '10px', cursor: 'pointer', color: '#fff',
                transition: 'background 0.2s'
              }}
              onMouseDown={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseUp={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
            >
              <X size={26} strokeWidth={2.5} />
            </button>
          </div>

          {/* CORPS DU MENU */}
          <nav style={{ flex: 1, padding: '2rem 1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

            {/* Accueil */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); goToRoute('/')(); }}
              className="mobile-nav-link"
            >
              <Home size={22} strokeWidth={2} />
              <span>Accueil</span>
            </a>

            {/* Services (déployable) */}
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="mobile-nav-link"
              style={{
                background: servicesOpen ? 'rgba(107, 63, 232, 0.12)' : 'transparent',
                border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer'
              }}
            >
              <Briefcase size={22} strokeWidth={2} />
              <span style={{ flex: 1 }}>Services</span>
              <ChevronDown
                size={20}
                strokeWidth={2.5}
                style={{
                  transition: 'transform 0.25s ease',
                  transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: '#B59FFF'
                }}
              />
            </button>

            {/* Sous-menu Services */}
            <div
              style={{
                maxHeight: servicesOpen ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
                marginLeft: '1rem',
                borderLeft: '2px solid rgba(107, 63, 232, 0.3)'
              }}
            >
              <div style={{ padding: servicesOpen ? '0.5rem 0' : '0', display: 'flex', flexDirection: 'column' }}>
                {SERVICES.map(({ label, path, Icon }) => (
                  <a
                    key={path}
                    href={path}
                    onClick={(e) => { e.preventDefault(); goToRoute(path)(); }}
                    className="mobile-sub-link"
                  >
                    <Icon size={18} strokeWidth={2} style={{ color: '#B59FFF' }} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* À propos */}
            <a
              href="/#a-propos"
              onClick={goToAnchor('a-propos')}
              className="mobile-nav-link"
            >
              <User size={22} strokeWidth={2} />
              <span>À propos</span>
            </a>

            {/* FAQ */}
            <a
              href="/#faq"
              onClick={goToAnchor('faq')}
              className="mobile-nav-link"
            >
              <HelpCircle size={22} strokeWidth={2} />
              <span>FAQ</span>
            </a>

            {/* SÉPARATEUR */}
            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '1.5rem 0 1rem' }} />

            {/* CTAs */}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: 700,
                marginBottom: '0.75rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Zap size={18} strokeWidth={2.5} />
              Réserver mon diagnostic gratuit
            </a>

            <a
              href="tel:+33615940883"
              onClick={closeMenu}
              className="btn btn-success"
              style={{
                width: '100%',
                padding: '0.95rem 1rem',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Phone size={18} strokeWidth={2.5} />
              06 15 94 08 83
            </a>

            {/* RÉSEAUX SOCIAUX */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '2rem',
              marginBottom: '2rem'
            }}>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="mobile-social-icon"
              >
                <Instagram size={22} />
              </a>
              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="mobile-social-icon"
              >
                <TikTokIcon size={22} />
              </a>
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="mobile-social-icon"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        .mobile-burger { display: flex !important; }
        .desktop-only { display: none !important; }
        .header-nav a:hover { color: #B59FFF !important; }

        @keyframes fadeInMenu {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 1rem 1rem;
          border-radius: 12px;
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 600;
          text-decoration: none;
          min-height: 56px;
          transition: background 0.2s ease;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          background: rgba(107, 63, 232, 0.12);
        }

        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          color: rgba(255,255,255,0.78);
          font-size: 1.0625rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          border-radius: 8px;
        }
        .mobile-sub-link:hover,
        .mobile-sub-link:active {
          color: #fff;
          background: rgba(107, 63, 232, 0.08);
        }

        .mobile-social-icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          transition: all 0.2s ease;
        }
        .mobile-social-icon:hover {
          color: #B59FFF;
          background: rgba(107, 63, 232, 0.12);
          border-color: rgba(107, 63, 232, 0.4);
        }

        @media(min-width: 768px) {
          .mobile-burger { display: none !important; }
          .desktop-only { display: flex !important; }
          .mobile-menu-overlay { display: none !important; }
          .logo-img { height: 56px !important; }
        }
        @media(min-width: 1024px) {
          .logo-img { height: 64px !important; }
        }
      `}</style>
    </header>
  );
}
