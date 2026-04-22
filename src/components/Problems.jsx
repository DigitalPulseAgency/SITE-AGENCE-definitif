import React from 'react';
import { Smartphone, TrendingDown, Search, SearchSlash, Clock } from 'lucide-react';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function Problems() {
  const problems = [
    {
      icon: <Smartphone size={32} color="var(--purple-primary)" />,
      title: "\"Je rate des prospects\"",
      text: "Tu ne réponds pas assez vite aux DM, aux mails, aux formulaires. Pendant que tu bosses, les demandes s'accumulent — et ton concurrent répond avant toi."
    },
    {
      icon: <TrendingDown size={32} color="var(--purple-primary)" />,
      title: "\"Je publie mais ça ne convertit pas\"",
      text: "Tu postes sur Insta, sur TikTok, mais aucun client ne tombe. Des likes, oui. Des clients, non. Tu perds du temps à créer du contenu qui ne rapporte rien."
    },
    {
      icon: <SearchSlash size={32} color="var(--purple-primary)" />,
      title: "\"Personne ne me trouve sur Google\"",
      text: "Tes clients cherchent ton service dans ta ville — et tombent sur tes concurrents. Tu n'as pas de site, ou ton site ne remonte pas."
    },
    {
      icon: <Clock size={32} color="var(--purple-primary)" />,
      title: "\"Les autres agences me facturent sans résultat\"",
      text: "Community managers qui publient pour publier, posts génériques, zéro prospection concrète. Tu paies, et tu n'as toujours pas de clients en plus."
    }
  ];

  return (
    <section className="section bg-alt" id="problemes">
      <div className="container">
        <FadeIn className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>Tu reconnais un de ces problèmes ?</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Si oui, tu es au bon endroit.</p>
        </FadeIn>

        <div className="grid-4" style={{ marginBottom: '4rem' }}>
          {problems.map((prob, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                height: '100%',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }} className="problem-card">
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--purple-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {prob.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{prob.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{prob.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center" delay={0.4}>
          <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            Si une seule de ces phrases te ressemble, on doit se parler.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Réserver mon diagnostic gratuit <Search size={20} style={{ marginLeft: '0.25rem' }} />
          </a>
        </FadeIn>
      </div>

      <style>{`
        .problem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </section>
  );
}
