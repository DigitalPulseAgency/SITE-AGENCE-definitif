import { Check, ArrowRight, Instagram, TrendingUp, Users, MessageCircle, BarChart3, Calendar } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function ReseauxSociaux() {
  return (
    <div className="text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
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
            Un accompagnement sur-mesure.
          </h2>
          <p className="text-xl text-white/60 mb-16 text-center max-w-2xl mx-auto">
            Pas de forfait standard. Le contenu et le tarif s'adaptent à ton activité,
            à ton volume et à tes objectifs — on définit tout ensemble.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/5 border-2 border-[#6B3FE8] rounded-3xl p-8 flex flex-col relative">
              {/* Badge */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#6B3FE8]/20 border border-[#B59FFF]/40 text-[#B59FFF] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                ACCOMPAGNEMENT COMPLET
              </div>

              <div className="mb-6 text-center">
                <span className="text-4xl md:text-5xl font-bold">Tarif sur-mesure</span>
                <p className="text-sm text-white/60 mt-3 max-w-lg mx-auto leading-relaxed">
                  Pas de forfait unique, et c'est normal : le prix se calcule sur le <strong className="text-white/80">temps réel</strong> que je passe à produire ton contenu. Un montage soigné prend du temps — et ce temps varie selon le type de contenu et le réseau.
                </p>
              </div>

              {/* Temps moyen par contenu */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                {[
                  { t: "Reel", d: "1h ou +", n: "montage + peaufinage" },
                  { t: "Post", d: "20 – 25 min", n: "visuel + texte" },
                  { t: "Story", d: "~15 min", n: "format court" },
                ].map((c) => (
                  <div key={c.t} className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 text-center">
                    <p className="text-xs uppercase tracking-widest text-[#B59FFF] mb-1">{c.t}</p>
                    <p className="font-bold text-white text-lg leading-tight">{c.d}</p>
                    <p className="text-[0.7rem] text-white/50 mt-1">{c.n}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6 rounded-2xl border border-[#6B3FE8]/40 bg-[#6B3FE8]/10 p-6 text-center">
                <p className="text-base text-white/85 leading-relaxed">
                  Chaque projet est différent : ton <strong className="text-white">secteur</strong>, ton <strong className="text-white">volume de contenus</strong> et le temps que ça demande changent tout. Impossible de mettre un prix unique sans connaître ton besoin.
                </p>
                <p className="text-sm text-white/65 leading-relaxed mt-3">
                  Le plus simple : on prend <strong className="text-white">15 minutes ensemble</strong> pour parler de ton projet. Je t'envoie ensuite une <strong className="text-white">synthèse claire</strong> avec plusieurs formules adaptées à tes attentes.
                </p>
              </div>

              <div className="mb-6 bg-[#6B3FE8]/10 border-l-4 border-[#B59FFF] rounded-md p-4">
                <p className="text-sm text-white/80 leading-relaxed">
                  On produit sur <strong className="text-white">TikTok, Instagram et Facebook</strong>. Un même contenu peut souvent être décliné sur les trois — on vérifie simplement si le format doit être adapté. La vraie différence, c'est la <strong className="text-white">cible</strong> : chaque réseau a ses propres audiences. On ne met donc pas tout le monde sur le même réseau — on choisit celui qui colle à ton activité.
                </p>
                <p className="text-sm text-white/80 leading-relaxed mt-3">
                  Et soyons clairs : je suis <strong className="text-white">sélectif</strong>. Je ne prends que les projets que je sens pertinents et sur lesquels j'ai envie de bosser.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Volume de contenus adapté à ton activité (Reels, stories, posts)",
                  "Création des visuels et rédaction des textes",
                  "Stratégie de hashtags personnalisée",
                  "Automatisations sur-mesure pour gagner du temps",
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
                className="w-full text-center bg-gradient-to-r from-[#6B3FE8] to-[#8B5FFF] hover:from-[#5a32d4] hover:to-[#7a4ff0] text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(107,63,232,0.5)] hover:shadow-[0_0_45px_rgba(139,95,255,0.75)] hover:scale-[1.02]"
              >
                Réserver mon diagnostic gratuit
              </a>
            </div>
          </div>

          {/* Encart positionnement Instagram-only */}
          <div className="max-w-3xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center mt-10">
            <p className="font-semibold text-white">
              📱 Focus Instagram : le réseau qui convertit le mieux pour les entreprises locales
            </p>
            <p className="text-white/70 text-sm mt-3 leading-relaxed">
              On a fait le choix de la spécialisation. Instagram concentre l'audience la plus qualifiée pour les commerces et services de proximité : engagement supérieur, conversations directes, clientèle locale. Plutôt que d'éparpiller tes contenus sur 3 plateformes avec un résultat moyen, on maximise ton retour sur investissement là où ça compte vraiment.
            </p>
          </div>

          <p className="text-center text-white/50 text-sm mt-8 max-w-2xl mx-auto">
            💡 On commence toujours par un <strong className="text-white/80">diagnostic gratuit</strong> : on regarde ton activité, tes objectifs, et on construit l'offre qui te correspond — sans engagement pour en parler.
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
              { icon: Users, titre: "Engagement communauté", desc: "On like les commentaires et messages de tes abonnés (sans gérer les réponses)" },
              { icon: BarChart3, titre: "Analyse des performances", desc: "Reporting clair tous les mois" }
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
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
          >
            Je réserve mon diagnostic
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
