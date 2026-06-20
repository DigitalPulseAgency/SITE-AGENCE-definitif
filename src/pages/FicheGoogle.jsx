import { Check, ArrowRight, MapPin, Star, Phone, Zap, RefreshCw, BarChart3, MessageSquare, X } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function FicheGoogle() {
  return (
    <div className="text-white min-h-screen">

      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-8">
            <MapPin className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">Fiche Google My Business</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Ta fiche Google.<br />
            Gérée. Optimisée.<br />
            <span className="text-[#6B3FE8]">Chaque mois.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            On s'occupe de tout — création, publications, avis, optimisation. Toi, tu reçois les appels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Réserver mon diagnostic gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 text-white/50 text-sm px-4">
              <Check className="w-4 h-4 text-[#B59FFF]" />
              15 min en visio — 100% offert
            </div>
          </div>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Tu as déjà une fiche Google.<br />
            <span className="text-white/40">Mais elle te coûte des clients.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { bad: "Pas de publications depuis des mois", detail: "Google pénalise les fiches inactives dans les résultats locaux" },
              { bad: "Des avis sans réponse", detail: "Un avis négatif sans réponse fait fuir 3 prospects sur 4" },
              { bad: "Aucune stratégie pour collecter des avis", detail: "Ton concurrent avec 4.8★ capte tous tes clients potentiels" },
            ].map((item, i) => (
              <div key={i} className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-white/90">{item.bad}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed pl-8">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <p className="text-white/70 text-lg leading-relaxed">
              <strong className="text-white">La réalité :</strong> sur Google, celui qui apparaît en premier, c'est pas forcément le meilleur. C'est celui dont la fiche est la mieux entretenue. On s'en occupe à ta place.
            </p>
          </div>
        </div>
      </section>

      {/* CE QU'ON PREND EN CHARGE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Ce qu'on prend en charge.
          </h2>
          <p className="text-xl text-white/60 mb-14 text-center">
            De A à Z. Tu n'as rien à gérer.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Colonne Toi */}
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
              <div className="text-sm font-bold text-white/30 uppercase tracking-widest mb-6">Toi</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#B59FFF] flex-shrink-0" />
                  <span className="text-white/80">Tu nous donnes accès à ta fiche (5 min)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#B59FFF] flex-shrink-0" />
                  <span className="text-white/80">Tu nous envoies tes photos si tu en as</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#B59FFF] flex-shrink-0" />
                  <span className="text-white/80">Tu reçois les appels et les clients</span>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="text-white/40 text-sm italic">C'est tout. Vraiment.</span>
                </div>
              </div>
            </div>

            {/* Colonne Nous */}
            <div className="bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 rounded-2xl p-8">
              <div className="text-sm font-bold text-[#B59FFF] uppercase tracking-widest mb-6">Nous</div>
              <div className="space-y-3">
                {[
                  "Audit complet de ta fiche et de tes concurrents",
                  "Optimisation totale : description, catégories, horaires, services",
                  "4 publications par mois (offres, photos, actus)",
                  "Réponse à tous tes avis sous 24h (positifs et négatifs)",
                  "Mise en place de l'automatisation des demandes d'avis",
                  "Mise à jour des horaires spéciaux (fériés, congés)",
                  "Ajout régulier de photos pour alimenter l'algorithme Google",
                  "Rapport mensuel : vues, clics, appels générés",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTOMATISATION DES AVIS — DIFFÉRENCIATEUR */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#6B3FE8]/20 to-transparent border border-[#6B3FE8]/30 rounded-3xl p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6B3FE8]/20 border border-[#6B3FE8]/40 mb-6">
              <Zap className="w-4 h-4 text-[#B59FFF]" />
              <span className="text-sm font-semibold text-[#B59FFF]">Inclus dans la gestion mensuelle</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tes clients laissent des avis.<br />
              <span className="text-[#6B3FE8]">Automatiquement.</span>
            </h2>

            <p className="text-white/70 text-lg mb-8 max-w-2xl leading-relaxed">
              On met en place un système qui envoie une demande d'avis à chaque client après son intervention ou son achat. Pas besoin de leur demander toi-même — awkward et chronophage. Ça se fait tout seul, en arrière-plan.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Zap, titre: "Déclenchement auto", desc: "La demande part dès que l'intervention est terminée" },
                { icon: Star, titre: "Plus d'avis 5★", desc: "Les clients satisfaits laissent plus d'avis quand on leur facilite la démarche" },
                { icon: RefreshCw, titre: "Tourne 24h/24", desc: "Même quand tu es sur chantier. Même le week-end." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white/[0.05] rounded-xl p-5">
                    <Icon className="w-5 h-5 text-[#B59FFF] mb-3" />
                    <h3 className="font-semibold mb-1">{item.titre}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA SE PASSE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Comment ça se passe.
          </h2>
          <p className="text-xl text-white/60 mb-14 text-center">
            De ton premier message à tes premiers appels en moins de 7 jours.
          </p>

          <div className="relative">
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-white/10" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  titre: "Diagnostic gratuit",
                  timing: "Jour 1",
                  desc: "On audite ta fiche et celles de tes 3 concurrents directs. Tu repars avec une vision claire de ce qui manque — même si tu ne continues pas avec nous.",
                },
                {
                  step: "2",
                  titre: "Setup complet",
                  timing: "Jours 2 à 5",
                  desc: "On optimise tout : description, photos, catégories, services, horaires. On configure l'automatisation des avis. Ta fiche est prête à convertir.",
                },
                {
                  step: "3",
                  titre: "Gestion en continu",
                  timing: "Dès le mois 1",
                  desc: "On publie, on répond aux avis, on optimise chaque mois. Tu reçois un rapport mensuel avec les résultats concrets : vues, clics, appels.",
                },
              ].map((item, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-10 h-10 rounded-full bg-[#6B3FE8] flex items-center justify-center text-lg font-bold mx-auto mb-4 relative z-10">
                    {item.step}
                  </div>
                  <div className="text-xs text-[#B59FFF] font-semibold uppercase tracking-widest mb-2">{item.timing}</div>
                  <h3 className="font-bold text-xl mb-3">{item.titre}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* L'OFFRE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            L'offre. Claire, sans surprise.
          </h2>
          <p className="text-xl text-white/60 mb-12 text-center">
            Sans engagement. Tu restes parce que ça marche.
          </p>

          <div className="bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/5 border-2 border-[#6B3FE8] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">

              {/* Setup */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <div className="text-xs font-bold text-[#B59FFF] uppercase tracking-widest mb-4">Étape 1 — Une seule fois</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold">150€</span>
                </div>
                <p className="text-white/50 text-sm mb-6">Paiement unique. Pas de récurrence.</p>
                <div className="space-y-2">
                  {[
                    "Reprise ou création de ta fiche Google",
                    "Vérification (tu restes propriétaire)",
                    "Optimisation complète : description, catégories, services",
                    "Photos + horaires + zone de chalandise configurés",
                    "Mise en place de l'automatisation des avis",
                    "Première publication pour lancer la fiche",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mensuel */}
              <div className="bg-white/[0.05] border border-[#6B3FE8]/50 rounded-2xl p-6 relative">
                <div className="absolute -top-3 left-6 bg-[#6B3FE8] text-white text-xs font-bold px-3 py-1 rounded-full">Récurrent</div>
                <div className="text-xs font-bold text-[#B59FFF] uppercase tracking-widest mb-4">Étape 2 — Chaque mois</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold">84,99€</span>
                  <span className="text-white/50">/mois</span>
                </div>
                <p className="text-white/50 text-sm mb-6">Sans engagement. Résiliable à tout moment.</p>
                <div className="space-y-2">
                  {[
                    "4 publications par mois sur ta fiche",
                    "Nouvelles photos ajoutées chaque mois",
                    "Backlinks stratégiques sur des sites de qualité",
                    "Réponses automatisées aux avis : une IA analyse chaque avis et y répond pour toi",
                    "Automatisation des demandes d'avis actives",
                    "Mise à jour des horaires et infos en continu",
                    "Optimisation mensuelle (mots-clés, catégories)",
                    "Rapport mensuel : vues, clics, appels reçus",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Résumé */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Phone, label: "Plus d'appels entrants depuis Google" },
                { icon: Star, label: "Des avis 5★ qui s'accumulent automatiquement" },
                { icon: BarChart3, label: "Un rapport mensuel pour mesurer les résultats" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                    <Icon className="w-5 h-5 text-[#B59FFF] flex-shrink-0" />
                    <span className="text-sm text-white/70">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center inline-flex items-center justify-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Réserver mon diagnostic gratuit — offert
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pendant que tu lis ça,<br />
            <span className="text-[#6B3FE8]">ton concurrent reçoit tes appels.</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Un diagnostic de 15 minutes suffit pour savoir exactement où tu en es sur Google et ce qu'on peut améliorer. C'est offert, sans engagement.
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-10 py-5 rounded-xl text-lg transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
          >
            Je réserve mon diagnostic gratuit
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/40 text-sm mt-4">15 min en visio · Sans engagement · Résultats concrets</p>
        </div>
      </section>
    </div>
  );
}
