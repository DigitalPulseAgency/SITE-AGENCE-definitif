import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '8rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
        <div>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1, fontWeight: 700 }}>
              <span style={{ display: 'block', color: '#1F1B2E' }}>Plus de clients qualifiés.</span>
              <span style={{ display: 'block', color: '#1F1B2E' }}>Plus de soirées libres.</span>
              <span style={{ display: 'block', color: '#6B3FE8' }}>Moins de stress au quotidien.</span>
            </h1>
          </div>
          
          <div>
            <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: '#6B7280', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.7, marginTop: '1.5rem' }}>
              On gère ta visibilité sur Google, Instagram et TikTok. On va chercher des prospects qualifiés chez tes concurrents. On automatise tes tâches chronophages. <strong style={{ color: '#1F1B2E' }}>On te redonne ton temps. Et tu reviens à l'essentiel.</strong>
            </p>
          </div>

          <FadeIn delay={0.2}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
              <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Réserver mon diagnostic gratuit <ArrowRight size={20} />
              </a>
              <a href="#offres" className="btn btn-secondary" style={{ padding: '1rem 1.5rem' }}>
                Voir nos offres
              </a>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><CheckCircle2 size={16} color="var(--purple-primary)" /> Diagnostic visio 15 min</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><CheckCircle2 size={16} color="var(--purple-primary)" /> 100% offert</span>
            </div>
          </FadeIn>
        </div>

{/* <FadeIn delay={0.3} className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '80%',
              height: '80%',
              backgroundColor: 'var(--purple-primary)',
              filter: 'blur(50px)',
              opacity: 0.15,
              borderRadius: '50%',
              zIndex: 0
            }} />

            <div className="animate-float" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '420px',
            aspectRatio: '4/5',
            backgroundColor: 'var(--purple-light)',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(147, 51, 234, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            overflow: 'hidden',
            border: '1px solid rgba(147, 51, 234, 0.1)'
          }}>
            <img 
              src="/logo/logo_dark_bg.png" 
              alt="Digital Pulse Agency" 
              loading="lazy" 
              style={{ width: '100%', maxWidth: '250px', height: 'auto', objectFit: 'contain' }} 
            />
          </div>


          </div>
        </FadeIn> */}
      </div>

      <style>{`
        @media(max-width: 767px) {
          .hero-visual { padding: 2rem 0; }
        }
      `}</style>
    </section>
  );
}
