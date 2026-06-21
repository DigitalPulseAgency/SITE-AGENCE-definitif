import { Megaphone, Zap, BarChart3, Rocket, Check, ArrowRight, Crosshair } from 'lucide-react';
import { CAL_LINK } from '../config/links';

const RESEAUX = [
  {
    nom: "Google Search",
    desc: "Capter la demande chaude. Ceux qui tapent déjà exactement ce que tu proposes te trouvent en premier, au moment précis où ils cherchent.",
  },
  {
    nom: "Google Maps / Local",
    desc: "Apparaître en tête des recherches locales. Idéal pour générer des appels et des visites depuis ta zone géographique.",
  },
  {
    nom: "Retargeting Google",
    desc: "Recibler ceux qui t'ont déjà vu sans passer à l'action. On reste devant leurs yeux jusqu'à ce qu'ils reviennent.",
  },
];

const AVANTAGES = [
  { icon: Zap, titre: "Résultats quasi instantanés", desc: "Une campagne bien lancée ramène du trafic et des contacts en quelques jours. Le SEO, lui, met souvent 2 à 3 mois avant les premiers résultats." },
  { icon: Crosshair, titre: "Ciblage chirurgical", desc: "Âge, zone géographique, centres d'intérêt, comportement d'achat, audiences similaires à tes meilleurs clients. On parle aux bonnes personnes, pas à tout le monde." },
  { icon: BarChart3, titre: "100% mesurable", desc: "Chaque euro est tracké : combien dépensé, combien de clics, combien de contacts, combien de ventes. On garde ce qui marche, on coupe ce qui ne marche pas." },
];

export default function Publicite() {
  return (
    <div className="text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-8">
            <Megaphone className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">Spécialiste Google Ads</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Google Ads.<br />
            Apparaissez <span className="text-[#6B3FE8]">en premier</span><br />
            au moment où on vous cherche.
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            On est spécialisé sur un seul levier, et on le maîtrise : <strong className="text-white">Google Ads</strong>. On capte les gens qui tapent déjà ce que vous proposez — résultats en quelques jours, pas en quelques mois.
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

      {/* POURQUOI LA PUB */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pourquoi la publicité change tout</h2>
          <p className="text-xl text-white/60 mb-12 max-w-3xl">
            C'est ce qui marche le mieux, tout simplement : on peut viser, mesurer et accélérer. Là où d'autres leviers prennent des mois, la pub livre maintenant.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {AVANTAGES.map((a, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 transition-all">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#6B3FE8] to-[#8B5FFF] mb-5">
                  <a.icon className="w-5 h-5" />
                </span>
                <h3 className="font-bold text-xl mb-3">{a.titre}</h3>
                <p className="text-white/70 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#B59FFF]/25 bg-[#6B3FE8]/10 px-6 py-5">
            <p className="text-white/85 leading-relaxed">
              <strong className="text-white">Pub ou SEO ?</strong> Le SEO est excellent sur le long terme et moins cher — mais il faut être patient. La publicité, c'est l'accélérateur : du résultat immédiat. Les deux sont complémentaires ; la pub, c'est ce qui démarre la machine.
            </p>
          </div>
        </div>
      </section>

      {/* LES 5 RÉSEAUX */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Google Ads, plusieurs leviers</h2>
          <p className="text-xl text-white/60 mb-12 max-w-3xl">
            On reste 100% concentré sur Google — et on active les bons leviers selon ton métier, ta cible et ton objectif.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {RESEAUX.map((r, i) => (
              <div key={i} className={`bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 hover:-translate-y-1 transition-all duration-300 ${i === RESEAUX.length - 1 && RESEAUX.length % 2 === 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]" : ""}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#6B3FE8]/20 border border-[#6B3FE8]/40 text-[#B59FFF] text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-xl">{r.nom}</h3>
                </div>
                <p className="text-white/70 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MON APPROCHE / TECHNIQUES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ce qui fait la différence</h2>
          <p className="text-xl text-white/60 mb-10 max-w-3xl">
            Lancer une pub, tout le monde peut le faire. La rendre rentable, non. C'est là que tout se joue.
          </p>

          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mb-8">
            Avec le temps, j'ai accumulé des techniques de ciblage, de création et d'optimisation qui me permettent de sortir du lot — et de faire baisser ton coût d'acquisition là où la concurrence brûle son budget sans le savoir.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Des créations qui stoppent le scroll (pas des pubs qu'on zappe)",
              "A/B testing structuré : on laisse les chiffres décider",
              "Ciblage avancé + audiences similaires à tes meilleurs clients",
              "Optimisation continue : on coupe le gaspillage, on scale ce qui marche",
              "Retargeting de ceux qui t'ont déjà vu mais n'ont pas encore acheté",
              "Suivi clair : tu sais exactement ce que chaque euro te rapporte",
            ].map((t, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#B59FFF] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-white/85">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SUR-MESURE / SUR DEVIS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Chaque projet est unique. Donc sur-mesure.</h2>
          <p className="text-xl text-white/60 mb-8 max-w-3xl">
            Chaque cas est différent : ça dépend de tes objectifs, de ton marché et de ton budget. On construit la stratégie ensemble, après s'être parlé.
          </p>

          <div className="mb-12 inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-2xl border border-[#6B3FE8]/40 bg-[#6B3FE8]/10 px-6 py-5">
            <div>
              <span className="text-3xl md:text-4xl font-black text-white">à partir de 300 €</span>
            </div>
            <span className="text-white/70 text-sm leading-relaxed max-w-sm">
              de gestion de ta campagne Google Ads. Le budget publicitaire dépensé sur Google vient en plus, et reste 100% le tien.
            </span>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", t: "Diagnostic", d: "On analyse ton entreprise, ton marché et ta concurrence." },
              { n: "2", t: "On parle de ton projet", d: "Un rendez-vous pour cerner tes objectifs et ce qui est jouable." },
              { n: "3", t: "Stratégie + devis", d: "Je te propose un plan sur-mesure et un devis adapté à toi." },
              { n: "4", t: "Lancement & optimisation", d: "On lance, on mesure, on ajuste pour rentabiliser chaque euro." },
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#6B3FE8] to-[#8B5FFF] font-bold mb-4">{s.n}</span>
                <h3 className="font-bold text-lg mb-2">{s.t}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#B59FFF]/25 bg-[#6B3FE8]/10 px-6 py-5">
            <p className="text-white/85 leading-relaxed">
              <strong className="text-white">300 €, c'est le point de départ</strong> — le tarif exact se cale après le rendez-vous, selon ton projet et tes objectifs. D'abord on regarde ton activité sérieusement, ensuite on parle chiffres. C'est plus honnête, et bien plus efficace.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <Rocket className="w-12 h-12 text-[#6B3FE8] mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Prêt à accélérer ?</h2>
          <p className="text-xl text-white/70 mb-10">
            On commence par un diagnostic gratuit. On regarde ensemble si la pub est faite pour toi — et comment la rendre rentable.
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
    </div>
  );
}
