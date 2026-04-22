import React from 'react';
import { Sparkles, KeyRound, UtensilsCrossed, Scissors, Hammer, Car } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Niches() {
  const niches = [
    { icon: <Sparkles size={24} />, name: "Salons de beauté / esthétique / massage" },
    { icon: <KeyRound size={24} />, name: "Conciergeries immobilières" },
    { icon: <UtensilsCrossed size={24} />, name: "Restaurants / pizzerias" },
    { icon: <Scissors size={24} />, name: "Coiffeurs indépendants" },
    { icon: <Hammer size={24} />, name: "Artisans du bâtiment (climatiseurs, piscinistes, maçons)" },
    { icon: <Car size={24} />, name: "Garages / carrossiers auto" }
  ];

  return (
    <section className="section bg-alt">
      <div className="container">
        <FadeIn className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>Spécialistes des entreprises locales.</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            Depuis 4 ans, on travaille exclusivement avec des indépendants et des commerces de proximité. On connaît leurs contraintes, leurs horaires, leurs clients types.
          </p>
        </FadeIn>

        <div className="grid-3" style={{ gap: '1rem', marginBottom: '3rem' }}>
          {niches.map((niche, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: '#fff',
                padding: '1.25rem',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                <div style={{ 
                  color: 'var(--purple-primary)', 
                  backgroundColor: 'var(--purple-light)', 
                  padding: '8px', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {niche.icon}
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.9375rem', flexGrow: 1 }}>
                  {niche.name}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center" delay={0.4}>
          <div style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: 'var(--purple-light)',
            borderRadius: '2rem',
            color: 'var(--purple-primary)',
            fontWeight: 600
          }}>
            Ton métier n'est pas dans la liste&nbsp;? <span style={{ color: 'var(--text-main)' }}>Dis-le-nous pendant le diagnostic, on verra si on peut t'aider.</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
