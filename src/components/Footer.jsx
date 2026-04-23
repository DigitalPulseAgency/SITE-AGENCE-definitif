import React from 'react';
import { Brain, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1F1B2E', color: 'rgba(255, 255, 255, 0.7)', padding: '4rem 0 2rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <img src="/logo/logo_dark_bg.png" alt="Digital Pulse Agency" loading="lazy" style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />
        </div>

        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          Pendant que les autres attendent, nous on va chercher.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <a 
            href="mailto:contact@digitalpulse-agency.fr" 
            style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.5rem' }} 
            onMouseOver={e => e.currentTarget.style.color = '#fff'} 
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            contact@digitalpulse-agency.fr
          </a>
          <a 
            href="https://www.instagram.com/digitalpulse_agency26" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.5rem' }} 
            onMouseOver={e => e.currentTarget.style.color = '#fff'} 
            onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>TikTok</a>
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
