import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Je ne suis pas sûr de savoir ce dont j'ai besoin, est-ce que je peux quand même réserver un diagnostic\u00A0?",
      a: "Oui, et c'est même exactement le bon réflexe. Le diagnostic de 15 minutes sert précisément à ça\u00A0: on analyse ta situation, on identifie ce qui bloque, et on te dit honnêtement si on peut t'aider — ou pas. Aucun engagement, aucun argumentaire forcé."
    },
    {
      q: "Combien de temps avant de voir des résultats\u00A0?",
      a: "Avec l'offre Acquisition (prospection active), les premiers contacts qualifiés arrivent souvent en 3 à 6 semaines. Avec les sites internet + SEO, le référencement Google prend 2 à 4 mois pour bien se positionner, mais tu es opérationnel dès la mise en ligne."
    },
    {
      q: "Est-ce que je dois m'engager sur une durée minimum\u00A0?",
      a: "Pour la gestion des réseaux sociaux, c'est un abonnement mensuel résiliable à tout moment. On préfère te garder parce que tu es content des résultats, pas parce qu'un contrat te bloque."
    },
    {
      q: "Comment ça, \"4 ans d'expérience\" si DigitalPulse Agency vient de se lancer\u00A0?",
      a: "Bonne question. Louis crée des sites et gère des réseaux sociaux depuis 4 ans, d'abord pour son entourage professionnel (artisans, carrossiers, conciergeries, indépendants de son réseau). Il a appris sur le terrain, en vrai, avec des résultats concrets.\n\nDigitalPulse Agency, c'est la structure professionnelle qu'il a créée cette année pour proposer ce savoir-faire au plus grand nombre — avec en plus une nouvelle méthode d'acquisition (prospection active + automatisation IA des premières interactions) qu'on a développée spécifiquement pour les entreprises locales.\n\nTu bénéficies donc d'une expertise de 4 ans sur le terrain, ET d'une méthode nouvelle qui n'existe pas ailleurs. Le meilleur des deux mondes."
    },
    {
      q: "Pourquoi seulement 20 clients par secteur\u00A0?",
      a: "Parce qu'on est deux à bosser à la main, et qu'on refuse de diluer la qualité de service. Aussi, on ne veut pas de conflit d'intérêt\u00A0: on ne prend pas deux concurrents directs dans la même zone. Quand le quota est atteint, on ferme les inscriptions le temps d'agrandir l'équipe."
    },
    {
      q: "Pourquoi le tarif fondateur à 187€\u00A0?",
      a: "Parce que DigitalPulse Agency est une structure récente, avec une méthode nouvelle qui combine prospection active sur les comptes des concurrents et automatisation des premières interactions grâce à l'IA.\n\nCette méthode n'existait pas sous cette forme il y a encore quelques mois. On a besoin de premiers clients pour prouver son efficacité à grande échelle et construire des études de cas solides, secteur par secteur.\n\nEn échange, les clients fondateurs bénéficient du tarif de lancement à vie — même quand le prix passera à 400€/mois pour les nouveaux inscrits. C'est notre manière de remercier ceux qui nous font confiance en premier."
    },
    {
      q: "Vous travaillez avec des entreprises comme la mienne\u00A0?",
      a: "Nos spécialistes accompagnent principalement\u00A0: les salons de beauté, les coiffeurs, les conciergeries immobilières, les restaurants et pizzerias, les artisans du bâtiment (maçons, etc.), et les garages/carrossiers. Si ton domaine n'est pas listé, parlons-en lors du diagnostic gratuit."
    }
  ];

  return (
    <section className="section bg-alt" id="faq">
      <div className="container" style={{ maxWidth: '800px' }}>
        <FadeIn className="text-center">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>Les questions qu'on nous pose souvent.</h2>
        </FadeIn>

        <div style={{ marginBottom: '4rem', marginTop: '4rem' }}>
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="accordion-item" style={{ backgroundColor: '#fff', borderRadius: '0.75rem', marginBottom: '1rem', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <button 
                  className="accordion-header" 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  style={{ padding: '1.5rem', width: '100%' }}
                >
                  <span style={{ paddingRight: '1rem' }}>{faq.q}</span>
                  <motion.div animate={{ rotate: openIndex === idx ? 180 : 0 }}>
                    <ChevronDown size={20} color="var(--purple-primary)" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="accordion-content" style={{ padding: '0 1.5rem 1.5rem 1.5rem', whiteSpace: 'pre-line' }}>
                        {faq.a.split(/((?:uniquement|pour toujours|site|réseaux|jamais|sans engagement|Démarrage|Acquisition|3 à 6 semaines|2 à 4 mois|15 minutes|honnêtement|exactement|véritablement|temps pour construire une vraie stratégie|20 clients|deux à bosser à la main|conflit d'intérêt|tarif à vie|étude de cas|400€\/mois|indépendantes|ce dont tu as besoin|ce qu'on veut te vendre|depuis 4 ans|pour son entourage professionnel|structure professionnelle|nouvelle méthode d'acquisition|expertise de 4 ans sur le terrain|méthode nouvelle|structure récente|résiliable à tout moment|On a besoin de premiers clients pour prouver son efficacité à grande échelle|tarif de lancement à vie))/gi).map((part, i) => {
                           if (["honnêtement", "exactement", "temps pour construire une vraie stratégie", "deux à bosser à la main", "conflit d'intérêt", "tarif à vie", "étude de cas", "indépendantes", "ce dont tu as besoin", "depuis 4 ans", "pour son entourage professionnel", "structure professionnelle", "nouvelle méthode d'acquisition", "expertise de 4 ans sur le terrain", "méthode nouvelle", "structure récente", "résiliable à tout moment", "On a besoin de premiers clients pour prouver son efficacité à grande échelle", "tarif de lancement à vie"].includes(part.toLowerCase()) || 
                             ["depuis 4 ans", "pour son entourage professionnel", "structure professionnelle", "nouvelle méthode d'acquisition", "expertise de 4 ans sur le terrain", "méthode nouvelle", "structure récente", "résiliable à tout moment"].includes(part)) {
                             return <strong key={i} style={{ color: 'var(--text-main)' }}>{part}</strong>;
                           }
                           return part;
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 500 }}>
            Tu as une autre question&nbsp;? Pose-la pendant ton diagnostic gratuit.
          </p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
            Réserver mon diagnostic gratuit
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
