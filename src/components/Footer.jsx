import React from 'react';
import { Brain, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F1B2E', color: 'rgba(255, 255, 255, 0.7)', padding: '4rem 0 2rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <img src="/logo.png" alt="DigitalPulse Agency" style={{ height: '72px' }} />
        </div>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          Pendant que les autres attendent, nous on va chercher.
        </p>

        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
          <a href="mailto:contact@digitalpulse-agency.com" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>contact@digitalpulse-agency.com</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.25rem' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.7)'}><Instagram size={18} /> Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.7)'}>TikTok</a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', width: '100%', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', fontSize: '0.875rem' }}>
          <div>Copyright &copy; 2026 DigitalPulse Agency</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Mentions légales</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>Politique de confidentialité</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.5)' }}>CGV</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
