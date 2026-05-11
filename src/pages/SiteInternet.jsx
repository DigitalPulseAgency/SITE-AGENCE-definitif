import { Check, ArrowRight, Globe, Search, Award, Sparkles, FileText, TrendingUp } from 'lucide-react';
import { CAL_LINK } from '../config/links';

const ESSENTIEL_FEATURES = [
  'Site vitrine 100% sur-mesure',
  'Design haut de gamme personnalisé',
  '100% responsive (mobile, tablette, ordi)',
  'Optimisation SEO de base incluse',
  'Avis Google intégrés',
  'Hébergement rapide inclus 1 an',
  'Maintenance + sécurité incluses',
  'Formation à la prise en main',
  'Livré en 48 à 72h',
];

export default function SiteInternet() {
  return (
    <div className="text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-8">
            <Globe className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">
              Sites internet professionnels
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Un site internet<br />
            qui te ramène<br />
            <span className="text-[#6B3FE8]">de vrais clients.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            Pas un site vitrine que personne ne visite. Un site pensé pour convertir, optimisé pour Google, livré rapidement.
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
          <p className="text-sm text-white/50 mt-4">
            ✓ 15 min en visio &nbsp;·&nbsp; ✓ Sans engagement &nbsp;·&nbsp; ✓ 100% offert
          </p>
        </div>
      </section>

      {/* PROBLÈMES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tu reconnais une de ces situations ?
          </h2>
          <p className="text-xl text-white/60 mb-12">Si oui, on est là pour ça.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titre: "Pas de site", desc: "Tes clients te trouvent sur les Pages Jaunes ou par bouche-à-oreille. Tu veux passer à la vitesse supérieure." },
              { titre: "Site vieillot", desc: "Tu as un site mais il fait peur. Pas responsive, pas optimisé, et personne ne le visite." },
              { titre: "Site qui ne convertit pas", desc: "Tu as du trafic mais zéro appel, zéro devis. Le site ne fait pas le travail." }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 transition-all">
                <h3 className="font-bold text-xl mb-3">{item.titre}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRE UNIQUE — ESSENTIEL */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Une offre simple. Tout est dedans.
          </h2>
          <p className="text-xl text-white/60 mb-16 text-center max-w-2xl mx-auto">
            Un site sur-mesure prêt à convertir, livré en 48 à 72h. Une option SEO si tu veux dominer ton secteur.
          </p>

          {/* CARTE ESSENTIEL — CENTRÉE */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-zinc-900/80 via-violet-950/40 to-zinc-900/80 border border-violet-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-violet-500/20">

              {/* Badge en haut */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-[#6B3FE8] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_25px_rgba(107,63,232,0.6)] animate-pulse" style={{ animationDuration: '3s' }}>
                  ⚡ OFFRE FLASH — Jusqu'à fin mai
                </div>
              </div>

              {/* Titre + sous-titre */}
              <div className="mb-8 mt-2 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Essentiel</h3>
                <p className="text-white/70 text-lg">Pour démarrer fort sur internet</p>
              </div>

              {/* Prix */}
              <div className="mb-6 text-center">
                <div className="flex items-baseline gap-3 justify-center">
                  <span className="text-zinc-500 line-through text-2xl">600€</span>
                  <span className="text-5xl md:text-6xl font-bold text-white">350€</span>
                </div>
                <p className="text-sm text-white/60 mt-2">Paiement unique · Sans abonnement</p>
                <p className="text-sm font-semibold text-emerald-400 mt-3 inline-flex items-center gap-2">
                  <Check className="w-4 h-4" strokeWidth={3} />
                  Paiement en 2 fois possible
                </p>
              </div>

              {/* Option SEO */}
              <div className="border-t border-zinc-800/50 pt-5 mb-8 text-center">
                <p>
                  <span className="text-violet-400 font-semibold text-2xl">+ 59€</span>
                  <span className="text-white/80 text-base">/mois</span>
                  <span className="text-zinc-400 text-sm"> — Automatisation SEO (optionnel)</span>
                </p>
                <p className="text-zinc-500 text-xs mt-2 max-w-md mx-auto leading-relaxed">
                  Articles de blog optimisés mots-clés, générés régulièrement, pour ton référencement naturel sans payer d'ads.
                </p>
              </div>

              {/* Liste bullets */}
              <ul className="space-y-3 mb-8">
                {ESSENTIEL_FEATURES.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full inline-flex items-center justify-center gap-2 py-4 text-lg font-semibold mt-8 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                Réserver mon diagnostic gratuit
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-zinc-500 text-sm text-center mt-4">
                Diagnostic offert · 15 min en visio · Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'AUTOMATISATION SEO EXPLIQUÉE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6B3FE8]/15 border border-[#6B3FE8]/30 mb-4">
                <Sparkles className="w-4 h-4 text-[#B59FFF]" />
                <span className="text-xs font-semibold text-[#B59FFF]">Option Automatisation SEO</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Comment 59€/mois<br />
                <span className="text-[#6B3FE8]">remplacent 500€ de pubs Google.</span>
              </h2>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Au lieu de payer Google à chaque clic (Google Ads), on travaille ton <strong className="text-white">référencement naturel</strong>.
                </p>
                <p>
                  L'automatisation publie régulièrement des <strong className="text-white">articles de blog optimisés sur les bons mots-clés</strong> de ton secteur.
                </p>
                <p>
                  Résultat : ton site remonte tout seul dans Google. Les clients te trouvent <strong className="text-white">sans que tu payes pour chaque visite</strong>.
                </p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6 space-y-4">
              {[
                { icon: TrendingUp, titre: "Mots-clés ciblés", desc: "On identifie les mots-clés que tes clients tapent vraiment sur Google" },
                { icon: FileText, titre: "Articles automatisés", desc: "Génération d'articles de qualité optimisés pour ces mots-clés" },
                { icon: Search, titre: "Indexation Google", desc: "Tes articles remontent dans les résultats de recherche organiques" },
                { icon: Award, titre: "Trafic gratuit", desc: "Plus tu publies, plus tu attires de visiteurs sans payer d'ads" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#6B3FE8]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#B59FFF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.titre}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Comment ça se passe ?</h2>

          <div className="space-y-6">
            {[
              { n: "01", titre: "Diagnostic gratuit (15 min)", desc: "On comprend ton activité, ta cible, tes objectifs. Tu repars avec une stratégie claire." },
              { n: "02", titre: "Création du site (48 à 72h)", desc: "On code ton site sur-mesure dans ta charte. Pas de template moche réutilisé." },
              { n: "03", titre: "Validation et ajustements", desc: "Tu donnes ton avis, on ajuste les textes, couleurs, photos." },
              { n: "04", titre: "Mise en ligne", desc: "Site déployé, nom de domaine configuré, Google informé." },
              { n: "05", titre: "Option SEO : blog automatisé", desc: "Si tu actives l'option à 59€/mois, on configure le blog. À partir du mois 2, tes articles commencent à remonter sur Google." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-5xl font-bold text-[#6B3FE8] flex-shrink-0 w-20">{item.n}</div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{item.titre}</h3>
                  <p className="text-white/70 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à avoir un site qui bosse pour toi ?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Réserve un diagnostic gratuit. On regarde ensemble ce qui te manque, et on te livre ton site sur-mesure en 48 à 72h.
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
          <p className="text-sm text-white/50 mt-6">
            Tarif Essentiel à 350€ valable jusqu'à fin mai 2026
          </p>
        </div>
      </section>
    </div>
  );
}
