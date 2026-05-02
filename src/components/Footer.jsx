import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F1B2E', color: 'rgba(255, 255, 255, 0.7)', padding: '4rem 0 2rem 0' }}>
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
            <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '280px' }}>
              Pendant que les autres attendent, nous on va chercher.
            </p>
          </div>

          {/* Colonne Nos services */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Nos services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/sites-internet" style={footerLinkStyle}>Sites internet</Link></li>
              <li><Link to="/reseaux-sociaux" style={footerLinkStyle}>Réseaux sociaux</Link></li>
              <li><Link to="/fiche-google" style={footerLinkStyle}>Fiche Google</Link></li>
              <li><Link to="/automatisations" style={footerLinkStyle}>Automatisations IA</Link></li>
              <li><Link to="/ecommerce" style={footerLinkStyle}>E-commerce</Link></li>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="mailto:contact@digitalpulse-agency.fr" style={footerLinkStyle}>contact@digitalpulse-agency.fr</a></li>
              <li><a href="tel:+33615940883" style={footerLinkStyle}>06 15 94 08 83</a></li>
              <li>
                <a
                  href="https://www.instagram.com/digitalpulse_agency26?igsh=bDMwaHh0cmo1YXpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...footerLinkStyle, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Instagram size={18} /> Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barre du bas */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', fontSize: '0.875rem' }}>
          <div>Copyright &copy; 2026 DigitalPulse Agency</div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/mentions-legales" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mentions légales</Link>
            <Link to="/confidentialite" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Politique de confidentialité</Link>
            <Link to="/cgv" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>CGV</Link>
          </div>
        </div>

      </div>

      <style>{`
        @media(min-width: 768px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

const footerLinkStyle = {
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  transition: 'color 0.2s'
};
