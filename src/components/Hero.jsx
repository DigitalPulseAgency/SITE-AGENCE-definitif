import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, UserCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '4.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
        <div>
          <FadeIn>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--text-main)', lineHeight: 1.1 }}>
              Remplis ton agenda. <br />
              <span className="text-purple">Vide ta to-do list.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '1rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Pendant que les autres agences attendent tes clients, <strong style={{color: 'var(--text-main)'}}>nous, on va les chercher.</strong>
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.6 }}>
              Prospection active sur les comptes de tes concurrents, contenu qui vend, site qui référence. DigitalPulse Agency fait décoller ton business local.
            </p>
          </FadeIn>

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
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><CheckCircle2 size={16} color="var(--purple-primary)" /> Sans engagement</span>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          
          {/* Photo Placeholder Container */}
          <div style={{ position: 'relative' }}>
            {/* Contained soft blob behind the photo */}
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

            {/* Photo Card */}
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

          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '-10%',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(12px)',
              padding: '1rem 1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '1px solid rgba(255,255,255,0.5)',
              zIndex: 2
            }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--purple-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={24} color="var(--purple-primary)" />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Nouveau client</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Réservé à l'instant</div>
            </div>
          </motion.div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media(max-width: 767px) {
          .hero-visual { padding: 2rem 0; }
        }
      `}</style>
    </section>
  );
}
