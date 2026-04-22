import React from 'react';
import { UserCircle2, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Bio() {
  return (
    <section className="section" id="a-propos">
      <div className="container">
        <div className="grid-2-bio" style={{ alignItems: 'center', gap: '4rem' }}>
          
          {/* Photo à gauche */}
          <FadeIn className="bio-photo">
            <div className="animate-float" style={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '4/5',
              backgroundColor: 'var(--purple-light)',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(147, 51, 234, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              zIndex: 1,
              border: '1px solid rgba(147, 51, 234, 0.1)'
            }}>
              {/* Image tag will replace this when ready -> <img src="/louis.jpg" ... /> */}
              <UserCircle2 size={80} color="var(--purple-primary)" style={{ marginBottom: '1rem' }} />
              <div style={{ color: 'var(--purple-primary)', fontWeight: 500 }}>Photo à venir</div>
              
              {/* Blurred background shape */}
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-30px',
                width: '60%',
                height: '60%',
                backgroundColor: 'var(--purple-light)',
                borderRadius: '50%',
                filter: 'blur(30px)',
                zIndex: -1
              }} />
            </div>
          </FadeIn>

          {/* Texte à droite */}
          <FadeIn delay={0.2}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Passionné, exigeant, et focus qualité.
            </h2>
            
            <div style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <p style={{ marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.25rem', fontWeight: 500 }}>
                Salut, moi c'est <strong>Louis</strong>.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Ça fait <strong>4 ans</strong> que je crée des sites internet et que je gère des réseaux sociaux — d'abord <strong>pour des proches qui se lançaient&nbsp;:</strong> un pote maçon, un cousin dans la peinture, un ami menuisier, un carrossier, une conciergerie immobilière... J'ai appris sur le terrain, projet après projet, en voyant concrètement ce qui ramène des clients et ce qui ne sert à rien.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Au fil du temps, <strong>j'y ai pris goût</strong>. Et surtout, j'ai vu à quel point ces indépendants galéraient à trouver des clients alors qu'ils étaient excellents dans leur métier.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Alors cette année, <strong>j'ai décidé de le faire sérieusement.</strong> De structurer tout ce que j'avais appris. D'intégrer <strong>l'intelligence artificielle</strong> pour multiplier la productivité. Et surtout, de développer <strong>une méthode d'acquisition que personne ne propose aux petites structures&nbsp;:</strong> aller chercher les prospects directement chez les concurrents, au lieu d'attendre derrière un algorithme.
              </p>
              <p style={{ marginBottom: '1rem', color: 'var(--purple-primary)', fontWeight: 600 }}>
                DigitalPulse Agency, c'est l'agence que j'aurais voulu que mes proches trouvent il y a 4 ans.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                On est <strong>deux</strong> à bosser dessus. On travaille à la main, pas au volume. <strong>On préfère refuser un client que mal l'accompagner</strong> — c'est pour ça qu'on plafonne volontairement à 20 clients par secteur.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Si tu veux qu'on parle de ton business, <strong>je t'offre un diagnostic visio de 15 minutes.</strong> On regarde ensemble ce qui bloque, ce qui peut décoller, et si on est faits pour bosser ensemble.
              </p>
              
              <a href="https://cal.com/digitalpulse-agency/diagnostic-gratuit" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                Réserver mon diagnostic gratuit <ArrowRight size={20} />
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
      
      <style>{`
        .grid-2-bio {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .bio-photo { order: -1; }
        
        @media(min-width: 768px) {
          .grid-2-bio {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
          .bio-photo { order: 0; }
        }
      `}</style>
    </section>
  );
}
