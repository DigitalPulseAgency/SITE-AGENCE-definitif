import React from 'react';
import FadeIn from './FadeIn';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Diagnostic gratuit (15 min)",
      desc: "On analyse ta situation, on identifie ce qui bloque, on te dit si on est faits pour bosser ensemble."
    },
    {
      step: "02",
      title: "Stratégie sur mesure",
      desc: "On étudie ton marché local, on identifie tes concurrents qui performent, et on construit ton plan d'attaque."
    },
    {
      step: "03",
      title: "Exécution hebdomadaire",
      desc: "Contenu qui vend + prospection active sur les comptes des concurrents + optimisation Google. Chaque semaine."
    },
    {
      step: "04",
      title: "Résultats concrets",
      desc: "De vrais clients qui te contactent. Reporting transparent. Ajustements constants."
    }
  ];

  return (
    <section className="section bg-alt">
      <div className="container">
        <FadeIn className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>Notre méthode, en 4 étapes.</h2>
        </FadeIn>

        <div className="timeline-container" style={{ position: 'relative', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          
          <div style={{ position: 'absolute', left: '24px', top: '24px', bottom: '24px', width: '2px', backgroundColor: 'var(--purple-light)', zIndex: 0 }} className="timeline-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', zIndex: 1 }}>
            {steps.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ 
                    flexShrink: 0, 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--purple-primary)', 
                    color: '#fff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 10px rgba(147, 51, 234, 0.3)',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {item.step}
                  </div>
                  <div style={{ 
                    backgroundColor: '#fff', 
                    padding: '2rem', 
                    borderRadius: '1rem', 
                    flexGrow: 1,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                  }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn className="text-center">
          <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Commencer par le diagnostic
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
