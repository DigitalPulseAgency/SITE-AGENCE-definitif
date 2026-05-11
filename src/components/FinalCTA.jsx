import React from 'react';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

const REASSURANCES = [
  'Pas de blabla commercial, juste du concret',
  'Tu repars avec une feuille de route, même si tu ne bosses pas avec nous',
  'Aucun engagement après l\'appel'
];

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div
            className="relative rounded-3xl border border-violet-500/30 px-8 py-16 md:px-12 md:py-20 text-center bg-gradient-to-br from-[#1a0d2e] via-[#2a1a4e] to-[#1a0d2e]"
            style={{ boxShadow: '0 0 60px rgba(107, 63, 232, 0.25)' }}
          >
            {/* 1. Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-sm font-semibold">
              <Zap size={14} className="text-violet-300" />
              Diagnostic offert · 15 minutes en visio
            </span>

            {/* 2. Titre */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight max-w-4xl mx-auto mt-6">
              On regarde ensemble ce qui te fait perdre du temps.
            </h2>

            {/* 3. Sous-titre argumentaire */}
            <p className="text-lg md:text-xl text-white/80 text-center leading-relaxed max-w-3xl mx-auto mt-6">
              Tu nous parles de ton activité. On identifie les tâches qui te bouffent tes journées. Et on te montre concrètement ce qu'on pourrait automatiser dans ton entreprise pour te faire gagner{' '}
              <span className="font-semibold text-white">3 à 10 heures par semaine</span>.
            </p>

            {/* 4. Grille 3 puces de réassurance */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
              {REASSURANCES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white/80 text-sm md:text-base text-left"
                >
                  <Check
                    className="w-5 h-5 text-violet-400 flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* 5. Bouton CTA */}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold mt-10 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              Réserver mon diagnostic gratuit
              <ArrowRight size={20} />
            </a>

            {/* 6. Phrase de réassurance */}
            <p className="text-white/50 text-sm text-center mt-4">
              Réponse sous 24h · Créneaux disponibles cette semaine
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
