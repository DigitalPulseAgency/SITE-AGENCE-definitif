import React from 'react';
import { Sparkles, KeyRound, UtensilsCrossed, Scissors, Hammer, Car, ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function ROI() {
  const niches = [
    {
      icon: <Sparkles size={28} />,
      title: "Salon de beauté / esthétique / massage",
      val: "~300€/an",
      calc: "(8 visites × 40€)",
      desc: "1 nouvelle cliente/mois rentabilise ton offre dès le 1er mois"
    },
    {
      icon: <KeyRound size={28} />,
      title: "Conciergerie immobilière",
      val: "3k-8k€",
      calc: "par mandat/an",
      desc: "1 mandat = 1 à 3 ans rentabilisés"
    },
    {
      icon: <UtensilsCrossed size={28} />,
      title: "Restaurant / pizzeria",
      val: "~500€/an",
      calc: "(un habitué)",
      desc: "1 habitué/mois rentabilise tout"
    },
    {
      icon: <Scissors size={28} />,
      title: "Coiffeur",
      val: "~250€/an",
      calc: "(6 visites × 45€)",
      desc: "1 client/mois = rentabilité immédiate"
    },
    {
      icon: <Hammer size={28} />,
      title: "Artisan du bâtiment",
      val: "500-10k€",
      calc: "par chantier",
      desc: "1 chantier = rentabilité immédiate"
    },
    {
      icon: <Car size={28} />,
      title: "Garage / carrossier",
      val: "500-1500€",
      calc: "par intervention",
      desc: "1 devis signé = 3 à 8 mois rentabilisés"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <FadeIn className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>Fais le calcul avant de payer.</h2>
          <p className="roi-intro" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            Voilà ce qu'un seul nouveau client peut te rapporter chaque année selon ton métier.
          </p>
        </FadeIn>

        <div className="grid-3" style={{ marginBottom: '4rem', gap: '1.5rem' }}>
          {niches.map((niche, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div style={{
                border: '1px solid #E5E7EB',
                borderRadius: '1rem',
                padding: '2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
              }} className="roi-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--purple-light)', color: 'var(--purple-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {niche.icon}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{niche.title}</h3>
                </div>
                
                <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--purple-primary)', marginBottom: '0.25rem' }}>
                    {niche.val}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    {niche.calc}
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'var(--bg-alt)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  borderLeft: '3px solid var(--purple-primary)'
                }}>
                  {niche.desc}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center" delay={0.4}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: 'var(--text-main)'
          }}>
             Tu paies <span style={{ color: 'var(--purple-primary)' }}>187€/mois</span>. Un seul nouveau client, et tu es dans le vert.
          </div>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
            Réserver mon diagnostic gratuit <ArrowRight size={20} />
          </a>
        </FadeIn>
      </div>

      <style>{`
        .roi-card:hover {
          border-color: var(--purple-light);
          box-shadow: 0 10px 25px -5px rgba(147, 51, 234, 0.1);
        }
        @media(min-width: 768px) {
          .roi-intro { margin-bottom: 64px !important; }
        }
        @media(max-width: 767px) {
          .roi-intro { margin-bottom: 40px !important; }
        }
      `}</style>
    </section>
  );
}
