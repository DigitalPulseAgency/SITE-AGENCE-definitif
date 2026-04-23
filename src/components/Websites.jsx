import React, { useState } from 'react';
import { Check, Mail, ArrowRight } from 'lucide-react';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function Websites() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="section" id="sites">
      <div className="container">
        <FadeIn className="text-center websites-intro">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>Ton site doit vendre. Pas décorer.</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Les réseaux sociaux attirent. Le site convertit et te rend visible sur Google. On active cette brique quand ta vraie douleur, c'est <strong>être trouvé sur Google</strong> par des gens qui cherchent déjà ton service.
          </p>
        </FadeIn>

        <div className="grid-2 websites-cards-grid">
          {/* Site Basique */}
          <FadeIn>
            <div className="card-basique">
              <div style={{ marginBottom: '2rem', minHeight: '120px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', lineHeight: 1.3 }}>
                  Site BASIQUE
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  487€ <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>(one-shot)</span>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f0fdf4', color: '#15803d', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem', border: '1px solid #bbf7d0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{width: '1rem', height: '1rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paiement en 2 ou 3 fois possible</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Pour exister en ligne avec une image pro.</p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Site vitrine <strong>optimisé conversion</strong></span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span><strong>Mobile-friendly</strong> (responsive)</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Fiche contact + formulaire</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Intégration <strong>fiche Google Business</strong></span></li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <svg className="w-5 h-5 text-[#6B3FE8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ width: '20px', height: '20px' }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Gestion des avis Google</strong> pour renforcer ta crédibilité</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Livraison rapide</span></li>
              </ul>

              <a 
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-basique">
                <span>Lancer mon projet</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* Site Complet (Premium) */}
          <FadeIn delay={0.2}>
            <div className="card-premium">
              <div className="premium-badge-wrapper">
                <div className="premium-badge">
                  <span style={{ position: 'relative', zIndex: 10 }}>RECOMMANDÉ POUR LE SEO</span>
                  <div className="animate-shine"></div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem', minHeight: '120px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', marginTop: '0.5rem', lineHeight: 1.3 }}>
                  Site optimisé pour la conversion <br/>
                  <span style={{ fontSize: '0.85em', color: 'var(--purple-primary)' }}>+ Blog SEO</span>
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  987€ <span style={{ fontSize: '1.25rem', color: 'var(--purple-primary)' }}>+ 49,99€/mois</span>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f0fdf4', color: '#15803d', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem', border: '1px solid #bbf7d0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{width: '1rem', height: '1rem'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paiement en 2 ou 3 fois possible</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Pour dominer Google sur ton secteur.</p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span style={{ fontWeight: 600 }}>Tout le site Basique, plus&nbsp;:</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span><strong>Articles de blog mensuels</strong> rédigés sur les mots-clés les plus recherchés par tes futurs clients</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span><strong>Optimisation SEO continue</strong> pour remonter sur Google</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <svg className="w-5 h-5 text-[#6B3FE8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" style={{ width: '20px', height: '20px' }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Gestion des avis Google</strong> avancée pour dominer ton secteur</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Maintenance et mises à jour</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Hébergement sécurisé inclus</span></li>
              </ul>

              <a 
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-premium">
                <span>
                  Je veux dominer Google
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="cta-premium-shine"></div>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Lead Magnet */}
        <FadeIn delay={0.4}>
          <div style={{ backgroundColor: 'var(--purple-light)', borderRadius: '1.5rem', padding: '3rem 2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Tu veux voir à quoi ressemble un site qui convertit dans ton secteur&nbsp;?
            </h3>
            <p style={{ color: 'var(--text-main)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Dis-nous ton métier, on t'envoie par mail des exemples concrets de sites qu'on a déjà créés pour des entreprises comme la tienne.
            </p>
            
            {!formOpen ? (
              <button 
                onClick={() => setFormOpen(true)} 
                className="inline-flex items-center justify-center gap-3 bg-[#6B3FE8] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#5A32D4] transition-colors"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{ width: '20px', height: '20px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Recevoir des exemples par mail</span>
              </button>
            ) : (
              <form 
                action="https://formspree.io/f/mqkvypzj" 
                method="POST"
                style={{ 
                  backgroundColor: '#fff', 
                  padding: '2rem', 
                  borderRadius: '1rem', 
                  maxWidth: '500px', 
                  margin: '0 auto', 
                  textAlign: 'left',
                  boxShadow: '0 10px 25px rgba(147, 51, 234, 0.1)' 
                }}
              >
                <div className="input-group">
                  <label className="input-label">Nom & prénom</label>
                  <input type="text" name="name" required className="input-field" placeholder="Jean Dupont" />
                </div>
                <div className="input-group">
                  <label className="input-label">Email</label>
                  <input type="email" name="email" required className="input-field" placeholder="jean@exemple.com" />
                </div>
                <div className="input-group">
                  <label className="input-label">Nom de ton entreprise</label>
                  <input type="text" name="company" required className="input-field" placeholder="Le Salon de Jean" />
                </div>
                <div className="input-group">
                  <label className="input-label">Secteur d'activité</label>
                  <select name="industry" required className="input-field" style={{ backgroundColor: '#fff' }}>
                    <option value="">Sélectionne ton secteur...</option>
                    <option value="Salon de beauté">Salon de beauté</option>
                    <option value="Coiffeur">Coiffeur</option>
                    <option value="Restaurant/Pizzeria/Kebab">Restaurant / Pizzeria</option>
                    <option value="Garage/Carrosserie">Garage / Carrosserie</option>
                    <option value="Artisan du bâtiment">Artisan du bâtiment</option>
                    <option value="Conciergerie immobilière">Conciergerie immobilière</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="input-label">Un mot sur ton besoin (optionnel)</label>
                  <textarea name="message" rows="3" className="input-field" placeholder="Je cherche à refaire mon site..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Envoyer ma demande <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>

      <style>{`
        .websites-intro {
          margin-bottom: 80px;
        }
        @media(max-width: 767px) {
          .websites-intro {
            margin-bottom: 48px;
          }
        }
      `}</style>
    </section>
  );
}
