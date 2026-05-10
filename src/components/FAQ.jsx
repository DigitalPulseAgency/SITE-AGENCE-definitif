import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Est-ce que je dois m'engager sur une durée minimum ?",
      a: `Cela dépend uniquement du service Réseaux Sociaux :
- **Offre Starter (79€/mois)** : aucun engagement, paiement mensuel
- **Offre Growth (247€/mois)** : engagement minimum de 6 mois pour des résultats durables

Tous les autres services (sites, automatisations IA, Fiche Google) sont des prestations ponctuelles sans engagement de durée.`
    },
    {
      q: "Combien de temps pour avoir des résultats ?",
      a: `Cela dépend du levier activé :
- **SEO + Fiche Google** : 2 semaines à 1 mois pour les premiers résultats. C'est le levier le plus puissant sur la durée.
- **Réseaux sociaux** : 2 à 3 mois pour voir les effets, mais extrêmement puissant sur le long terme.
- **Automatisations IA** : effet immédiat dès la mise en place, tu gagnes du temps dès la première semaine.

La combinaison la plus puissante reste : SEO + Site optimisé + Fiche Google.`
    },
    {
      q: "4 ans d'expérience ? Pourtant DigitalPulse Agency vient de se lancer...",
      a: `Exact. La marque DigitalPulse Agency est récente, mais moi pas. Ça fait 4 ans que je crée des sites web (WordPress, Shopify, puis code sur-mesure) et 2 ans que je suis plongé dans l'IA. J'ai testé mes solutions chez des proches et mes premiers clients bien avant de structurer la marque.

Aujourd'hui, ma priorité c'est claire : **redonner du temps aux entreprises** en automatisant leurs tâches chronophages et répétitives à faible valeur ajoutée. Pour qu'elles se concentrent sur l'essentiel et passent plus de temps avec leur famille.`
    },
    {
      q: "Pourquoi seulement 20 clients par secteur ?",
      a: `Cette limite concerne **uniquement le service Réseaux Sociaux**, pour garantir une qualité maximale sur chaque compte.

Pour les automatisations IA, je travaille avec un réseau de 3 prestataires freelance expérimentés. Je me concentre sur l'acquisition et le suivi clients, et nous développons actuellement notre activité en Suisse également.`
    },
    {
      q: "Vous travaillez avec des entreprises comme la mienne ?",
      a: `On accompagne en priorité :

**BTP - Artisans du bâtiment** : piscinistes, climaticiens, frigoristes, plombiers, chauffagistes, maçons, peintres, sociétés de nettoyage.

**Automobile** : carrossiers, mécaniciens.

**Restauration** : restaurants, bars, brasseries.

On adapte aussi nos méthodes aux conciergeries immobilières, instituts de beauté, salons de massage, spas, salons de coiffure et au monde du bien-être en général.

En réalité, **95% du temps, c'est faisable**. Tout est sur-mesure. Le mieux c'est d'en parler 15 min en visio pour voir ce qu'on peut faire pour toi.`
    }
  ];

  // Rendu d'une réponse avec gras markdown (**texte**)
  const renderAnswer = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
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
                          className="px-5 pb-5 text-white/75 leading-relaxed"
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
