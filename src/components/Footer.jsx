import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TIKTOK_LINK } from '../config/links';
import TikTokIcon from './icons/TikTokIcon';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 text-white/60" style={{ background: 'rgba(46, 16, 101, 0.18)', padding: '4rem 0 2rem 0' }}>
      <div className="container">

        {/* Grille principale */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>

          {/* Colonne logo + tagline */}
          <div>
            <img src="/logo/logo_dark_bg.png" alt="Digital Pulse Agency" loading="lazy" style={{ width: '150px', height: 'auto', objectFit: 'contain', marginBottom: '1rem' }} />
            <p className="text-white/75" style={{ fontSize: '0.95rem', maxWidth: '280px' }}>
              Pendant que les autres attendent, nous on va chercher.
            </p>
          </div>

          {/* Colonne Nos services */}
          <div>
            <h3 className="text-white" style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nos services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/sites-internet" className="footer-link">Sites internet</Link></li>
              <li><Link to="/reseaux-sociaux" className="footer-link">Réseaux sociaux</Link></li>
              <li><Link to="/fiche-google" className="footer-link">Fiche Google</Link></li>
              <li><Link to="/automatisations" className="footer-link">Automatisations IA</Link></li>
              <li><Link to="/ecommerce" className="footer-link">E-commerce</Link></li>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div>
            <h3 className="text-white" style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="mailto:contact@digitalpulse-agency.fr" className="footer-link">contact@digitalpulse-agency.fr</a></li>
              <li><a href="tel:+33615940883" className="footer-link">06 15 94 08 83</a></li>
              <li>
                <a
                  href="https://www.instagram.com/digitalpulse_agency26?igsh=bDMwaHh0cmo1YXpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Instagram size={18} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={TIKTOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label="TikTok"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <TikTokIcon size={18} /> TikTok
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barre du bas */}
        <div className="border-t border-white/10" style={{ width: '100%', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', fontSize: '0.875rem' }}>
          <div className="text-white/55">Copyright &copy; 2026 DigitalPulse Agency</div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/mentions-legales" className="footer-link-sm">Mentions légales</Link>
            <Link to="/confidentialite" className="footer-link-sm">Politique de confidentialité</Link>
            <Link to="/cgv" className="footer-link-sm">CGV</Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #B59FFF; }
        .footer-link-sm {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link-sm:hover { color: #B59FFF; }
        @media(min-width: 768px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
