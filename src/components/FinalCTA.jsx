import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div
            className="relative rounded-3xl border border-violet-500/30 px-8 py-16 md:px-12 md:py-20 text-center bg-gradient-to-br from-[#1a0d2e] via-[#2a1a4e] to-[#1a0d2e]"
            style={{ boxShadow: '0 0 60px rgba(107, 63, 232, 0.25)' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8 text-sm font-semibold text-white/85">
              <Clock size={16} className="text-[#B59FFF]" />
              <span>Places limitées à 20 clients par secteur</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
              Prêt à arrêter d'attendre<br />tes clients&nbsp;?
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
              15 minutes en visio. 100% offert. Zéro blabla.
            </p>

            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 md:px-10 md:py-5 rounded-xl text-lg transition-all duration-300 ease-out shadow-[0_0_30px_rgba(107,63,232,0.5)] hover:shadow-[0_0_50px_rgba(107,63,232,0.8)] hover:scale-[1.03] hover:-translate-y-0.5"
            >
              Réserver mon diagnostic gratuit
              <ArrowRight size={20} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
