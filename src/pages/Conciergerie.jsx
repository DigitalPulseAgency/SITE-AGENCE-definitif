import { ArrowRight, Home, ExternalLink, Calendar, Users, Mic, Sparkles, Building, Key } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function Conciergerie() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8">
            <Home className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-semibold text-emerald-300">
              Solution pour conciergeries immobilières
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            L'app qui pilote<br />
            ta conciergerie,<br />
            <span className="text-[#6B3FE8]">sans tableur ni casse-tête.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            Biens, plannings ménage, communication propriétaires & voyageurs, automatisations Airbnb. Tout dans une seule app.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/demo/conciergerie"
              className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
            >
              Essayer la démo
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Réserver un diagnostic
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* PROBLÈMES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Gérer une conciergerie aujourd'hui, c'est jongler entre 10 outils.
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Airbnb, Booking, WhatsApp, Excel, agenda Google, tableur ménage... tu connais ?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titre: "« Je perds 2h par bien chaque semaine »", desc: "À jongler entre les plateformes, mettre à jour les plannings, communiquer avec les équipes ménage." },
              { titre: "« Mes propriétaires me harcèlent »", desc: "Ils veulent savoir où en sont leurs biens, leurs revenus, leurs réservations. Tu réponds à la main à chaque fois." },
              { titre: "« Mes équipes me posent 1000 questions »", desc: "Quel bien aujourd'hui ? Quels horaires ? Quelles consignes ? Tu rédiges les mêmes infos 10 fois." }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#6B3FE8]/40 transition-all">
                <h3 className="font-bold text-xl mb-3">{item.titre}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tout ce dont tu as besoin, dans une seule app.
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Pensée pour le canapé comme pour la route.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Building, titre: "Gestion multi-biens", desc: "Tous tes biens en un coup d'œil. Statut, prochains check-in/out, revenus du mois." },
              { icon: Calendar, titre: "Planning ménage automatique", desc: "Synchronisation avec Airbnb/Booking. Tes équipes savent quoi faire, quand, où." },
              { icon: Users, titre: "Communication centralisée", desc: "Messagerie unifiée pour les propriétaires, voyageurs, équipes. Tout au même endroit." },
              { icon: Mic, titre: "Assistante vocale IA", desc: "Tu parles, l'IA s'occupe du reste. Crée une intervention en disant 'ménage demain au 12 rue de la Paix'." },
              { icon: Key, titre: "Suivi des arrivées/départs", desc: "Codes d'accès, instructions, état des lieux digitalisés. Plus de checklist papier." },
              { icon: Sparkles, titre: "Automatisations sur-mesure", desc: "Messages auto aux voyageurs, rapports mensuels propriétaires, alertes maintenance." }
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

      {/* DÉMO CTA */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/5 border-2 border-[#6B3FE8]/50 rounded-3xl p-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <span className="text-sm font-medium text-amber-300">⚠️ DÉMO interactive avec Lidia, l'assistante IA</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Découvre comment ça marche en vrai.
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              On a préparé une démo entièrement fonctionnelle avec des vrais biens, un vrai planning et Lidia, l'assistante vocale IA. Clique partout, joue avec.
            </p>

            <a
              href="/demo/conciergerie"
              className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
            >
              Lancer la démo
              <ExternalLink className="w-5 h-5" />
            </a>

            <p className="text-sm text-white/50 mt-4">
              Ton app sera 100% sur-mesure : couleurs, logo, fonctionnalités selon TA conciergerie.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à reprendre la main<br />sur ta conciergerie ?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Réserve un diagnostic gratuit. On regarde ensemble ton activité, tes process, et on te dit ce qu'on peut automatiser.
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
