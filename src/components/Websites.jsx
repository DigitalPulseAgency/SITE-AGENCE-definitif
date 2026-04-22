import React, { useState } from 'react';
import { Check, Mail, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Websites() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className="section" id="sites">
      <div className="container">
        <FadeIn className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>Ton site doit vendre. Pas décorer.</h2>
          <p className="intro-text" style={{ fontSize: '1.125rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Les réseaux sociaux attirent. Le site convertit et te rend visible sur Google. On active cette brique quand ta vraie douleur, c'est <strong>être trouvé sur Google</strong> par des gens qui cherchent déjà ton service.
          </p>
        </FadeIn>

        <div className="grid-2" style={{ gap: '2rem', marginBottom: '4rem' }}>
          {/* Site Basique */}
          <FadeIn>
            <div style={{ border: '1px solid #E5E7EB', borderRadius: '1.5rem', padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '2rem', minHeight: '120px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', lineHeight: 1.3 }}>
                  Site BASIQUE
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  487€ <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>(one-shot)</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Pour exister en ligne avec une image pro.</p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Site vitrine <strong>optimisé conversion</strong></span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span><strong>Mobile-friendly</strong> (responsive)</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Fiche contact + formulaire</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Intégration <strong>fiche Google Business</strong></span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Livraison rapide</span></li>
              </ul>

              <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%', border: '2px solid var(--purple-light)' }}>
                Demander un devis <ArrowRight size={20} />
              </a>
            </div>
          </FadeIn>

          {/* Site Complet */}
          <FadeIn delay={0.2}>
            <div style={{ border: '2px solid var(--purple-primary)', borderRadius: '1.5rem', padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              
              <div style={{ 
                position: 'absolute', 
                top: '0', 
                left: '2.5rem', 
                transform: 'translateY(-50%)',
                backgroundColor: 'var(--purple-primary)', 
                color: '#fff', 
                padding: '6px 14px', 
                borderRadius: '999px', 
                fontWeight: 700, 
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                RECOMMANDÉ POUR LE SEO
              </div>

              <div style={{ marginBottom: '2rem', minHeight: '120px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', marginTop: '0.5rem', lineHeight: 1.3 }}>
                  Site optimisé pour la conversion <br/>
                  <span style={{ fontSize: '0.85em', color: 'var(--purple-primary)' }}>+ Blog SEO</span>
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  987€ <span style={{ fontSize: '1.25rem', color: 'var(--purple-primary)' }}>+ 49,99€/mois</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Pour dominer Google sur ton secteur.</p>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span style={{ fontWeight: 600 }}>Tout le site Basique, plus&nbsp;:</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span><strong>Articles de blog mensuels</strong> rédigés sur les mots-clés les plus recherchés par tes futurs clients</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span><strong>Optimisation SEO continue</strong> pour remonter sur Google</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Maintenance et mises à jour</span></li>
                <li style={{ display: 'flex', gap: '1rem' }}><Check size={20} color="var(--purple-primary)" style={{ flexShrink: 0 }} /> <span>Hébergement sécurisé inclus</span></li>
              </ul>

              <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }}>
                Demander un devis <ArrowRight size={20} />
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
              <button onClick={() => setFormOpen(true)} className="btn btn-primary">
                <Mail size={20} /> Recevoir des exemples par mail
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
        @media(max-width: 767px) {
          .intro-text {
            margin-bottom: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
