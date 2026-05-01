import { Check, ArrowRight, MapPin, Star, Phone, Camera, MessageSquare, TrendingUp } from 'lucide-react';
import { CAL_LINK } from '../config/links';

export default function FicheGoogle() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6B3FE8] opacity-20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-8">
            <MapPin className="w-4 h-4 text-[#B59FFF]" />
            <span className="text-sm font-semibold text-[#B59FFF]">
              Fiche Google My Business
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Apparaître en premier<br />
            sur Google.<br />
            <span className="text-[#6B3FE8]">Chez toi, dans ta ville.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
            Ta fiche Google créée, optimisée et entretenue chaque mois. Pour que les clients de ta zone te trouvent en priorité.
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

      {/* POURQUOI C'EST CRUCIAL */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pourquoi c'est devenu indispensable ?
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Aujourd'hui, plus personne ne cherche un commerce dans les Pages Jaunes.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { stat: "87%", titre: "des recherches locales", desc: "passent par Google avant de choisir un commerce" },
              { stat: "76%", titre: "des recherches Google", desc: "se transforment en visite ou en appel dans les 24h" },
              { stat: "4.5★", titre: "minimum requis", desc: "pour être sérieusement considéré par les prospects" }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-[#6B3FE8] mb-3">{item.stat}</div>
                <h3 className="font-bold text-lg mb-2">{item.titre}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'OFFRE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Une offre claire, sans surprise.
          </h2>
          <p className="text-xl text-white/60 mb-12 text-center">
            On crée ta fiche, on l'optimise, et on s'en occupe chaque mois.
          </p>

          <div className="bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/5 border-2 border-[#6B3FE8] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Setup */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <div className="text-sm font-semibold text-[#B59FFF] mb-2">CRÉATION</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-bold">130€</span>
                  <span className="text-white/60">paiement unique</span>
                </div>
                <p className="text-white/70">Création complète + optimisation initiale</p>
              </div>

              {/* Maintenance */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <div className="text-sm font-semibold text-[#B59FFF] mb-2">MAINTENANCE</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-bold">50€</span>
                  <span className="text-white/60">/mois</span>
                </div>
                <p className="text-white/70">Posts, photos, avis, optimisation continue</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold mb-6">Ce qu'on fait pour toi :</h3>
              <ul className="space-y-3">
                {[
                  "Création et vérification de ta fiche Google",
                  "Optimisation complète : photos pro, description, horaires, services",
                  "Catégorisation précise pour mieux remonter dans les recherches locales",
                  "Publications hebdomadaires sur ta fiche (offres, actus, photos)",
                  "Réponse à tous les avis clients (positifs et négatifs) sous 24h",
                  "Stratégie pour collecter plus d'avis 5 étoiles auprès de tes clients",
                  "Reporting mensuel des performances (vues, clics, appels)"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-[#B59FFF] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full text-center inline-flex items-center justify-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold py-4 rounded-xl transition-all"
            >
              Réserver mon diagnostic gratuit
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Ce que ça change pour toi.
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, titre: "Plus de visibilité locale", desc: "Apparaître en haut des recherches Google de ta zone" },
              { icon: Phone, titre: "Plus d'appels directs", desc: "Bouton 'Appeler' visible sur Google = appels qualifiés" },
              { icon: Star, titre: "Plus d'avis 5 étoiles", desc: "Stratégie pour collecter et valoriser les avis clients" },
              { icon: MapPin, titre: "Plus de visites en boutique", desc: "Les clients trouvent ton adresse, ton itinéraire" },
              { icon: Camera, titre: "Image professionnelle", desc: "Photos pro, infos à jour, fiche entretenue" },
              { icon: MessageSquare, titre: "Gestion des avis 24h/24", desc: "Tu ne réponds plus aux avis négatifs en panique" }
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
            Tes concurrents sont déjà sur Google.<br />
            <span className="text-[#6B3FE8]">Et toi ?</span>
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Réserve un diagnostic gratuit. On regarde ensemble ta présence Google actuelle, et on te dit exactement quoi améliorer.
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
