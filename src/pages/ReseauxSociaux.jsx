import { Check, ArrowRight, Instagram, TrendingUp, Users, MessageCircle, BarChart3, Calendar } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function ReseauxSociaux() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-8">
            <Instagram className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">
              Gestion réseaux sociaux
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            On s'occupe de<br />
            tes réseaux.<br />
            <span className="text-[#6B3FE8]">Tu te concentres sur ton métier.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            Création de contenu, publications, engagement, analyse. Un community manager dédié pour faire briller ton entreprise.
          </p>

          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
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
            Tu te reconnais ?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Les réseaux sociaux, c'est un job à plein temps. Et tu as déjà le tien.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titre: "Tu n'as pas le temps", desc: "Tu sais qu'il faudrait poster, mais tu finis tes journées trop tard pour t'en occuper." },
              { titre: "Tu ne sais pas quoi poster", desc: "Tu te creuses la tête pendant 1h, tu finis par publier une photo banale ou rien du tout." },
              { titre: "Tu n'as aucun retour", desc: "3 likes par post, zéro commentaire. Tu te demandes si ça sert vraiment à quelque chose." }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 transition-all">
                <h3 className="font-bold text-xl mb-3">{item.titre}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LES 2 OFFRES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Deux formules. Une stratégie.
          </h2>
          <p className="text-xl text-white/60 mb-16 text-center max-w-2xl mx-auto">
            Démarre sans engagement, ou passe en vitesse supérieure pour des résultats long terme.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* OFFRE STARTER */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-white/60">Pour tester sur 1 mois, sans engagement</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">69€</span>
                  <span className="text-white/60">pour 1 mois</span>
                </div>
                <p className="text-sm text-white/50 mt-2">Paiement unique · Renouvelable manuellement</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "8 publications sur le mois (Instagram + Facebook)",
                  "Création des visuels et rédaction des textes",
                  "Réponse aux commentaires et DM",
                  "1 reel/vidéo courte sur le mois",
                  "Reporting de performance en fin de mois",
                  "Aucun engagement : tu ne paies que ce mois-là"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-[#6B3FE8] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-3.5 rounded-xl transition-all"
              >
                Choisir Starter
              </a>
            </div>

            {/* OFFRE GROWTH (RECOMMANDÉE) */}
            <div className="bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/5 border-2 border-[#6B3FE8] rounded-3xl p-8 flex flex-col relative">
              {/* Badge recommandée */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6B3FE8] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                ⚡ RECOMMANDÉE
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-white/70">Pour des résultats long terme</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">187€</span>
                  <span className="text-white/60">/mois</span>
                </div>
                <p className="text-sm text-white/60 mt-2">Engagement 6 mois · Vrais résultats à partir du M2</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "16 publications par mois (Instagram + Facebook + TikTok)",
                  "Création des visuels et rédaction des textes",
                  "Réponse aux commentaires et DM",
                  "4 reels/vidéos courtes par mois",
                  "Stratégie de hashtags personnalisée",
                  "Stories quotidiennes (5j/7)",
                  "Reporting mensuel avec recommandations",
                  "Community manager dédié"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-[#B59FFF] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold py-3.5 rounded-xl transition-all"
              >
                Choisir Growth
              </a>
            </div>
          </div>

          <p className="text-center text-white/50 text-sm mt-8 max-w-2xl mx-auto">
            💡 Beaucoup de clients démarrent par <strong className="text-white/80">Starter</strong> (un seul mois, à la carte) pour tester. Si ça leur plaît, ils basculent ensuite sur <strong className="text-white/80">Growth</strong> pour des résultats long terme.
          </p>
        </div>
      </section>

      {/* CE QU'ON FAIT POUR TOI */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Ce qu'on fait concrètement.
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Calendar, titre: "Planning de contenu mensuel", desc: "On planifie tout à l'avance, validé avec toi" },
              { icon: TrendingUp, titre: "Création des visuels", desc: "Photos, carrousels, vidéos courtes — tout fait pour toi" },
              { icon: MessageCircle, titre: "Gestion des messages", desc: "Réponse rapide aux DM et commentaires" },
              { icon: Users, titre: "Engagement communauté", desc: "On crée des liens avec ta communauté" },
              { icon: BarChart3, titre: "Analyse des performances", desc: "Reporting clair tous les mois" },
              { icon: Instagram, titre: "Stratégie multi-plateformes", desc: "Instagram, Facebook, TikTok selon ton secteur" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-4 p-5 bg-white/[0.02] border border-white/10 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-[#6B3FE8]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#B59FFF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.titre}</h3>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            On commence quand ?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Réserve un diagnostic gratuit. On regarde ensemble ta présence actuelle, ta cible, et on te propose la formule qui colle à tes objectifs.
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
          >
            Je réserve mon diagnostic
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
