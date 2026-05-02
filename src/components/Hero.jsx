import React from 'react';
import { HERO_HAS_PHOTO } from '../config/hero';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '10rem 1.5rem 6rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: HERO_HAS_PHOTO ? 'grid' : 'flex',
        flexDirection: HERO_HAS_PHOTO ? 'row' : 'column',
        gridTemplateColumns: HERO_HAS_PHOTO ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: HERO_HAS_PHOTO ? 'left' : 'center',
        gap: '4rem'
      }}>
        
        {/* COLONNE TEXTE */}
        <div style={{
          maxWidth: HERO_HAS_PHOTO ? 'none' : '900px',
          width: '100%'
        }}>
          <FadeIn>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              marginBottom: '1.5rem', 
              letterSpacing: '-0.02em', 
              lineHeight: 1.1, 
              fontWeight: 700 
            }}>
              <span style={{ display: 'block', color: '#1F1B2E' }}>Plus de clients qualifiés.</span>
              <span style={{ display: 'block', color: '#1F1B2E' }}>Plus de soirées libres.</span>
              <span style={{ display: 'block', color: '#6B3FE8' }}>Moins de stress au quotidien.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p style={{ 
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', 
              color: '#6B7280', 
              maxWidth: HERO_HAS_PHOTO ? '600px' : '850px', 
              lineHeight: 1.7, 
              marginTop: '2rem',
              marginBottom: '2.5rem',
              marginLeft: HERO_HAS_PHOTO ? '0' : 'auto',
              marginRight: HERO_HAS_PHOTO ? '0' : 'auto'
            }}>
              On gère ta visibilité sur Google, Instagram et TikTok. On va chercher des prospects qualifiés chez tes concurrents. On automatise tes tâches chronophages. <strong style={{ color: '#1F1B2E' }}>On te redonne ton temps. Et tu reviens à l'essentiel.</strong>
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '1.5rem', 
              alignItems: 'center', 
              justifyContent: HERO_HAS_PHOTO ? 'flex-start' : 'center',
              marginBottom: '3rem' 
            }}>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem', boxShadow: '0 20px 40px rgba(107, 63, 232, 0.2)' }}>
                Réserver mon diagnostic gratuit
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.75rem' }}>
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#services" className="btn btn-secondary" style={{ padding: '1rem 1.5rem', fontSize: '1.125rem', fontWeight: 600 }}>
                Voir nos offres
              </a>
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              rowGap: '1rem',
              columnGap: '2.5rem',
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              fontWeight: 500,
              justifyContent: HERO_HAS_PHOTO ? 'flex-start' : 'center'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--purple-primary)' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Diagnostic visio 15 min
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--purple-primary)' }}>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% offert
              </span>

            </div>
          </FadeIn>
        </div>
        
        {/* COLONNE PHOTO */}
        {HERO_HAS_PHOTO && (
          <FadeIn delay={0.3} style={{ width: '100%', maxWidth: '480px' }}>
            <div style={{
              position: 'relative',
              aspectRatio: '4/5',
              background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)',
              borderRadius: '2.5rem',
              boxShadow: '0 30px 60px -12px rgba(147, 51, 234, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '1px solid rgba(147, 51, 234, 0.1)'
            }}>
              {/* <img src="/images/louis.jpg" alt="Louis Humbert - DigitalPulse Agency" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
              <span style={{ color: '#9333EA', fontWeight: 600, fontSize: '1.125rem', opacity: 0.6 }}>Photo à venir</span>
            </div>
          </FadeIn>
        )}
        
      </div>
    </section>
  );
}
