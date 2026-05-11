import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import FadeIn from './FadeIn';

function AnimatedNumber({ target = 1500, duration = 2000, suffix = '+' }) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const start = performance.now();
            const animate = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  const formatted = value.toLocaleString('fr-FR');

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

const TASKS = [
  'Relance clients',
  'Génération de devis',
  'Réservation / prise de RDV',
  'Organisation chantier / terrain',
  'Support email',
  'Suivi interventions'
];

export default function ProofBanner() {
  return (
    <section className="py-20 px-6 border-y border-white/10 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Titre */}
        <FadeIn className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Des résultats concrets, à grande échelle
          </h2>
          <p className="text-base text-white/60 mt-3">
            Ce qu'on a déjà livré sur le terrain.
          </p>
        </FadeIn>

        {/* Cards compteurs */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">

          {/* CARD 1 — Compteur animé */}
          <FadeIn>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]">
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B3FE8] to-[#B59FFF]">
                <AnimatedNumber target={1500} duration={2000} suffix="+" />
              </div>
              <p className="text-white/80 text-lg mt-3">
                sites web réalisés en moins de 2 ans
              </p>
            </div>
          </FadeIn>

          {/* CARD 2 — Statique "Dizaines" */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.05]">
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B3FE8] to-[#B59FFF]">
                Des dizaines
              </div>
              <p className="text-white/80 text-lg mt-3">
                d'entreprises accompagnées dans chaque domaine (BTP, Auto, Restauration, etc.)
              </p>
            </div>
          </FadeIn>

        </div>

        {/* Section descriptif */}
        <FadeIn delay={0.15}>
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
              Notre spécialité
            </p>
            <p className="text-white/80 text-lg mt-4 leading-relaxed">
              On est spécialisés en{' '}
              <strong className="text-white font-semibold">
                automatisation et infrastructures IA
              </strong>{' '}
              pour les entreprises locales. Notre mission : te faire gagner{' '}
              <strong className="text-white font-semibold">
                3 à 10 heures par semaine
              </strong>{' '}
              sur les tâches chronophages et répétitives à faible valeur ajoutée.
            </p>

            {/* Liste des tâches automatisées */}
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {TASKS.map((task) => (
                <li
                  key={task}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <Check
                    className="w-5 h-5 flex-shrink-0 text-violet-400"
                    strokeWidth={2.5}
                  />
                  <span className="text-white/85">{task}</span>
                </li>
              ))}
            </ul>

            {/* Phrase de clôture */}
            <p className="text-white/70 italic mt-8 max-w-2xl mx-auto leading-relaxed">
              Ce temps gagné, c'est du temps que tu peux passer avec ta famille, sur les
              tâches essentielles de ton business, ou simplement pour profiter de ta vie.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
