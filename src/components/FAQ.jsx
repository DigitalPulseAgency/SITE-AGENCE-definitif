import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAL_LINK } from '../config/links';
import FadeIn from './FadeIn';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Quel est le risque que je prends à collaborer avec vous ?",
      a: `Le vrai risque, c'est de ne pas le faire. En France, on est en retard sur les États-Unis. Dans 5 ans, **80% des entreprises auront des automatisations en place**. Ceux qui s'y mettent aujourd'hui prennent une avance que les autres ne rattraperont pas.

Concrètement : nos solutions font gagner **3 à 10h par semaine dès le premier mois**. Moins de charge mentale, plus de temps pour ce qui compte vraiment.`
    },
    {
      q: "Combien de temps avant de voir des résultats ?",
      a: `**Site internet** : dès la première semaine, tes futurs clients peuvent t'appeler.

**Automatisations** : l'effet est immédiat dès la première mise en place.

**SEO** : les premiers résultats apparaissent dès la première semaine, et ça s'améliore de mois en mois.`
    },
    {
      q: "C'est quoi concrètement une automatisation ?",
      a: `Imagine un assistant qui ne dort jamais, ne prend pas de pauses et ne fait pas d'erreurs. Concrètement, on centralise dans un seul outil :

- **Devis et factures** générés automatiquement selon tes tarifs
- **Suivi clients, commandes, fournisseurs**
- **Gestion de stocks** : alertes et commandes automatiques
- **Prise de rendez-vous** : le client réserve seul, tu reçois une notification
- **Réceptionniste virtuelle** : réponses automatiques aux demandes courantes
- **Avis Google** : demande envoyée automatiquement après chaque intervention

Pour une conciergerie immobilière par exemple : planning des femmes de ménage, affectation des interventions par bien, communication propriétaires/voyageurs — tout centralisé, tout automatique.

**Tu te connectes à un seul endroit et tu vois tout.**`
    },
    {
      q: "Votre SEO peut vraiment ramener des clients dès la première semaine ?",
      a: `Oui — parce qu'on intègre le SEO dans le code du site dès la construction, pas en option après coup. Chaque page est optimisée avec les mots-clés que tes clients tapent réellement sur Google.

Dès que le site est en ligne, Google commence à l'indexer. Pour une activité locale avec peu de concurrence digitale, les premiers appels peuvent arriver dans les 7 jours.

Et chaque mois, avec l'option SEO à **59€/mois**, on met à jour les mots-clés selon les nouvelles tendances de recherche. **Ton site remonte seul — sans payer de pub.**`
    },
    {
      q: "Est-ce que la visibilité sur Google est vraiment importante ?",
      a: `Non négociable. On ne dit même plus "important" — **c'est obligatoire**.

En 2026, si tu n'apparais pas sur Google quand quelqu'un cherche ton activité dans ta ville, tu n'existes pas. Peu importe la qualité de ton travail. Les réseaux sociaux créent de la confiance, mais c'est Google qui génère les appels entrants.

Un client qui cherche "plombier urgence Lyon" à 22h ne va pas scroller Instagram — il clique sur le premier résultat Google. **C'est là qu'on t'installe.**`
    },
    {
      q: "Vous êtes une agence ou un freelance ?",
      a: `Les deux à la fois. Je suis **CEO de DigitalPulse Agency**, à la tête des projets et focus sur l'acquisition client.

Pour les projets qui le nécessitent — notamment les **infrastructures IA et les automatisations complexes** — je collabore régulièrement avec deux développeurs expérimentés.

On est trois, chacun à sa place. Tu as un seul interlocuteur, mais derrière, **une équipe qui sait livrer.**`
    },
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
