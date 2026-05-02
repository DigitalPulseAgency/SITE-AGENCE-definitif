import { ArrowRight, UtensilsCrossed, ExternalLink, Calendar, Star, BarChart3, MessageCircle } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function Restaurants() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8">
            <UtensilsCrossed className="w-4 h-4 text-red-300" />
            <span className="text-sm font-semibold text-red-300">
              Solution pour restaurants
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Tu gères ton resto.<br />
            <span className="text-[#6B3FE8]">L'app gère le reste.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            Réservations, fidélisation, stocks, menus dynamiques, avis clients. Une application sur-mesure pour ton restaurant.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/demo/restaurant"
              className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Essayer la démo
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#6B3FE8] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_15px_rgba(107,63,232,0.25)] hover:shadow-[0_0_25px_rgba(107,63,232,0.5)] hover:scale-[1.02]"
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
            Les problèmes qu'on entend tous les jours.
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Tu te reconnais dans une de ces situations ?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titre: "« Je note les résa sur un cahier »", desc: "Et il y a toujours des doublons ou des oublis. Tu perds des clients et de l'énergie." },
              { titre: "« Mes clients fidèles, je les oublie »", desc: "Pas de programme de fidélité, pas de relance. Ils reviennent quand ils y pensent." },
              { titre: "« Je gère mes stocks à l'instinct »", desc: "Tu manques de produits le vendredi soir, ou tu jettes parce que tu as trop commandé." }
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
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Ce que l'app fait pour toi.
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Calendar, titre: "Réservations en ligne", desc: "Tes clients réservent 24h/24. Plus de double bookings, plus d'oublis." },
              { icon: Star, titre: "Programme de fidélité", desc: "Tes meilleurs clients sont identifiés et chouchoutés automatiquement." },
              { icon: BarChart3, titre: "Suivi des stocks", desc: "Tu sais exactement ce qu'il te reste, ce que tu vends le plus, ce qui dort." },
              { icon: MessageCircle, titre: "Gestion des avis", desc: "Réponses automatiques aux avis Google, relances clients pour avis positifs." }
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
              <span className="text-sm font-medium text-amber-300">⚠️ DÉMO interactive</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Teste l'app comme si c'était la tienne.
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              On a préparé une démo entièrement fonctionnelle. Clique sur les boutons, ajoute des réservations, vois comment ça marche en vrai.
            </p>

            <a
              href="/demo/restaurant"
              className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
            >
              Lancer la démo
              <ExternalLink className="w-5 h-5" />
            </a>

            <p className="text-sm text-white/50 mt-4">
              Ton app sera 100% sur-mesure : couleurs, logo, fonctionnalités selon TON resto.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à passer à la vitesse supérieure ?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Réserve un diagnostic gratuit. On regarde ensemble ton resto, tes process, et on te dit ce qu'on peut automatiser.
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
