import React from 'react';
import { Trophy, Users, Target } from 'lucide-react';
import FadeIn from './FadeIn';

export default function WhyUs() {
  return (
    <section className="section" id="methode" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Top Part: Text + Badges */}
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '4rem', marginBottom: '4rem' }}>
          
          <div>
            <FadeIn>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>Ce que les autres ne font pas.</h2>
              <div style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                <p style={{ marginBottom: '1rem' }}>
                  La plupart des agences publient du contenu et <strong>attendent</strong> que les clients arrivent. C'est de la présence passive. Ça prend des mois, et ça marche mal.
                </p>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-main)', fontSize: '1.5rem', fontWeight: 600 }}>
                  Nous, on va les chercher.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>Notre méthode est simple, humaine, et profondément logique.</strong>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  On identifie les comptes qui performent déjà dans ton secteur et dans ta zone. On étudie les profils des gens qui <strong>commentent activement chez ces concurrents</strong> — des prospects qui <strong>expriment publiquement un intérêt</strong> pour un service comme le tien.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Puis on engage la conversation. <strong>Avec de vrais messages</strong>, écrits à la main, calibrés sur leur intérêt exprimé. Pas de spam, pas de bots, pas de copier-coller générique.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  C'est exactement ce qu'un <strong>bon commercial ferait en physique&nbsp;:</strong> aller là où ses clients sont déjà, entamer une discussion naturelle, présenter une solution qui correspond à leur besoin. <strong>Nous, on le fait sur Instagram et TikTok.</strong>
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  Résultat&nbsp;: tu récupères des <strong>prospects déjà chauds</strong>, qui t'auraient probablement jamais trouvé tout seuls — et qui sont soulagés qu'une vraie personne leur réponde avec une proposition pertinente.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{
                backgroundColor: 'var(--purple-light)',
                padding: '1.5rem',
                borderRadius: '1rem',
                borderLeft: '4px solid var(--purple-primary)'
              }}>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', alignItems: 'center', fontWeight: 700, color: 'var(--text-main)' }}>
                  Exemple concret&nbsp;:
                </div>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>
                  Tu es une conciergerie à Avignon&nbsp;? On repère les conciergeries qui performent dans ta région, on identifie les propriétaires qui commentent chez elles — <strong>ce sont des gens qui cherchent activement à mettre leur bien en gestion</strong>. On leur adresse un message personnalisé, on explique qui tu es, ce que tu fais, pourquoi tu pourrais mieux les accompagner. <strong>Eux décident la suite.</strong>
                </p>
              </div>
            </FadeIn>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '6rem' }}>
            <FadeIn delay={0.3}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '12px', backgroundColor: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Trophy size={32} color="var(--purple-primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>4 ans d'expérience</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Exclusivement sur les entreprises locales.</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '12px', backgroundColor: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Users size={32} color="var(--purple-primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Équipe de 2</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Accompagnement humain, pas d'automatisation impersonnelle.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', backgroundColor: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '2px solid var(--purple-light)' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '12px', backgroundColor: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Target size={32} color="var(--purple-primary)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>20 clients max par secteur</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Zéro conflit d'intérêt entre clients concurrents.</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Bottom Part: 3 points */}
        <FadeIn delay={0.3}>
          <div style={{
            backgroundColor: 'var(--purple-light)',
            padding: '3rem',
            borderRadius: '1.5rem',
            marginTop: '2rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>Pourquoi cette méthode est respectueuse et efficace</h3>
            <div className="grid-3" style={{ gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--purple-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>01</div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>On parle à des gens qui ont levé la main</h4>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>Commenter un post, c'est une action publique et volontaire. On ne contacte jamais quelqu'un qui n'a montré aucun intérêt — uniquement ceux qui s'expriment déjà dans ton univers.</p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--purple-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>02</div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>On écrit des vrais messages, pas du spam</h4>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>Chaque premier message est personnalisé selon le profil, l'intérêt exprimé, et ton métier. On ne mitraille pas, on dialogue.</p>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--purple-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>03</div>
                <h4 style={{ fontSize: '1.125rem', marginBottom: '0.75rem' }}>La décision leur appartient</h4>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>On ouvre la conversation. Si ça les intéresse, ils répondent — et c'est là que tu prends le relais. Si ça ne les intéresse pas, on passe au suivant. Zéro pression, zéro insistance.</p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
