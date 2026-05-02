import { Check, ArrowRight, Globe, Zap, Search, Smartphone, Award, Clock, Sparkles, FileText, TrendingUp } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function SiteInternet() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
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
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
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

      {/* LES 2 OFFRES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Deux formules. Tu choisis.
          </h2>
          <p className="text-xl text-white/60 mb-16 text-center max-w-2xl mx-auto">
            Une formule essentielle pour démarrer. Une formule premium pour dominer ton secteur.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {/* OFFRE STARTER 280€ */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col">
              <div className="mb-6">
                <div className="inline-block bg-[#6B3FE8]/20 text-[#B59FFF] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  ⚡ OFFRE FLASH — Jusqu'à fin mai
                </div>
                <h3 className="text-2xl font-bold mb-2">Essentiel</h3>
                <p className="text-white/60">Pour démarrer fort sur internet</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-white/50 line-through text-2xl">500€</span>
                  <span className="text-5xl font-bold">280€</span>
                </div>
                <p className="text-sm text-white/50 mt-2">Paiement unique · Sans abonnement</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Site sur-mesure (5 pages)",
                  "100% responsive (mobile, tablette, ordi)",
                  "Optimisation SEO de base",
                  "Hébergement rapide inclus 1 an",
                  "Avis Google intégrés",
                  "Livré en 7 jours",
                  "Formation à la prise en main"
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
                Choisir l'Essentiel
              </a>
            </div>

            {/* OFFRE PREMIUM 1200€ + 79€/mois */}
            <div className="bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/5 border-2 border-[#6B3FE8] rounded-3xl p-8 flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6B3FE8] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                ⚡ POUR DOMINER TON SECTEUR
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-white/70">Site + automatisation SEO continue</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold">1 200€</span>
                </div>
                <p className="text-sm text-white/60 mb-3">Paiement unique pour le site</p>

                <div className="flex items-baseline gap-2 pt-3 border-t border-white/10">
                  <span className="text-2xl font-bold text-[#B59FFF]">+ 79€</span>
                  <span className="text-white/70">/mois automatisation SEO</span>
                </div>
                <p className="text-xs text-white/50 mt-2">Articles de blog optimisés mots-clés, sans payer d'ads</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Tout ce qui est dans l'Essentiel",
                  "Site sur-mesure jusqu'à 10 pages",
                  "Design haut de gamme personnalisé",
                  "SEO avancé (technique + contenu)",
                  "Blog automatisé avec mots-clés stratégiques",
                  "Articles optimisés générés régulièrement",
                  "Référencement naturel sans payer d'ads",
                  "Hébergement premium inclus 1 an",
                  "Maintenance + sécurité incluses"
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
                Choisir Premium
              </a>
            </div>
          </div>

          <p className="text-center text-white/50 text-sm mt-8 max-w-2xl mx-auto">
            💡 La formule Premium est faite pour ceux qui veulent <strong className="text-white/80">dominer leur secteur sans payer de pubs Google</strong>. Le SEO automatisé travaille pour toi 24h/24.
          </p>
        </div>
      </section>

      {/* L'AUTOMATISATION SEO EXPLIQUÉE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6B3FE8]/15 border border-[#6B3FE8]/30 mb-4">
                <Sparkles className="w-4 h-4 text-[#B59FFF]" />
                <span className="text-xs font-semibold text-[#B59FFF]">L'automatisation SEO incluse en Premium</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Comment 79€/mois<br />
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
              { n: "02", titre: "Création du site (5-10 jours)", desc: "On code ton site sur-mesure dans ta charte. Pas de template moche réutilisé." },
              { n: "03", titre: "Validation et ajustements", desc: "Tu donnes ton avis, on ajuste les textes, couleurs, photos." },
              { n: "04", titre: "Mise en ligne", desc: "Site déployé, nom de domaine configuré, Google informé." },
              { n: "05", titre: "Si Premium : automatisation SEO", desc: "On configure le blog automatisé. À partir du mois 2, tes articles commencent à remonter sur Google." }
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
            Réserve un diagnostic gratuit. On regarde ensemble ce qui te manque, et on te propose la formule qui colle à tes objectifs.
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
          <p className="text-sm text-white/50 mt-6">
            Tarif Essentiel à 280€ valable jusqu'à fin mai 2026
          </p>
        </div>
      </section>
    </div>
  );
}
