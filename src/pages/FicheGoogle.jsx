import { Check, ArrowRight, MapPin, Star, Phone, Camera, MessageSquare, TrendingUp } from 'lucide-react';
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
            className="inline-flex items-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
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

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Comment ça se passe, concrètement.
          </h2>
          <p className="text-xl text-white/60 mb-14 text-center">
            Tu n'as rien à faire. On gère ta fiche Google de A à Z.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { step: "1", titre: "Diagnostic gratuit", desc: "On audite ta présence Google actuelle : ta fiche, celles de tes concurrents, et les mots-clés que tes clients tapent." },
              { step: "2", titre: "Création ou reprise", desc: "On crée ta fiche ou on reprend celle qui existe. Vérification, photos, description optimisée, horaires, services — tout est fait pour toi." },
              { step: "3", titre: "On la fait vivre", desc: "Chaque semaine, on publie du contenu sur ta fiche : offres, photos, actus. On répond à tous tes avis sous 24h." },
              { step: "4", titre: "Tu reçois les appels", desc: "Tes clients te trouvent sur Google, voient une fiche pro avec des avis 5 étoiles, et t'appellent directement." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 rounded-full bg-[#6B3FE8] flex items-center justify-center text-lg font-bold mb-4">{item.step}</div>
                <h3 className="font-bold text-lg mb-2">{item.titre}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'OFFRE */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Le tarif. Clair, sans surprise.
          </h2>
          <p className="text-xl text-white/60 mb-12 text-center">
            Pas d'engagement longue durée. Tu restes parce que ça marche.
          </p>

          <div className="bg-gradient-to-br from-[#6B3FE8]/30 to-[#6B3FE8]/5 border-2 border-[#6B3FE8] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Setup */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <div className="text-sm font-semibold text-[#B59FFF] mb-2">MISE EN PLACE</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-bold">130€</span>
                  <span className="text-white/60">une seule fois</span>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Création ou reprise de ta fiche</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Vérification Google (tu deviens propriétaire)</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Photos pro + description optimisée</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Catégories, horaires, zone de chalandise</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Première publication + configuration complète</span></li>
                </ul>
              </div>

              {/* Maintenance */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                <div className="text-sm font-semibold text-[#B59FFF] mb-2">GESTION MENSUELLE</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-bold">89€</span>
                  <span className="text-white/60">/mois — sans engagement</span>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>4 publications par mois (offres, photos, actus)</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Réponse à tous les avis sous 24h</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Automatisation de la collecte d'avis (tes clients reçoivent une demande automatique après chaque intervention)</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Optimisation continue (mots-clés, catégories)</span></li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" /><span>Rapport mensuel : vues, clics, appels reçus</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 mb-8">
              <p className="text-white/80 text-center">
                <strong className="text-white">En clair :</strong> tu nous confies ta fiche, on la rend visible, on la fait vivre. Tes clients reçoivent automatiquement une demande d'avis après chaque intervention. Tu ne touches à rien — et les avis s'accumulent.
              </p>
            </div>

            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full text-center inline-flex items-center justify-center gap-3 bg-[#6B3FE8] hover:bg-[#5a32d4] text-white font-semibold py-4 rounded-xl transition-all duration-300 ease-out shadow-[0_0_25px_rgba(107,63,232,0.45)] hover:shadow-[0_0_40px_rgba(107,63,232,0.7)] hover:scale-[1.02] hover:-translate-y-0.5"
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
