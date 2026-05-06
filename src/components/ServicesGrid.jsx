import { Globe, Instagram, MapPin, Sparkles, ShoppingBag, ArrowRight, Check } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a0f] text-white">
      <div className="max-w-6xl mx-auto">

        {/* === SECTION 1 : SERVICES PHARES === */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Nos services phares
          </h2>
          <p className="text-base text-white/60 mt-2">
            Les 2 leviers les plus puissants pour transformer ton business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* CARD 1 — Automatisations IA (mise en valeur N°1) */}
          <a
            href="/automatisations"
            className="group relative p-8 rounded-2xl border border-[#6B3FE8]/40 bg-gradient-to-br from-[#6B3FE8]/20 to-[#0a0a0f] shadow-[0_0_30px_rgba(107,63,232,0.3)] flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(107,63,232,0.55)] hover:border-[#6B3FE8]/70"
          >
            <div className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-400/30 mb-5 animate-pulse">
              <span className="text-xs font-bold text-orange-400">🔥 SERVICE N°1</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#6B3FE8]/30 border border-[#6B3FE8]/40 flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6 text-[#B59FFF]" />
            </div>

            <h3 className="text-2xl font-bold mb-1">Automatisations IA</h3>
            <p className="text-[#B59FFF] font-semibold mb-4">Ton app sur-mesure</p>

            <p className="text-white/70 leading-relaxed mb-5">
              3 à 5 automatisations centralisées dans un seul outil. Adapté à ton métier (BTP, garages, conciergeries, restaurants...). Ça tourne 24h/24, 7j/7. Tu te libères de la charge mentale.
            </p>

            <ul className="space-y-2 mb-6">
              {[
                'Application développée sur-mesure',
                '3 à 5 automatisations centralisées',
                'Démos disponibles par métier'
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#B59FFF] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto inline-flex items-center gap-2 font-semibold text-[#B59FFF] group-hover:gap-3 transition-all">
              Découvrir
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

          {/* CARD 2 — Site internet */}
          <a
            href="/sites-internet"
            className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:border-[#6B3FE8]/40 hover:shadow-[0_0_30px_rgba(107,63,232,0.25)]"
          >
            <div className="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full bg-[#6B3FE8]/10 border border-[#6B3FE8]/30 mb-5">
              <span className="text-xs font-semibold text-[#B59FFF]">Très demandé</span>
            </div>

            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <Globe className="w-6 h-6 text-white/80" />
            </div>

            <h3 className="text-2xl font-bold mb-1">Site internet</h3>
            <p className="text-[#B59FFF] font-semibold mb-4">Qui convertit vraiment</p>

            <p className="text-white/70 leading-relaxed mb-5">
              Site vitrine ou Premium avec SEO automatisé. Conçu pour transformer tes visiteurs en clients. Hébergement, maintenance et formation inclus.
            </p>

            <ul className="space-y-2 mb-6">
              {[
                'Vitrine dès 350€ (au lieu de 600€)',
                'Premium à 1500€ (paiement en 3x)',
                'SEO automatisé 99€/mois en Premium'
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start text-sm text-white/80">
                  <Check className="w-4 h-4 text-[#6B3FE8] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto inline-flex items-center gap-2 font-semibold text-white group-hover:gap-3 transition-all">
              Découvrir
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>

        </div>

        {/* === SECTION 2 : AUSSI DISPONIBLE === */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-white/80">
              Aussi disponible
            </h3>
            <p className="text-sm text-white/50 mt-2">
              Des leviers complémentaires pour rester visible au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">

            {/* CARD 3 — Réseaux sociaux */}
            <a
              href="/reseaux-sociaux"
              className="group relative p-5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-white/15"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <Instagram className="w-5 h-5 text-white/80" />
              </div>
              <h4 className="text-lg font-bold mb-1">Réseaux sociaux</h4>
              <p className="text-sm text-white/60 leading-relaxed mb-3">
                Gestion Instagram clé en main. Création de contenu, publications, prospection ciblée.
              </p>
              <p className="text-base font-semibold text-white mb-3">Dès 69€</p>
              <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-[#B59FFF] group-hover:gap-2 transition-all">
                Voir l'offre
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>

            {/* CARD 4 — Fiche Google */}
            <a
              href="/fiche-google"
              className="group relative p-5 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col transition-all duration-300 ease-out hover:bg-white/[0.04] hover:border-white/15"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-white/80" />
              </div>
              <h4 className="text-lg font-bold mb-1">Fiche Google</h4>
              <p className="text-sm text-white/60 leading-relaxed mb-3">
                Apparaître en premier sur Google dans ta zone géographique. Setup + maintenance.
              </p>
              <p className="text-base font-semibold text-white mb-3">130€ + 50€/mois</p>
              <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-white/70 group-hover:text-[#B59FFF] group-hover:gap-2 transition-all">
                Voir l'offre
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>

          </div>
        </div>

        {/* === LIEN E-COMMERCE (sous Aussi disponible) === */}
        <div className="mt-12 text-center">
          <a
            href="/ecommerce"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#B59FFF] transition-all text-sm group"
          >
            <ShoppingBag className="w-4 h-4" />
            Tu vends en ligne ? Voir l'offre dédiée e-commerce
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
