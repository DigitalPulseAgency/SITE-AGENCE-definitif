import { ArrowRight, Mail, ShoppingBag, TrendingUp, Target, Zap, BarChart3, Users, Sparkles } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function Ecommerce() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-8">
            <ShoppingBag className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">
              Pour les créateurs de marques en ligne
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Tu as une marque.<br />
            <span className="text-[#6B3FE8]">On la fait décoller.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            E-mailing, publicités ciblées, optimisation de conversion. Le e-commerce, c'est un autre métier — on l'attaque différemment.
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
            ✓ 30 min en visio &nbsp;·&nbsp; ✓ Audit complet de ta boutique &nbsp;·&nbsp; ✓ 100% offert
          </p>
        </div>
      </section>

      {/* POURQUOI C'EST DIFFÉRENT */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#6B3FE8]/15 to-transparent border border-[#6B3FE8]/30 rounded-3xl p-8 md:p-10 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Le e-commerce, ce n'est pas un commerce local.
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Un artisan a besoin d'une fiche Google et d'avis clients. Un restaurant a besoin de photos qui font saliver. Une marque en ligne, elle, joue sur d'autres leviers : <strong className="text-white">e-mailing automatisé, publicités ciblées Meta/TikTok, taux de conversion sur la fiche produit, panier moyen, fidélisation post-achat.</strong>
              <br/><br/>
              C'est un autre jeu. Avec d'autres règles. Et on connaît les règles.
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tu reconnais une de ces situations ?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Si oui, on a déjà résolu ce problème pour d'autres marques.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titre: "Tu fais des ventes, mais pas assez",
                desc: "Tu as des commandes, mais pas le volume que tu voudrais. Tu sens qu'il y a un blocage quelque part."
              },
              {
                titre: "Tes pubs Meta coûtent cher",
                desc: "Tu balances de la pub, mais le ROAS ne suit pas. Tu ne sais pas où ça coince."
              },
              {
                titre: "Tu n'exploites pas ton mailing",
                desc: "Tu as une base de clients mais tu ne leur envoies rien. Ou alors une newsletter par mois qui n'est jamais ouverte."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 transition-all">
                <h3 className="font-bold text-xl mb-3">{item.titre}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QU'ON FAIT */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ce qu'on attaque concrètement.
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Pas de baguette magique. Des leviers précis qu'on actionne un par un.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Mail,
                titre: "E-mail marketing automatisé",
                desc: "Séquences d'abandon panier, post-achat, anniversaire, réactivation client. 30% de ton CA peut venir du mailing."
              },
              {
                icon: Target,
                titre: "Publicités Meta & TikTok",
                desc: "Création des creas, ciblage précis, A/B testing. Objectif : faire baisser ton CPA et monter ton ROAS."
              },
              {
                icon: TrendingUp,
                titre: "Optimisation de conversion",
                desc: "Fiches produit, checkout, parcours d'achat. On traque où tes visiteurs décrochent et on corrige."
              },
              {
                icon: Users,
                titre: "Fidélisation et LTV",
                desc: "Programme de fidélité, parrainage, segmentation. Un client qui revient coûte 5x moins cher qu'un nouveau."
              },
              {
                icon: BarChart3,
                titre: "Tracking et analytics",
                desc: "GA4, Meta Pixel, conversions API. Tu sais enfin précisément ce qui marche et ce qui marche pas."
              },
              {
                icon: Sparkles,
                titre: "Automatisations IA sur-mesure",
                desc: "Service client automatisé, recommandations produit personnalisées, génération de contenu."
              }
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

      {/* PROCESS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Comment on bosse ensemble ?
          </h2>

          <div className="space-y-6">
            {[
              {
                n: "01",
                titre: "Audit complet (offert, 30 min)",
                desc: "On analyse ta boutique, tes campagnes actuelles, tes KPIs. On identifie les fuites et les leviers."
              },
              {
                n: "02",
                titre: "Plan d'action chiffré",
                desc: "On te livre un plan détaillé avec les actions priorisées, les budgets, les objectifs réalistes."
              },
              {
                n: "03",
                titre: "Mise en place et accompagnement",
                desc: "On déploie les campagnes, les automatisations, les optimisations. Reporting hebdo des résultats."
              },
              {
                n: "04",
                titre: "Itération continue",
                desc: "Le e-commerce, c'est du test & learn permanent. On ajuste chaque semaine selon les data."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-5xl font-bold text-[#6B3FE8] flex-shrink-0 w-20">
                  {item.n}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{item.titre}</h3>
                  <p className="text-white/70 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIF */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Devis sur-mesure.
          </h2>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Le e-commerce, c'est <strong className="text-white">trop varié</strong> pour avoir un tarif fixe. Une marque de cosmétique avec 10 produits n'a pas les mêmes besoins qu'une marque de mode avec 200 références.
            <br/><br/>
            On regarde ensemble ton activité, et on te fait un devis qui colle à <strong className="text-white">tes objectifs</strong> et <strong className="text-white">ton budget</strong>.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ta marque mérite mieux<br />
            <span className="text-[#6B3FE8]">que des résultats moyens.</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Réserve un audit gratuit. On regarde ensemble ce qui freine ta croissance, et on te dit exactement quoi faire.
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
          >
            Je réserve mon audit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
