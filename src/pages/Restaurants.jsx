import { ArrowRight, UtensilsCrossed, Calendar, Star, Clock, MessageCircle, PhoneCall, Leaf, ShoppingBag, TrendingUp } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function Restaurants() {
  const problemes = [
    { titre: "Le téléphone sonne en plein service", desc: "Tu cours en cuisine, en salle, et il faut décrocher pour une réservation. Résultat : appels manqués = couverts perdus." },
    { titre: "Les résa sur un cahier", desc: "Doublons, oublis, ratures. Et quand tu n'es pas là, personne ne peut prendre la réservation." },
    { titre: "Tu jettes (ou tu manques)", desc: "Gestion des stocks à l'instinct : trop commandé le lundi, en rupture le samedi soir. Le gaspillage, c'est de l'argent à la poubelle." },
    { titre: "Tes habitués, tu les oublies", desc: "Pas de fidélisation, pas de relance. Ils reviennent quand ils y pensent — pas quand toi tu en as besoin." },
    { titre: "Les avis Google, tu n'as pas le temps", desc: "Pourtant c'est ce qui fait venir les nouveaux clients. Sans avis récents, tu deviens invisible." },
    { titre: "Tu fermes = tu ne vends plus", desc: "Quand le resto est fermé, plus personne ne peut commander ni réserver. Tu perds toute la demande du soir et de la nuit." },
  ];

  const solutions = [
    { icon: ShoppingBag, titre: "Prise de commande & réservation en ligne 24/7", desc: "Tes clients commandent et réservent à toute heure, même resto fermé, sans avoir à t'appeler. Tu captes la demande pendant que tu dors. Sans commission de plateforme." },
    { icon: PhoneCall, titre: "Réceptionniste IA vocal", desc: "Il répond au téléphone à ta place, même en plein coup de feu : il prend les réservations, répond aux questions (horaires, menu, allergènes) et ne rate aucun appel." },
    { icon: Leaf, titre: "Anti-gaspillage & stocks", desc: "Suivi de ce que tu vends vraiment, alertes sur les stocks, aide à commander juste. Moins de pertes, plus de marge." },
    { icon: Star, titre: "Avis & fidélisation automatisés", desc: "Collecte automatique des avis Google après le repas, et relances de fidélité pour faire revenir tes habitués — sans y penser." },
  ];

  return (
    <div className="text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-8">
            <UtensilsCrossed className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">Restaurants &amp; snacks</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Tu gères ton resto.<br />
            <span className="text-[#6B3FE8]">Le reste tourne tout seul.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            Un site avec <strong className="text-white">prise de commande et réservation en ligne 24/7</strong>, un <strong className="text-white">réceptionniste IA vocal</strong> qui répond au téléphone à ta place, et des automatisations qui t'enlèvent les tâches répétitives. Tu récupères du temps — et tu vends même quand tu es fermé.
          </p>

          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
          >
            Réserver mon diagnostic gratuit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* PROBLÈMES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ce qui te fait perdre du temps (et de l'argent).
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Tu te reconnais dans une de ces situations ?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {problemes.map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 transition-all">
                <h3 className="font-bold text-lg mb-3">{item.titre}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QU'ON MET EN PLACE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ce qu'on met en place pour toi.
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-3xl">
            Un site sur-mesure et une infrastructure qui automatise ton quotidien. Conçu pour les restaurants comme pour les snacks.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-4 p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-[#6B3FE8]/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#6B3FE8]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#B59FFF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.titre}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RÉCEPTIONNISTE IA VOCAL — ARGENT & TEMPS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#6B3FE8]/20 to-transparent border border-[#6B3FE8]/30 rounded-3xl p-8 md:p-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6B3FE8]/20 border border-[#B59FFF]/30 mb-6">
              <PhoneCall className="w-4 h-4 text-[#B59FFF]" />
              <span className="text-xs font-bold text-[#B59FFF] uppercase tracking-widest">L'réceptionniste IA vocal</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl">
              Chaque appel manqué, c'est un couvert perdu.
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-3xl leading-relaxed">
              En plein service, tu ne peux pas tout gérer. L'réceptionniste IA vocal décroche à ta place, prend les réservations et répond aux questions courantes — 24h/24. Tu ne perds plus une seule réservation, et tu remplis ta salle sans lever le petit doigt.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <Clock className="w-6 h-6 text-[#B59FFF] mb-2" />
                <div className="text-2xl font-black mb-1">Des heures gagnées</div>
                <p className="text-white/55 text-sm">Tu arrêtes de courir après le téléphone.</p>
              </div>
              <div>
                <TrendingUp className="w-6 h-6 text-[#B59FFF] mb-2" />
                <div className="text-2xl font-black mb-1">Plus de couverts</div>
                <p className="text-white/55 text-sm">Aucune réservation ratée, même fermé.</p>
              </div>
              <div>
                <Calendar className="w-6 h-6 text-[#B59FFF] mb-2" />
                <div className="text-2xl font-black mb-1">Zéro effort</div>
                <p className="text-white/55 text-sm">Ça tourne sans toi, jour et nuit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA SE PASSE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Comment ça se passe.</h2>
          <p className="text-xl text-white/60 mb-12 max-w-3xl">
            Simple, sans jargon, sans prise de tête. Tu restes en cuisine, je m'occupe de la technique.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", t: "On échange 15 min", d: "On regarde ton resto, ce qui te bouffe ton temps et ce qui te fait perdre des clients." },
              { n: "2", t: "Je te montre & je construis", d: "Je te présente des exemples concrets, puis je développe ton site + tes automatisations sur-mesure." },
              { n: "3", t: "On installe", d: "Prise de commande, réceptionniste IA vocal, avis, fidélité : tout est mis en place et testé avec toi." },
              { n: "4", t: "Tu encaisses le temps gagné", d: "Ça tourne. On ajuste si besoin, et tu te concentres sur ton métier : cuisiner et recevoir." },
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#6B3FE8] to-[#8B5FFF] font-bold mb-4">{s.n}</span>
                <h3 className="font-bold text-lg mb-2">{s.t}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL + déprise de pression */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            On en parle 15 minutes ?
          </h2>
          <p className="text-xl text-white/70 mb-6">
            Réserve un diagnostic gratuit. On regarde ton resto, et je te dis concrètement ce qu'on peut automatiser et combien de temps tu peux gagner.
          </p>
          <p className="text-base text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed">
            Et même si on ne travaille pas ensemble, ce n'est pas grave : tu repars du rendez-vous avec des idées concrètes. Que tu les mettes en place avec moi ou de ton côté, tu y gagneras du temps — maintenant ou dans les mois à venir.
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
          >
            Je réserve mon diagnostic gratuit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
