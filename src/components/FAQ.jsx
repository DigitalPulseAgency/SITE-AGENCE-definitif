import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Je ne suis pas sûr de savoir ce dont j'ai besoin, est-ce que je peux quand même réserver un diagnostic ?",
      a: "Oui, et c'est même exactement le bon réflexe. Le diagnostic de 15 minutes sert précisément à ça : on analyse ta situation, on identifie ce qui bloque, et on te dit honnêtement si on peut t'aider — ou pas. Aucun engagement, aucun argumentaire forcé."
    },
    {
      q: "Combien de temps avant de voir des résultats ?",
      a: "Avec l'offre Acquisition (prospection active), les premiers contacts qualifiés arrivent souvent en 3 à 6 semaines. Avec les sites internet + SEO, le référencement Google prend 2 à 4 mois pour bien se positionner, mais tu es opérationnel dès la mise en ligne."
    },
    {
      q: "Est-ce que je dois m'engager sur une durée minimum ?",
      a: "Pour la gestion des réseaux sociaux, c'est un abonnement mensuel résiliable à tout moment. On préfère te garder parce que tu es content des résultats, pas parce qu'un contrat te bloque."
    },
    {
      q: "Comment ça, \"4 ans d'expérience\" si DigitalPulse Agency vient de se lancer ?",
      a: "Bonne question. Louis crée des sites et gère des réseaux sociaux depuis 4 ans, d'abord pour son entourage professionnel (artisans, carrossiers, conciergeries, indépendants de son réseau). Il a appris sur le terrain, en vrai, avec des résultats concrets.\n\nDigitalPulse Agency, c'est la structure professionnelle qu'il a créée cette année pour proposer ce savoir-faire au plus grand nombre — avec en plus une nouvelle méthode d'acquisition (prospection active + automatisation IA des premières interactions) qu'on a développée spécifiquement pour les entreprises locales.\n\nTu bénéficies donc d'une expertise de 4 ans sur le terrain, ET d'une méthode nouvelle qui n'existe pas ailleurs. Le meilleur des deux mondes."
    },
    {
      q: "Pourquoi seulement 20 clients par secteur ?",
      a: "Parce qu'on est deux à bosser à la main, et qu'on refuse de diluer la qualité de service. Aussi, on ne veut pas de conflit d'intérêt : on ne prend pas deux concurrents directs dans la même zone. Quand le quota est atteint, on ferme les inscriptions le temps d'agrandir l'équipe."
    },
    {
      q: "Pourquoi le tarif fondateur à 187€ ?",
      a: "Parce que DigitalPulse Agency est une structure récente, avec une méthode nouvelle qui combine prospection active sur les comptes des concurrents et automatisation des premières interactions grâce à l'IA.\n\nCette méthode n'existait pas sous cette forme il y a encore quelques mois. On a besoin de premiers clients pour prouver son efficacité à grande échelle et construire des études de cas solides, secteur par secteur.\n\nEn échange, les clients fondateurs bénéficient du tarif de lancement à vie — même quand le prix passera à 400€/mois pour les nouveaux inscrits. C'est notre manière de remercier ceux qui nous font confiance en premier."
    },
    {
      q: "Vous travaillez avec des entreprises comme la mienne ?",
      a: "Nos spécialistes accompagnent principalement : les salons de beauté, les coiffeurs, les conciergeries immobilières, les restaurants et pizzerias, les artisans du bâtiment (maçons, etc.), et les garages/carrossiers. Si ton domaine n'est pas listé, parlons-en lors du diagnostic gratuit."
    }
  ];

  const HIGHLIGHTS = [
    "honnêtement", "exactement", "depuis 4 ans", "pour son entourage professionnel",
    "structure professionnelle", "nouvelle méthode d'acquisition",
    "expertise de 4 ans sur le terrain", "méthode nouvelle", "structure récente",
    "résiliable à tout moment", "tarif de lancement à vie", "deux à bosser à la main",
    "conflit d'intérêt", "20 clients", "On a besoin de premiers clients pour prouver son efficacité à grande échelle"
  ];

  const renderAnswer = (text) => {
    const pattern = new RegExp(`(${HIGHLIGHTS.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    return text.split(pattern).map((part, i) =>
      HIGHLIGHTS.some(h => h.toLowerCase() === part.toLowerCase())
        ? <strong key={i} className="text-white font-semibold">{part}</strong>
        : part
    );
  };

  return (
    <section id="faq" className="py-24 px-6 text-white">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Les questions qu'on nous pose souvent.
          </h2>
        </FadeIn>

        <div className="mt-12 mb-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div
                  className={`rounded-xl overflow-hidden border transition-all duration-300 bg-white/[0.02] ${
                    isOpen ? 'border-violet-400/40' : 'border-white/10 hover:border-violet-400/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left text-white font-semibold"
                  >
                    <span className="pr-2">{faq.q}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="flex-shrink-0">
                      <ChevronDown size={20} className="text-violet-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="px-5 pb-5 text-white/70 leading-relaxed"
                          style={{ whiteSpace: 'pre-line' }}
                        >
                          {renderAnswer(faq.a)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="text-center">
          <p className="text-lg text-white/80 font-medium mb-6">
            Tu as une autre question&nbsp;? Pose-la pendant ton diagnostic gratuit.
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
          >
            Réserver mon diagnostic gratuit
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
