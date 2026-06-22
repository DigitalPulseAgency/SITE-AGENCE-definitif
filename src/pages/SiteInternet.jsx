import { Check, ArrowRight, Globe, Search, Award, Sparkles, FileText, TrendingUp, Layers, ShieldCheck, RefreshCw, PencilLine, CalendarCheck, ShoppingBag } from 'lucide-react';
import { CAL_LINK } from '../config/links';

const ESSENTIEL_FEATURES = [
  'Site vitrine 100% sur-mesure',
  'Design haut de gamme personnalisé',
  '100% responsive (mobile, tablette, ordi)',
  'SEO intégré dans le code — tu pars visible sur Google dès le lancement',
  'Avis Google intégrés',
  'Hébergement rapide inclus 1 an',
  'Mentions légales & conformité incluses',
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
            Un site sur-mesure qui travaille pour toi.<br />
            <span className="text-[#6B3FE8]">Visible sur Google, pensé pour convertir.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            Conçu sur-mesure dans ta charte, optimisé pour ton référencement Google dès le lancement.
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
            ✓ 15 min en visio &nbsp;·&nbsp; ✓ 100% offert
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

      {/* OFFRE — SUR DEVIS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Un site sur-mesure. Tout est dedans.
          </h2>
          <p className="text-xl text-white/60 mb-16 text-center max-w-2xl mx-auto">
            Chaque projet est unique — le tarif s'établit sur devis, après un diagnostic gratuit.
          </p>

          {/* CARTE — CENTRÉE */}
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-zinc-900/80 via-violet-950/40 to-zinc-900/80 border border-violet-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-violet-500/20">

              {/* Titre + sous-titre */}
              <div className="mb-8 mt-2 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Site vitrine sur-mesure</h3>
                <p className="text-white/70 text-lg">Pensé pour ton métier et tes clients</p>
              </div>

              {/* Prix */}
              <div className="mb-6 text-center">
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-2xl md:text-3xl font-semibold text-white/35 line-through decoration-2">700€</span>
                  <span className="text-5xl md:text-7xl font-bold text-white">399€</span>
                </div>
                <span className="block text-sm text-white/50 mt-1">à partir de · paiement en 2× possible</span>
                <p className="text-sm text-white/60 mt-4 max-w-md mx-auto leading-relaxed">
                  Pour un site vitrine essentiel. Les projets plus complexes (multi-pages,
                  e-commerce, espace client) sont chiffrés sur devis lors du diagnostic gratuit.
                </p>
              </div>

              {/* Délais */}
              <div className="border-t border-zinc-800/50 pt-5 mb-8 grid sm:grid-cols-2 gap-3 text-center sm:text-left">
                <div className="bg-white/[0.04] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[#B59FFF] mb-1">Landing page</p>
                  <p className="text-white/70 text-sm">Livrée en 1 à 2 semaines</p>
                </div>
                <div className="bg-white/[0.04] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[#B59FFF] mb-1">Site multi-pages</p>
                  <p className="text-white/70 text-sm">Compter 3 semaines à 1 mois</p>
                </div>
              </div>

              {/* Liste bullets */}
              <ul className="space-y-3 mb-8 w-fit mx-auto">
                {ESSENTIEL_FEATURES.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-left">
                    <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-zinc-800/50 pt-5 mb-8 text-center">
                <p className="text-white/60 text-sm">
                  + <strong className="text-[#B59FFF]">Maintenance mensuelle</strong> en option (SEO inclus) — voir le détail ci-dessous ↓
                </p>
              </div>

              {/* CTA */}
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full inline-flex items-center justify-center gap-2 py-4 text-lg font-semibold mt-2 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 ease-out"
              >
                Réserver mon appel gratuit
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-zinc-500 text-sm text-center mt-4">
                Diagnostic offert · 15 min en visio
              </p>
            </div>

            {/* BANDEAU INFO — projet sur-mesure */}
            <div className="mt-8 p-6 md:p-8 rounded-2xl border border-violet-500/20 bg-zinc-900/50">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-3 rounded-xl bg-violet-500/10 flex-shrink-0 self-start">
                  <Layers className="w-6 h-6 text-violet-400" strokeWidth={2} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-white font-semibold text-lg mb-2">
                    Besoin de plus qu'un site vitrine ?
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    Si ton projet implique plusieurs pages, un site e-commerce, un espace client, ou des fonctionnalités spécifiques — ce n'est plus un site vitrine. On change d'ampleur : plus de pages, plus de fonctionnalités, plus de temps de dev — et un tarif qui suit cette complexité.
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    On en discute 15 min pour voir ensemble ce qu'il te faut.
                  </p>
                </div>
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center justify-center gap-2 px-5 py-3 whitespace-nowrap flex-shrink-0 self-start md:self-center"
                >
                  Réserver un appel découverte
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRISE DE COMMANDE & RDV — SUR-MESURE PAR NICHE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-xl bg-violet-500/10">
                <CalendarCheck className="w-6 h-6 text-violet-400" strokeWidth={2} />
              </div>
              <div className="p-3 rounded-xl bg-violet-500/10">
                <ShoppingBag className="w-6 h-6 text-violet-400" strokeWidth={2} />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prise de commande &amp; prise de rendez-vous intégrées
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Tu veux que tes clients <strong className="text-white">commandent</strong> ou <strong className="text-white">réservent</strong> directement depuis ton site ? On l'intègre selon ton métier — <strong className="text-white">restaurant</strong> (prise de commande), <strong className="text-white">salon de coiffure</strong> ou <strong className="text-white">institut de beauté</strong> (prise de rendez-vous), etc.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              C'est du <strong className="text-white">sur-mesure</strong> : le prix dépend de la complexité de ce que tu veux. Pas de tarif unique affiché — on en parle et je t'envoie un <strong className="text-white">devis personnalisé</strong>.
            </p>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-flex items-center gap-2 px-5 py-3"
            >
              Demander mon devis personnalisé
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* MAINTENANCE — DIFFÉRENCIATEUR CLÉ */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#6B3FE8]/20 to-transparent border border-[#6B3FE8]/30 rounded-3xl p-10">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6B3FE8]/20 border border-[#6B3FE8]/40 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#B59FFF]" />
              <span className="text-sm font-semibold text-[#B59FFF]">Maintenance & SEO — 79€/mois</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ton site vivant, protégé,<br />
              <span className="text-[#6B3FE8]">et qui monte sur Google.</span>
            </h2>

            <p className="text-white/70 text-lg mb-8 max-w-2xl leading-relaxed">
              La maintenance, ce n'est pas une ligne en plus sur la facture : c'est ce qui garde ton site
              sécurisé, à jour et bien référencé mois après mois. Tout est compris dedans — surveillance,
              mises à jour, SEO et articles de blog.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: ShieldCheck, titre: "Surveillance & sécurité", desc: "Un système me notifie immédiatement en cas d'anomalie : tentative d'intrusion, cyberattaque, panne. On agit avant que ça pose problème." },
                { icon: RefreshCw, titre: "Mises à jour proactives", desc: "Photos ou contenus qui datent de plus de 6 mois ? On te le signale et on rafraîchit pour garder un site impeccable." },
                { icon: FileText, titre: "SEO + articles de blog chaque mois", desc: "Mon plus gros atout : chaque mois, de nouveaux articles avec des mots-clés à jour pour faire grimper ton site sur Google — naturellement." },
                { icon: PencilLine, titre: "1 modification incluse / mois", desc: "Tu veux changer ou mettre à jour un module du site ? Une modification est comprise chaque mois, sans frais." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-3 bg-white/[0.05] rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-[#6B3FE8]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#B59FFF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">{item.titre}</h4>
                      <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sans maintenance */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 mb-8">
              <p className="text-white/70 text-sm leading-relaxed">
                <strong className="text-white">Pas de maintenance ?</strong> Aucun souci. Tu prends ton site,
                tu paies simplement ton nom de domaine, et il est à toi. En cas de modification ponctuelle ensuite,
                elle est facturée à partir de <strong className="text-[#B59FFF]">50€</strong> par modification principale
                (un simple changement de texte coûte moins — on s'arrange).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-[#B59FFF]">79€</span>
                <span className="text-white/60 ml-1">/mois · SEO, sécurité & 1 modif inclus</span>
              </div>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 ease-out hover:scale-[1.02]"
              >
                En savoir plus lors du diagnostic
                <ArrowRight className="w-4 h-4" />
              </a>
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
              { n: "01", titre: "Diagnostic gratuit (15 min)", desc: "On comprend ton activité, ta cible, tes objectifs. Tu repars avec une stratégie claire et un devis adapté." },
              { n: "02", titre: "Création du site sur-mesure", desc: "On code ton site dans ta charte. Compter 1 à 2 semaines pour une landing page, 3 semaines à 1 mois pour un site multi-pages. Pas de template moche réutilisé." },
              { n: "03", titre: "Validation et ajustements", desc: "Tu donnes ton avis, on ajuste les textes, couleurs, photos." },
              { n: "04", titre: "Mise en ligne", desc: "Site déployé, nom de domaine configuré, Google informé." },
              { n: "05", titre: "Maintenance : SEO & blog (option 79€/mois)", desc: "Si tu actives la maintenance, on surveille, on sécurise, et chaque mois on publie de nouveaux articles SEO pour te faire monter sur Google. Une modification de module est aussi incluse chaque mois." }
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
            Réserve un diagnostic gratuit. On regarde ensemble ce qui te manque, et on établit ton devis sur-mesure — clair, sans surprise.
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
            Diagnostic 100% offert · 15 min en visio
          </p>
        </div>
      </section>
    </div>
  );
}
