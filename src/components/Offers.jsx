import React, { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Offers() {
  const placesConfig = [
    { niche: "Salons de beauté", count: 14 },
    { niche: "Restaurants / pizzerias", count: 9 },
    { niche: "Artisans du bâtiment", count: 16 },
    { niche: "Conciergeries immobilières", count: 6 },
    { niche: "Coiffeurs", count: 18 },
    { niche: "Garages / carrossiers", count: 12 }
  ];

  const [counterIndex, setCounterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterIndex((prev) => (prev + 1) % placesConfig.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentConfig = placesConfig[counterIndex];
  const fillPercentage = ((20 - currentConfig.count) / 20) * 100;

  return (
    <section className="section bg-alt" id="offres" style={{ paddingTop: '6rem' }}>
      <div className="container">
        <FadeIn className="text-center">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>Choisis ton niveau d'ambition.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Deux offres. Deux objectifs. Zéro blabla.</p>
        </FadeIn>

        <div className="grid-2" style={{ gap: '2rem', alignItems: 'stretch', marginTop: '5rem' }}>
          
          {/* Offre Démarrage */}
          <FadeIn delay={0.1} style={{ display: 'flex' }} className="order-basic">
            <div className="offer-card-basic" style={{
              backgroundColor: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: '1.5rem',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'inline-block', backgroundColor: 'var(--bg-alt)', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  OFFRE DÉMARRAGE
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  69€<span style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 500 }}> / mois</span>
                </div>
                <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-main)' }}>Pour EXISTER.</p>
                <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Pour les structures qui veulent une présence propre et active.</p>
                <p style={{ fontWeight: 600, color: 'var(--purple-primary)' }}>Sans engagement.</p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flexGrow: 1 }}>
                {['3 publications / semaine sur Instagram + TikTok', 'Stories régulières', 'Bio optimisée pour la conversion', 'Calendrier mensuel de contenu', 'Publications aux meilleurs horaires'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-main)', fontWeight: i === 2 || i === 0 ? 600 : 400 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-basic-hover" style={{ 
                width: '100%', 
                border: '2px solid var(--purple-primary)', 
                backgroundColor: 'transparent',
                color: 'var(--purple-primary)'
              }}>
                Choisir Démarrage <ArrowRight size={20} className="arrow-icon" />
              </a>
            </div>
          </FadeIn>

          {/* Offre Pivot Acquisition */}
          <FadeIn delay={0.2} style={{ display: 'flex' }} className="order-premium">
            <div className="offer-card-premium" style={{
              backgroundColor: '#1F1B2E',
              color: '#fff',
              borderRadius: '1.5rem',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)',
              border: '2px solid rgba(147, 51, 234, 0.6)',
              zIndex: 10
            }}>
              
              {/* Badge Shine */}
              <div className="founder-badge" style={{ 
                position: 'absolute', 
                top: '-1rem', 
                left: '50%', 
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--purple-primary)',
                color: '#fff',
                padding: '0.5rem 1.5rem',
                borderRadius: '2rem',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                boxShadow: '0 4px 10px rgba(147, 51, 234, 0.3)',
                overflow: 'hidden'
              }}>
                TARIF FONDATEUR
              </div>

              <div style={{ marginBottom: '2rem', marginTop: '1rem' }}>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: 600, color: 'var(--purple-light)', marginBottom: '1rem' }}>
                  OFFRE ACQUISITION
                </div>
                <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  187€<span style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}> / mois</span>
                </div>
                <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>Pour ATTAQUER.</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>Pour ceux qui veulent des clients, pas juste des likes.</p>
                <p style={{ fontWeight: 600, color: 'var(--purple-light)' }}>Engagement 3 mois minimum <span style={{fontWeight: 400, opacity: 0.8}}>(on construit une vraie stratégie)</span></p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Check size={20} color="var(--purple-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontWeight: 600 }}>Tout le contenu de l'offre Démarrage, plus&nbsp;:</span>
                </li>
                {[
                  { text: 'Prospection active sur les comptes des concurrents (interactions, DM calibrés)', bold: true },
                  { text: 'Scripts de première conversation pour transformer un DM en client', bold: true },
                  { text: 'Bio Instagram ultra-optimisée pour la conversion', bold: true },
                  { text: 'Optimisation de ta fiche Google Business (visibilité locale)', bold: true },
                  { text: 'Stratégie d\'avis clients (pour dominer ton marché local)', bold: true },
                  { text: 'Objectif clair\u00A0: de vrais clients, pas des abonnés fantômes', bold: true }
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontWeight: item.bold ? 600 : 400, color: 'rgba(255,255,255,0.9)' }}>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Dynamic Places Counter */}
              <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--purple-light)' }}>
                  <span>{currentConfig.niche}</span>
                  <span>{currentConfig.count} places restantes sur 20</span>
                </div>
                <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${fillPercentage}%`, height: '100%', backgroundColor: 'var(--purple-primary)', transition: 'width 0.5s ease-in-out' }} />
                </div>
              </div>

              {/* Box Tarif Fondateur */}
              <div style={{
                backgroundColor: 'var(--purple-light)',
                color: 'var(--text-main)',
                padding: '1.25rem',
                borderRadius: '0.75rem',
                borderLeft: '4px solid var(--purple-primary)',
                marginBottom: '2rem',
                fontSize: '0.875rem',
                lineHeight: 1.5
              }}>
                <div style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Tarif fondateur — 187€/mois
                </div>
                <p style={{ marginBottom: '0.5rem' }}>
                  On est deux à gérer la prospection et le suivi humain de chaque client. Pour garantir la qualité, on limite notre accompagnement à <strong>20 clients maximum par secteur d'activité</strong>.
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Certains secteurs se remplissent plus vite que d'autres.</strong> Une fois les 20 places atteintes dans ton secteur, les nouvelles inscriptions ferment le temps d'agrandir l'équipe — et le tarif passera à <strong>400€/mois</strong>.
                </p>
                <p style={{ fontWeight: 600, color: 'var(--purple-primary)' }}>Les clients fondateurs conservent leur tarif à vie.</p>
              </div>

              <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-star" style={{ 
                width: '100%', 
                fontSize: '1.0625rem', 
                padding: '1rem 2rem',
                background: 'linear-gradient(90deg, var(--purple-primary), var(--purple-electric))',
                border: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Sécuriser ma place de fondateur <ArrowRight size={20} className="arrow-icon" />
                </span>
              </a>
            </div>
          </FadeIn>

        </div>
      </div>

      <style>{`
        /* Hover Démarrage */
        .offer-card-basic:hover {
          transform: translateY(-4px);
          border-color: var(--purple-light);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
        }
        
        .btn-basic-hover {
          transition: all 0.25s ease;
        }
        .btn-basic-hover:hover {
          background-color: var(--purple-primary) !important;
          color: #fff !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }
        .btn-basic-hover:hover .arrow-icon {
          transform: translateX(4px);
        }
        
          /* Premium Card Animations */
          @media (prefers-reduced-motion: no-preference) {
            .offer-card-premium {
              animation: pulse-glow 4s infinite alternate ease-in-out;
            }
            .offer-card-premium:hover {
              transform: translateY(-8px) !important;
              box-shadow: 0 30px 60px rgba(147, 51, 234, 0.3) !important;
            }
            
            /* Founder Badge Shine */
            .founder-badge::after {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 50%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
              animation: shine 5s infinite;
            }
            
            .offer-card-premium:hover .founder-badge::after {
              animation: shine 1.5s infinite;
            }

            /* Star Button Animations */
            .btn-star {
              animation: btn-breathe 2.5s infinite ease-in-out;
              box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3);
            }
            
            .btn-star::before {
               content: '';
               position: absolute;
               top: 0; left: -100%;
               width: 100%; height: 100%;
               background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
               animation: btn-shine 4s infinite;
               zIndex: 1;
            }

            .btn-star:hover {
              animation: none;
              transform: scale(1.06);
              box-shadow: 0 10px 30px rgba(147, 51, 234, 0.6);
            }
            .btn-star:hover::before {
              animation: btn-shine 1.5s infinite;
            }
            .btn-star:active {
              transform: scale(1.02);
            }
            .btn-star:hover .arrow-icon {
              transform: translateX(4px);
            }
            
            @keyframes shine {
              0% { left: -100%; }
              20% { left: 200%; }
              100% { left: 200%; }
            }
            @keyframes btn-shine {
              0% { left: -100%; }
              50% { left: 200%; }
              100% { left: 200%; }
            }
            @keyframes btn-breathe {
              0% { transform: scale(1.0); box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3); }
              50% { transform: scale(1.03); box-shadow: 0 6px 30px rgba(147, 51, 234, 0.6); }
              100% { transform: scale(1.0); box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3); }
            }
          }

          /* Mobile Ordering */
          @media(max-width: 767px) {
            .order-premium { order: -1; }
            .order-basic { order: 0; }
          }
          
          .arrow-icon {
            transition: transform 0.2s ease;
          }
        `}</style>
    </section>
  );
}
