import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function FinalCTA() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--purple-primary)', color: '#fff' }}>
      <div className="container text-center">
        <FadeIn>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '2rem', marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
            <Clock size={16} color="var(--purple-light)" />
            <span>Places limitées à 20 clients par secteur</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Prêt à arrêter d'attendre<br />tes clients&nbsp;?
          </h2>
          
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            15 minutes en visio. 100% offert. Zéro blabla.
          </p>

          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-star transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-0.5" style={{
            backgroundColor: '#fff',
            color: 'var(--purple-primary)',
            padding: '1.25rem 3rem',
            fontSize: '1.125rem',
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.15)'
          }}>
            Réserver mon diagnostic gratuit <ArrowRight size={20} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
